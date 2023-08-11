import * as PIXI from "pixi.js";
import { getFilter } from "../utils/pixiJS";

let exampleRects = [];
export const renderFigmaFromParsedJson = (children) => {
  const container = new PIXI.Container();
  container.sortableChildren = true;
  children.forEach((child) => {
    renderChild(child, container);
  });
  container.backgroundColor = 0xffffff;
  // const testGraphics = new PIXI.Graphics();
  // testGraphics.zIndex = 1;
  // testGraphics.position.set(109, 653);
  // testGraphics.beginFill(0x27ae60);
  // testGraphics.drawPolygon([
  //     0,
  //     4,
  //     0,
  //     1.79086,
  //     1.79086,
  //     0,
  //     4,
  //     0,
  //     84,
  //     0,
  //     86.2091,
  //     0,
  //     88,
  //     1.79086,
  //     88,
  //     4,
  //     88,
  //     44,
  //     88,
  //     46.2091,
  //     86.2091,
  //     48,
  //     84,
  //     48,
  //     4,
  //     48,
  //     1.79086,
  //     48,
  //     0,
  //     46.2091,
  //     0,
  //     44,
  //     0,
  //     4
  // ]);
  // testGraphics.zIndex = 1;
  // testGraphics.endFill();
  // container.addChild(testGraphics);
  // if (exampleRects.length > 0) {
  // 	exampleRects.forEach((rect) => {
  // 		container.addChild(rect);
  // 	});
  // }
  return container;
};

const renderChild = (child, parentContainer) => {
  if (!child) return;
  let pixiObject;
  switch (child.type) {
    case "CANVAS":
      pixiObject = renderCanvas(child);
      break;
    case "FRAME":
    case "GROUP":
    case "RECTANGLE":
    case "POLYGON":
    case "VECTOR":
    case "STAR":
    case "LINE":
    case "ELLIPSE":
      pixiObject = renderPolygon(child);
      break;
    default:
      break;
  }
  if (parentContainer && pixiObject) {
    if (child.type === "RECTANGLE")
      console.log(
        "🚀 ~ file: renderer.js:78 ~ renderChild ~ parentContainer:",
        child,
        pixiObject,
        parentContainer
      );
    parentContainer.addChild(pixiObject);
  }
  if (child.children) {
    child.children.forEach((grandchild) => {
      renderChild(grandchild, pixiObject);
    });
  }
  // if (child.id === "8:87") {
  // 	console.log(
  // 		"🚀 ~ file: renderer.js:86 ~ renderChild ~ pixiObject:",
  // 		child,
  // 		pixiObject
  // 	);
  // 	exampleRects.push(pixiObject);
  // }
};

const renderCanvas = (child) => {
  const pixiObject = new PIXI.Container();
  pixiObject.zIndex = child.zIndex;
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
      "71a20b288deef7b1f4806e592fbb7e601c69dac3":
        "https://s3-alpha-sig.figma.com/img/71a2/0b28/8deef7b1f4806e592fbb7e601c69dac3?Expires=1692576000&Signature=a07HbZD12fuNiUvEujDhHtIO8XnWctVdUM6yqUDYHJX3BVHODyoM9BUwx4P1ci1yYcywroQXab2HIzOOvrSFoczHSYvusbr0A1I84wRfuIGdiVdpiHmhnhyvHuzw2cHIwKFIn8LXblbKKcjiUWJvl9Y2ZAlSYVltYs~voMti9HnLPUzRHYBmHuhwQGFs2xupUFlWMqRpg6v2VokQUYgS1OxfrCNS4HrMeAPGMre-4NX3qi9PjJzuxKbTL27dP25a5gKqfrS4zDTDOn1EtxZu0FqPG~LwHNAPplB02Ke0Vx8QjjoMrMQSEvwnt9gvzC4P02wm9b~kxjTNZnFxMAnDjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "677bdcb70d07d093cbabd8111f0d7a65a4f5f9ef":
        "https://s3-alpha-sig.figma.com/img/677b/dcb7/0d07d093cbabd8111f0d7a65a4f5f9ef?Expires=1692576000&Signature=lgvlrkZmeGfk7GECQyQ3KL-LjhCx5OV5YnhipqCRJ3qpT9As91pUl~We4lQCWvRXyiq7eIF2FVRaHSykLHKor6~I6nMA3LxjO7Rw1q~pBfcKCcZb9hD~19WNQxhIxO9hGm17jhgE7qSjo4lTAzvQlWGfvF4NTRQZgiOpSma9hZ6Mjp4ORkWpVC80zavOQF3VS0Y3HDX~Er856HCSRcgw5dZL1~WPhNtpEUadJYl5onUfdAqvzieeF8haDc25GWQ8eg3QXIwplFhz8OxiLoPpDrXto28kqXfRhH7YAUiapQJSIISRU1KvqFui9VCYY8z0owqYE3~~bLU7ynWSlXqBzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "52f0dde50348895b47df937417fa075a3b675661":
        "https://s3-alpha-sig.figma.com/img/52f0/dde5/0348895b47df937417fa075a3b675661?Expires=1692576000&Signature=QoT4fxtL~ev2mOGbmXvjc98-iDKr3ReKt3vZit6XFXOibWpQwRIH14z~cHk9lJtIQLTW41M8fUvSxvvl0hYixOg7eXL9Cz3DN2PLXzj2MB5GEZjlT-Obbrce7Ppw-bsgKWCWUy33wwFhhk-Rsgff2nZfZhwGXYXCh9uAGZxVboeZOx4yjsV7mZ~DYu4eDx2CSk8yOB5iKAsq3oOT1kt7ZXH6KMBhO8TB9jCdno0vAODtpb4jTiNbewsGoeEL2Ic4tOCFB8iYccp2dRKXyscAoImRjSCf0YNci7LcVA6tX5bzOcJfa2JUPOrwgw~y6bBArEY6-zKuZPIHbNcGavGNhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "8298bcb5910feacae668828fd0e7fbff877baf5e":
        "https://s3-alpha-sig.figma.com/img/8298/bcb5/910feacae668828fd0e7fbff877baf5e?Expires=1692576000&Signature=kp2xIIDhiOVURlNYkTR4qaKRrbXrKzbHkkGSsNVDVDtTCO2BVz61B5blmANiJmdqJC6bI8N6UbK5TfZ-XMRzXoy4NEyWYgMknzMyFfLi57zwxC5n0cBxSZuyxCbsqVnW4XmF5kgcDmhRZshktmSTENwtJ2QXKgbc8h49KJAspt2QApLMlWI9McD7BaIsnqVk02Mbe1cewR92ZkRNdMZEOMG2S~~iXINLajQJPWQLtN7Cw9YY6b9B~wSpXF07SZBmJiBA6AjpToaItJoRJE-Jq5Vot5x3VTPI7fQz0QXsZzZPzMS437adR~g~1~Wco1doFh0NywNzg9lMbr0g9mht3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "73f232b70d771c1860f382422bf4176f36d8f736":
        "https://s3-alpha-sig.figma.com/img/73f2/32b7/0d771c1860f382422bf4176f36d8f736?Expires=1692576000&Signature=FX4CQKH1NTffFG35hYvDJXFgwTQyd9KcMQV-ZAPAsH-1vXBh9pgMV6d3WNBelsPYVrKO0iZ8K~50BsQIr8eG6j5Q1l6-HFqeGpbkWjzRL56KzfxBp9P9nLg7I7zufHRnleKRcGsojWXABkbZBTBG1nkvtuk59-F-iQ4r5F9az~6J5cs64UyspbOvQqwTctYx7DWHTXiH97aYdyjc3SFszyNX8SdKyXv-MI0S06rzCEV7GHUU2n0OGlWXrs7WimvPElJ1tV5ItUw-d0nRMSWK~YjsS2L1bUdErA9RB2oz8pX4lQqkdV~jBkJxOHXRpP9A1Hfh38InT82waThuJIq4Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "424641ac5e43cbabb094c2aeb907445e88285c08":
        "https://s3-alpha-sig.figma.com/img/4246/41ac/5e43cbabb094c2aeb907445e88285c08?Expires=1692576000&Signature=da~SBjEiVg~EmEIl1VtuX9N4jNGyuLbdgM8H06zd~N5WXIveXYnmVJ5ISssJznJ984gl5nZ2rm1jJW7czABosJjN8tykTenYQtgdf5T0WLFCSkczZMrNbbQ9pn2g1MoMGKqTkRXuABtR5icOPxIbd2DVTHWVNpfQXiHWkt4M8Rh6KOUJDvXveaAXmBp4KeXgDbZrycA~mtAdAf5a~CoEZXjU6be7xUJEiaLINg9j3XBTiyX2A98xKiwxPch13zVy2IkIwN1MiScObAnoPWeO3OFXnwub8dWfXyhDw8esEj4QfijZQRolrjTW135NFuLD~XrowyM0DbHwgbmo9rfKYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      eb87f2161fa7bcc55538de6500359a7afa0f4cd8:
        "https://s3-alpha-sig.figma.com/img/eb87/f216/1fa7bcc55538de6500359a7afa0f4cd8?Expires=1692576000&Signature=kX5nziXOulUwlXZQ8-3ftiyfBTanqJXm8zjQ~sEydCb57wGn6DvXSpjQ5VzgzMrBVpA8g1JOm8pWh8K-99M8pPFDQb0Et-WI9Mq1kVOREbZ6H6UICcuduk7V9b42mmdYsuDNHXuRvN9Sf34SMx1ppJAj7peKJWDtomJO0uj0oKP6NVauR-hsO0cWVIKurE6ULZuyGYuiORyQMB-gOZZjDPz83YLEcX8~Llziwhj9wJccjYgwxecpM8mBBu7os3rSbAfb7Kyf3BuyRvJqssudvm5vmc1GoaW17sn4MHD0CyoR~oBnZKTBc7Tv40YO6SP499x5q7xKnZYlTJ2ZeOc5zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "03d858945a14d7fbae9835d3b94b4bb0e838736e":
        "https://s3-alpha-sig.figma.com/img/03d8/5894/5a14d7fbae9835d3b94b4bb0e838736e?Expires=1692576000&Signature=Lt9~9cgc33lSt~QYUUOuqotjl1ynSZqnEIwHwjWif07HOwxtO1Kpge4VJh-zEbkk5Fw0u6grCN53WItfOVM81EpbGv65HdMFfrTSp0ZsihiAjllFdL~BZi-doxaQOMX4VE29XaY69~THnqo7Fn6bZm6TI0o5Dg5NVy767kjyAe5RrfsviwGKqyvoAKAdhQxQ6ad7jfbSLdz2ChpnLAHrDsbPYJW7Cdui8CPh91Dq3KsD5DqVYlYuKLusXMzrE6ef2lkkNv2JYKg-ouA~JowJvOjaIWrMKd3-wLseq5O-BRrZPrVnor2a6haQdbQo4c1YeJnDlm4Vky440Kqer5Vd4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      d3402a838835a6e87b3bc4124a988a09d3559fe0:
        "https://s3-alpha-sig.figma.com/img/d340/2a83/8835a6e87b3bc4124a988a09d3559fe0?Expires=1692576000&Signature=VquYunIaQyUrS8Km2STBJREuglidJSPMkARDXe68SF1ptw8C5yZbaQLLIaBb7VI~pjUq6Y6G6i7~f3OlvjYwm33MxijWMRtIEbcSnngZCYPjztIz12Xdsfj3DBAmUw5g8id7VHPlwdNYzsi~IXuTEh6gLgtnS4jzwrbZD1VsUyIhZVfH7voJVq9QbM-iKOfRezPU5FQJHr-XjA~vkQfX-SOniTEx090PkKJULg1myUkdREIFPk6wW4wbf5eox0~7Q0SE~75AwCikLWiW-vvuOv-P8vVMOP8EKe4V6hqBym0kGTQ-HIPwZAQyynmhVE0TsxZjQzf0RO2bCVW~XV8v4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "2a05e83e9cc4a790233c2c208ca0ad379cf64d50":
        "https://s3-alpha-sig.figma.com/img/2a05/e83e/9cc4a790233c2c208ca0ad379cf64d50?Expires=1692576000&Signature=Bysy4CILpkOZ8rSVwNqZvPIJhZ2XNkFldtThb3qUdZHZUNKk6Cdxhtp6nwE-AER24XqxEdjGxnuA5RgCpnwsSMmc0AcW1Lwkey6Lo8pifhXnpAIIj4mtnidOtxM55NP3lVt~-Rs8SioFg4lVIOAIxFcSapCK954ZnPHkrabmdSEfWOzCol-DNwi6G7cHHDueA9WyPl-3b0yD2NX2CTcMu-5ekr0MCay~C7HbygSNJX8OdOxZ4ZpEhycSb6o-DQk1meC~cenZSLMoGUvV~2VXgrt~s1SASlnK7boctKRjX4qnYK8JpX8XTH3T-f-2oZt9-dn56DesGgQ8GaPZh8~3pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "11ad928f675435c65ecb0238a07a0ed360aeb9c3":
        "https://s3-alpha-sig.figma.com/img/11ad/928f/675435c65ecb0238a07a0ed360aeb9c3?Expires=1692576000&Signature=neDCw9PdjW~kH-CS8v3MsyebkFqRxw-k~HBjaVn3cwV5~uI9jgayqXvcGzsKXFDscIzn1WTIRhnDmgYZ~nmyP2kjngNT4tvBspp8Yag867~heDr9ArJDlH7mhK95Dsy0zAr5~D2Q8JjckQJC9ROaFsQurfXw1rqekgV~R4eqwIVY1gYVhdXhOVXRv6-WoHWpWDT6txNkQSwQylirEcuul7~n7-dMudgHYKZ786B8h~Ph8P8omXlzWClIa~NaB945ccRYiipsnVxlXGQPyAOpSuEJifhiqKa0fiOzNN4r21y5UiOvKWMk9~-sKwOVTT9xXJZj0vTQyVxafr3ZhR6u5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  },
  i18n: null,
};

const renderPolygon = (child) => {
  console.log("🚀 ~ file: renderer.js:93 ~ renderPolygon ~ child:", child);
  const pixiObject = new PIXI.Graphics();
  pixiObject.zIndex = child.zIndex;

  pixiObject.position.set(child.position.x, child.position.y);
  let fillColor =
    child?.fills?.length > 0 && child.fills[0].visible && child.fills[0].color;
  fillColor =
    fillColor && String(fillColor).length === 6 ? `0x${fillColor}` : fillColor;

  if (child?.fills?.length > 0) {
    child.fills.forEach((fill) => {
      if (fill.type === "SOLID") {
        const pixiChild = new PIXI.Graphics();
        pixiChild.position.set(child.position.x, child.position.y);
        pixiChild.beginFill(
          String(fillColor).length === 6 ? `0x${fillColor}` : fillColor
        );

        if (child.fillGeometry?.length > 0) {
          if (child.type !== "ELLIPSE") {
            // pixiObject.drawEllipse(child.fillGeometry[0].data);
            child.type === "RECTANGLE" &&
              console.log(
                "🚀 ~ file: renderer.js:138 ~ renderPolygon ~ child.fillGeometry:",
                child.fillGeometry
              );
            pixiChild.drawPolygon(child.fillGeometry[0].data);
          }
        }

        if (child.strokes?.length > 0) {
          const visibleStrokes = child.strokes.filter(
            (stroke) => stroke.visible !== false
          );
          visibleStrokes.forEach((stroke) => {
            pixiChild.lineStyle(
              child.strokeWidth,
              stroke.color,
              stroke.opacity
            );
            pixiChild.drawPolygon(child.strokeGeometry[0].data);
          });
        }
        if (child.arcData) {
          console.log(
            "🚀 ~ file: renderer.js:171 ~ renderPolygon ~ child.arcData:",
            child.arcData
          );
          const centerX = child.size.width / 2;
          const centerY = child.size.height / 2;
          const startingAngle = child.arcData.startingAngle;
          const endingAngle = child.arcData.endingAngle;
          const innerRadius = child.arcData.innerRadius;
          pixiChild.moveTo(centerX, centerY);
          pixiChild.arc(
            centerX,
            centerY,
            innerRadius,
            startingAngle,
            endingAngle,
            false
          );
          pixiChild.arc(
            centerX,
            centerY,
            child.size.width / 2,
            endingAngle,
            startingAngle,
            true
          );
          pixiChild.closePath();
        }

        if (fill.opacity !== undefined) {
          pixiChild.alpha = fill.opacity;
        }

        pixiChild.endFill();
        pixiObject.addChild(pixiChild);
      } else if (fill.type === "IMAGE") {
        const imageUrl = dataImg.meta.images[fill.imageHash];
        const imageTexture = PIXI.Texture.from(imageUrl); // Load the texture
        const imageSprite = new PIXI.Sprite(imageTexture);
        // // Set the position and size of the image
        imageSprite.width = child.size.width;
        imageSprite.height = child.size.height;

        // if (fill.rotation) {
        //   const rotation = fill.rotation;
        //   const rotationInRadians = rotation * (Math.PI / 180);
        //   imageSprite.rotation = rotationInRadians; // Set rotation angle in radians
        //   let posX = 1;
        //   let posY = 1;
        //   switch (fill.rotation) {
        //     case 90:
        //       posX = 1;
        //       break;
        //     case 180:
        //       posX = 1;
        //       posY = 1;
        //       break;
        //     default:
        //       break;
        //   }
        //   // Calculate the center of the box
        //   const boxCenterX = child.position.x + child.size.width / posX;
        //   const boxCenterY = child.position.y + child.size.height / posY;
        //   // Calculate the offset of the rotated image
        //   const offsetX = child.size.width - imageSprite.width;
        //   const offsetY = child.size.height - imageSprite.height;
        //   // Calculate the new position of the image after rotation
        //   const rotatedImageX =
        //     boxCenterX +
        //     offsetX * Math.cos(rotationInRadians) -
        //     offsetY * Math.sin(rotationInRadians);
        //   const rotatedImageY =
        //     boxCenterY +
        //     offsetX * Math.sin(rotationInRadians) +
        //     offsetY * Math.cos(rotationInRadians);
        //   imageSprite.position.set(rotatedImageX, rotatedImageY);
        // }
        // } else {
        //   imageSprite.position.set(child.position.x, child.position.y);
        // }

        // imageSprite.drawPolygon(child.fillGeometry[0].data);

        // if (child.relativeTransform) {
        //   const { x, y, scaleX, scaleY, rotation, skewX, skewY } =
        //     child.relativeTransform;
        //   imageSprite.setTransform(
        //     x,
        //     y,
        //     scaleX,
        //     scaleY,
        //     rotation,
        //     skewX,
        //     skewY
        //   );
        // }

        // Apply opacity if opacity property is defined
        if (fill.opacity !== undefined) {
          imageSprite.alpha = fill.opacity;
        }
        // // Add the image sprite to the pixiObject
        pixiObject.addChild(imageSprite);
      }
    });
  }

  // fillColor && pixiObject.beginFill(fillColor);

  if (child.fillGeometry?.length > 0) {
    if (child.type !== "ELLIPSE") {
      // pixiObject.drawEllipse(child.fillGeometry[0].data);
      child.type === "RECTANGLE" &&
        console.log(
          "🚀 ~ file: renderer.js:138 ~ renderPolygon ~ child.fillGeometry:",
          child.fillGeometry
        );
      pixiObject.drawPolygon(child.fillGeometry[0].data);
    }
  }

  if (child.strokes?.length > 0) {
    const visibleStrokes = child.strokes.filter(
      (stroke) => stroke.visible !== false
    );
    visibleStrokes.forEach((stroke) => {
      pixiObject.lineStyle(child.strokeWidth, stroke.color, stroke.opacity);
      pixiObject.drawPolygon(child.strokeGeometry[0].data);
    });
  }
  if (child.arcData) {
    console.log(
      "🚀 ~ file: renderer.js:171 ~ renderPolygon ~ child.arcData:",
      child.arcData
    );
    const centerX = child.size.width / 2;
    const centerY = child.size.height / 2;
    const startingAngle = child.arcData.startingAngle;
    const endingAngle = child.arcData.endingAngle;
    const innerRadius = child.arcData.innerRadius;
    pixiObject.moveTo(centerX, centerY);
    pixiObject.arc(
      centerX,
      centerY,
      innerRadius,
      startingAngle,
      endingAngle,
      false
    );
    pixiObject.arc(
      centerX,
      centerY,
      child.size.width / 2,
      endingAngle,
      startingAngle,
      true
    );
    pixiObject.closePath();
  }

  if (child.relativeTransform) {
    const { x, y, scaleX, scaleY, rotation, skewX, skewY } =
      child.relativeTransform;
    pixiObject.setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY);
  }

  // if (child?.fills?.length > 0)
  //   // fillColor &&
  //   pixiObject.endFill();

  if (child.type === "RECTANGLE") {
    // pixiObject.position.set(child.x, child.y);
    pixiObject.zIndex = child.zIndex;
    // exampleRects.push(pixiObject);
    console.log(
      "🚀 ~ file: renderer.js:205 ~ renderPolygon ~ pixiObject",
      fillColor,
      child,
      pixiObject
    );
  }

  return pixiObject;
};
