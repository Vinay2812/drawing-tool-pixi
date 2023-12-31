const dragConfig = {
  canDrag: true,
  maxDragRange: [200, 150]
};

const dropConfig = {
  droppable: true
};

const interactionsDesc = [
  {
    event: 'onClick',
    effects: [
      {
        type: 'updateVariable',
        variable: 'currentCountOfBalloon',
        // valueType: 'constant',
        valueType: 'computeFunction',
        computeFunction: {
          type: 'decrement',
          arguments: {
            variable_1: 'currentCountOfBalloon'
          }
        }
      },
      {
        type: 'updateVariant',
        action: 'prev'
      }
    ]
  }
];
const interactionsInc = [
  {
    event: 'onClick',
    effects: [
      {
        type: 'updateVariable',
        variable: 'currentCountOfBalloon',
        // valueType: 'constant',
        valueType: 'computeFunction',
        computeFunction: {
          type: 'increment',
          arguments: {
            variable_1: 'currentCountOfBalloon'
          }
        }
      },
      {
        type: 'updateVariant',
        action: 'next'
      }
    ]
  }
];

const variants2 = [
  {
    id: '8:96',
    name: 'Rectangle 161',
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
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, -156]
    ],
    absoluteTransform: [
      [1, 0, 54],
      [0, 1, 130]
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
    children: []
  },
  {
    id: '8:96',
    name: 'Rectangle 161',
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
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, -104]
    ],
    absoluteTransform: [
      [1, 0, 54],
      [0, 1, 130]
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
    children: []
  },
  {
    id: '8:96',
    name: 'Rectangle 161',
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
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, -52]
    ],
    absoluteTransform: [
      [1, 0, 54],
      [0, 1, 130]
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
    children: []
  },
  {
    id: '8:95',
    name: 'Rectangle 160',
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
      x: 54,
      y: 478,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 478,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 0]
    ],
    absoluteTransform: [
      [1, 0, 54],
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
    children: []
  },
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
      [1, 0, 0],
      [0, 1, 104]
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
    interactions: interactionsDesc,
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
        characters: 'Prev',
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
];
const variants1 = [
  {
    id: '8:96',
    name: 'Rectangle 161',
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
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, -104]
    ],
    absoluteTransform: [
      [1, 0, 54],
      [0, 1, 130]
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
    children: []
  },
  {
    id: '8:96',
    name: 'Rectangle 161',
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
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, -52]
    ],
    absoluteTransform: [
      [1, 0, 54],
      [0, 1, 130]
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
    children: []
  },
  {
    id: '8:95',
    name: 'Rectangle 160',
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
      x: 54,
      y: 478,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 478,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 0]
    ],
    absoluteTransform: [
      [1, 0, 54],
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
    children: []
  },
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
      [1, 0, 0],
      [0, 1, 104]
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
    interactions: interactionsDesc,
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
        characters: 'Prev',
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
  },
  {
    id: '8:100',
    name: 'Rectangle 161',
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
      y: 530,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 120,
      y: 530,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 156]
    ],
    absoluteTransform: [
      [1, 0, 120],
      [0, 1, 530]
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

    interactions: interactionsInc,

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
        characters: 'Next',
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
];

const variants = [
  {
    id: '8:96',
    name: 'Rectangle 161',
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
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 330,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, -52]
    ],
    absoluteTransform: [
      [1, 0, 54],
      [0, 1, 130]
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
    children: []
  },
  {
    id: '8:95',
    name: 'Rectangle 160',
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
      x: 54,
      y: 478,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 54,
      y: 478,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 0]
    ],
    absoluteTransform: [
      [1, 0, 54],
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
    children: []
  },
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
      [1, 0, 0],
      [0, 1, 104]
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
    interactions: interactionsDesc,
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
        characters: 'Prev',
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
  },
  {
    id: '8:100',
    name: 'Rectangle 161',
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
      y: 530,
      width: 50,
      height: 50
    },
    absoluteRenderBounds: {
      x: 120,
      y: 530,
      width: 50,
      height: 50
    },
    effects: [],
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 156]
    ],
    absoluteTransform: [
      [1, 0, 120],
      [0, 1, 530]
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

    interactions: interactionsInc,

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
        characters: 'Next',
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
];

const value = {
  id: '8:92',
  name: 'Landing Page -- Activity',
  visible: true,
  type: 'FRAME',
  rotation: 0,
  componentPropertyReferences: null,
  boundVariables: {},
  locked: false,
  exportSettings: [
    {
      format: 'PNG',
      suffix: '',
      contentsOnly: true,
      colorProfile: 'DOCUMENT',
      constraint: {
        type: 'SCALE',
        value: 1
      }
    }
  ],
  blendMode: 'PASS_THROUGH',
  layoutAlign: 'INHERIT',
  layoutGrow: 0,
  constraints: {
    horizontal: 'MIN',
    vertical: 'MIN'
  },
  opacity: 1,
  absoluteBoundingBox: {
    x: 0,
    y: 0,
    width: 360,
    height: 720
  },
  absoluteRenderBounds: {
    x: 0,
    y: 0,
    width: 360,
    height: 720
  },
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
        {
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          position: 0
        },
        {
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          position: 1
        }
      ],
      gradientTransform: [
        [6.123234262925839e-17, 1, 0],
        [-1, 6.123234262925839e-17, 1]
      ]
    }
  ],
  fillGeometry: [
    {
      windingRule: 'NONZERO',
      data: 'M0 0L360 0L360 720L0 720L0 0Z'
    }
  ],
  strokes: [],
  strokeWeight: 1,
  strokeCap: 'NONE',
  strokeJoin: 'MITER',
  strokeGeometry: [],
  strokeAlign: 'INSIDE',
  children: [
    {
      id: '8:93',
      name: 'Frame 390',
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
      constraints: {
        horizontal: 'MIN',
        vertical: 'MIN'
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 54,
        y: 270,
        width: 248,
        height: 310
      },
      absoluteRenderBounds: {
        x: 54,
        y: 270,
        width: 248,
        height: 310
      },
      effects: [],
      relativeTransform: [
        [1, 0, 54],
        [0, 1, 270]
      ],
      absoluteTransform: [
        [1, 0, 54],
        [0, 1, 270]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [
        {
          windingRule: 'NONZERO',
          data: 'M0 0L248 0L248 310L0 310L0 0Z'
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: [
        {
          dropConfig,
          id: '8:97',
          name: 'Frame 388',
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
          constraints: {
            horizontal: 'MIN',
            vertical: 'MIN'
          },
          opacity: 1,
          absoluteBoundingBox: {
            x: 100,
            y: 374,
            width: 50,
            height: 206
          },
          absoluteRenderBounds: {
            x: 100,
            y: 374,
            width: 50,
            height: 206
          },
          effects: [],
          relativeTransform: [
            [1, 0, 6],
            [0, 1, 104]
          ],
          absoluteTransform: [
            [1, 0, 100],
            [0, 1, 374]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L50 0L50 206L0 206L0 0Z'
            }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              dragConfig,
              id: '8:98',
              name: 'Rectangle 160',
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
                x: 100,
                y: 374,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 100,
                y: 374,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              absoluteTransform: [
                [1, 0, 100],
                [0, 1, 374]
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
              children: []
            },
            {
              dragConfig,
              id: '8:99',
              name: 'Rectangle 162',
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
                y: 426,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 120,
                y: 426,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 52]
              ],
              absoluteTransform: [
                [1, 0, 120],
                [0, 1, 426]
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
              children: []
            },
            {
              dragConfig,
              id: '8:100',
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
                [1, 0, 0],
                [0, 1, 104]
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
              children: []
            },
            {
              dragConfig,
              id: '8:101',
              name: 'Rectangle 161',
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
                y: 530,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 120,
                y: 530,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 156]
              ],
              absoluteTransform: [
                [1, 0, 120],
                [0, 1, 530]
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
              children: []
            }
          ],
          cornerSmoothing: 0,
          minWidth: null,
          maxWidth: null,
          minHeight: null,
          maxHeight: null,
          clipsContent: false,
          layoutMode: 'VERTICAL',
          layoutWrap: 'NO_WRAP',
          primaryAxisSizingMode: 'AUTO',
          counterAxisSizingMode: 'AUTO',
          primaryAxisAlignItems: 'MIN',
          counterAxisAlignItems: 'MIN',
          counterAxisAlignContent: 'AUTO',
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          horizontalPadding: 0,
          verticalPadding: 0,
          itemSpacing: 2,
          counterAxisSpacing: 0,
          layoutPositioning: 'AUTO',
          itemReverseZIndex: false,
          strokesIncludedInLayout: false,
          layoutGrids: [],
          overflowDirection: 'NONE'
        },
        {
          dropConfig,
          id: '8:102',
          name: 'Frame 389',
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
          constraints: {
            horizontal: 'MIN',
            vertical: 'MIN'
          },
          opacity: 1,
          absoluteBoundingBox: {
            x: 186,
            y: 374,
            width: 50,
            height: 206
          },
          absoluteRenderBounds: {
            x: 186,
            y: 374,
            width: 50,
            height: 206
          },
          effects: [],
          relativeTransform: [
            [1, 0, 102],
            [0, 1, 104]
          ],
          absoluteTransform: [
            [1, 0, 186],
            [0, 1, 374]
          ],

          isMask: false,
          fills: [],
          fillGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L50 0L50 206L0 206L0 0Z'
            }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              dragConfig,
              id: '8:98',
              name: 'Rectangle 160',
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
              constraints: {
                horizontal: 'MIN',
                vertical: 'MIN'
              },
              opacity: 1,
              absoluteBoundingBox: {
                x: 100,
                y: 374,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 100,
                y: 374,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              absoluteTransform: [
                [1, 0, 100],
                [0, 1, 374]
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
              children: []
            },
            {
              dragConfig,
              id: '8:99',
              name: 'Rectangle 162',
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
              constraints: {
                horizontal: 'MIN',
                vertical: 'MIN'
              },
              opacity: 1,
              absoluteBoundingBox: {
                x: 120,
                y: 426,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 120,
                y: 426,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 52]
              ],
              absoluteTransform: [
                [1, 0, 120],
                [0, 1, 426]
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
              children: []
            },
            {
              dragConfig,
              id: '8:100',
              name: 'Rectangle 163',
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
                [1, 0, 0],
                [0, 1, 104]
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
              children: []
            },
            {
              dragConfig,
              id: '8:101',
              name: 'Rectangle 161',
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
              constraints: {
                horizontal: 'MIN',
                vertical: 'MIN'
              },
              opacity: 1,
              absoluteBoundingBox: {
                x: 120,
                y: 530,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 120,
                y: 530,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 156]
              ],
              absoluteTransform: [
                [1, 0, 120],
                [0, 1, 530]
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
              children: []
            }
          ],
          cornerSmoothing: 0,
          minWidth: null,
          maxWidth: null,
          minHeight: null,
          maxHeight: null,
          clipsContent: false,
          layoutMode: 'VERTICAL',
          layoutWrap: 'NO_WRAP',
          primaryAxisSizingMode: 'AUTO',
          counterAxisSizingMode: 'AUTO',
          primaryAxisAlignItems: 'MIN',
          counterAxisAlignItems: 'MIN',
          counterAxisAlignContent: 'AUTO',
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          horizontalPadding: 0,
          verticalPadding: 0,
          itemSpacing: 2,
          counterAxisSpacing: 0,
          layoutPositioning: 'AUTO',
          itemReverseZIndex: false,
          strokesIncludedInLayout: false,
          layoutGrids: [],
          overflowDirection: 'NONE'
        },
        {
          dropConfig,
          id: '8:109',
          name: 'Frame 390',
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
          constraints: {
            horizontal: 'MIN',
            vertical: 'MIN'
          },
          opacity: 1,
          absoluteBoundingBox: {
            x: 252,
            y: 374,
            width: 50,
            height: 206
          },
          absoluteRenderBounds: {
            x: 252,
            y: 374,
            width: 50,
            height: 206
          },
          effects: [],
          relativeTransform: [
            [1, 0, 198],
            [0, 1, 104]
          ],
          absoluteTransform: [
            [1, 0, 252],
            [0, 1, 374]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L50 0L50 206L0 206L0 0Z'
            }
          ],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              dragConfig,
              id: '8:98',
              name: 'Rectangle 160',
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
              constraints: {
                horizontal: 'MIN',
                vertical: 'MIN'
              },
              opacity: 1,
              absoluteBoundingBox: {
                x: 100,
                y: 374,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 100,
                y: 374,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              absoluteTransform: [
                [1, 0, 100],
                [0, 1, 374]
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
              children: []
            },
            {
              dragConfig,
              id: '8:99',
              name: 'Rectangle 162',
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
              constraints: {
                horizontal: 'MIN',
                vertical: 'MIN'
              },
              opacity: 1,
              absoluteBoundingBox: {
                x: 120,
                y: 426,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 120,
                y: 426,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 52]
              ],
              absoluteTransform: [
                [1, 0, 120],
                [0, 1, 426]
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
              children: []
            },
            {
              dragConfig,
              id: '8:100',
              name: 'Rectangle 163',
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
                [1, 0, 0],
                [0, 1, 104]
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
              children: []
            },
            {
              dragConfig,
              id: '8:101',
              name: 'Rectangle 161',
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
              constraints: {
                horizontal: 'MIN',
                vertical: 'MIN'
              },
              opacity: 1,
              absoluteBoundingBox: {
                x: 120,
                y: 530,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 120,
                y: 530,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 156]
              ],
              absoluteTransform: [
                [1, 0, 120],
                [0, 1, 530]
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
              children: []
            }
          ],
          cornerSmoothing: 0,
          minWidth: null,
          maxWidth: null,
          minHeight: null,
          maxHeight: null,
          clipsContent: false,
          layoutMode: 'VERTICAL',
          layoutWrap: 'NO_WRAP',
          primaryAxisSizingMode: 'AUTO',
          counterAxisSizingMode: 'AUTO',
          primaryAxisAlignItems: 'MIN',
          counterAxisAlignItems: 'MIN',
          counterAxisAlignContent: 'AUTO',
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          horizontalPadding: 0,
          verticalPadding: 0,
          itemSpacing: 2,
          counterAxisSpacing: 0,
          layoutPositioning: 'AUTO',
          itemReverseZIndex: false,
          strokesIncludedInLayout: false,
          layoutGrids: [],
          overflowDirection: 'NONE'
        }
      ],
      cornerSmoothing: 0,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
      clipsContent: false,
      layoutMode: 'HORIZONTAL',
      layoutWrap: 'NO_WRAP',
      primaryAxisSizingMode: 'AUTO',
      counterAxisSizingMode: 'AUTO',
      primaryAxisAlignItems: 'MIN',
      counterAxisAlignItems: 'MAX',
      counterAxisAlignContent: 'AUTO',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      horizontalPadding: 0,
      verticalPadding: 0,
      itemSpacing: 16,
      counterAxisSpacing: 0,
      layoutPositioning: 'AUTO',
      itemReverseZIndex: false,
      strokesIncludedInLayout: false,
      layoutGrids: [],
      overflowDirection: 'NONE'
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
  overflowDirection: 'VERTICAL'
};

export default value;
