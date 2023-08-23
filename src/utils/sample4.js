const ladder = {
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
  variables: [
    {
      name: 'dragControlPosition',
      type: 'LOCAL',
      default: 483
    },
    {
      name: 'lastRowHeight',
      type: 'LOCAL',
      defaultValue: 50
    },
    {
      name: 'lastRowYPosition',
      type: 'LOCAL',
      default: 260
    }
  ],
  computeFunctions: [
    {
      name: 'convert_drag_position_to_height',
      output: '580 - (input + 47)',
      params: ['input']
    },
    {
      name: 'modify_tile_parent_y_position',
      output: '580 - height',
      params: ['height']
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
          id: '8:94',
          name: 'Frame 387',
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
            y: 478,
            width: 50,
            height: 102
          },
          absoluteRenderBounds: {
            x: 54,
            y: 478,
            width: 50,
            height: 102
          },
          effects: [],
          relativeTransform: [
            [1, 0, 0],
            [0, 1, 208]
          ],
          absoluteTransform: [
            [1, 0, 54],
            [0, 1, 478]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L50 0L50 102L0 102L0 0Z'
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
                y: 530,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 54,
                y: 530,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 52]
              ],
              absoluteTransform: [
                [1, 0, 54],
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
            x: 120,
            y: 374,
            width: 50,
            height: 206
          },
          absoluteRenderBounds: {
            x: 120,
            y: 374,
            width: 50,
            height: 206
          },
          effects: [],
          relativeTransform: [
            [1, 0, 66],
            [0, 1, 104]
          ],
          absoluteTransform: [
            [1, 0, 120],
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
                x: 120,
                y: 374,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 120,
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
                [1, 0, 120],
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
            y: 270,
            width: 50,
            height: 310
          },
          absoluteRenderBounds: {
            x: 186,
            y: 270,
            width: 50,
            height: 310
          },
          effects: [],
          relativeTransform: [
            [1, 0, 132],
            [0, 1, 0]
          ],
          absoluteTransform: [
            [1, 0, 186],
            [0, 1, 270]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L50 0L50 310L0 310L0 0Z'
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
              id: '8:103',
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
                x: 186,
                y: 270,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 186,
                y: 270,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              absoluteTransform: [
                [1, 0, 186],
                [0, 1, 270]
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
              id: '8:104',
              name: 'Rectangle 164',
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
                x: 186,
                y: 322,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 186,
                y: 322,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 52]
              ],
              absoluteTransform: [
                [1, 0, 186],
                [0, 1, 322]
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
              id: '8:105',
              name: 'Rectangle 165',
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
                x: 186,
                y: 374,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 186,
                y: 374,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 104]
              ],
              absoluteTransform: [
                [1, 0, 186],
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
              id: '8:106',
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
                x: 186,
                y: 426,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 186,
                y: 426,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 156]
              ],
              absoluteTransform: [
                [1, 0, 186],
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
              id: '8:107',
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
                x: 186,
                y: 478,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 186,
                y: 478,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 208]
              ],
              absoluteTransform: [
                [1, 0, 186],
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
              id: '8:108',
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
                x: 186,
                y: 530,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 186,
                y: 530,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 260]
              ],
              absoluteTransform: [
                [1, 0, 186],
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
            y: 530,
            width: 50,
            height: 50
          },
          absoluteRenderBounds: {
            x: 252,
            y: 530,
            width: 50,
            height: 50
          },

          modifiers: [
            {
              type: 'AUTO_TILE'
            }
          ],
          variableLink: [
            {
              variableName: 'lastRowHeight',
              property: 'height'
            },
            {
              variableName: 'lastRowYPosition',
              property: 'y'
            }
          ],
          effects: [],
          relativeTransform: [
            [1, 0, 198],
            [0, 1, 260]
          ],
          absoluteTransform: [
            [1, 0, 252],
            [0, 1, 530]
          ],
          isMask: false,
          fills: [],
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
          children: [
            {
              id: '8:117',
              name: 'Rectangle 164',
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
                x: 252,
                y: 530,
                width: 50,
                height: 50
              },
              absoluteRenderBounds: {
                x: 252,
                y: 530,
                width: 50,
                height: 50
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              absoluteTransform: [
                [1, 0, 252],
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
          primaryAxisSizingMode: 'FIXED',
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
    },
    {
      id: '8:110',
      name: 'Frame 391',
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
      modifiers: [
        {
          type: 'DRAGGABLE',
          config: {
            axis: 90,
            stepSize: 52,
            dragRange: [483, 90]
          }
        }
      ],
      interactions: [
        {
          event: 'ON_DRAG',
          effects: [
            {
              type: 'UPDATE_VARIABLE',
              valueType: 'LAYER_PROPERTY',
              config: {
                variableName: 'dragControlPosition',
                value: 'y'
              }
            },
            {
              type: 'UPDATE_VARIABLE',
              valueType: 'COMPUTE_FUNCTION',
              config: {
                variableName: 'lastRowHeight',
                computeFunction: {
                  type: 'convert_drag_position_to_height',
                  params: {
                    input: 'dragControlPosition'
                  }
                }
              }
            },
            {
              type: 'UPDATE_VARIABLE',
              valueType: 'COMPUTE_FUNCTION',
              config: {
                variableName: 'lastRowYPosition',
                computeFunction: {
                  type: 'modify_tile_parent_y_position',
                  params: {
                    height: 'lastRowHeight'
                  }
                }
              }
            }
          ]
        }
      ],
      opacity: 1,
      absoluteBoundingBox: {
        x: 252,
        y: 478,
        width: 50,
        height: 40
      },
      absoluteRenderBounds: {
        x: 252,
        y: 478,
        width: 50,
        height: 40
      },
      effects: [],
      relativeTransform: [
        [1, 0, 252],
        [0, 1, 478]
      ],
      absoluteTransform: [
        [1, 0, 252],
        [0, 1, 478]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [
        {
          windingRule: 'NONZERO',
          data: 'M0 0L50 0L50 40L0 40L0 0Z'
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
          id: '8:111',
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
            x: 252,
            y: 478,
            width: 50,
            height: 50
          },
          absoluteRenderBounds: null,
          effects: [],
          relativeTransform: [
            [1, 0, 0],
            [0, 1, 0]
          ],
          absoluteTransform: [
            [1, 0, 252],
            [0, 1, 478]
          ],
          isMask: false,
          fills: [
            {
              type: 'SOLID',
              visible: false,
              opacity: 1,
              blendMode: 'NORMAL',
              color: {
                r: 0.8509804010391235,
                g: 0.8509804010391235,
                b: 0.8509804010391235
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
          id: '8:112',
          name: 'Frame 392',
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
            x: 266,
            y: 488,
            width: 22,
            height: 30
          },
          absoluteRenderBounds: {
            x: 266,
            y: 488,
            width: 22,
            height: 30
          },
          effects: [],
          relativeTransform: [
            [1, 0, 14],
            [0, 1, 10]
          ],
          absoluteTransform: [
            [1, 0, 266],
            [0, 1, 488]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L22 0L22 30L0 30L0 0Z'
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
              id: '8:113',
              name: 'Polygon 8',
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
              constraints: {
                horizontal: 'MIN',
                vertical: 'MIN'
              },
              opacity: 1,
              absoluteBoundingBox: {
                x: 266,
                y: 488,
                width: 22,
                height: 13
              },
              absoluteRenderBounds: {
                x: 268.84686279296875,
                y: 488.430908203125,
                width: 16.3062744140625,
                height: 9.319091796875
              },
              effects: [],
              relativeTransform: [
                [1, 0, 0],
                [0, 1, 0]
              ],
              absoluteTransform: [
                [1, 0, 266],
                [0, 1, 488]
              ],
              isMask: false,
              fills: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: {
                    r: 0.15294118225574493,
                    g: 0.05882352963089943,
                    b: 0.21176470816135406
                  },
                  boundVariables: {}
                }
              ],
              fillGeometry: [
                {
                  windingRule: 'NONZERO',
                  data: 'M10.2847 0.732062C10.6771 0.330533 11.3229 0.330534 11.7153 0.732063L18.8664 8.05115C19.4851 8.68439 19.0365 9.75 18.1511 9.75L3.84886 9.75C2.96354 9.75 2.51488 8.68439 3.13359 8.05115L10.2847 0.732062Z'
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
            {
              id: '8:114',
              name: 'Polygon 9',
              visible: true,
              type: 'POLYGON',
              rotation: -180,
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
                x: 266,
                y: 505,
                width: 22,
                height: 13
              },
              absoluteRenderBounds: {
                x: 268.84686279296875,
                y: 508.25,
                width: 16.3062744140625,
                height: 9.319091796875
              },
              effects: [],
              relativeTransform: [
                [-1, -1.2246468525851679e-16, 22],
                [1.2246468525851679e-16, -1, 30]
              ],
              absoluteTransform: [
                [-1, -1.2246468525851679e-16, 288],
                [1.2246468525851679e-16, -1, 518]
              ],
              isMask: false,
              fills: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: {
                    r: 0.15294118225574493,
                    g: 0.05882352963089943,
                    b: 0.21176470816135406
                  },
                  boundVariables: {}
                }
              ],
              fillGeometry: [
                {
                  windingRule: 'NONZERO',
                  data: 'M10.2847 0.732062C10.6771 0.330533 11.3229 0.330534 11.7153 0.732063L18.8664 8.05115C19.4851 8.68439 19.0365 9.75 18.1511 9.75L3.84886 9.75C2.96354 9.75 2.51488 8.68439 3.13359 8.05115L10.2847 0.732062Z'
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
            {
              id: '8:115',
              name: 'Ellipse 24',
              visible: true,
              type: 'ELLIPSE',
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
                x: 273,
                y: 499,
                width: 8,
                height: 8
              },
              absoluteRenderBounds: {
                x: 273,
                y: 499,
                width: 8,
                height: 8
              },
              effects: [],
              relativeTransform: [
                [1, 0, 7],
                [0, 1, 11]
              ],
              absoluteTransform: [
                [1, 0, 273],
                [0, 1, 499]
              ],
              isMask: false,
              fills: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: {
                    r: 0.15294118225574493,
                    g: 0.05882352963089943,
                    b: 0.21176470816135406
                  },
                  boundVariables: {}
                }
              ],
              fillGeometry: [
                {
                  windingRule: 'NONZERO',
                  data: 'M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z'
                }
              ],
              strokes: [],
              strokeWeight: 1,
              strokeCap: 'NONE',
              strokeJoin: 'MITER',
              strokeGeometry: [],
              strokeAlign: 'INSIDE',
              arcData: {
                startingAngle: 0,
                endingAngle: 6.2831854820251465,
                innerRadius: 0
              },
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

export default ladder;
