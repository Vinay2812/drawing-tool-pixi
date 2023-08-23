const interactionsAnimation = [
  {
    event: 'onClick',
    effects: [
      {
        type: 'toggleAnimation',
        action: 'balloon'
      }
    ]
  }
];

const interactionsDesc = [
  {
    event: 'onClick',
    effects: [
      {
        type: 'updateVariable',
        variable: 'currentCountOfBalloon_1',
        // valueType: 'constant',
        valueType: 'computeFunction',
        computeFunction: {
          type: 'decrement',
          arguments: {
            variable_1: 'currentCountOfBalloon_1'
          }
        }
      },
      {
        type: 'updateLoon',
        action: 'prev',
        path: ['children', 0, 'children', 2, 'children'],
        itemType: 'loon'
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
        variable: 'currentCountOfBalloon_1',
        // valueType: 'constant',
        valueType: 'computeFunction',
        computeFunction: {
          type: 'increment',
          arguments: {
            variable_1: 'currentCountOfBalloon_1'
          }
        }
      },
      {
        type: 'updateLoon',
        action: 'next',
        path: ['children', 0, 'children', 2, 'children'],
        itemType: 'loon'
      }
    ]
  }
];

const interactionsDesc2 = [
  {
    event: 'onClick',
    effects: [
      {
        type: 'updateVariable',
        variable: 'currentCountOfBalloon_2',
        // valueType: 'constant',
        valueType: 'computeFunction',
        computeFunction: {
          type: 'decrement',
          arguments: {
            variable_1: 'currentCountOfBalloon_2'
          }
        }
      },
      {
        type: 'updateLoon',
        action: 'prev',
        path: ['children', 0, 'children', 3, 'children'],
        itemType: 'loon'
      }
    ]
  }
];

const interactionsInc2 = [
  {
    event: 'onClick',
    effects: [
      {
        type: 'updateVariable',
        variable: 'currentCountOfBalloon_2',
        // valueType: 'constant',
        valueType: 'computeFunction',
        computeFunction: {
          type: 'increment',
          arguments: {
            variable_1: 'currentCountOfBalloon_2'
          }
        }
      },
      {
        type: 'updateLoon',
        action: 'next',
        path: ['children', 0, 'children', 3, 'children'],
        itemType: 'loon'
      }
    ]
  }
];

const balloon = {
  id: '244:149',
  name: 'iPhone 14 - 1',
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
  absoluteBoundingBox: { x: 0, y: 0, width: 390, height: 844 },
  absoluteRenderBounds: { x: 0, y: 0, width: 390, height: 844 },
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
    { type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: { r: 1, g: 1, b: 1 }, boundVariables: {} }
  ],
  fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L390 0L390 844L0 844L0 0Z' }],
  strokes: [],
  strokeWeight: 1,
  strokeCap: 'NONE',
  strokeJoin: 'MITER',
  strokeGeometry: [],
  strokeAlign: 'INSIDE',
  children: [
    {
      interactions: interactionsAnimation,
      id: '245:218',
      name: 'Rectangle 187',
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
      absoluteBoundingBox: { x: 66, y: 754, width: 249, height: 53 },
      absoluteRenderBounds: { x: 66, y: 754, width: 249, height: 53 },
      effects: [],
      relativeTransform: [
        [1, 0, 66],
        [0, 1, 754]
      ],
      absoluteTransform: [
        [1, 0, 66],
        [0, 1, 754]
      ],
      isMask: false,
      fills: [
        {
          type: 'SOLID',
          visible: true,
          opacity: 1,
          blendMode: 'NORMAL',
          color: { r: 0.5795833468437195, g: 0.8916666507720947, b: 0.7980416417121887 },
          boundVariables: {}
        }
      ],
      fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L249 0L249 53L0 53L0 0Z' }],
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
      interactions: interactionsAnimation,
      id: '245:219',
      name: 'Submit',
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
      constraints: { horizontal: 'MIN', vertical: 'MIN' },
      opacity: 1,
      absoluteBoundingBox: { x: 152, y: 766, width: 86, height: 21 },
      absoluteRenderBounds: { x: 153.36363220214844, y: 771, width: 77.12002563476562, height: 18.30682373046875 },
      effects: [],
      relativeTransform: [
        [1, 0, 152],
        [0, 1, 766]
      ],
      absoluteTransform: [
        [1, 0, 152],
        [0, 1, 766]
      ],
      isMask: false,
      fills: [
        { type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: { r: 0, g: 0, b: 0 }, boundVariables: {} }
      ],
      fillGeometry: [
        {
          windingRule: 'NONZERO',
          data: 'M11.6591 9.90909C11.5568 9.04545 11.142 8.375 10.4148 7.89773C9.6875 7.42045 8.79545 7.18182 7.73864 7.18182C6.96591 7.18182 6.28977 7.30682 5.71023 7.55682C5.13636 7.80682 4.6875 8.15057 4.36364 8.58807C4.04545 9.02557 3.88636 9.52273 3.88636 10.0795C3.88636 10.5455 3.99716 10.946 4.21875 11.2812C4.44602 11.6108 4.7358 11.8864 5.08807 12.108C5.44034 12.3239 5.80966 12.5028 6.19602 12.6449C6.58239 12.7812 6.9375 12.892 7.26136 12.9773L9.03409 13.4545C9.48864 13.5739 9.99432 13.7386 10.5511 13.9489C11.1136 14.1591 11.6506 14.446 12.1619 14.8097C12.679 15.1676 13.1051 15.6278 13.4403 16.1903C13.7756 16.7528 13.9432 17.4432 13.9432 18.2614C13.9432 19.2045 13.696 20.0568 13.2017 20.8182C12.7131 21.5795 11.9972 22.1847 11.054 22.6335C10.1165 23.0824 8.97727 23.3068 7.63636 23.3068C6.38636 23.3068 5.30398 23.1051 4.3892 22.7017C3.48011 22.2983 2.7642 21.7358 2.24148 21.0142C1.72443 20.2926 1.43182 19.4545 1.36364 18.5L3.54545 18.5C3.60227 19.1591 3.82386 19.7045 4.21023 20.1364C4.60227 20.5625 5.09659 20.8807 5.69318 21.0909C6.29545 21.2955 6.94318 21.3977 7.63636 21.3977C8.44318 21.3977 9.16761 21.267 9.80966 21.0057C10.4517 20.7386 10.9602 20.3693 11.3352 19.8977C11.7102 19.4205 11.8977 18.8636 11.8977 18.2273C11.8977 17.6477 11.7358 17.1761 11.4119 16.8125C11.0881 16.4489 10.6619 16.1534 10.1335 15.9261C9.60511 15.6989 9.03409 15.5 8.42045 15.3295L6.27273 14.7159C4.90909 14.3239 3.82955 13.7642 3.03409 13.0369C2.23864 12.3097 1.84091 11.358 1.84091 10.1818C1.84091 9.20454 2.10511 8.35227 2.63352 7.625C3.16761 6.89205 3.88352 6.32386 4.78125 5.92045C5.68466 5.51136 6.69318 5.30682 7.80682 5.30682C8.93182 5.30682 9.93182 5.50852 10.8068 5.91193C11.6818 6.30966 12.375 6.85511 12.8864 7.54829C13.4034 8.24148 13.6761 9.02841 13.7045 9.90909L11.6591 9.90909ZM25.3956 17.6477L25.3956 9.90909L27.407 9.90909L27.407 23L25.3956 23L25.3956 20.7841L25.2592 20.7841C24.9524 21.4489 24.4751 22.0142 23.8274 22.4801C23.1797 22.9403 22.3615 23.1705 21.3729 23.1705C20.5547 23.1705 19.8274 22.9915 19.1911 22.6335C18.5547 22.2699 18.0547 21.7244 17.6911 20.9972C17.3274 20.2642 17.1456 19.3409 17.1456 18.2273L17.1456 9.90909L19.157 9.90909L19.157 18.0909C19.157 19.0455 19.424 19.8068 19.9581 20.375C20.4979 20.9432 21.1854 21.2273 22.0206 21.2273C22.5206 21.2273 23.0291 21.0994 23.5462 20.8438C24.0689 20.5881 24.5064 20.196 24.8587 19.6676C25.2166 19.1392 25.3956 18.4659 25.3956 17.6477ZM31.3636 23L31.3636 5.54545L33.375 5.54545L33.375 11.9886L33.5455 11.9886C33.6932 11.7614 33.8977 11.4716 34.1591 11.1193C34.4261 10.7614 34.8068 10.4432 35.3011 10.1648C35.8011 9.88068 36.4773 9.73864 37.3295 9.73864C38.4318 9.73864 39.4034 10.0142 40.2443 10.5653C41.0852 11.1165 41.7415 11.8977 42.2131 12.9091C42.6847 13.9205 42.9205 15.1136 42.9205 16.4886C42.9205 17.875 42.6847 19.0767 42.2131 20.0938C41.7415 21.1051 41.0881 21.8892 40.2528 22.446C39.4176 22.9972 38.4545 23.2727 37.3636 23.2727C36.5227 23.2727 35.8494 23.1335 35.3438 22.8551C34.8381 22.571 34.4489 22.25 34.1761 21.892C33.9034 21.5284 33.6932 21.2273 33.5455 20.9886L33.3068 20.9886L33.3068 23L31.3636 23ZM33.3409 16.4545C33.3409 17.4432 33.4858 18.3153 33.7756 19.071C34.0653 19.821 34.4886 20.4091 35.0455 20.8352C35.6023 21.2557 36.2841 21.4659 37.0909 21.4659C37.9318 21.4659 38.6335 21.2443 39.196 20.8011C39.7642 20.3523 40.1903 19.75 40.4744 18.9943C40.7642 18.233 40.9091 17.3864 40.9091 16.4545C40.9091 15.5341 40.767 14.7045 40.483 13.9659C40.2045 13.2216 39.7812 12.6335 39.2131 12.2017C38.6506 11.7642 37.9432 11.5455 37.0909 11.5455C36.2727 11.5455 35.5852 11.7528 35.0284 12.1676C34.4716 12.5767 34.0511 13.1506 33.767 13.8892C33.483 14.6222 33.3409 15.4773 33.3409 16.4545ZM45.9972 23L45.9972 9.90909L47.9403 9.90909L47.9403 11.9545L48.1108 11.9545C48.3835 11.2557 48.8239 10.7131 49.4318 10.3267C50.0398 9.93466 50.7699 9.73864 51.6222 9.73864C52.4858 9.73864 53.2045 9.93466 53.7784 10.3267C54.358 10.7131 54.8097 11.2557 55.1335 11.9545L55.2699 11.9545C55.6051 11.2784 56.108 10.7415 56.7784 10.3438C57.4489 9.94034 58.2528 9.73864 59.1903 9.73864C60.3608 9.73864 61.3182 10.1051 62.0625 10.8381C62.8068 11.5653 63.179 12.6989 63.179 14.2386L63.179 23L61.1676 23L61.1676 14.2386C61.1676 13.2727 60.9034 12.5824 60.375 12.1676C59.8466 11.7528 59.2244 11.5455 58.5085 11.5455C57.5881 11.5455 56.875 11.8239 56.3693 12.3807C55.8636 12.9318 55.6108 13.6307 55.6108 14.4773L55.6108 23L53.5653 23L53.5653 14.0341C53.5653 13.2898 53.3239 12.6903 52.8409 12.2358C52.358 11.7756 51.7358 11.5455 50.9744 11.5455C50.4517 11.5455 49.9631 11.6847 49.5085 11.9631C49.0597 12.2415 48.696 12.6278 48.4176 13.1222C48.1449 13.6108 48.0085 14.1761 48.0085 14.8182L48.0085 23L45.9972 23ZM66.8565 23L66.8565 9.90909L68.8679 9.90909L68.8679 23L66.8565 23ZM67.8793 7.72727C67.4872 7.72727 67.1491 7.59375 66.8651 7.3267C66.5866 7.05966 66.4474 6.73864 66.4474 6.36364C66.4474 5.98864 66.5866 5.66761 66.8651 5.40057C67.1491 5.13352 67.4872 5 67.8793 5C68.2713 5 68.6065 5.13352 68.8849 5.40057C69.169 5.66761 69.3111 5.98864 69.3111 6.36364C69.3111 6.73864 69.169 7.05966 68.8849 7.3267C68.6065 7.59375 68.2713 7.72727 67.8793 7.72727ZM78.245 9.90909L78.245 11.6136L71.4609 11.6136L71.4609 9.90909L78.245 9.90909ZM73.4382 6.77273L75.4496 6.77273L75.4496 19.25C75.4496 19.8182 75.532 20.2443 75.6967 20.5284C75.8672 20.8068 76.0831 20.9943 76.3445 21.0909C76.6115 21.1818 76.8928 21.2273 77.1882 21.2273C77.4098 21.2273 77.5916 21.2159 77.7337 21.1932C77.8757 21.1648 77.9893 21.142 78.0746 21.125L78.4837 22.9318C78.3473 22.983 78.157 23.0341 77.9126 23.0852C77.6683 23.142 77.3587 23.1705 76.9837 23.1705C76.4155 23.1705 75.8587 23.0483 75.3132 22.804C74.7734 22.5597 74.3246 22.1875 73.9666 21.6875C73.6143 21.1875 73.4382 20.5568 73.4382 19.7955L73.4382 6.77273Z'
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'OUTSIDE',
      characters: 'Submit',
      fontName: { family: 'Inter', style: 'Regular' },
      fontSize: 24,
      fontWeight: 400,
      letterSpacing: { unit: 'PERCENT', value: 0 },
      lineHeight: { unit: 'AUTO' },
      listSpacing: 0,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      textAlignHorizontal: 'LEFT',
      textAlignVertical: 'TOP',
      textAutoResize: 'NONE',
      textCase: 'ORIGINAL',
      textDecoration: 'NONE',
      textStyleId: ''
    },
    // loon group 1
    {
      properties: {
        type: 'loonFrame'
      },
      id: '265:161',
      name: 'Frame 418',
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
      absoluteBoundingBox: { x: 32, y: 80, width: 163, height: 631 },
      absoluteRenderBounds: { x: 26, y: 80, width: 169, height: 631 },
      effects: [],
      relativeTransform: [
        [1, 0, 32],
        [0, 1, 80]
      ],
      absoluteTransform: [
        [1, 0, 32],
        [0, 1, 80]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L163 0L163 631L0 631L0 0Z' }],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: [
        // duck
        {
          properties: {
            type: 'duck',
            mass: 2
          },
          id: '265:162',
          name: 'Duck Box 1',
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
          absoluteBoundingBox: { x: 47, y: 560, width: 113, height: 94 },
          absoluteRenderBounds: { x: 47, y: 560, width: 113, height: 94 },
          effects: [],
          relativeTransform: [
            [1, 0, 15],
            [0, 1, 480]
          ],
          absoluteTransform: [
            [1, 0, 47],
            [0, 1, 560]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L113 0L113 94L0 94L0 0Z' }],
          strokes: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: { r: 0, g: 0, b: 0 },
              boundVariables: {}
            }
          ],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L0 -1L-1 -1L-1 0L0 0ZM113 0L114 0L114 -1L113 -1L113 0ZM113 94L113 95L114 95L114 94L113 94ZM0 94L-1 94L-1 95L0 95L0 94ZM0 1L113 1L113 -1L0 -1L0 1ZM112 0L112 94L114 94L114 0L112 0ZM113 93L0 93L0 95L113 95L113 93ZM1 94L1 0L-1 0L-1 94L1 94Z'
            }
          ],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:163',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: 0,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: { x: 74, y: 604, width: 57.999847412109375, height: 49.682861328125 },
              absoluteRenderBounds: { x: 74, y: 604, width: 57.999847412109375, height: 49.682861328125 },
              effects: [],
              relativeTransform: [
                [1, 0, 27],
                [0, 1, 44]
              ],
              absoluteTransform: [
                [1, 0, 74],
                [0, 1, 604]
              ],
              isMask: false,
              children: [
                {
                  id: '265:164',
                  name: 'Group',
                  visible: true,
                  type: 'GROUP',
                  rotation: 0,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  opacity: 1,
                  absoluteBoundingBox: { x: 74, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                  absoluteRenderBounds: { x: 74, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                  effects: [],
                  relativeTransform: [
                    [1, 0, 27],
                    [0, 1, 44]
                  ],
                  absoluteTransform: [
                    [1, 0, 74],
                    [0, 1, 604]
                  ],
                  isMask: false,
                  children: [
                    {
                      id: '265:165',
                      name: 'Vector',
                      visible: true,
                      type: 'VECTOR',
                      rotation: 0,
                      componentPropertyReferences: null,
                      boundVariables: {},
                      locked: false,
                      exportSettings: [],
                      blendMode: 'PASS_THROUGH',
                      layoutAlign: 'INHERIT',
                      layoutGrow: 0,
                      constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                      opacity: 1,
                      absoluteBoundingBox: { x: 74, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                      absoluteRenderBounds: { x: 74, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                      effects: [],
                      relativeTransform: [
                        [1, 0, 27],
                        [0, 1, 44]
                      ],
                      absoluteTransform: [
                        [1, 0, 74],
                        [0, 1, 604]
                      ],
                      isMask: false,
                      fills: [
                        {
                          type: 'SOLID',
                          visible: true,
                          opacity: 1,
                          blendMode: 'NORMAL',
                          color: { r: 0, g: 0, b: 0 },
                          boundVariables: {}
                        }
                      ],
                      fillGeometry: [
                        {
                          windingRule: 'NONZERO',
                          data: 'M55.8449 20.3682C54.5021 19.5795 52.9302 19.6318 51.64 20.5075C47.9113 23.0379 42.5824 24.1693 36.1234 23.8222C37.5809 21.3591 38.3638 18.4995 38.3638 15.5352C38.3638 6.96917 31.8444 0 23.831 0C16.2117 0.000242187 9.95136 6.22069 9.34712 14.2552C8.11077 15.5763 5.06102 18.4058 1.25059 18.8917C0.721567 18.9591 0.272294 19.3378 0.0878726 19.872C-0.0966622 20.4064 0.0142399 21.0062 0.375493 21.4251C0.555836 21.6342 4.61866 26.2373 12.3418 26.2371C12.6482 26.2371 12.9612 26.2289 13.2793 26.2138C13.3389 26.2812 13.3976 26.3496 13.4583 26.4157C11.2589 28.9399 10.0095 32.2402 9.98467 35.6987C9.95929 39.427 11.298 42.937 13.7544 45.5818C16.2106 48.2265 19.4828 49.6828 22.9685 49.6828L40.5856 49.6828C46.2873 49.6828 50.9035 47.2693 53.9347 42.7035C56.5941 38.6975 57.9999 33.1008 57.9999 26.518L57.9999 24.2599C58 22.6402 57.1743 21.1491 55.8449 20.3682ZM4.64902 21.1128C6.59043 20.3565 8.23946 19.225 9.5073 18.1566C9.78915 19.917 10.3539 21.6105 11.173 23.1631C8.28058 22.9568 6.10389 22.0097 4.64902 21.1128ZM55.1626 26.5181C55.1626 32.4682 53.9378 37.458 51.6209 40.9481C49.1091 44.7316 45.3963 46.6499 40.5857 46.6499L22.9685 46.6499C20.2446 46.6499 17.6873 45.5118 15.768 43.445C13.8483 41.3779 12.8021 38.6348 12.822 35.7215C12.8446 32.5819 14.1667 29.6051 16.4487 27.5547C16.772 27.264 16.9576 26.8346 16.9545 26.3828C16.9516 25.9311 16.7603 25.5044 16.4329 25.2188C15.9017 24.7554 15.4028 24.2343 14.9499 23.67C14.9499 23.67 14.9496 23.6695 14.9493 23.6693C13.1337 21.4097 12.1338 18.521 12.1338 15.5354C12.1338 15.3383 12.1378 15.1588 12.1466 14.9754C12.4211 8.27904 17.5535 3.03339 23.8313 3.03339C30.2802 3.03339 35.5268 8.64184 35.5268 15.5356C35.5268 18.7211 34.4031 21.7565 32.3624 24.0827C31.9935 24.5034 31.8796 25.1114 32.0686 25.6516C32.2576 26.1918 32.7169 26.5705 33.2537 26.6288C41.5205 27.5279 48.4033 26.297 53.1612 23.0686C53.7426 22.6737 54.2762 22.9077 54.4785 23.0267C54.6842 23.1475 55.1626 23.5097 55.1626 24.2602L55.1626 26.5181Z'
                        }
                      ],
                      strokes: [],
                      strokeWeight: 1.5624969005584717,
                      strokeCap: 'NONE',
                      strokeJoin: 'MITER',
                      strokeGeometry: [],
                      strokeAlign: 'INSIDE'
                    }
                  ]
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
        // loon 1
        {
          properties: {
            type: 'loon',
            mass: 1
          },
          id: '265:170',
          name: 'Frame 415',
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
          absoluteBoundingBox: { x: 69, y: 114, width: 59, height: 446 },
          absoluteRenderBounds: { x: 69, y: 114, width: 59, height: 446 },
          effects: [],
          relativeTransform: [
            [1, 0, 37],
            [0, 1, 34]
          ],
          absoluteTransform: [
            [1, 0, 69],
            [0, 1, 114]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L59 0L59 446L0 446L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:171',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: 0,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: { x: 82.54098510742188, y: 140, width: 29.988494873046875, height: 60.99504089355469 },
              absoluteRenderBounds: { x: 82.54098510742188, y: 140, width: 29.988502502441406, height: 60.99504089355469 },
              effects: [],
              relativeTransform: [
                [1, 0, 13.540983200073242],
                [0, 1, 26]
              ],
              absoluteTransform: [
                [1, 0, 82.54098510742188],
                [0, 1, 140]
              ],
              isMask: false,
              children: [
                {
                  id: '265:172',
                  name: 'Vector',
                  visible: true,
                  type: 'VECTOR',
                  rotation: 0,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                  opacity: 1,
                  absoluteBoundingBox: {
                    x: 82.54098510742188,
                    y: 140,
                    width: 29.988494873046875,
                    height: 60.99504089355469
                  },
                  absoluteRenderBounds: {
                    x: 82.54098510742188,
                    y: 140,
                    width: 29.988502502441406,
                    height: 60.99504089355469
                  },
                  effects: [],
                  relativeTransform: [
                    [1, 0, 13.540983200073242],
                    [0, 1, 26]
                  ],
                  absoluteTransform: [
                    [1, 0, 82.54098510742188],
                    [0, 1, 140]
                  ],
                  isMask: false,
                  fills: [
                    {
                      type: 'SOLID',
                      visible: true,
                      opacity: 1,
                      blendMode: 'NORMAL',
                      color: { r: 0, g: 0, b: 0 },
                      boundVariables: {}
                    }
                  ],
                  fillGeometry: [
                    {
                      windingRule: 'EVENODD',
                      data: 'M15.0138 0C23.2939 0 29.9885 8.11149 29.9885 18.1243C29.9885 27.3676 24.2776 37.9513 16.8881 39.0831L18.3268 41.6148C19.2322 43.2083 18.7232 43.6452 17.1719 43.6452L16.2275 43.6452C19.1832 51.2255 19.4377 52.9183 16.5455 60.4986C16.5455 60.7667 16.3204 60.995 16.0562 60.995L14.6028 60.995C14.3385 60.995 14.1134 60.7667 14.1134 60.4986C17.0447 52.9183 16.7168 51.2255 13.7953 43.6452L12.1706 43.6452C10.9961 43.665 11.0744 42.5133 11.5638 41.7091L13.1689 39.0831C5.74519 37.986 0 27.3875 0 18.1243C0 8.11149 6.70924 0 14.9747 0L15.0138 0ZM17.7102 6.03646C17.2943 5.80811 17.1377 5.2819 17.3628 4.85994C17.5879 4.43799 18.1066 4.27913 18.5226 4.50749C19.9564 5.29183 21.3903 6.45345 22.6431 7.76896C23.935 9.12419 25.0361 10.6482 25.7359 12.0878C25.9463 12.5197 25.7701 13.036 25.3493 13.2494C24.9235 13.4629 24.4146 13.2842 24.2042 12.8573C23.5778 11.5765 22.5844 10.2064 21.4099 8.9703C20.2794 7.77889 18.9875 6.73145 17.7102 6.03646Z'
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeCap: 'NONE',
                  strokeJoin: 'MITER',
                  strokeGeometry: [],
                  strokeAlign: 'INSIDE'
                }
              ]
            },
            {
              id: '265:173',
              name: 'Line 11',
              visible: true,
              type: 'LINE',
              rotation: -90,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
              opacity: 1,
              absoluteBoundingBox: { x: 98.01639556884766, y: 197, width: 0, height: 363 },
              absoluteRenderBounds: { x: 98.01639556884766, y: 197, width: 1, height: 363 },
              effects: [],
              relativeTransform: [
                [6.123234262925839e-17, -1, 29.016393661499023],
                [1, 6.123234262925839e-17, 83]
              ],
              absoluteTransform: [
                [6.123234262925839e-17, -1, 98.01639556884766],
                [1, 6.123234262925839e-17, 197]
              ],
              isMask: false,
              fills: [],
              fillGeometry: [],
              strokes: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: { r: 0, g: 0, b: 0 },
                  boundVariables: {}
                }
              ],
              strokeWeight: 1,
              strokeCap: 'NONE',
              strokeJoin: 'MITER',
              strokeGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L363 0L363 -1L0 -1L0 0Z' }],
              strokeAlign: 'CENTER'
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
        // loon 2
        {
          properties: {
            type: 'loon',
            mass: 1
          },
          id: '265:166',
          name: 'Frame 417',
          visible: !true,
          type: 'FRAME',
          rotation: 4.832885352695006,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 26, y: 115.99996948242188, width: 96.36563110351562, height: 449.3850402832031 },
          absoluteRenderBounds: { x: 26, y: 115.99996948242188, width: 96.36563110351562, height: 449.3850402832031 },
          effects: [],
          relativeTransform: [
            [0.9964446425437927, 0.08424977213144302, -6],
            [-0.08424977213144302, 0.9964446425437927, 40.970703125]
          ],
          absoluteTransform: [
            [0.9964446425437927, 0.08424977213144302, 26],
            [-0.08424977213144302, 0.9964446425437927, 120.970703125]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L59 0L59 446L0 446L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:167',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: -19.724401297399062,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: {
                x: 36.86545181274414,
                y: 141.5366668701172,
                width: 44.65640640258789,
                height: 66.6531982421875
              },
              absoluteRenderBounds: {
                x: 36.86545181274414,
                y: 141.5366668701172,
                width: 44.65640640258789,
                height: 66.6531982421875
              },
              effects: [],
              relativeTransform: [
                [0.941326916217804, -0.33749619126319885, 24.713510513305664],
                [0.33749619126319885, 0.941326916217804, 22.7288818359375]
              ],
              absoluteTransform: [
                [0.9664141535758972, -0.2569896876811981, 52.54054641723633],
                [0.2569896876811981, 0.9664141535758972, 141.5366668701172]
              ],
              isMask: false,
              children: [
                {
                  id: '265:168',
                  name: 'Vector',
                  visible: true,
                  type: 'VECTOR',
                  rotation: -19.724401297399062,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                  opacity: 1,
                  absoluteBoundingBox: {
                    x: 36.86545181274414,
                    y: 141.5366668701172,
                    width: 44.65640640258789,
                    height: 66.6531982421875
                  },
                  absoluteRenderBounds: {
                    x: 47.05265808105469,
                    y: 144.9636688232422,
                    width: 30.54778289794922,
                    height: 59.66119384765625
                  },
                  effects: [],
                  relativeTransform: [
                    [0.941326916217804, -0.33749619126319885, 24.713510513305664],
                    [0.33749619126319885, 0.941326916217804, 22.7288818359375]
                  ],
                  absoluteTransform: [
                    [0.9664141535758972, -0.2569896876811981, 52.54054641723633],
                    [0.2569896876811981, 0.9664141535758972, 141.5366668701172]
                  ],
                  isMask: false,
                  fills: [
                    {
                      type: 'SOLID',
                      visible: true,
                      opacity: 1,
                      blendMode: 'NORMAL',
                      color: { r: 0, g: 0, b: 0 },
                      boundVariables: {}
                    }
                  ],
                  fillGeometry: [
                    {
                      windingRule: 'EVENODD',
                      data: 'M15.0138 0C23.2939 0 29.9885 8.11149 29.9885 18.1243C29.9885 27.3676 24.2776 37.9513 16.8881 39.0831L18.3268 41.6148C19.2322 43.2083 18.7232 43.6452 17.1719 43.6452L16.2275 43.6452C19.1832 51.2255 19.4377 52.9183 16.5455 60.4986C16.5455 60.7667 16.3204 60.995 16.0562 60.995L14.6028 60.995C14.3385 60.995 14.1134 60.7667 14.1134 60.4986C17.0447 52.9183 16.7168 51.2255 13.7953 43.6452L12.1706 43.6452C10.9961 43.665 11.0744 42.5133 11.5638 41.7091L13.1689 39.0831C5.74519 37.986 0 27.3875 0 18.1243C0 8.11149 6.70924 0 14.9747 0L15.0138 0ZM17.7102 6.03646C17.2943 5.80811 17.1377 5.2819 17.3628 4.85994C17.5879 4.43799 18.1066 4.27913 18.5226 4.50749C19.9564 5.29183 21.3903 6.45345 22.6431 7.76896C23.935 9.12419 25.0361 10.6482 25.7359 12.0878C25.9463 12.5197 25.7701 13.036 25.3493 13.2494C24.9235 13.4629 24.4146 13.2842 24.2042 12.8573C23.5778 11.5765 22.5844 10.2064 21.4099 8.9703C20.2794 7.77889 18.9875 6.73145 17.7102 6.03646Z'
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeCap: 'NONE',
                  strokeJoin: 'MITER',
                  strokeGeometry: [],
                  strokeAlign: 'INSIDE'
                }
              ]
            },
            {
              id: '265:169',
              name: 'Line 11',
              visible: true,
              type: 'LINE',
              rotation: -87.46923702713221,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
              opacity: 1,
              absoluteBoundingBox: {
                x: 52.009429931640625,
                y: 203.07130432128906,
                width: 46.4415283203125,
                height: 359.364990234375
              },
              absoluteRenderBounds: {
                x: 52.009429931640625,
                y: 202.94313049316406,
                width: 47.43328094482422,
                height: 359.4931640625
              },
              effects: [],
              relativeTransform: [
                [0.0441557839512825, -0.9990246295928955, 19],
                [0.9990246295928955, 0.0441557839512825, 84]
              ],
              absoluteTransform: [
                [0.12816639244556427, -0.9917526245117188, 52.009429931640625],
                [0.9917526245117188, 0.12816639244556427, 203.07130432128906]
              ],
              isMask: false,
              fills: [],
              fillGeometry: [],
              strokes: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: { r: 0, g: 0, b: 0 },
                  boundVariables: {}
                }
              ],
              strokeWeight: 1,
              strokeCap: 'NONE',
              strokeJoin: 'MITER',
              strokeGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L362.353 0L362.353 -1L0 -1L0 0Z' }],
              strokeAlign: 'CENTER'
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
        // loon 3
        {
          properties: {
            type: 'loon',
            mass: 1
          },
          id: '265:174',
          name: 'Frame 416',
          visible: !true,
          type: 'FRAME',
          rotation: -4.864856961501801,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 79.99998474121094, y: 113, width: 96.61082458496094, height: 449.3968505859375 },
          absoluteRenderBounds: { x: 79.99998474121094, y: 113, width: 96.61082458496094, height: 449.3968505859375 },
          effects: [],
          relativeTransform: [
            [0.9963974952697754, -0.08480578660964966, 85.8233642578125],
            [0.08480578660964966, 0.9963974952697754, 33]
          ],
          absoluteTransform: [
            [0.9963974952697754, -0.08480578660964966, 117.8233642578125],
            [0.08480578660964966, 0.9963974952697754, 113]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L59 0L59 446L0 446L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:175',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: 13.62152478615978,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: {
                x: 122.00208282470703,
                y: 139.28919982910156,
                width: 38.92473602294922,
                height: 64.84945678710938
              },
              absoluteRenderBounds: {
                x: 122.00208282470703,
                y: 139.28919982910156,
                width: 38.92473602294922,
                height: 64.84945678710938
              },
              effects: [],
              relativeTransform: [
                [0.9718725681304932, 0.23550723493099213, 6.780317306518555],
                [-0.23550723493099213, 0.9718725681304932, 30.389070510864258]
              ],
              absoluteTransform: [
                [0.9883437752723694, 0.1522383987903595, 122.00208282470703],
                [-0.1522383987903595, 0.9883437752723694, 143.85459899902344]
              ],
              isMask: false,
              children: [
                {
                  id: '265:176',
                  name: 'Vector',
                  visible: true,
                  type: 'VECTOR',
                  rotation: 13.62152478615978,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                  opacity: 1,
                  absoluteBoundingBox: {
                    x: 122.00208282470703,
                    y: 139.28919982910156,
                    width: 38.92473602294922,
                    height: 64.84945678710938
                  },
                  absoluteRenderBounds: {
                    x: 124.5036392211914,
                    y: 141.42213439941406,
                    width: 30.17487335205078,
                    height: 60.498779296875
                  },
                  effects: [],
                  relativeTransform: [
                    [0.9718725681304932, 0.23550723493099213, 6.780317306518555],
                    [-0.23550723493099213, 0.9718725681304932, 30.389070510864258]
                  ],
                  absoluteTransform: [
                    [0.9883437752723694, 0.1522383987903595, 122.00208282470703],
                    [-0.1522383987903595, 0.9883437752723694, 143.85459899902344]
                  ],
                  isMask: false,
                  fills: [
                    {
                      type: 'SOLID',
                      visible: true,
                      opacity: 1,
                      blendMode: 'NORMAL',
                      color: { r: 0, g: 0, b: 0 },
                      boundVariables: {}
                    }
                  ],
                  fillGeometry: [
                    {
                      windingRule: 'EVENODD',
                      data: 'M15.0138 0C23.2939 0 29.9885 8.11149 29.9885 18.1243C29.9885 27.3676 24.2776 37.9513 16.8881 39.0831L18.3268 41.6148C19.2322 43.2083 18.7232 43.6452 17.1719 43.6452L16.2275 43.6452C19.1832 51.2255 19.4377 52.9183 16.5455 60.4986C16.5455 60.7667 16.3204 60.995 16.0562 60.995L14.6028 60.995C14.3385 60.995 14.1134 60.7667 14.1134 60.4986C17.0447 52.9183 16.7168 51.2255 13.7953 43.6452L12.1706 43.6452C10.9961 43.665 11.0744 42.5133 11.5638 41.7091L13.1689 39.0831C5.74519 37.986 0 27.3875 0 18.1243C0 8.11149 6.70924 0 14.9747 0L15.0138 0ZM17.7102 6.03646C17.2943 5.80811 17.1377 5.2819 17.3628 4.85994C17.5879 4.43799 18.1066 4.27913 18.5226 4.50749C19.9564 5.29183 21.3903 6.45345 22.6431 7.76896C23.935 9.12419 25.0361 10.6482 25.7359 12.0878C25.9463 12.5197 25.7701 13.036 25.3493 13.2494C24.9235 13.4629 24.4146 13.2842 24.2042 12.8573C23.5778 11.5765 22.5844 10.2064 21.4099 8.9703C20.2794 7.77889 18.9875 6.73145 17.7102 6.03646Z'
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeCap: 'NONE',
                  strokeJoin: 'MITER',
                  strokeGeometry: [],
                  strokeAlign: 'INSIDE'
                }
              ]
            },
            {
              id: '265:177',
              name: 'Line 11',
              visible: true,
              type: 'LINE',
              rotation: -92.36624805490547,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
              opacity: 1,
              absoluteBoundingBox: {
                x: 100.9243392944336,
                y: 198.75399780273438,
                width: 45.73046112060547,
                height: 360.4201965332031
              },
              absoluteRenderBounds: {
                x: 100.9243392944336,
                y: 198.75399780273438,
                width: 46.722511291503906,
                height: 360.5460510253906
              },
              effects: [],
              relativeTransform: [
                [-0.04128707945346832, -0.9991472959518433, 36],
                [0.9991472959518433, -0.04128707945346832, 83]
              ],
              absoluteTransform: [
                [-0.12587182223796844, -0.9920464754104614, 146.65480041503906],
                [0.9920464754104614, -0.12587182223796844, 198.75399780273438]
              ],
              isMask: false,
              fills: [],
              fillGeometry: [],
              strokes: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: { r: 0, g: 0, b: 0 },
                  boundVariables: {}
                }
              ],
              strokeWeight: 1,
              strokeCap: 'NONE',
              strokeJoin: 'MITER',
              strokeGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L363.31 0L363.31 -1L0 -1L0 0Z' }],
              strokeAlign: 'CENTER'
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
    },
    // loon group 2
    {
      properties: {
        type: 'loonFrame'
      },
      id: '265:178',
      name: 'Frame 419',
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
      absoluteBoundingBox: { x: 220, y: 80, width: 163, height: 631 },
      absoluteRenderBounds: { x: 214, y: 80, width: 169, height: 631 },
      effects: [],
      relativeTransform: [
        [1, 0, 220],
        [0, 1, 80]
      ],
      absoluteTransform: [
        [1, 0, 220],
        [0, 1, 80]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L163 0L163 631L0 631L0 0Z' }],
      strokes: [],
      strokeWeight: 1,
      strokeCap: 'NONE',
      strokeJoin: 'MITER',
      strokeGeometry: [],
      strokeAlign: 'INSIDE',
      children: [
        // duck
        {
          properties: {
            type: 'duck',
            mass: 2
          },
          id: '265:179',
          name: 'Duck Box 1',
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
          absoluteBoundingBox: { x: 235, y: 560, width: 113, height: 94 },
          absoluteRenderBounds: { x: 235, y: 560, width: 113, height: 94 },
          effects: [],
          relativeTransform: [
            [1, 0, 15],
            [0, 1, 480]
          ],
          absoluteTransform: [
            [1, 0, 235],
            [0, 1, 560]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L113 0L113 94L0 94L0 0Z' }],
          strokes: [
            {
              type: 'SOLID',
              visible: true,
              opacity: 1,
              blendMode: 'NORMAL',
              color: { r: 0, g: 0, b: 0 },
              boundVariables: {}
            }
          ],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [
            {
              windingRule: 'NONZERO',
              data: 'M0 0L0 -1L-1 -1L-1 0L0 0ZM113 0L114 0L114 -1L113 -1L113 0ZM113 94L113 95L114 95L114 94L113 94ZM0 94L-1 94L-1 95L0 95L0 94ZM0 1L113 1L113 -1L0 -1L0 1ZM112 0L112 94L114 94L114 0L112 0ZM113 93L0 93L0 95L113 95L113 93ZM1 94L1 0L-1 0L-1 94L1 94Z'
            }
          ],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:180',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: 0,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: { x: 262, y: 604, width: 57.999847412109375, height: 49.682861328125 },
              absoluteRenderBounds: { x: 262, y: 604, width: 57.999847412109375, height: 49.682861328125 },
              effects: [],
              relativeTransform: [
                [1, 0, 27],
                [0, 1, 44]
              ],
              absoluteTransform: [
                [1, 0, 262],
                [0, 1, 604]
              ],
              isMask: false,
              children: [
                {
                  id: '265:181',
                  name: 'Group',
                  visible: true,
                  type: 'GROUP',
                  rotation: 0,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  opacity: 1,
                  absoluteBoundingBox: { x: 262, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                  absoluteRenderBounds: { x: 262, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                  effects: [],
                  relativeTransform: [
                    [1, 0, 27],
                    [0, 1, 44]
                  ],
                  absoluteTransform: [
                    [1, 0, 262],
                    [0, 1, 604]
                  ],
                  isMask: false,
                  children: [
                    {
                      id: '265:182',
                      name: 'Vector',
                      visible: true,
                      type: 'VECTOR',
                      rotation: 0,
                      componentPropertyReferences: null,
                      boundVariables: {},
                      locked: false,
                      exportSettings: [],
                      blendMode: 'PASS_THROUGH',
                      layoutAlign: 'INHERIT',
                      layoutGrow: 0,
                      constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                      opacity: 1,
                      absoluteBoundingBox: { x: 262, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                      absoluteRenderBounds: { x: 262, y: 604, width: 57.999847412109375, height: 49.682861328125 },
                      effects: [],
                      relativeTransform: [
                        [1, 0, 27],
                        [0, 1, 44]
                      ],
                      absoluteTransform: [
                        [1, 0, 262],
                        [0, 1, 604]
                      ],
                      isMask: false,
                      fills: [
                        {
                          type: 'SOLID',
                          visible: true,
                          opacity: 1,
                          blendMode: 'NORMAL',
                          color: { r: 0, g: 0, b: 0 },
                          boundVariables: {}
                        }
                      ],
                      fillGeometry: [
                        {
                          windingRule: 'NONZERO',
                          data: 'M55.8449 20.3682C54.5021 19.5795 52.9302 19.6318 51.64 20.5075C47.9113 23.0379 42.5824 24.1693 36.1234 23.8222C37.5809 21.3591 38.3638 18.4995 38.3638 15.5352C38.3638 6.96917 31.8444 0 23.831 0C16.2117 0.000242187 9.95136 6.22069 9.34712 14.2552C8.11077 15.5763 5.06102 18.4058 1.25059 18.8917C0.721567 18.9591 0.272294 19.3378 0.0878726 19.872C-0.0966622 20.4064 0.0142399 21.0062 0.375493 21.4251C0.555836 21.6342 4.61866 26.2373 12.3418 26.2371C12.6482 26.2371 12.9612 26.2289 13.2793 26.2138C13.3389 26.2812 13.3976 26.3496 13.4583 26.4157C11.2589 28.9399 10.0095 32.2402 9.98467 35.6987C9.95929 39.427 11.298 42.937 13.7544 45.5818C16.2106 48.2265 19.4828 49.6828 22.9685 49.6828L40.5856 49.6828C46.2873 49.6828 50.9035 47.2693 53.9347 42.7035C56.5941 38.6975 57.9999 33.1008 57.9999 26.518L57.9999 24.2599C58 22.6402 57.1743 21.1491 55.8449 20.3682ZM4.64902 21.1128C6.59043 20.3565 8.23946 19.225 9.5073 18.1566C9.78915 19.917 10.3539 21.6105 11.173 23.1631C8.28058 22.9568 6.10389 22.0097 4.64902 21.1128ZM55.1626 26.5181C55.1626 32.4682 53.9378 37.458 51.6209 40.9481C49.1091 44.7316 45.3963 46.6499 40.5857 46.6499L22.9685 46.6499C20.2446 46.6499 17.6873 45.5118 15.768 43.445C13.8483 41.3779 12.8021 38.6348 12.822 35.7215C12.8446 32.5819 14.1667 29.6051 16.4487 27.5547C16.772 27.264 16.9576 26.8346 16.9545 26.3828C16.9516 25.9311 16.7603 25.5044 16.4329 25.2188C15.9017 24.7554 15.4028 24.2343 14.9499 23.67C14.9499 23.67 14.9496 23.6695 14.9493 23.6693C13.1337 21.4097 12.1338 18.521 12.1338 15.5354C12.1338 15.3383 12.1378 15.1588 12.1466 14.9754C12.4211 8.27904 17.5535 3.03339 23.8313 3.03339C30.2802 3.03339 35.5268 8.64184 35.5268 15.5356C35.5268 18.7211 34.4031 21.7565 32.3624 24.0827C31.9935 24.5034 31.8796 25.1114 32.0686 25.6516C32.2576 26.1918 32.7169 26.5705 33.2537 26.6288C41.5205 27.5279 48.4033 26.297 53.1612 23.0686C53.7426 22.6737 54.2762 22.9077 54.4785 23.0267C54.6842 23.1475 55.1626 23.5097 55.1626 24.2602L55.1626 26.5181Z'
                        }
                      ],
                      strokes: [],
                      strokeWeight: 1.5624969005584717,
                      strokeCap: 'NONE',
                      strokeJoin: 'MITER',
                      strokeGeometry: [],
                      strokeAlign: 'INSIDE'
                    }
                  ]
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
        // loon 1
        {
          properties: {
            type: 'loon',
            mass: 1
          },
          id: '265:170',
          name: 'Frame 415',
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
          absoluteBoundingBox: { x: 69, y: 114, width: 59, height: 446 },
          absoluteRenderBounds: { x: 69, y: 114, width: 59, height: 446 },
          effects: [],
          relativeTransform: [
            [1, 0, 37],
            [0, 1, 34]
          ],
          absoluteTransform: [
            [1, 0, 69],
            [0, 1, 114]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L59 0L59 446L0 446L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:171',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: 0,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: { x: 82.54098510742188, y: 140, width: 29.988494873046875, height: 60.99504089355469 },
              absoluteRenderBounds: { x: 82.54098510742188, y: 140, width: 29.988502502441406, height: 60.99504089355469 },
              effects: [],
              relativeTransform: [
                [1, 0, 13.540983200073242],
                [0, 1, 26]
              ],
              absoluteTransform: [
                [1, 0, 82.54098510742188],
                [0, 1, 140]
              ],
              isMask: false,
              children: [
                {
                  id: '265:172',
                  name: 'Vector',
                  visible: true,
                  type: 'VECTOR',
                  rotation: 0,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                  opacity: 1,
                  absoluteBoundingBox: {
                    x: 82.54098510742188,
                    y: 140,
                    width: 29.988494873046875,
                    height: 60.99504089355469
                  },
                  absoluteRenderBounds: {
                    x: 82.54098510742188,
                    y: 140,
                    width: 29.988502502441406,
                    height: 60.99504089355469
                  },
                  effects: [],
                  relativeTransform: [
                    [1, 0, 13.540983200073242],
                    [0, 1, 26]
                  ],
                  absoluteTransform: [
                    [1, 0, 82.54098510742188],
                    [0, 1, 140]
                  ],
                  isMask: false,
                  fills: [
                    {
                      type: 'SOLID',
                      visible: true,
                      opacity: 1,
                      blendMode: 'NORMAL',
                      color: { r: 0, g: 0, b: 0 },
                      boundVariables: {}
                    }
                  ],
                  fillGeometry: [
                    {
                      windingRule: 'EVENODD',
                      data: 'M15.0138 0C23.2939 0 29.9885 8.11149 29.9885 18.1243C29.9885 27.3676 24.2776 37.9513 16.8881 39.0831L18.3268 41.6148C19.2322 43.2083 18.7232 43.6452 17.1719 43.6452L16.2275 43.6452C19.1832 51.2255 19.4377 52.9183 16.5455 60.4986C16.5455 60.7667 16.3204 60.995 16.0562 60.995L14.6028 60.995C14.3385 60.995 14.1134 60.7667 14.1134 60.4986C17.0447 52.9183 16.7168 51.2255 13.7953 43.6452L12.1706 43.6452C10.9961 43.665 11.0744 42.5133 11.5638 41.7091L13.1689 39.0831C5.74519 37.986 0 27.3875 0 18.1243C0 8.11149 6.70924 0 14.9747 0L15.0138 0ZM17.7102 6.03646C17.2943 5.80811 17.1377 5.2819 17.3628 4.85994C17.5879 4.43799 18.1066 4.27913 18.5226 4.50749C19.9564 5.29183 21.3903 6.45345 22.6431 7.76896C23.935 9.12419 25.0361 10.6482 25.7359 12.0878C25.9463 12.5197 25.7701 13.036 25.3493 13.2494C24.9235 13.4629 24.4146 13.2842 24.2042 12.8573C23.5778 11.5765 22.5844 10.2064 21.4099 8.9703C20.2794 7.77889 18.9875 6.73145 17.7102 6.03646Z'
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeCap: 'NONE',
                  strokeJoin: 'MITER',
                  strokeGeometry: [],
                  strokeAlign: 'INSIDE'
                }
              ]
            },
            {
              id: '265:173',
              name: 'Line 11',
              visible: true,
              type: 'LINE',
              rotation: -90,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
              opacity: 1,
              absoluteBoundingBox: { x: 98.01639556884766, y: 197, width: 0, height: 363 },
              absoluteRenderBounds: { x: 98.01639556884766, y: 197, width: 1, height: 363 },
              effects: [],
              relativeTransform: [
                [6.123234262925839e-17, -1, 29.016393661499023],
                [1, 6.123234262925839e-17, 83]
              ],
              absoluteTransform: [
                [6.123234262925839e-17, -1, 98.01639556884766],
                [1, 6.123234262925839e-17, 197]
              ],
              isMask: false,
              fills: [],
              fillGeometry: [],
              strokes: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: { r: 0, g: 0, b: 0 },
                  boundVariables: {}
                }
              ],
              strokeWeight: 1,
              strokeCap: 'NONE',
              strokeJoin: 'MITER',
              strokeGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L363 0L363 -1L0 -1L0 0Z' }],
              strokeAlign: 'CENTER'
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
        // loon 2
        {
          properties: {
            type: 'loon',
            mass: 1
          },
          id: '265:183',
          name: 'Frame 417',
          visible: !true,
          type: 'FRAME',
          rotation: 4.832885352695006,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 214, y: 115.99996948242188, width: 96.36563110351562, height: 449.3850402832031 },
          absoluteRenderBounds: { x: 214, y: 115.99996948242188, width: 96.36563110351562, height: 449.3850402832031 },
          effects: [],
          relativeTransform: [
            [0.9964446425437927, 0.08424977213144302, -6],
            [-0.08424977213144302, 0.9964446425437927, 40.970703125]
          ],
          absoluteTransform: [
            [0.9964446425437927, 0.08424977213144302, 214],
            [-0.08424977213144302, 0.9964446425437927, 120.970703125]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L59 0L59 446L0 446L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:184',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: -19.724401297399062,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: {
                x: 224.86544799804688,
                y: 141.5366668701172,
                width: 44.656402587890625,
                height: 66.6531982421875
              },
              absoluteRenderBounds: {
                x: 224.86544799804688,
                y: 141.5366668701172,
                width: 44.656402587890625,
                height: 66.6531982421875
              },
              effects: [],
              relativeTransform: [
                [0.941326916217804, -0.33749619126319885, 24.713510513305664],
                [0.33749619126319885, 0.941326916217804, 22.7288818359375]
              ],
              absoluteTransform: [
                [0.9664141535758972, -0.2569896876811981, 240.54054260253906],
                [0.2569896876811981, 0.9664141535758972, 141.5366668701172]
              ],
              isMask: false,
              children: [
                {
                  id: '265:185',
                  name: 'Vector',
                  visible: true,
                  type: 'VECTOR',
                  rotation: -19.724401297399062,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                  opacity: 1,
                  absoluteBoundingBox: {
                    x: 224.86544799804688,
                    y: 141.5366668701172,
                    width: 44.656402587890625,
                    height: 66.6531982421875
                  },
                  absoluteRenderBounds: {
                    x: 235.0526580810547,
                    y: 144.9636688232422,
                    width: 30.547775268554688,
                    height: 59.66119384765625
                  },
                  effects: [],
                  relativeTransform: [
                    [0.941326916217804, -0.33749619126319885, 24.713510513305664],
                    [0.33749619126319885, 0.941326916217804, 22.7288818359375]
                  ],
                  absoluteTransform: [
                    [0.9664141535758972, -0.2569896876811981, 240.54054260253906],
                    [0.2569896876811981, 0.9664141535758972, 141.5366668701172]
                  ],
                  isMask: false,
                  fills: [
                    {
                      type: 'SOLID',
                      visible: true,
                      opacity: 1,
                      blendMode: 'NORMAL',
                      color: { r: 0, g: 0, b: 0 },
                      boundVariables: {}
                    }
                  ],
                  fillGeometry: [
                    {
                      windingRule: 'EVENODD',
                      data: 'M15.0138 0C23.2939 0 29.9885 8.11149 29.9885 18.1243C29.9885 27.3676 24.2776 37.9513 16.8881 39.0831L18.3268 41.6148C19.2322 43.2083 18.7232 43.6452 17.1719 43.6452L16.2275 43.6452C19.1832 51.2255 19.4377 52.9183 16.5455 60.4986C16.5455 60.7667 16.3204 60.995 16.0562 60.995L14.6028 60.995C14.3385 60.995 14.1134 60.7667 14.1134 60.4986C17.0447 52.9183 16.7168 51.2255 13.7953 43.6452L12.1706 43.6452C10.9961 43.665 11.0744 42.5133 11.5638 41.7091L13.1689 39.0831C5.74519 37.986 0 27.3875 0 18.1243C0 8.11149 6.70924 0 14.9747 0L15.0138 0ZM17.7102 6.03646C17.2943 5.80811 17.1377 5.2819 17.3628 4.85994C17.5879 4.43799 18.1066 4.27913 18.5226 4.50749C19.9564 5.29183 21.3903 6.45345 22.6431 7.76896C23.935 9.12419 25.0361 10.6482 25.7359 12.0878C25.9463 12.5197 25.7701 13.036 25.3493 13.2494C24.9235 13.4629 24.4146 13.2842 24.2042 12.8573C23.5778 11.5765 22.5844 10.2064 21.4099 8.9703C20.2794 7.77889 18.9875 6.73145 17.7102 6.03646Z'
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeCap: 'NONE',
                  strokeJoin: 'MITER',
                  strokeGeometry: [],
                  strokeAlign: 'INSIDE'
                }
              ]
            },
            {
              id: '265:186',
              name: 'Line 11',
              visible: true,
              type: 'LINE',
              rotation: -87.46923702713221,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
              opacity: 1,
              absoluteBoundingBox: {
                x: 240.00942993164062,
                y: 203.07130432128906,
                width: 46.4415283203125,
                height: 359.364990234375
              },
              absoluteRenderBounds: {
                x: 240.00942993164062,
                y: 202.94313049316406,
                width: 47.43328857421875,
                height: 359.4931640625
              },
              effects: [],
              relativeTransform: [
                [0.0441557839512825, -0.9990246295928955, 19],
                [0.9990246295928955, 0.0441557839512825, 84]
              ],
              absoluteTransform: [
                [0.12816639244556427, -0.9917526245117188, 240.00942993164062],
                [0.9917526245117188, 0.12816639244556427, 203.07130432128906]
              ],
              isMask: false,
              fills: [],
              fillGeometry: [],
              strokes: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: { r: 0, g: 0, b: 0 },
                  boundVariables: {}
                }
              ],
              strokeWeight: 1,
              strokeCap: 'NONE',
              strokeJoin: 'MITER',
              strokeGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L362.353 0L362.353 -1L0 -1L0 0Z' }],
              strokeAlign: 'CENTER'
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
        // loon 3
        {
          properties: {
            type: 'loon',
            mass: 1
          },
          id: '265:191',
          name: 'Frame 416',
          visible: !true,
          type: 'FRAME',
          rotation: -4.864856961501801,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: 'PASS_THROUGH',
          layoutAlign: 'INHERIT',
          layoutGrow: 0,
          constraints: { horizontal: 'MIN', vertical: 'MIN' },
          opacity: 1,
          absoluteBoundingBox: { x: 267.9999694824219, y: 113, width: 96.61083984375, height: 449.3968505859375 },
          absoluteRenderBounds: { x: 267.9999694824219, y: 113, width: 96.61083984375, height: 449.3968505859375 },
          effects: [],
          relativeTransform: [
            [0.9963974952697754, -0.08480578660964966, 85.8233642578125],
            [0.08480578660964966, 0.9963974952697754, 33]
          ],
          absoluteTransform: [
            [0.9963974952697754, -0.08480578660964966, 305.8233642578125],
            [0.08480578660964966, 0.9963974952697754, 113]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L59 0L59 446L0 446L0 0Z' }],
          strokes: [],
          strokeWeight: 1,
          strokeCap: 'NONE',
          strokeJoin: 'MITER',
          strokeGeometry: [],
          strokeAlign: 'INSIDE',
          children: [
            {
              id: '265:192',
              name: 'Group',
              visible: true,
              type: 'GROUP',
              rotation: 13.62152478615978,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              opacity: 1,
              absoluteBoundingBox: {
                x: 310.0020751953125,
                y: 139.28919982910156,
                width: 38.92474365234375,
                height: 64.84945678710938
              },
              absoluteRenderBounds: {
                x: 310.0020751953125,
                y: 139.28919982910156,
                width: 38.92474365234375,
                height: 64.84945678710938
              },
              effects: [],
              relativeTransform: [
                [0.9718725681304932, 0.23550723493099213, 6.780317306518555],
                [-0.23550723493099213, 0.9718725681304932, 30.389070510864258]
              ],
              absoluteTransform: [
                [0.9883437752723694, 0.1522383987903595, 310.0020751953125],
                [-0.1522383987903595, 0.9883437752723694, 143.85459899902344]
              ],
              isMask: false,
              children: [
                {
                  id: '265:193',
                  name: 'Vector',
                  visible: true,
                  type: 'VECTOR',
                  rotation: 13.62152478615978,
                  componentPropertyReferences: null,
                  boundVariables: {},
                  locked: false,
                  exportSettings: [],
                  blendMode: 'PASS_THROUGH',
                  layoutAlign: 'INHERIT',
                  layoutGrow: 0,
                  constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
                  opacity: 1,
                  absoluteBoundingBox: {
                    x: 310.0020751953125,
                    y: 139.28919982910156,
                    width: 38.92474365234375,
                    height: 64.84945678710938
                  },
                  absoluteRenderBounds: {
                    x: 312.5036315917969,
                    y: 141.42213439941406,
                    width: 30.17486572265625,
                    height: 60.498779296875
                  },
                  effects: [],
                  relativeTransform: [
                    [0.9718725681304932, 0.23550723493099213, 6.780317306518555],
                    [-0.23550723493099213, 0.9718725681304932, 30.389070510864258]
                  ],
                  absoluteTransform: [
                    [0.9883437752723694, 0.1522383987903595, 310.0020751953125],
                    [-0.1522383987903595, 0.9883437752723694, 143.85459899902344]
                  ],
                  isMask: false,
                  fills: [
                    {
                      type: 'SOLID',
                      visible: true,
                      opacity: 1,
                      blendMode: 'NORMAL',
                      color: { r: 0, g: 0, b: 0 },
                      boundVariables: {}
                    }
                  ],
                  fillGeometry: [
                    {
                      windingRule: 'EVENODD',
                      data: 'M15.0138 0C23.2939 0 29.9885 8.11149 29.9885 18.1243C29.9885 27.3676 24.2776 37.9513 16.8881 39.0831L18.3268 41.6148C19.2322 43.2083 18.7232 43.6452 17.1719 43.6452L16.2275 43.6452C19.1832 51.2255 19.4377 52.9183 16.5455 60.4986C16.5455 60.7667 16.3204 60.995 16.0562 60.995L14.6028 60.995C14.3385 60.995 14.1134 60.7667 14.1134 60.4986C17.0447 52.9183 16.7168 51.2255 13.7953 43.6452L12.1706 43.6452C10.9961 43.665 11.0744 42.5133 11.5638 41.7091L13.1689 39.0831C5.74519 37.986 0 27.3875 0 18.1243C0 8.11149 6.70924 0 14.9747 0L15.0138 0ZM17.7102 6.03646C17.2943 5.80811 17.1377 5.2819 17.3628 4.85994C17.5879 4.43799 18.1066 4.27913 18.5226 4.50749C19.9564 5.29183 21.3903 6.45345 22.6431 7.76896C23.935 9.12419 25.0361 10.6482 25.7359 12.0878C25.9463 12.5197 25.7701 13.036 25.3493 13.2494C24.9235 13.4629 24.4146 13.2842 24.2042 12.8573C23.5778 11.5765 22.5844 10.2064 21.4099 8.9703C20.2794 7.77889 18.9875 6.73145 17.7102 6.03646Z'
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeCap: 'NONE',
                  strokeJoin: 'MITER',
                  strokeGeometry: [],
                  strokeAlign: 'INSIDE'
                }
              ]
            },
            {
              id: '265:194',
              name: 'Line 11',
              visible: true,
              type: 'LINE',
              rotation: -92.36624805490547,
              componentPropertyReferences: null,
              boundVariables: {},
              locked: false,
              exportSettings: [],
              blendMode: 'PASS_THROUGH',
              layoutAlign: 'INHERIT',
              layoutGrow: 0,
              constraints: { horizontal: 'SCALE', vertical: 'SCALE' },
              opacity: 1,
              absoluteBoundingBox: {
                x: 288.92431640625,
                y: 198.75399780273438,
                width: 45.73046875,
                height: 360.4201965332031
              },
              absoluteRenderBounds: {
                x: 288.92431640625,
                y: 198.75399780273438,
                width: 46.722503662109375,
                height: 360.5460510253906
              },
              effects: [],
              relativeTransform: [
                [-0.04128707945346832, -0.9991472959518433, 36],
                [0.9991472959518433, -0.04128707945346832, 83]
              ],
              absoluteTransform: [
                [-0.12587182223796844, -0.9920464754104614, 334.65478515625],
                [0.9920464754104614, -0.12587182223796844, 198.75399780273438]
              ],
              isMask: false,
              fills: [],
              fillGeometry: [],
              strokes: [
                {
                  type: 'SOLID',
                  visible: true,
                  opacity: 1,
                  blendMode: 'NORMAL',
                  color: { r: 0, g: 0, b: 0 },
                  boundVariables: {}
                }
              ],
              strokeWeight: 1,
              strokeCap: 'NONE',
              strokeJoin: 'MITER',
              strokeGeometry: [{ windingRule: 'NONZERO', data: 'M0 0L363.31 0L363.31 -1L0 -1L0 0Z' }],
              strokeAlign: 'CENTER'
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
    },
    {
      interactions: interactionsDesc,
      id: '8:499',
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
      absoluteBoundingBox: { x: 46, y: 80, width: 249, height: 53 },
      absoluteRenderBounds: { x: 46, y: 80, width: 249, height: 53 },
      effects: [],
      relativeTransform: [
        [1, 0, 46],
        [0, 1, 80]
      ],
      absoluteTransform: [
        [1, 0, 46],
        [0, 1, 80]
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
          characters: '-',
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
      interactions: interactionsInc,
      id: '8:399',
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
      absoluteBoundingBox: { x: 106, y: 80, width: 249, height: 53 },
      absoluteRenderBounds: { x: 106, y: 80, width: 249, height: 53 },
      effects: [],
      relativeTransform: [
        [1, 0, 106],
        [0, 1, 80]
      ],
      absoluteTransform: [
        [1, 0, 106],
        [0, 1, 80]
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
          characters: '+',
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
      interactions: interactionsDesc2,
      id: '8:299',
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
      absoluteBoundingBox: { x: 236, y: 80, width: 249, height: 53 },
      absoluteRenderBounds: { x: 236, y: 80, width: 249, height: 53 },
      effects: [],
      relativeTransform: [
        [1, 0, 236],
        [0, 1, 80]
      ],
      absoluteTransform: [
        [1, 0, 236],
        [0, 1, 80]
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
          characters: '-',
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
      interactions: interactionsInc2,
      id: '8:199',
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
      absoluteBoundingBox: { x: 296, y: 80, width: 249, height: 53 },
      absoluteRenderBounds: { x: 296, y: 80, width: 249, height: 53 },
      effects: [],
      relativeTransform: [
        [1, 0, 296],
        [0, 1, 80]
      ],
      absoluteTransform: [
        [1, 0, 296],
        [0, 1, 80]
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
          characters: '+',
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
};

export default balloon;
