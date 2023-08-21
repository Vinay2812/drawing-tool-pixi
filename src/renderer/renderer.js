import * as PIXI from 'pixi.js';
import get from 'lodash/get';
import set from 'lodash/set';
// import { getFilter } from "../utils/pixiJS";
import { AnimatedGIF } from '@pixi/gif';
import { DropShadowFilter } from '@pixi/filter-drop-shadow';
import { FXAAFilter } from '@pixi/filter-fxaa';

import '@pixi/graphics-extras';
import { drawSVGPath, fillSVGPath, parseColor } from '../utils/layout';

let dragTarget = null;
const dropAreas = [];

export const renderFigmaFromParsedJson = (app, parsedJson, setFigmaJson) => {
  const children = parsedJson.children;
  // console.log('🚀 ~ file: renderer.js:6 ~ renderFigmaFromParsedJson ~ children:', children);
  const container = new PIXI.Container();
  container.sortableChildren = true;
  const screenWidth = children[0].absoluteBoundingBox.width;
  const screenHeight = children[0].absoluteBoundingBox.height;
  children.forEach((child, idx) => {
    renderChild(child, container, screenWidth, screenHeight, parsedJson, ['children', idx], setFigmaJson, app);
  });
  container.backgroundColor = 0xffffff;
  // const pixiChild = new PIXI.Graphics();
  // pixiChild.position.set(128, 56);
  // pixiChild.zIndex = 200;
  // // pixiChild.rotation = 1.5707963267948963;
  // pixiChild.beginFill(0x00cccc);
  // // pixiChild.drawTorus(180, 24, 36, 18, 0, Math.PI * 2);
  // pixiChild.drawPolygon([
  //     0,
  //     0,
  //     56,
  //     0,
  //     56,
  //     56,
  //     0,
  //     56,
  //     0,
  //     0
  // ]);
  // pixiChild.endFill();
  // container.addChild(pixiChild);
  return container;
};

const renderChild = async (
  child,
  parentContainer,
  screenWidth,
  screenHeight,
  originalJson,
  path = [],
  setFigmaJson,
  app
) => {
  if (!child) return;
  let pixiObject;
  switch (child.type) {
    case 'CANVAS':
      pixiObject = renderCanvas(child);
      break;
    case 'FRAME':
    case 'GROUP':
    case 'RECTANGLE':
    case 'POLYGON':
    case 'VECTOR':
    case 'STAR':
    case 'LINE':
    case 'INSTANCE':
    case 'ELLIPSE':
      pixiObject = await renderPolygon(child, screenWidth, screenHeight, originalJson, path, setFigmaJson, app);
      break;
    case 'TEXT':
      pixiObject = await renderText(child, originalJson);
      break;
  }
  if (parentContainer && pixiObject) {
    parentContainer.addChild(pixiObject);
  }
  if (child.children) {
    child.children.forEach((grandchild, idx) => {
      if (grandchild.type === 'TEXT') {
        grandchild.parent = child;
      }
      renderChild(
        grandchild,
        pixiObject,
        screenWidth,
        screenHeight,
        originalJson,
        [...path, 'children', idx],
        setFigmaJson,
        app
      );
    });
  }
};

const renderCanvas = child => {
  const pixiObject = new PIXI.Container();
  pixiObject.zIndex = child.zIndex;
  return pixiObject;
};

const renderText = async child => {
  if (!child.visible) return;
  const fontNameObj = child.fontName || {};
  const fontFamily = fontNameObj.family || 'Arial'; // Default to 'Arial' if fontFamily is not provided
  const fontStyle = fontNameObj.style || 'normal'; // Default to 'normal' if fontStyle is not provided
  const fontSize = child.fontSize || 12; // Default to 12 if fontSize is not provided
  const fontWeight = child.fontWeight || '500'; // Default to 'normal' if fontWeight is not provided
  const textAlignHorizontal = child.textAlignHorizontal || 'left'; // Default to 'left' if textAlignHorizontal is not provided
  const textDecoration = child.textDecoration || 'none'; // Default to 'none' if textDecoration is not provided

  const lineHeightObj = child.lineHeight || {};
  let lineHeightValue = lineHeightObj.value || fontSize * 1.2; // Default to 1.2 times the fontSize if lineHeightValue is not provided
  if (lineHeightObj.unit === 'PERCENT') {
    lineHeightValue = (lineHeightValue / 100) * fontSize;
  }

  const letterSpacingObj = child.letterSpacing || {};
  let letterSpacingValue = letterSpacingObj.value || 0; // Default to 0 if letterSpacingValue is not provided
  if (letterSpacingObj.unit === 'PERCENT') {
    letterSpacingValue = (letterSpacingValue / 100) * fontSize;
  }

  let wrapperPixiObject = await renderPolygon(child);
  // if (child.id === "72:325") {
  // 	wrapperPixiObject.beginFill(0x0000ff);
  // 	wrapperPixiObject.drawRect(
  // 		0,
  // 		0,
  // 		child.absoluteBoundingBox.width,
  // 		child.absoluteBoundingBox.height
  // 	);
  // 	wrapperPixiObject.endFill();
  // }
  // wrapperPixiObject.width = child.absoluteBoundingBox.width;
  // wrapperPixiObject.height = child.absoluteBoundingBox.height;

  const style = new PIXI.TextStyle({
    fontFamily: fontFamily,
    // fontStyle: fontStyle,
    fontSize: fontSize,
    fontWeight: fontWeight,
    align: textAlignHorizontal,
    textDecoration: textDecoration,
    wordWrap: true,
    wordWrapWidth: child?.absoluteBoundingBox?.width,
    lineHeight: lineHeightValue,
    letterSpacing: letterSpacingValue
  });

  const pixiObject = new PIXI.Text(child.characters, style);
  pixiObject.zIndex = child.zIndex;
  wrapperPixiObject.addChild(pixiObject);

  return wrapperPixiObject;
};

const renderPolygon = async (child, screenWidth, screenHeight, originalJson, path = [], setFigmaJson, app) => {
  if (!child.visible) return;

  let pixiObject = new PIXI.Graphics();

  if (child.dropConfig && child.dropConfig.droppable) {
    pixiObject.lineStyle(1, 0x808080, 1, 0.5, true);
  }

  pixiObject.zIndex = child.zIndex;
  if (child.clipsContent) {
    let mask = new PIXI.Graphics();
    mask.beginFill(0x000000);
    mask = drawShape(child, mask);
    mask.endFill();
    pixiObject.addChild(mask);
    pixiObject.mask = mask;
  }

  let fillColor =
    child?.fills?.length > 0 && child.fills[0].type !== 'IMAGE' && child.fills[0].visible && child.fills[0].color;
  if (child.id === '8:128') {
    fillColor = 0x0000cc;
  }

  fillColor ? pixiObject.beginFill(fillColor) : pixiObject.beginFill(0xffffcc, 0);
  if (child.type !== 'TEXT') {
    pixiObject = drawShape(child, pixiObject);
  }
  pixiObject.endFill();
  if (child?.fills?.length > 0 && child.fills.filter(f => f.type === 'IMAGE')?.length > 0) {
    child.fills.forEach(async fill => {
      let pixiChild = new PIXI.Graphics();
      pixiChild.zIndex = child.zIndex;
      pixiChild.position.set(child.position.x, child.position.y);

      let imageSprite;
      if (fill.type === 'SOLID') {
        if (fill.visible) pixiChild.beginFill(String(fill?.color).length === 6 ? `0x${fill?.color}` : fill?.color);
      } else if (fill.type === 'IMAGE') {
        const gifRef = fill.gifRef;
        const imageUrl = fill.imageRef;
        console.log('🚀 ~ file: renderer.js:219 ~ child.fills.forEach ~ imageUrl:', imageUrl, child);
        let imageTexture;
        imageTexture = imageUrl && PIXI.Texture.from(imageUrl); // Load the texture

        if (gifRef) {
          imageSprite = await fetch(gifRef)
            .then(res => {
              return res.arrayBuffer();
            })
            .then(buff => {
              return AnimatedGIF.fromBuffer(buff);
            })
            .then(image => pixiChild.addChild(image));
        } else {
          imageSprite = new PIXI.Sprite(imageTexture);
        }

        imageSprite.blendMode = PIXI.BLEND_MODES.NORMAL; // Adjust blend mode if needed
        const rotation = fill.rotation;
        imageSprite.backgroundColor = 0x000000;
        imageSprite.rotation = ((fill.rotation || 0) * Math.PI) / 180;
        imageSprite.anchor.set(0.5, 0.5);

        const isTilt = [90, 270, -90].includes(rotation);

        if (['FIT'].includes(fill.scaleMode)) {
          const scaleX = child.size.width / (isTilt ? imageSprite.height : imageSprite.width);
          const scaleY = child.size.height / (isTilt ? imageSprite.width : imageSprite.height);

          const scale = Math.min(scaleX, scaleY);
          imageSprite.scale.set(scale);

          imageSprite.position.set(child.size.width / 2, child.size.height / 2);
        } else if (['FILL', 'TILE', 'CROP'].includes(fill.scaleMode)) {
          const imageAspectRatio = isTilt ? imageSprite.height / imageSprite.width : imageSprite.width / imageSprite.height;

          // Calculate the aspect ratio of the polygon
          const polygonAspectRatio = child.size.width / child.size.height;

          if (imageAspectRatio > polygonAspectRatio) {
            imageSprite.height = child.size.height;
            imageSprite.width = child.size.height * imageAspectRatio;
          } else {
            if (isTilt) {
              imageSprite.width = child.size.width / imageAspectRatio;
              imageSprite.height = child.size.width;
            } else {
              imageSprite.width = child.size.width;
              imageSprite.height = child.size.width / imageAspectRatio;
            }
          }
          imageSprite.position.set(child.size.width / 2, child.size.height / 2);
        }

        pixiChild.addChild(imageSprite);
      }

      pixiChild = drawShape(child, pixiChild);

      if (child.relativeTransform) {
        const { x, y } = child.relativeTransform;
        pixiChild.pivot.set(x, y);
      }

      if (fill.opacity !== undefined) {
        pixiChild.alpha = fill.opacity;
      }

      pixiChild.endFill();

      // MASK SECTION
      // let maskContainer = new PIXI.Container();
      // if (imageSprite) {
      // 	let mask = new PIXI.Graphics();
      // 	mask.position.set(child.position.x, child.position.y);

      // 	mask.beginFill(0xffffff);
      // 	mask = drawShape(child, mask);
      // 	if (child.relativeTransform) {
      // 		const { x, y } = child.relativeTransform;
      // 		mask.pivot.set(x, y);
      // 	}
      // 	mask.endFill();
      // 	maskContainer.mask = mask;
      // 	maskContainer.addChild(mask);
      // }
      // // Add the mask as a child, so that the mask is positioned relative to its parent
      // maskContainer.addChild(pixiChild);
      // // Offset by the window's frame width
      // pixiObject.addChild(maskContainer);
      pixiObject.addChild(pixiChild);
    });
  }

  if (child.relativeTransform && child.fillGeometry?.length > 0) {
    let { x, y, scaleX, scaleY, rotation, skewX, skewY } = child.relativeTransform;
    // const rotationSign = Math.sign()
    pixiObject.position.set(x, y);
    pixiObject.rotation = rotation;
    if (skewX < 0 && skewY < 0) {
      pixiObject.rotation = -rotation;
    }
  }
  if (child.relativeTransform && child.strokeGeometry?.length > 0) {
    let { x, y, scaleX, scaleY, rotation, skewX, skewY } = child.relativeTransform;
    pixiObject.position.set(x, y);
    pixiObject.rotation = rotation;
    if (skewX < 0 && skewY < 0) {
      pixiObject.rotation = -rotation;
    }
  }
  if (!child.relativeTransform) {
    pixiObject.rotation = Math.PI * (child.rotation / 180);
  }

  if (child?.effects?.length > 0) {
    let filters = [];
    child.effects.forEach(effect => {
      if (effect.type === 'DROP_SHADOW') {
        const filter = new DropShadowFilter({
          alpha: effect.visible ? effect.color.a : 0,
          distance: Math.sqrt(effect.offset.x ** 2 + effect.offset.y ** 2),
          blur: effect.radius / 5,
          color: 0x000000,
          offset: effect.offset,
          spread: effect.radius,
          quality: 4
        });
        // filter.padding = 100;
        // pixiObject.filterArea = null;

        if (child.id === '137:97') {
          // pixiObject.beginFill(0x0000ff);
          // pixiObject.drawRect(0, 0, child.absoluteBoundingBox.width, child.absoluteBoundingBox.height);
          // pixiObject.endFill();
        }

        filters.push(filter);
      }
    });
    // const antialiasFilter = new FXAAFilter();
    pixiObject.filters = filters;
  }

  // add events
  const interactions = child.interactions;
  if (interactions?.length) {
    function effectComputeFunction(type, args) {
      switch (type) {
        case 'increment':
          return (get(originalJson, args.variable_1) || 0) + 1;
        case 'decrement':
          return (get(originalJson, args.variable_1) || 0) - 1;
        default:
      }
    }

    interactions.forEach(i => {
      switch (i.event) {
        case 'onClick':
          pixiObject.eventMode = 'static';
          pixiObject.cursor = 'pointer';

          pixiObject.on('mousedown', function (e) {
            i.effects.forEach(effect => {
              switch (effect.type) {
                case 'updateVariable':
                  if (effect.valueType === 'constant') {
                    set(originalJson, effect.variable, effect.constant);
                    break;
                  }
                  set(
                    originalJson,
                    ['variables', effect.variable],
                    effectComputeFunction(effect.computeFunction.type, effect.computeFunction.arguments)
                  );
                  break;

                case 'updateVariant':
                  const updateBy = effect.action == 'next' ? 1 : -1;
                  const newPath = [...path];
                  newPath.pop();
                  newPath.pop();
                  if (get(originalJson, [...newPath, 'defaultChildren'])) {
                    // set current variant value
                    const newCurrentVariant = get(originalJson, ['currentVariant', newPath.join('.')]) + updateBy;
                    set(
                      originalJson,
                      ['currentVariant', newPath.join('.')],
                      newCurrentVariant === -1 ? null : newCurrentVariant
                    );

                    // set new variant value
                    set(
                      originalJson,
                      [...newPath, 'children'],
                      newCurrentVariant === -1
                        ? get(originalJson, [...newPath, 'defaultChildren'])
                        : get(originalJson, [...newPath, 'variants', newCurrentVariant])
                    );

                    if (newCurrentVariant === -1) set(originalJson, [...newPath, 'defaultChildren'], null);
                    break;
                  }

                  // set default children
                  set(originalJson, [...newPath, 'defaultChildren'], get(originalJson, [...newPath, 'children']));
                  // set current variant value
                  set(originalJson, ['currentVariant', newPath.join('.')], 0);
                  // set new variant value
                  set(originalJson, [...newPath, 'children'], get(originalJson, [...newPath, 'variants', 0]));
                  break;
                default:
              }
            });

            setFigmaJson(originalJson);
          });

          break;
        default:
      }
    });
  }

  // add drag controllers
  if (child.dragConfig && child.dragConfig.canDrag) {
    pixiObject.eventMode = 'static';
    pixiObject.cursor = 'pointer';

    // pixiObject.anchor.set(0.5);
    // pixiObject.scale.set(3);

    function onDragEnd(event) {
      if (dragTarget) {
        const dropAreaIndex = dropAreas.findIndex(item => {
          const width = item.width;
          const height = item.height;
          const areaBounds = { ...item.area.getBounds(), width, height };
          const dragX = event.global.x;
          const dragY = event.global.y;
          function pointInRectangle(rectX, rectY, rectWidth, rectHeight, pointX, pointY) {
            const rectRight = rectX + rectWidth;
            const rectBottom = rectY + rectHeight;
            if (rectX <= pointX && pointX <= rectRight && rectY <= pointY && pointY <= rectBottom) {
              return true;
            } else {
              return false;
            }
          }
          return pointInRectangle(areaBounds.x, areaBounds.y, areaBounds.width, areaBounds.height, dragX, dragY);
        });

        // move to original position
        dragTarget.x = child.relativeTransform.x;
        dragTarget.y = child.relativeTransform.y;

        if (dropAreaIndex !== -1) {
          // hide original child
          set(originalJson, [...path, 'visible'], false);
          // show original child in dropped area
          set(
            originalJson,
            [...get(dropAreas, [dropAreaIndex, 'path']), 'children', get(path, [path.length - 1]), 'visible'],
            true
          );
          // update canvas
          setFigmaJson(originalJson);
        }

        // end
        app.stage.off('pointermove', onDragMove);
        dragTarget.alpha = 1;
        dragTarget = null;
      }
    }

    function onDragMove(event) {
      if (dragTarget) {
        const min = get(child.dragConfig.dragRange, [0]);
        const max = get(child.dragConfig.dragRange, [1]);

        function nearestStepIntersection(rangeStart, rangeEnd, step, value) {
          if (value < rangeStart) return rangeStart;
          if (value > rangeEnd) return rangeEnd;
          return Math.round((value - rangeStart) / step) * step + rangeStart;
        }

        if (min != null && max != null) {
          if (child.dragConfig.axis === '90')
            dragTarget.y = Math.min(
              Math.max(
                nearestStepIntersection(min, max, child.dragConfig.stepSize, dragTarget.parent.toLocal(event.global).y),
                min
              ),
              max
            );
          if (child.dragConfig.axis === '0')
            dragTarget.x = Math.min(Math.max(dragTarget.parent.toLocal(event.global).x, min), max);
        }

        if (!child.dragConfig.axis) {
          const maxDragRange = child.dragConfig.maxDragRange;
          if (!maxDragRange) {
            dragTarget.parent.toLocal(event.global, null, dragTarget.position);
            return;
          }

          const newPosition = event.data.getLocalPosition(dragTarget.parent);
          dragTarget.x = newPosition.x;
          dragTarget.y = newPosition.y;

          // causing irregular constraints
          // const minX = 0;
          // const minY = 0;
          // const maxX = get(maxDragRange, 0);
          // const maxY = get(maxDragRange, 1);
          // dragTarget.x = Math.min(Math.max(newPosition.x, minX), maxX);
          // dragTarget.y = Math.min(Math.max(newPosition.y, minY), maxY);
        }
      }
    }

    function onDragStart() {
      this.alpha = 0.5;
      dragTarget = this;
      app.stage.on('pointermove', onDragMove);
    }

    pixiObject.on('pointerdown', onDragStart, pixiObject);
    pixiObject.on('pointerup', onDragEnd);
    pixiObject.on('pointerupoutside', onDragEnd);
  }

  if (child.dropConfig && child.dropConfig.droppable) {
    dropAreas.push({ area: pixiObject, width: pixiObject.getBounds().width, height: pixiObject.getBounds().height, path });
  }

  return pixiObject;
};

const drawShape = (child, pixiObject) => {
  if (child.fillGeometry?.length > 0) {
    fillSVGPath(pixiObject, child.fillGeometry[0].data);
  }
  if (child.type === 'GROUP') {
    pixiObject.drawRect(child.relativeTransform.x, child.relativeTransform.y, child.size.width, child.size.height);
  }

  if (child.strokes?.length > 0) {
    const visibleStrokes = child.strokes.filter(stroke => stroke.visible !== false);
    visibleStrokes.forEach(stroke => {
      let pixiChild = new PIXI.Graphics();
      pixiChild.zIndex = child.zIndex + 1;
      let strokeColor = String(stroke?.color).length === 6 ? `0x${stroke?.color}` : stroke?.color;
      pixiChild.beginFill(strokeColor);
      pixiChild.alpha = stroke.opacity;
      drawSVGPath(pixiChild, child.strokeGeometry[0].data);

      pixiChild.endFill();
      pixiChild.position.set(0, 0);
      pixiObject.addChild(pixiChild);
    });
    // pixiObject.closePath();
  }

  return pixiObject;
};
