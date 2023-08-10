import * as PIXI from "pixi.js";

export const renderFigmaFromParsedJson = (children) => {
  const container = new PIXI.Container();
  container.sortableChildren = true;
  children.forEach((child) => {
    renderChild(child, container);
  });
  return container;
};

const renderChild = (child, parentContainer) => {
  //   console.log("🚀 ~ file: renderer.js:13 ~ renderChild ~ child:", child);
  if (!child) return;
  let pixiObject;
  switch (child.type) {
    case "CANVAS":
      pixiObject = renderCanvas(child);
      break;
    case "FRAME":
      pixiObject = renderFrame(child);
      break;
    case "GROUP":
      pixiObject = renderFrame(child);
      break;
    case "RECTANGLE":
      pixiObject = renderRectangle(child);
      break;
    case "POLYGON":
      pixiObject = renderPolygon(child);
      break;
  }
  if (parentContainer && pixiObject) {
    parentContainer.addChild(pixiObject);
  }
  if (child.children) {
    child.children.forEach((grandchild) => {
      renderChild(grandchild, pixiObject);
    });
  }
};

const renderCanvas = (child) => {
  const pixiObject = new PIXI.Container();
  pixiObject.zIndex = child.zIndex;
  return pixiObject;
};

const renderFrame = (child) => {
  const pixiObject = new PIXI.Graphics();
  pixiObject.zIndex = child.zIndex;

  console.log(child.clipsContent);

  if (child.backgroundColor) {
    pixiObject.backgroundColor = child.backgroundColor;
  }

  if (child?.fills?.length > 0) {
    child.fills.forEach((fill) => {
      if (fill.type === "SOLID") {
        pixiObject.beginFill(fill.color);
      }
    });
  }

  if (child.cornerRadius) {
    pixiObject.drawRoundedRect(
      child.x,
      child.y,
      child.width,
      child.height,
      child.cornerRadius
    );
  } else if (
    child.rectangleCornerRadii &&
    child.rectangleCornerRadii.length === 4
  ) {
    const [topLeft, topRight, bottomRight, bottomLeft] =
      child.rectangleCornerRadii;

    pixiObject.moveTo(child.x + topLeft, child.y);
    pixiObject.lineTo(child.x + child.width - topRight, child.y);
    pixiObject.quadraticCurveTo(
      child.x + child.width,
      child.y,
      child.x + child.width,
      child.y + topRight
    );
    pixiObject.lineTo(
      child.x + child.width,
      child.y + child.height - bottomRight
    );
    pixiObject.quadraticCurveTo(
      child.x + child.width,
      child.y + child.height,
      child.x + child.width - bottomRight,
      child.y + child.height
    );
    pixiObject.lineTo(child.x + bottomLeft, child.y + child.height);
    pixiObject.quadraticCurveTo(
      child.x,
      child.y + child.height,
      child.x,
      child.y + child.height - bottomLeft
    );
    pixiObject.lineTo(child.x, child.y + topLeft);
    pixiObject.quadraticCurveTo(child.x, child.y, child.x + topLeft, child.y);

    pixiObject.endFill();
  } else {
    pixiObject.drawRect(child.x, child.y, child.width, child.height);
  }

  if (child.cornerSmoothing) {
    const smoothing = Math.min(Math.max(child.cornerSmoothing, 0), 1);
    pixiObject.lineStyle(0);
    pixiObject.beginFill(0x000000, 0);
    pixiObject.moveTo(child.x + child.width * smoothing, child.y);
    pixiObject.lineTo(child.x + child.width - child.width * smoothing, child.y);
    pixiObject.lineTo(
      child.x + child.width,
      child.y + child.height * smoothing
    );
    pixiObject.lineTo(
      child.x + child.width,
      child.y + child.height - child.height * smoothing
    );
    pixiObject.lineTo(
      child.x + child.width * smoothing,
      child.y + child.height
    );
    pixiObject.lineTo(
      child.x + child.width - child.width * smoothing,
      child.y + child.height
    );
    pixiObject.lineTo(
      child.x,
      child.y + child.height - child.height * smoothing
    );
    pixiObject.lineTo(child.x, child.y + child.height * smoothing);
    pixiObject.lineTo(child.x + child.width * smoothing, child.y);
    pixiObject.endFill();
  }

  //   pixiObject.drawRect(child.x, child.y, child.width, child.height);
  if (child.backgroundColor) {
    pixiObject.endFill();
  }

  if (child.clipsContent) {
    const mask = new PIXI.Graphics();
    mask.beginFill(0xffffff); // Filling with white for clipping
    mask.drawRect(child.x, child.y, child.width, child.height);
    mask.endFill();
    pixiObject.addChild(mask);
    pixiObject.mask = mask;
  }

  if (child.overflowDirection === "HORIZONTAL_SCROLLING") {
    pixiObject.interactive = true;
    pixiObject.hitArea = new PIXI.Rectangle(0, 0, child.width, child.height);
    const scrollContainer = new PIXI.Container();
    pixiObject.addChild(scrollContainer);
    scrollContainer.mask = new PIXI.Graphics();
    scrollContainer.mask.beginFill(0xffffff);
    scrollContainer.mask.drawRect(0, 0, child.width, child.height);
    scrollContainer.mask.endFill();

    // Add your content to the scrollContainer
    // ... (code to add content)

    // Enable horizontal scrolling
    let isDragging = false;
    let lastPositionX = 0;
    scrollContainer.on("pointerdown", (event) => {
      isDragging = true;
      lastPositionX = event.data.global.x;
    });
    scrollContainer.on("pointermove", (event) => {
      if (isDragging) {
        const deltaX = event.data.global.x - lastPositionX;
        lastPositionX = event.data.global.x;
        scrollContainer.x += deltaX;
      }
    });
    scrollContainer.on("pointerup", () => {
      isDragging = false;
    });
    scrollContainer.on("pointerupoutside", () => {
      isDragging = false;
    });
  } else if (child.overflowDirection === "VERTICAL_SCROLLING") {
    pixiObject.interactive = true;
    pixiObject.hitArea = new PIXI.Rectangle(0, 0, child.width, child.height);
    const scrollContainer = new PIXI.Container();
    pixiObject.addChild(scrollContainer);
    scrollContainer.mask = new PIXI.Graphics();
    scrollContainer.mask.beginFill(0xffffff);
    scrollContainer.mask.drawRect(0, 0, child.width, child.height);
    scrollContainer.mask.endFill();

    // Add your content to the scrollContainer
    // ... (code to add content)

    // Enable vertical scrolling
    let isDragging = false;
    let lastPositionY = 0;
    scrollContainer.on("pointerdown", (event) => {
      isDragging = true;
      lastPositionY = event.data.global.y;
    });
    scrollContainer.on("pointermove", (event) => {
      if (isDragging) {
        const deltaY = event.data.global.y - lastPositionY;
        lastPositionY = event.data.global.y;
        scrollContainer.y += deltaY;
      }
    });
    scrollContainer.on("pointerup", () => {
      isDragging = false;
    });
    scrollContainer.on("pointerupoutside", () => {
      isDragging = false;
    });
  } else if (child.overflowDirection === "HORIZONTAL_AND_VERTICAL_SCROLLING") {
    pixiObject.interactive = true;
    pixiObject.hitArea = new PIXI.Rectangle(0, 0, child.width, child.height);
    const scrollContainer = new PIXI.Container();
    pixiObject.addChild(scrollContainer);
    scrollContainer.mask = new PIXI.Graphics();
    scrollContainer.mask.beginFill(0xffffff);
    scrollContainer.mask.drawRect(0, 0, child.width, child.height);
    scrollContainer.mask.endFill();

    // Add your content to the scrollContainer
    // ... (code to add content)

    // Enable horizontal and vertical scrolling
    let isDragging = false;
    let lastPositionX = 0;
    let lastPositionY = 0;
    scrollContainer.on("pointerdown", (event) => {
      isDragging = true;
      lastPositionX = event.data.global.x;
      lastPositionY = event.data.global.y;
    });
    scrollContainer.on("pointermove", (event) => {
      if (isDragging) {
        const deltaX = event.data.global.x - lastPositionX;
        const deltaY = event.data.global.y - lastPositionY;
        lastPositionX = event.data.global.x;
        lastPositionY = event.data.global.y;
        scrollContainer.x += deltaX;
        scrollContainer.y += deltaY;
      }
    });
    scrollContainer.on("pointerup", () => {
      isDragging = false;
    });
    scrollContainer.on("pointerupoutside", () => {
      isDragging = false;
    });
  }

  return pixiObject;
};

const renderRectangle = (child) => {
  const pixiObject = new PIXI.Graphics();
  pixiObject.zIndex = child.level;
  pixiObject.beginFill(child.fillColor);
  pixiObject.drawRect(child.x, child.y, child.width, child.height);
  pixiObject.endFill();
  return pixiObject;
};

const renderPolygon = (child) => {
  const pixiObject = new PIXI.Graphics();
  pixiObject.position.set(child.position.x, child.position.y);
  pixiObject.rotation = child.rotation;
  pixiObject.beginFill(child.color);
  // Additional rendering logic for polygons
  pixiObject.drawPolygon(child.points);
  pixiObject.endFill();
  return pixiObject;
};
