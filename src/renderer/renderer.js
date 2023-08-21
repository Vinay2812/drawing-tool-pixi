import * as PIXI from 'pixi.js';
import get from 'lodash/get';
import set from 'lodash/set';
// import { getFilter } from "../utils/pixiJS";
import { AnimatedGIF } from '@pixi/gif';
import '@pixi/graphics-extras';
import { drawSVGPath } from '../utils/layout';

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
    // console.log('🚀 ~ file: renderer.js:35 ~ renderChild ~ parentContainer:', parentContainer, pixiObject);

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

const renderText = async (child, originalJson) => {
  if (!child.visible) return;
  // console.log('🚀 ~ file: renderer.js:84 ~ renderText ~ child:', child);

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

  let wrapperPixiObject = await renderPolygon(child, null, null, originalJson);
  if (child.id === '72:327') {
    wrapperPixiObject.beginFill(0x0000ff);
    wrapperPixiObject.drawRect(0, 0, child.absoluteBoundingBox.width, child.absoluteBoundingBox.height);
    wrapperPixiObject.endFill();
  }
  // console.log('🚀 ~ file: renderer.js:107 ~ renderText ~ wrapperPixiObject:', wrapperPixiObject);
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
    wordWrapWidth: child.absoluteBoundingBox.width,
    lineHeight: lineHeightValue,
    letterSpacing: letterSpacingValue
  });

  const pixiObject = new PIXI.Text(child.characters, style);
  pixiObject.zIndex = child.zIndex;
  wrapperPixiObject.addChild(pixiObject);

  return wrapperPixiObject;
};
const dataImg = {
  error: false,
  status: 200,
  meta: {
    images: {
      eae313a48883a46e7a2a60ee806e73a8052191be:
        'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1692576000&Signature=XA7pHiHYQQSgnFujfCbkbguyWQWG0ulygkumm--BI9Lk3eHEE6qTuxy5cw1Lb3ujW~3NoQZTgcw05lCQ0j1gpVzMtXe9KNaqzD3SArvRIIdHPSzAOIIHAETyO4oRg8Z2JzdfN1WEXEaLRe1ZteeXVJIiMosdvFyNtHRMN~DN5~974qgIseuzabBgYzCZ3cBzisBc5I-oLiZQIgc2q0SZD8wBqnAc-in4pAM4MKeYGkxK6-jMy2mov9foFmsBj239mUm2-Yw4OCo6wbpjx7MmZTvYfCkOfgmEpEU0eEZyfdoF8BzhB81ZLU7S64oTlrhzYOh6YqVPp8vdZrVdFSCu-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      f5a2100374216b3de45e3e31eef3feec572c14bf:
        'https://s3-alpha-sig.figma.com/img/f5a2/1003/74216b3de45e3e31eef3feec572c14bf?Expires=1692576000&Signature=IgV1R7fBLOCCAi7Kl8q29AY7cw1diF~ENQlaYqSWqIbDU3orNbyO29sN4cVhHXgVtWRo1hMoOQ3VTJ-nZ4ow-Lrqa-ktLF3ui82emLg63RIWmwn9XW25~4Q2SEgNO4jkYSlsqNgWhEy-xHS6G7CV5M9ubd8-3O4822RVT65b9wnuzLjCgKO8RYRpZvES7r68UlrVHpTLOBmOskAeW3dmCTeKNpry6roItjRP2j-3WTc5brvzfhheChn-SoPPMXj4UH2nZj7yf5ZipQGsGOIx5iMtdekDG9EwsHtl0Q-UvyjwQxhMf1EVwsJZWVuYL3ClDjp5nK9w30Qp1eXaR6Fyow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      b9c3b38b03c9243343af5a9e3b1bb9a8ff9e5a09:
        'https://s3-alpha-sig.figma.com/img/b9c3/b38b/03c9243343af5a9e3b1bb9a8ff9e5a09?Expires=1692576000&Signature=Cb6tULdMTSbY0lIxPTR0owJaZXpI9tfuRcjG~3JOnWdVgTVy1RB7nW1YFSReomgK5LhJCjdZ-2eejnBrMn6IFuzrDgox59ngl9ymkVjdXhtxsGnuPsaZSRSwswIBo1lAR6f9m5vXNQwUOeFu2ZVrNXUkyljRlVoGYxBvE1NkiynZberRHVVDPK4~fy20dL9RGM53-oVg0noCC23gyjdz1G9S5kVF4o2fsVIMTJinrg6cCkHIqNk~lAvcYfa1mu2HOJXMmcOcFzRvntpQF3oSDWjZ-VSAGcfEOYxMDpCsys-bgFLOsZW~RsToYR6E6GaaOQajJ2GXwJ3pYtzdir1lew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '71a20b288deef7b1f4806e592fbb7e601c69dac3':
        'https://s3-alpha-sig.figma.com/img/71a2/0b28/8deef7b1f4806e592fbb7e601c69dac3?Expires=1692576000&Signature=a07HbZD12fuNiUvEujDhHtIO8XnWctVdUM6yqUDYHJX3BVHODyoM9BUwx4P1ci1yYcywroQXab2HIzOOvrSFoczHSYvusbr0A1I84wRfuIGdiVdpiHmhnhyvHuzw2cHIwKFIn8LXblbKKcjiUWJvl9Y2ZAlSYVltYs~voMti9HnLPUzRHYBmHuhwQGFs2xupUFlWMqRpg6v2VokQUYgS1OxfrCNS4HrMeAPGMre-4NX3qi9PjJzuxKbTL27dP25a5gKqfrS4zDTDOn1EtxZu0FqPG~LwHNAPplB02Ke0Vx8QjjoMrMQSEvwnt9gvzC4P02wm9b~kxjTNZnFxMAnDjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '677bdcb70d07d093cbabd8111f0d7a65a4f5f9ef':
        'https://s3-alpha-sig.figma.com/img/677b/dcb7/0d07d093cbabd8111f0d7a65a4f5f9ef?Expires=1692576000&Signature=lgvlrkZmeGfk7GECQyQ3KL-LjhCx5OV5YnhipqCRJ3qpT9As91pUl~We4lQCWvRXyiq7eIF2FVRaHSykLHKor6~I6nMA3LxjO7Rw1q~pBfcKCcZb9hD~19WNQxhIxO9hGm17jhgE7qSjo4lTAzvQlWGfvF4NTRQZgiOpSma9hZ6Mjp4ORkWpVC80zavOQF3VS0Y3HDX~Er856HCSRcgw5dZL1~WPhNtpEUadJYl5onUfdAqvzieeF8haDc25GWQ8eg3QXIwplFhz8OxiLoPpDrXto28kqXfRhH7YAUiapQJSIISRU1KvqFui9VCYY8z0owqYE3~~bLU7ynWSlXqBzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '52f0dde50348895b47df937417fa075a3b675661':
        'https://s3-alpha-sig.figma.com/img/52f0/dde5/0348895b47df937417fa075a3b675661?Expires=1692576000&Signature=QoT4fxtL~ev2mOGbmXvjc98-iDKr3ReKt3vZit6XFXOibWpQwRIH14z~cHk9lJtIQLTW41M8fUvSxvvl0hYixOg7eXL9Cz3DN2PLXzj2MB5GEZjlT-Obbrce7Ppw-bsgKWCWUy33wwFhhk-Rsgff2nZfZhwGXYXCh9uAGZxVboeZOx4yjsV7mZ~DYu4eDx2CSk8yOB5iKAsq3oOT1kt7ZXH6KMBhO8TB9jCdno0vAODtpb4jTiNbewsGoeEL2Ic4tOCFB8iYccp2dRKXyscAoImRjSCf0YNci7LcVA6tX5bzOcJfa2JUPOrwgw~y6bBArEY6-zKuZPIHbNcGavGNhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '8298bcb5910feacae668828fd0e7fbff877baf5e':
        'https://s3-alpha-sig.figma.com/img/8298/bcb5/910feacae668828fd0e7fbff877baf5e?Expires=1692576000&Signature=kp2xIIDhiOVURlNYkTR4qaKRrbXrKzbHkkGSsNVDVDtTCO2BVz61B5blmANiJmdqJC6bI8N6UbK5TfZ-XMRzXoy4NEyWYgMknzMyFfLi57zwxC5n0cBxSZuyxCbsqVnW4XmF5kgcDmhRZshktmSTENwtJ2QXKgbc8h49KJAspt2QApLMlWI9McD7BaIsnqVk02Mbe1cewR92ZkRNdMZEOMG2S~~iXINLajQJPWQLtN7Cw9YY6b9B~wSpXF07SZBmJiBA6AjpToaItJoRJE-Jq5Vot5x3VTPI7fQz0QXsZzZPzMS437adR~g~1~Wco1doFh0NywNzg9lMbr0g9mht3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '73f232b70d771c1860f382422bf4176f36d8f736':
        'https://s3-alpha-sig.figma.com/img/73f2/32b7/0d771c1860f382422bf4176f36d8f736?Expires=1692576000&Signature=FX4CQKH1NTffFG35hYvDJXFgwTQyd9KcMQV-ZAPAsH-1vXBh9pgMV6d3WNBelsPYVrKO0iZ8K~50BsQIr8eG6j5Q1l6-HFqeGpbkWjzRL56KzfxBp9P9nLg7I7zufHRnleKRcGsojWXABkbZBTBG1nkvtuk59-F-iQ4r5F9az~6J5cs64UyspbOvQqwTctYx7DWHTXiH97aYdyjc3SFszyNX8SdKyXv-MI0S06rzCEV7GHUU2n0OGlWXrs7WimvPElJ1tV5ItUw-d0nRMSWK~YjsS2L1bUdErA9RB2oz8pX4lQqkdV~jBkJxOHXRpP9A1Hfh38InT82waThuJIq4Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '424641ac5e43cbabb094c2aeb907445e88285c08':
        'https://s3-alpha-sig.figma.com/img/4246/41ac/5e43cbabb094c2aeb907445e88285c08?Expires=1692576000&Signature=da~SBjEiVg~EmEIl1VtuX9N4jNGyuLbdgM8H06zd~N5WXIveXYnmVJ5ISssJznJ984gl5nZ2rm1jJW7czABosJjN8tykTenYQtgdf5T0WLFCSkczZMrNbbQ9pn2g1MoMGKqTkRXuABtR5icOPxIbd2DVTHWVNpfQXiHWkt4M8Rh6KOUJDvXveaAXmBp4KeXgDbZrycA~mtAdAf5a~CoEZXjU6be7xUJEiaLINg9j3XBTiyX2A98xKiwxPch13zVy2IkIwN1MiScObAnoPWeO3OFXnwub8dWfXyhDw8esEj4QfijZQRolrjTW135NFuLD~XrowyM0DbHwgbmo9rfKYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      eb87f2161fa7bcc55538de6500359a7afa0f4cd8:
        'https://s3-alpha-sig.figma.com/img/eb87/f216/1fa7bcc55538de6500359a7afa0f4cd8?Expires=1692576000&Signature=kX5nziXOulUwlXZQ8-3ftiyfBTanqJXm8zjQ~sEydCb57wGn6DvXSpjQ5VzgzMrBVpA8g1JOm8pWh8K-99M8pPFDQb0Et-WI9Mq1kVOREbZ6H6UICcuduk7V9b42mmdYsuDNHXuRvN9Sf34SMx1ppJAj7peKJWDtomJO0uj0oKP6NVauR-hsO0cWVIKurE6ULZuyGYuiORyQMB-gOZZjDPz83YLEcX8~Llziwhj9wJccjYgwxecpM8mBBu7os3rSbAfb7Kyf3BuyRvJqssudvm5vmc1GoaW17sn4MHD0CyoR~oBnZKTBc7Tv40YO6SP499x5q7xKnZYlTJ2ZeOc5zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '03d858945a14d7fbae9835d3b94b4bb0e838736e':
        'https://s3-alpha-sig.figma.com/img/03d8/5894/5a14d7fbae9835d3b94b4bb0e838736e?Expires=1692576000&Signature=Lt9~9cgc33lSt~QYUUOuqotjl1ynSZqnEIwHwjWif07HOwxtO1Kpge4VJh-zEbkk5Fw0u6grCN53WItfOVM81EpbGv65HdMFfrTSp0ZsihiAjllFdL~BZi-doxaQOMX4VE29XaY69~THnqo7Fn6bZm6TI0o5Dg5NVy767kjyAe5RrfsviwGKqyvoAKAdhQxQ6ad7jfbSLdz2ChpnLAHrDsbPYJW7Cdui8CPh91Dq3KsD5DqVYlYuKLusXMzrE6ef2lkkNv2JYKg-ouA~JowJvOjaIWrMKd3-wLseq5O-BRrZPrVnor2a6haQdbQo4c1YeJnDlm4Vky440Kqer5Vd4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      d3402a838835a6e87b3bc4124a988a09d3559fe0:
        'https://s3-alpha-sig.figma.com/img/d340/2a83/8835a6e87b3bc4124a988a09d3559fe0?Expires=1692576000&Signature=VquYunIaQyUrS8Km2STBJREuglidJSPMkARDXe68SF1ptw8C5yZbaQLLIaBb7VI~pjUq6Y6G6i7~f3OlvjYwm33MxijWMRtIEbcSnngZCYPjztIz12Xdsfj3DBAmUw5g8id7VHPlwdNYzsi~IXuTEh6gLgtnS4jzwrbZD1VsUyIhZVfH7voJVq9QbM-iKOfRezPU5FQJHr-XjA~vkQfX-SOniTEx090PkKJULg1myUkdREIFPk6wW4wbf5eox0~7Q0SE~75AwCikLWiW-vvuOv-P8vVMOP8EKe4V6hqBym0kGTQ-HIPwZAQyynmhVE0TsxZjQzf0RO2bCVW~XV8v4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '2a05e83e9cc4a790233c2c208ca0ad379cf64d50':
        'https://s3-alpha-sig.figma.com/img/2a05/e83e/9cc4a790233c2c208ca0ad379cf64d50?Expires=1692576000&Signature=Bysy4CILpkOZ8rSVwNqZvPIJhZ2XNkFldtThb3qUdZHZUNKk6Cdxhtp6nwE-AER24XqxEdjGxnuA5RgCpnwsSMmc0AcW1Lwkey6Lo8pifhXnpAIIj4mtnidOtxM55NP3lVt~-Rs8SioFg4lVIOAIxFcSapCK954ZnPHkrabmdSEfWOzCol-DNwi6G7cHHDueA9WyPl-3b0yD2NX2CTcMu-5ekr0MCay~C7HbygSNJX8OdOxZ4ZpEhycSb6o-DQk1meC~cenZSLMoGUvV~2VXgrt~s1SASlnK7boctKRjX4qnYK8JpX8XTH3T-f-2oZt9-dn56DesGgQ8GaPZh8~3pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      '11ad928f675435c65ecb0238a07a0ed360aeb9c3':
        'https://s3-alpha-sig.figma.com/img/11ad/928f/675435c65ecb0238a07a0ed360aeb9c3?Expires=1692576000&Signature=neDCw9PdjW~kH-CS8v3MsyebkFqRxw-k~HBjaVn3cwV5~uI9jgayqXvcGzsKXFDscIzn1WTIRhnDmgYZ~nmyP2kjngNT4tvBspp8Yag867~heDr9ArJDlH7mhK95Dsy0zAr5~D2Q8JjckQJC9ROaFsQurfXw1rqekgV~R4eqwIVY1gYVhdXhOVXRv6-WoHWpWDT6txNkQSwQylirEcuul7~n7-dMudgHYKZ786B8h~Ph8P8omXlzWClIa~NaB945ccRYiipsnVxlXGQPyAOpSuEJifhiqKa0fiOzNN4r21y5UiOvKWMk9~-sKwOVTT9xXJZj0vTQyVxafr3ZhR6u5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }
  },
  i18n: null
};

const renderPolygon = async (child, screenWidth, screenHeight, originalJson, path = [], setFigmaJson, app) => {
  if (!child.visible) return;
  // if (child.id === '72:325') {
  //   console.log('🚀 ~ file: renderer.js:93 ~ renderPolygon ~ child:', get(child, 'fills'));
  // }
  let pixiObject = new PIXI.Graphics();

  if (child.dropConfig && child.dropConfig.droppable) {
    pixiObject.lineStyle(1, 0x808080, 1, 0.5, true);
  }

  pixiObject.zIndex = child.zIndex;
  if (child.clipsContent) {
    let mask = new PIXI.Graphics();
    mask.beginFill(0x000000);
    mask = drawShape(child, mask);
    // mask.position.set(child.position.x, child.position.y);
    mask.endFill();
    pixiObject.addChild(mask);
    pixiObject.mask = mask;
  }
  // pixiObject.position.set(child.position.x, child.position.y);
  let fillColor = child?.fills?.length > 0 && child.fills[0].visible && child.fills[0].color;
  // if (child.id === "71:341") {
  // 	console.log(
  // 		"🚀 ~ file: renderer.js:109 ~ renderPolygon ~ fillColor",
  // 		fillColor,
  // 		child
  // 	);
  // 	fillColor = 0x0000ff;
  // 	// pixiObject.width = 236;
  // 	// pixiObject.height = 316;
  // }
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
      }
      // else if (fill.type === "IMAGE") {
      // 	const gifRef = fill.gifRef;

      // 	const imageUrl = dataImg.meta.images[gifRef || fill.imageHash];
      // 	const imageTexture = PIXI.Texture.from(imageUrl); // Load the texture

      // 	if (gifRef) {
      // 		imageSprite = await fetch(imageUrl)
      // 			.then((res) => res.arrayBuffer())
      // 			.then(AnimatedGIF.fromBuffer)
      // 			.then((image) => pixiChild.addChild(image));
      // 	} else imageSprite = new PIXI.Sprite(imageTexture);

      // 	imageSprite.blendMode = PIXI.BLEND_MODES.NORMAL; // Adjust blend mode if needed
      // 	const rotation = fill.rotation;

      // 	imageSprite.rotation = ((fill.rotation || 0) * Math.PI) / 180;
      // 	imageSprite.anchor.set(0.5, 0.5);

      // 	const isTilt = [90, 270, -90].includes(rotation);

      // 	if (["FIT"].includes(fill.scaleMode)) {
      // 		const scaleX =
      // 			child.size.width /
      // 			(isTilt ? imageSprite.height : imageSprite.width);
      // 		const scaleY =
      // 			child.size.height /
      // 			(isTilt ? imageSprite.width : imageSprite.height);

      // 		const scale = Math.min(scaleX, scaleY);
      // 		imageSprite.scale.set(scale);

      // 		imageSprite.position.set(
      // 			child.size.width / 2,
      // 			child.size.height / 2
      // 		);
      // 	} else if (["FILL", "TILE", "CROP"].includes(fill.scaleMode)) {
      // 		const imageAspectRatio = isTilt
      // 			? imageSprite.height / imageSprite.width
      // 			: imageSprite.width / imageSprite.height;

      // 		// Calculate the aspect ratio of the polygon
      // 		const polygonAspectRatio =
      // 			child.size.width / child.size.height;

      // 		if (imageAspectRatio > polygonAspectRatio) {
      // 			imageSprite.height = child.size.height;
      // 			imageSprite.width =
      // 				child.size.height * imageAspectRatio;
      // 		} else {
      // 			if (isTilt) {
      // 				imageSprite.width =
      // 					child.size.width / imageAspectRatio;
      // 				imageSprite.height = child.size.width;
      // 			} else {
      // 				imageSprite.width = child.size.width;
      // 				imageSprite.height =
      // 					child.size.width / imageAspectRatio;
      // 			}
      // 		}
      // 		imageSprite.position.set(
      // 			child.size.width / 2,
      // 			child.size.height / 2
      // 		);
      // 	}

      // 	pixiChild.addChild(imageSprite);
      // }

      // pixiChild = drawShape(child, pixiChild);

      if (child.relativeTransform) {
        const { x, y } = child.relativeTransform;
        pixiChild.pivot.set(x, y);
      }

      if (fill.opacity !== undefined) {
        pixiChild.alpha = fill.opacity;
      }

      pixiChild.endFill();

      // MASK SECTION
      let maskContainer = new PIXI.Container();
      if (imageSprite) {
        let mask = new PIXI.Graphics();
        mask.position.set(child.position.x, child.position.y);

        mask.beginFill(0xffffff);
        mask = drawShape(child, mask);
        if (child.relativeTransform) {
          const { x, y } = child.relativeTransform;
          mask.pivot.set(x, y);
        }
        mask.endFill();
        maskContainer.mask = mask;
        maskContainer.addChild(mask);
      }
      // Add the mask as a child, so that the mask is positioned relative to its parent
      maskContainer.addChild(pixiChild);
      // Offset by the window's frame width
      pixiObject.addChild(maskContainer);
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
    if (child.type !== 'ELLIPSE') {
      pixiObject.drawPolygon(child.fillGeometry[0].data);
    }
  }
  if (child.type === 'GROUP') {
    pixiObject.drawRect(child.relativeTransform.x, child.relativeTransform.y, child.size.width, child.size.height);
  }

  if (child.strokes?.length > 0) {
    const visibleStrokes = child.strokes.filter(stroke => stroke.visible !== false);
    visibleStrokes.forEach(stroke => {
      // pixiObject.lineStyle(strokeWeight, stroke.color, stroke.opacity, 0.5, true);
      // // pixiObject.lineTextureStyle({
      // //     color: stroke.color,
      // //     width: strokeWeight,
      // //     alpha: stroke.opacity,
      // //     alignment: 0.5,
      // //     cap: strokeCap,
      // //     join: strokeJoin,
      // // });
      // pixiObject.lineCap = strokeCap;
      // pixiObject.lineJoin = strokeJoin;
      // pixiObject.miterLimit = 1;
      // pixiObject.strokeAlignment = strokeAlign;
      // pixiObject.lineTo(child.size.width, child.size.height);
      // if(strokeCap === "CIRCLE_FILLED") {
      //     pixiObject.moveTo(child.relativeTransform.x, child.relativeTransform.y);
      //     pixiObject.arc(
      //         child.relativeTransform.x,
      //         child.relativeTransform.y,
      //         0,
      //         0,
      //         Math.PI * 2,
      //         false

      //     )
      //     // pixiObject.drawPolygon(child.size.width / 2, child.size.height / 2, 4);
      // }
      let pixiChild = new PIXI.Graphics();
      pixiChild.zIndex = child.zIndex + 1;
      // pixiChild.pivot.set(
      // 	child.relativeTransform.x,
      // 	child.relativeTransform.y
      // );
      // pixiChild.pivot.set(
      //     0,
      //     0
      // );
      pixiChild.beginFill(String(stroke?.color).length === 6 ? `0x${stroke?.color}` : stroke?.color);
      drawSVGPath(pixiChild, child.strokeGeometry[0].data);
      // if (child.type === "ELLIPSE") {
      // 	pixiChild.drawTorus(
      // 		child.size.width / 2,
      // 		child.size.height / 2,
      // 		child.size.width / 2 - strokeWeight,
      // 		child.size.width / 2,
      // 		0,
      // 		Math.PI * 2
      // 	);
      // } else {
      // 	pixiChild.drawPolygon(child.strokeGeometry[0].data);
      // }
      pixiChild.endFill();
      // pixiChild.rotation =  - child.relativeTransform?.rotation;
      pixiChild.position.set(0, 0);
      pixiObject.addChild(pixiChild);
      // console.log('🚀 ~ file: renderer.js:262 ~ drawShape ~ child:', child, visibleStrokes, pixiChild);
      // if (child.id === "6:156") {
      // }
    });
    // pixiObject.closePath();
  }

  if (child.arcData) {
    const centerX = child.size.width / 2;
    const centerY = child.size.height / 2;
    const startingAngle = child.arcData.startingAngle;
    const endingAngle = child.arcData.endingAngle;
    const innerRadius = child.arcData.innerRadius;
    pixiObject.moveTo(centerX, centerY);
    pixiObject.arc(centerX, centerY, innerRadius, startingAngle, endingAngle, false);
    pixiObject.arc(centerX, centerY, child.size.width / 2, endingAngle, startingAngle, true);
    pixiObject.closePath();
    pixiObject.height = child.absoluteBoundingBox.height;
    pixiObject.width = child.absoluteBoundingBox.width;
  }

  return pixiObject;
};
