const WProperties = {
  type: 'watermelon',
  mass: 2
};

const SProperties = {
  type: 'slice',
  mass: 1
};

const interactionsAnimation = [
  {
    event: 'onClick',
    effects: [
      {
        type: 'toggleAnimation',
        action: 'seesaw'
      }
    ]
  }
];

const dragConfig = {
  canDrag: true,
  maxDragRange: [200, 150]
};

const dropConfig = {
  droppable: true
};

const value = {
  id: '217:158',
  name: 'Landing Page -- Activity',
  visible: true,
  type: 'FRAME',
  rotation: 0,
  componentPropertyReferences: null,
  boundVariables: {},
  locked: false,
  exportSettings: [
    { format: 'PNG', suffix: '', contentsOnly: true, colorProfile: 'DOCUMENT', constraint: { type: 'SCALE', value: 1 } }
  ],
  blendMode: 'PASS_THROUGH',
  layoutAlign: 'INHERIT',
  layoutGrow: 0,
  constraints: { horizontal: 'MIN', vertical: 'MIN' },
  opacity: 1,
  absoluteBoundingBox: { x: 0, y: 0, width: 360, height: 720 },
  absoluteRenderBounds: { x: 0, y: 0, width: 360, height: 720 },
  effects: [],
  relativeTransform: [
    [1, 0, 0],
    [0, 1, 0]
  ],
  absoluteTransform: [
    [1, 0, 0],
    [0, 1, 0]
  ],
  isMask: false,
  fills: [
    {
      type: 'GRADIENT_LINEAR',
      visible: true,
      opacity: 1,
      blendMode: 'NORMAL',
      gradientStops: [
        { color: { r: 1, g: 1, b: 1, a: 1 }, position: 0 },
        { color: { r: 1, g: 1, b: 1, a: 1 }, position: 1 }
      ],
      gradientTransform: [
        [6.123234262925839e-17, 1, 0],
        [-1, 6.123234262925839e-17, 1]
      ]
    }
  ],
  fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L360 0L360 720L0 720L0 0Z' }],
  strokes: [],
  strokeWeight: 1,
  strokeCap: 'NONE',
  strokeJoin: 'MITER',
  strokeGeometry: [],
  strokeAlign: 'INSIDE',
  children: [
    // seesaw triangle
    {
      id: '217:182',
      name: 'Polygon 7',
      visible: true,
      type: 'POLYGON',
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: 'PASS_THROUGH',
      layoutAlign: 'INHERIT',
      layoutGrow: 0,
      constraints: { horizontal: 'MIN', vertical: 'MIN' },
      opacity: 1,
      absoluteBoundingBox: { x: 159, y: 296, width: 43, height: 64 },
      absoluteRenderBounds: {
        x: 163.71868896484375,
        y: 303.0603942871094,
        width: 33.5626220703125,
        height: 40.939605712890625
      },
      effects: [],
      relativeTransform: [
        [1, 0, 159],
        [0, 1, 296]
      ],
      absoluteTransform: [
        [1, 0, 159],
        [0, 1, 296]
      ],
      isMask: false,
      fills: [
        {
          type: 'SOLID',
          visible: true,
          opacity: 1,
          blendMode: 'NORMAL',
          color: { r: 0.30980393290519714, g: 0.30980393290519714, b: 0.30980393290519714 },
          boundVariables: {}
        }
      ],
      fillGeometry: [
        {
          windingRule: 'NONZERO',
          data: 'M17.7707 9.61377C19.0914 6.20925 23.9086 6.20925 25.2293 9.61378L38.0068 42.5534C39.0237 45.1751 37.0895 48 34.2775 48L8.72248 48C5.91048 48 3.97627 45.1751 4.99323 42.5534L17.7707 9.61377Z'
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: []
    },
    // seesaw line
    {
      properties: {
        type: 'seeSawLine'
      },
      id: '217:184',
      name: 'Pan with handle',
      visible: true,
      type: 'FRAME',
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: 'PASS_THROUGH',
      layoutAlign: 'INHERIT',
      layoutGrow: 0,
      constraints: { horizontal: 'MIN', vertical: 'MIN' },
      opacity: 1,
      absoluteBoundingBox: { x: 27, y: 289, width: 306.40032958984375, height: 14.663330078125 },
      absoluteRenderBounds: { x: 27, y: 289, width: 306.40032958984375, height: 14.663330078125 },
      effects: [],
      relativeTransform: [
        [1, 0, 27],
        [0, 1, 289]
      ],
      absoluteTransform: [
        [1, 0, 27],
        [0, 1, 289]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L306.4 0L306.4 14.6633L0 14.6633L0 0Z' }],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: [
        {
          id: '217:185',
          name: 'Rectangle 146',
          visible: true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 30, y: 299.0016784667969, width: 300, height: 4 },
          absoluteRenderBounds: { x: 30, y: 299.0016784667969, width: 300, height: 4 },
          effects: [],
          relativeTransform: [
            [1, 0, 3],
            [0, 1, 10.001666069030762]
          ],
          absoluteTransform: [
            [1, 0, 30],
            [0, 1, 299.0016784667969]
          ],
          isMask: false,
          fills: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: { r: 0.19607843458652496, g: 0.19607843458652496, b: 0.19607843458652496 },
              boundVariables: {}
            }
          ],
          fillGeometry: [
            { windingRule: 'NONZERO', data: 'M0 0L300 0L300 0C300 2.20914 298.209 4 296 4L4 4C1.79086 4 0 2.20914 0 0L0 0Z' }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerSmoothing: 0,
          children: []
        },
        {
          id: '217:186',
          name: 'Rectangle 147',
          visible: true,
          type: 'RECTANGLE',
          rotation: 16.010123644938336,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 27, y: 289, width: 7.735740661621094, height: 14.663330078125 },
          absoluteRenderBounds: { x: 27, y: 289, width: 7.735740661621094, height: 13.716278076171875 },
          effects: [],
          relativeTransform: [
            [0.9612129926681519, 0.2758072018623352, 0],
            [-0.2758072018623352, 0.9612129926681519, 1.1032288074493408]
          ],
          absoluteTransform: [
            [0.9612129926681519, 0.2758072018623352, 27],
            [-0.2758072018623352, 0.9612129926681519, 290.1032409667969]
          ],
          isMask: false,
          fills: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: { r: 0.19607843458652496, g: 0.19607843458652496, b: 0.19607843458652496 },
              boundVariables: {}
            }
          ],
          fillGeometry: [
            { windingRule: 'NONZERO', data: 'M0 0L4 0L4 14.1073L4 14.1073C1.79086 14.1073 0 12.3164 0 10.1073L0 0Z' }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerSmoothing: 0,
          children: []
        },
        {
          id: '217:187',
          name: 'Rectangle 150',
          visible: true,
          type: 'RECTANGLE',
          rotation: 16.010123644938336,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 254.326171875, y: 291.6171875, width: 6.409881591796875, height: 10.042572021484375 },
          absoluteRenderBounds: { x: 254.326171875, y: 291.6171875, width: 6.409881591796875, height: 9.09552001953125 },
          effects: [],
          relativeTransform: [
            [0.9612129926681519, 0.2758072018623352, 227.326171875],
            [-0.2758072018623352, 0.9612129926681519, 3.720416307449341]
          ],
          absoluteTransform: [
            [0.9612129926681519, 0.2758072018623352, 254.326171875],
            [-0.2758072018623352, 0.9612129926681519, 292.7204284667969]
          ],
          isMask: false,
          fills: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: { r: 0.19607843458652496, g: 0.19607843458652496, b: 0.19607843458652496 },
              boundVariables: {}
            }
          ],
          fillGeometry: [
            { windingRule: 'NONZERO', data: 'M0 0L4 0L4 9.30005L4 9.30005C1.79086 9.30005 0 7.50919 0 5.30005L0 0Z' }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerSmoothing: 0,
          children: []
        },
        {
          id: '217:188',
          name: 'Rectangle 148',
          visible: true,
          type: 'RECTANGLE',
          rotation: -19.12484205566617,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: {
            x: 324.9991455078125,
            y: 289.0016784667969,
            width: 8.40118408203125,
            height: 14.63916015625
          },
          absoluteRenderBounds: {
            x: 324.9991455078125,
            y: 289.0016784667969,
            width: 8.40118408203125,
            height: 13.550506591796875
          },
          effects: [],
          relativeTransform: [
            [0.9448069334030151, -0.327627569437027, 302.62109375],
            [0.327627569437027, 0.9448069334030151, 0.0016663074493408203]
          ],
          absoluteTransform: [
            [0.9448069334030151, -0.327627569437027, 329.62109375],
            [0.327627569437027, 0.9448069334030151, 289.0016784667969]
          ],
          isMask: false,
          fills: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: { r: 0.19607843458652496, g: 0.19607843458652496, b: 0.19607843458652496 },
              boundVariables: {}
            }
          ],
          fillGeometry: [
            { windingRule: 'NONZERO', data: 'M0 0L4 0L4 10.1073C4 12.3164 2.20914 14.1073 0 14.1073L0 14.1073L0 0Z' }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerSmoothing: 0,
          children: []
        },
        {
          id: '217:189',
          name: 'Rectangle 149',
          visible: true,
          type: 'RECTANGLE',
          rotation: -19.12484205566617,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: {
            x: 98.9997787475586,
            y: 292.0329284667969,
            width: 7.004058837890625,
            height: 10.6102294921875
          },
          absoluteRenderBounds: {
            x: 98.9997787475586,
            y: 292.0329284667969,
            width: 7.004058837890625,
            height: 9.521575927734375
          },
          effects: [],
          relativeTransform: [
            [0.9448069334030151, -0.327627569437027, 75.224609375],
            [0.327627569437027, 0.9448069334030151, 3.032916307449341]
          ],
          absoluteTransform: [
            [0.9448069334030151, -0.327627569437027, 102.224609375],
            [0.327627569437027, 0.9448069334030151, 292.0329284667969]
          ],
          isMask: false,
          fills: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: { r: 0.19607843458652496, g: 0.19607843458652496, b: 0.19607843458652496 },
              boundVariables: {}
            }
          ],
          fillGeometry: [
            { windingRule: 'NONZERO', data: 'M0 0L4 0L4 5.84297C4 8.05211 2.20914 9.84297 0 9.84297L0 9.84297L0 0Z' }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerSmoothing: 0,
          children: []
        }
      ],
      cornerSmoothing: 0,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
      clipsContent: false,
      layoutMode: 'NONE',
      layoutWrap: 'NO_WRAP',
      primaryAxisSizingMode: 'AUTO',
      counterAxisSizingMode: 'FIXED',
      primaryAxisAlignItems: 'MIN',
      counterAxisAlignItems: 'MIN',
      counterAxisAlignContent: 'AUTO',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      horizontalPadding: 0,
      verticalPadding: 0,
      itemSpacing: 0,
      counterAxisSpacing: 0,
      layoutPositioning: 'AUTO',
      itemReverseZIndex: false,
      strokesIncludedInLayout: false,
      layoutGrids: [],
      overflowDirection: 'NONE'
    },
    // seesaw left
    {
      dropConfig,
      properties: {
        type: 'seeSawLeft'
      },
      id: '243:150',
      name: 'Frame 410',
      visible: true,
      type: 'FRAME',
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: 'PASS_THROUGH',
      layoutAlign: 'INHERIT',
      layoutGrow: 0,
      constraints: { horizontal: 'MIN', vertical: 'MIN' },
      opacity: 1,
      absoluteBoundingBox: { x: 35, y: 237, width: 79, height: 62 },
      absoluteRenderBounds: { x: 35, y: 237, width: 79, height: 62 },
      effects: [],
      relativeTransform: [
        [1, 0, 35],
        [0, 1, 237]
      ],
      absoluteTransform: [
        [1, 0, 35],
        [0, 1, 237]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L79 0L79 62L0 62L0 0Z' }],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: [
        {
          dragConfig,
          properties: WProperties,
          id: '243:156',
          name: 'Rectangle 153',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 35, y: 225, width: 74, height: 74 },
          absoluteRenderBounds: { x: 35, y: 237, width: 74, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 0],
            [0, 1, -12]
          ],
          absoluteTransform: [
            [1, 0, 35],
            [0, 1, 225]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: '187d57dbdafb511550fa3e853842b6cdb16f3473',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/187d57dbdafb511550fa3e853842b6cdb16f3473'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L74 0L74 74L0 74L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:157',
          name: 'Rectangle 157',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 249, y: 236, width: 64, height: 64 },
          absoluteRenderBounds: { x: 249, y: 237, width: 64, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 0],
            [0, 1, -1]
          ],
          absoluteTransform: [
            [1, 0, 249],
            [0, 1, 236]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:158',
          name: 'Rectangle 158',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 256, y: 237, width: 64, height: 64 },
          absoluteRenderBounds: { x: 256, y: 237, width: 64, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 7],
            [0, 1, 0]
          ],
          absoluteTransform: [
            [1, 0, 256],
            [0, 1, 237]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:159',
          name: 'Rectangle 159',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 264, y: 237, width: 64, height: 64 },
          absoluteRenderBounds: { x: 264, y: 237, width: 64, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 15],
            [0, 1, 0]
          ],
          absoluteTransform: [
            [1, 0, 264],
            [0, 1, 237]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        }
      ],
      cornerSmoothing: 0,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
      clipsContent: true,
      layoutMode: 'NONE',
      layoutWrap: 'NO_WRAP',
      primaryAxisSizingMode: 'AUTO',
      counterAxisSizingMode: 'FIXED',
      primaryAxisAlignItems: 'MIN',
      counterAxisAlignItems: 'MIN',
      counterAxisAlignContent: 'AUTO',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      horizontalPadding: 0,
      verticalPadding: 0,
      itemSpacing: 0,
      counterAxisSpacing: 0,
      layoutPositioning: 'AUTO',
      itemReverseZIndex: false,
      strokesIncludedInLayout: false,
      layoutGrids: [],
      overflowDirection: 'NONE'
    },
    // seesaw right
    {
      dropConfig,
      properties: {
        type: 'seeSawRight'
      },
      id: '243:153',
      name: 'Frame 411',
      visible: true,
      type: 'FRAME',
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: 'PASS_THROUGH',
      layoutAlign: 'INHERIT',
      layoutGrow: 0,
      constraints: { horizontal: 'MIN', vertical: 'MIN' },
      opacity: 1,
      absoluteBoundingBox: { x: 249, y: 237, width: 79, height: 62 },
      absoluteRenderBounds: { x: 249, y: 237, width: 79, height: 62 },
      effects: [],
      relativeTransform: [
        [1, 0, 249],
        [0, 1, 237]
      ],
      absoluteTransform: [
        [1, 0, 249],
        [0, 1, 237]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L79 0L79 62L0 62L0 0Z' }],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: [
        {
          dragConfig,
          properties: WProperties,
          id: '243:156',
          name: 'Rectangle 153',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 35, y: 225, width: 74, height: 74 },
          absoluteRenderBounds: { x: 35, y: 237, width: 74, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 0],
            [0, 1, -12]
          ],
          absoluteTransform: [
            [1, 0, 35],
            [0, 1, 225]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: '187d57dbdafb511550fa3e853842b6cdb16f3473',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/187d57dbdafb511550fa3e853842b6cdb16f3473'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L74 0L74 74L0 74L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:157',
          name: 'Rectangle 157',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 249, y: 236, width: 64, height: 64 },
          absoluteRenderBounds: { x: 249, y: 237, width: 64, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 0],
            [0, 1, -1]
          ],
          absoluteTransform: [
            [1, 0, 249],
            [0, 1, 236]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:158',
          name: 'Rectangle 158',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 256, y: 237, width: 64, height: 64 },
          absoluteRenderBounds: { x: 256, y: 237, width: 64, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 7],
            [0, 1, 0]
          ],
          absoluteTransform: [
            [1, 0, 256],
            [0, 1, 237]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:159',
          name: 'Rectangle 159',
          visible: !true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 264, y: 237, width: 64, height: 64 },
          absoluteRenderBounds: { x: 264, y: 237, width: 64, height: 62 },
          effects: [],
          relativeTransform: [
            [1, 0, 15],
            [0, 1, 0]
          ],
          absoluteTransform: [
            [1, 0, 264],
            [0, 1, 237]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        }
      ],
      cornerSmoothing: 0,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
      clipsContent: true,
      layoutMode: 'NONE',
      layoutWrap: 'NO_WRAP',
      primaryAxisSizingMode: 'AUTO',
      counterAxisSizingMode: 'FIXED',
      primaryAxisAlignItems: 'MIN',
      counterAxisAlignItems: 'MIN',
      counterAxisAlignContent: 'AUTO',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      horizontalPadding: 0,
      verticalPadding: 0,
      itemSpacing: 0,
      counterAxisSpacing: 0,
      layoutPositioning: 'AUTO',
      itemReverseZIndex: false,
      strokesIncludedInLayout: false,
      layoutGrids: [],
      overflowDirection: 'NONE'
    },
    // seesaw items
    {
      dropConfig,
      id: '243:160',
      name: 'Frame 412',
      visible: true,
      type: 'FRAME',
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: 'PASS_THROUGH',
      layoutAlign: 'INHERIT',
      layoutGrow: 0,
      constraints: { horizontal: 'MIN', vertical: 'MIN' },
      opacity: 1,
      absoluteBoundingBox: { x: 48, y: 513, width: 277, height: 118 },
      absoluteRenderBounds: { x: 48, y: 513, width: 277, height: 118 },
      effects: [],
      relativeTransform: [
        [1, 0, 48],
        [0, 1, 513]
      ],
      absoluteTransform: [
        [1, 0, 48],
        [0, 1, 513]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L277 0L277 118L0 118L0 0Z' }],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: [
        {
          dragConfig,
          properties: WProperties,
          id: '243:161',
          name: 'Rectangle 153',
          visible: true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 43, y: 557, width: 74, height: 74 },
          absoluteRenderBounds: { x: 48, y: 557, width: 69, height: 74 },
          effects: [],
          relativeTransform: [
            [1, 0, -5],
            [0, 1, 44]
          ],
          absoluteTransform: [
            [1, 0, 43],
            [0, 1, 557]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: '187d57dbdafb511550fa3e853842b6cdb16f3473',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/187d57dbdafb511550fa3e853842b6cdb16f3473'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L74 0L74 74L0 74L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:163',
          name: 'Rectangle 157',
          visible: true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 117, y: 562, width: 64, height: 64 },
          absoluteRenderBounds: { x: 117, y: 562, width: 64, height: 64 },
          effects: [],
          relativeTransform: [
            [1, 0, 69],
            [0, 1, 49]
          ],
          absoluteTransform: [
            [1, 0, 117],
            [0, 1, 562]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:164',
          name: 'Rectangle 158',
          visible: true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 186, y: 562, width: 64, height: 64 },
          absoluteRenderBounds: { x: 186, y: 562, width: 64, height: 64 },
          effects: [],
          relativeTransform: [
            [1, 0, 138],
            [0, 1, 49]
          ],
          absoluteTransform: [
            [1, 0, 186],
            [0, 1, 562]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        },
        {
          dragConfig,
          properties: SProperties,
          id: '243:166',
          name: 'Rectangle 159',
          visible: true,
          type: 'RECTANGLE',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 255, y: 562, width: 64, height: 64 },
          absoluteRenderBounds: { x: 255, y: 562, width: 64, height: 64 },
          effects: [],
          relativeTransform: [
            [1, 0, 207],
            [0, 1, 49]
          ],
          absoluteTransform: [
            [1, 0, 255],
            [0, 1, 562]
          ],
          isMask: false,
          fills: [
            {
              type: 'IMAGE',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              scaleMode: 'FILL',
              imageTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              scalingFactor: 0.5,
              rotation: 0,
              filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
              imageHash: 'a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea',
              imageRef:
                'https://sets-gamify-assets.s3.ap-south-1.amazonaws.com/dev/figma/assets/a1dabcff6fda50dfd43a60dc6d78fa21ccd180ea'
            }
          ],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L64 0L64 64L0 64L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          cornerRadius: 0,
          cornerSmoothing: 0,
          children: []
        }
      ],
      cornerSmoothing: 0,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
      clipsContent: true,
      layoutMode: 'NONE',
      layoutWrap: 'NO_WRAP',
      primaryAxisSizingMode: 'AUTO',
      counterAxisSizingMode: 'FIXED',
      primaryAxisAlignItems: 'MIN',
      counterAxisAlignItems: 'MIN',
      counterAxisAlignContent: 'AUTO',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      horizontalPadding: 0,
      verticalPadding: 0,
      itemSpacing: 0,
      counterAxisSpacing: 0,
      layoutPositioning: 'AUTO',
      itemReverseZIndex: false,
      strokesIncludedInLayout: false,
      layoutGrids: [],
      overflowDirection: 'NONE'
    },
    // submit
    {
      id: '8:99',
      name: 'Rectangle 163',
      visible: true,
      type: 'RECTANGLE',
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: 'PASS_THROUGH',
      layoutAlign: 'INHERIT',
      layoutGrow: 0,
      constraints: {
        horizontal: 'MIN',
        vertical: 'MIN'
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 120,
        y: 478,
        width: 50,
        height: 50
      },
      absoluteRenderBounds: {
        x: 120,
        y: 478,
        width: 50,
        height: 50
      },
      effects: [],
      relativeTransform: [
        [1, 0, 10],
        [0, 1, 10]
      ],
      absoluteTransform: [
        [1, 0, 120],
        [0, 1, 478]
      ],
      isMask: false,
      fills: [
        {
          type: 'SOLID',
          visible: true,
          opacity: 1,
          blendMode: 'NORMAL',
          color: {
            r: 0.5921568870544434,
            g: 0.27843138575553894,
            b: 1
          },
          boundVariables: {}
        }
      ],
      fillGeometry: [
        {
          windingRule: 'NONZERO',
          data: 'M0 0L50 0L50 50L0 50L0 0Z'
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      cornerRadius: 0,
      cornerSmoothing: 0,
      interactions: interactionsAnimation,
      children: [
        {
          id: '72:276',
          name: '1',
          visible: true,
          type: 'TEXT',
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: {
            horizontal: 'MIN',
            vertical: 'MIN'
          },
          opacity: 1,
          absoluteBoundingBox: {
            x: 144,
            y: 244,
            width: 8,
            height: 24
          },
          absoluteRenderBounds: {
            x: 144.95199584960938,
            y: 248.17599487304688,
            width: 4.32000732421875,
            height: 11.824005126953125
          },
          effects: [],
          relativeTransform: [
            [1, 0, 24],
            [0, 1, 16]
          ],
          absoluteTransform: [
            [1, 0, 144],
            [0, 1, 244]
          ],
          isMask: false,
          fills: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: {
                r: 0,
                g: 0,
                b: 0
              },
              boundVariables: {}
            }
          ],
          fillGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M5.272 4.176L5.272 16L3.176 16L3.176 6.216C3.12267 6.26933 2.98133 6.34133 2.752 6.432C2.528 6.51733 2.256 6.6 1.936 6.68C1.62133 6.75467 1.29333 6.808 0.952 6.84L0.952 5.128C1.29333 5.08533 1.62133 5.01067 1.936 4.904C2.256 4.79733 2.53067 4.68 2.76 4.552C2.98933 4.41867 3.144 4.29333 3.224 4.176L5.272 4.176Z'
            }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'OUTSIDE',
          characters: 'Submit',
          fontName: {
            family: 'Epilogue',
            style: 'SemiBold'
          },
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: {
            unit: 'PERCENT',
            value: 0
          },
          lineHeight: {
            unit: 'PERCENT',
            value: 150
          },
          listSpacing: 0,
          paragraphIndent: 0,
          paragraphSpacing: 0,
          textAlignHorizontal: 'LEFT',
          textAlignVertical: 'TOP',
          textAutoResize: 'WIDTH_AND_HEIGHT',
          textCase: 'ORIGINAL',
          textDecoration: 'NONE',
          textStyleId: ''
        }
      ]
    }
  ],
  cornerSmoothing: 0,
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  clipsContent: true,
  layoutMode: 'NONE',
  layoutWrap: 'NO_WRAP',
  primaryAxisSizingMode: 'FIXED',
  counterAxisSizingMode: 'FIXED',
  primaryAxisAlignItems: 'MIN',
  counterAxisAlignItems: 'MIN',
  counterAxisAlignContent: 'AUTO',
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  horizontalPadding: 0,
  verticalPadding: 0,
  itemSpacing: 0,
  counterAxisSpacing: 0,
  layoutPositioning: 'AUTO',
  itemReverseZIndex: false,
  strokesIncludedInLayout: false,
  layoutGrids: [],
  overflowDirection: 'NONE'
};

export default value;
