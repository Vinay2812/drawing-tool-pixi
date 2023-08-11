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

const dataImg = {
  error: false,
  status: 200,
  meta: {
    images: {
      eae313a48883a46e7a2a60ee806e73a8052191be:
        "https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1692576000&Signature=XA7pHiHYQQSgnFujfCbkbguyWQWG0ulygkumm--BI9Lk3eHEE6qTuxy5cw1Lb3ujW~3NoQZTgcw05lCQ0j1gpVzMtXe9KNaqzD3SArvRIIdHPSzAOIIHAETyO4oRg8Z2JzdfN1WEXEaLRe1ZteeXVJIiMosdvFyNtHRMN~DN5~974qgIseuzabBgYzCZ3cBzisBc5I-oLiZQIgc2q0SZD8wBqnAc-in4pAM4MKeYGkxK6-jMy2mov9foFmsBj239mUm2-Yw4OCo6wbpjx7MmZTvYfCkOfgmEpEU0eEZyfdoF8BzhB81ZLU7S64oTlrhzYOh6YqVPp8vdZrVdFSCu-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      f5a2100374216b3de45e3e31eef3feec572c14bf:
        "https://s3-alpha-sig.figma.com/img/f5a2/1003/74216b3de45e3e31eef3feec572c14bf?Expires=1692576000&Signature=IgV1R7fBLOCCAi7Kl8q29AY7cw1diF~ENQlaYqSWqIbDU3orNbyO29sN4cVhHXgVtWRo1hMoOQ3VTJ-nZ4ow-Lrqa-ktLF3ui82emLg63RIWmwn9XW25~4Q2SEgNO4jkYSlsqNgWhEy-xHS6G7CV5M9ubd8-3O4822RVT65b9wnuzLjCgKO8RYRpZvES7r68UlrVHpTLOBmOskAeW3dmCTeKNpry6roItjRP2j-3WTc5brvzfhheChn-SoPPMXj4UH2nZj7yf5ZipQGsGOIx5iMtdekDG9EwsHtl0Q-UvyjwQxhMf1EVwsJZWVuYL3ClDjp5nK9w30Qp1eXaR6Fyow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      b9c3b38b03c9243343af5a9e3b1bb9a8ff9e5a09:
        "https://s3-alpha-sig.figma.com/img/b9c3/b38b/03c9243343af5a9e3b1bb9a8ff9e5a09?Expires=1692576000&Signature=Cb6tULdMTSbY0lIxPTR0owJaZXpI9tfuRcjG~3JOnWdVgTVy1RB7nW1YFSReomgK5LhJCjdZ-2eejnBrMn6IFuzrDgox59ngl9ymkVjdXhtxsGnuPsaZSRSwswIBo1lAR6f9m5vXNQwUOeFu2ZVrNXUkyljRlVoGYxBvE1NkiynZberRHVVDPK4~fy20dL9RGM53-oVg0noCC23gyjdz1G9S5kVF4o2fsVIMTJinrg6cCkHIqNk~lAvcYfa1mu2HOJXMmcOcFzRvntpQF3oSDWjZ-VSAGcfEOYxMDpCsys-bgFLOsZW~RsToYR6E6GaaOQajJ2GXwJ3pYtzdir1lew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "73f232b70d771c1860f382422bf4176f36d8f736":
        "https://s3-alpha-sig.figma.com/img/73f2/32b7/0d771c1860f382422bf4176f36d8f736?Expires=1692576000&Signature=FX4CQKH1NTffFG35hYvDJXFgwTQyd9KcMQV-ZAPAsH-1vXBh9pgMV6d3WNBelsPYVrKO0iZ8K~50BsQIr8eG6j5Q1l6-HFqeGpbkWjzRL56KzfxBp9P9nLg7I7zufHRnleKRcGsojWXABkbZBTBG1nkvtuk59-F-iQ4r5F9az~6J5cs64UyspbOvQqwTctYx7DWHTXiH97aYdyjc3SFszyNX8SdKyXv-MI0S06rzCEV7GHUU2n0OGlWXrs7WimvPElJ1tV5ItUw-d0nRMSWK~YjsS2L1bUdErA9RB2oz8pX4lQqkdV~jBkJxOHXRpP9A1Hfh38InT82waThuJIq4Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  },
  i18n: null,
};

const renderRectangle = (child) => {
  console.log(child.fills);
  const pixiObject = new PIXI.Graphics();
  pixiObject.zIndex = child.level;

  if (child?.fills?.length > 0) {
    child.fills.forEach((fill) => {
      if (fill.type === "SOLID") {
        pixiObject.beginFill(child.fillColor);
        pixiObject.drawRect(child.x, child.y, child.width, child.height);
        pixiObject.endFill();
      } else if (fill.type === "IMAGE") {
        const imageUrl = dataImg.meta.images[fill.imageHash];
        const imageTexture = PIXI.Texture.from(imageUrl); // Load the texture

        const imageSprite = new PIXI.Sprite(imageTexture);
        // Set the position and size of the image

        imageSprite.width = child.width;
        imageSprite.height = child.height;

        // if (fill.rotation) {
        //   const rotation = fill.rotation;
        //   const rotationInRadians = rotation * (Math.PI / 180);
        //   imageSprite.rotation = rotationInRadians; // Set rotation angle in radians

        //   // let posX = 1;
        //   // let posY = 1;

        //   // switch (fill.rotation) {
        //   //   case 90:
        //   //     posX = 1;
        //   //     break;
        //   //   case 180:
        //   //     posX = 1;
        //   //     posY = 1;
        //   //     break;
        //   //   default:
        //   //     break;
        //   // }

        //   // // Calculate the center of the box
        //   // const boxCenterX = child.x + child.width / posX;
        //   // const boxCenterY = child.y + child.height / posY;

        //   // // Calculate the offset of the rotated image
        //   // const offsetX = child.width - imageSprite.width;
        //   // const offsetY = child.height - imageSprite.height;

        //   // // Calculate the new position of the image after rotation
        //   // const rotatedImageX =
        //   //   boxCenterX +
        //   //   offsetX * Math.cos(rotationInRadians) -
        //   //   offsetY * Math.sin(rotationInRadians);
        //   // const rotatedImageY =
        //   //   boxCenterY +
        //   //   offsetX * Math.sin(rotationInRadians) +
        //   //   offsetY * Math.cos(rotationInRadians);

        //   // imageSprite.position.set(rotatedImageX, rotatedImageY);
        // }
        // else {
        imageSprite.position.set(child.x, child.y);
        // }

        // Apply opacity if opacity property is defined
        if (fill.opacity !== undefined) {
          imageSprite.alpha = fill.opacity;
        }

        // Add the image sprite to the pixiObject
        pixiObject.addChild(imageSprite);
      }
    });
  } else {
    // If there are no fills, just draw a rectangle
    pixiObject.beginFill(child.fillColor);
    pixiObject.drawRect(child.x, child.y, child.width, child.height);
    pixiObject.endFill();
  }
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
