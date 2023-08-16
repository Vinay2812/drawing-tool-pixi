 export default {
  id: "6:145",
  name: "Landing Page -- Activity",
  visible: true,
  type: "FRAME",
  rotation: 0,
  componentPropertyReferences: null,
  boundVariables: {},
  locked: false,
  exportSettings: [
    {
      format: "PNG",
      suffix: "",
      contentsOnly: true,
      colorProfile: "DOCUMENT",
      constraint: {
        type: "SCALE",
        value: 1
      }
    }
  ],
  blendMode: "PASS_THROUGH",
  layoutAlign: "INHERIT",
  layoutGrow: 0,
  constraints: {
    horizontal: "MIN",
    vertical: "MIN"
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
    [
      1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ]
  ],
  absoluteTransform: [
    [
      1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ]
  ],
  isMask: false,
  fills: [
    {
      type: "GRADIENT_LINEAR",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
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
        [
          6.123234262925839e-17,
          1,
          0
        ],
        [
          -1,
          6.123234262925839e-17,
          1
        ]
      ]
    }
  ],
  fillGeometry: [
    {
      windingRule: "NONZERO",
      data: "M0 0L360 0L360 720L0 720L0 0Z"
    }
  ],
  strokes: [],
  strokeWeight: 1,
  strokeCap: "NONE",
  strokeJoin: "MITER",
  strokeGeometry: [],
  strokeAlign: "INSIDE",
  children: [
    {
      id: "6:146",
      name: "Rectangle 185",
      visible: true,
      type: "RECTANGLE",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: -1,
        y: 142,
        width: 360,
        height: 379
      },
      absoluteRenderBounds: {
        x: 0,
        y: 142,
        width: 359,
        height: 379
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          -1
        ],
        [
          0,
          1,
          142
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          -1
        ],
        [
          0,
          1,
          142
        ]
      ],
      isMask: false,
      fills: [
        {
          type: "SOLID",
          visible: true,
          opacity: 0.20000000298023224,
          blendMode: "NORMAL",
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
          windingRule: "NONZERO",
          data: "M0 0L360 0L360 379L0 379L0 0Z"
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: "NONE",
      strokeJoin: "MITER",
      strokeGeometry: [],
      strokeAlign: "INSIDE",
      cornerRadius: 0,
      cornerSmoothing: 0,
      children: []
    },
    {
      id: "6:147",
      name: "5 cm",
      visible: true,
      type: "TEXT",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 164,
        y: 398,
        width: 33,
        height: 21
      },
      absoluteRenderBounds: {
        x: 164.88900756835938,
        y: 401.67498779296875,
        width: 30.76171875,
        height: 10.46502685546875
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          164
        ],
        [
          0,
          1,
          398
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          164
        ],
        [
          0,
          1,
          398
        ]
      ],
      isMask: false,
      fills: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
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
          windingRule: "NONZERO",
          data: "M6.671 4.718L2.639 4.718L2.275 8.12C2.289 8.064 2.33567 7.98933 2.415 7.896C2.499 7.80267 2.62033 7.707 2.779 7.609C2.94233 7.511 3.14533 7.42933 3.388 7.364C3.63067 7.29867 3.91533 7.266 4.242 7.266C5.09133 7.266 5.73533 7.56933 6.174 8.176C6.61733 8.78267 6.839 9.583 6.839 10.577C6.839 11.3423 6.72 11.991 6.482 12.523C6.24867 13.055 5.91033 13.4587 5.467 13.734C5.02367 14.0047 4.487 14.14 3.857 14.14C3.34833 14.14 2.905 14.0653 2.527 13.916C2.15367 13.762 1.84567 13.5473 1.603 13.272C1.365 12.9967 1.18533 12.6747 1.064 12.306C0.947333 11.9373 0.889 11.5337 0.889 11.095C0.889 11.0903 0.889 11.088 0.889 11.088C0.889 11.0833 0.889 11.0787 0.889 11.074L2.072 11.074C2.072 11.0787 2.072 11.0833 2.072 11.088C2.072 11.088 2.072 11.0903 2.072 11.095C2.07667 11.7997 2.23533 12.3083 2.548 12.621C2.86533 12.9337 3.30633 13.09 3.871 13.09C4.235 13.09 4.54767 12.999 4.809 12.817C5.075 12.635 5.278 12.3597 5.418 11.991C5.56267 11.6223 5.635 11.158 5.635 10.598C5.635 9.85133 5.49733 9.28433 5.222 8.897C4.95133 8.50967 4.55233 8.316 4.025 8.316C3.68433 8.316 3.38567 8.38367 3.129 8.519C2.87233 8.64967 2.66 8.81067 2.492 9.002C2.32867 9.19333 2.212 9.37533 2.142 9.548L0.994 9.254L1.631 3.675L6.671 3.675L6.671 4.718ZM16.0424 14.14C15.333 14.14 14.689 13.986 14.1104 13.678C13.5317 13.3653 13.072 12.9197 12.7314 12.341C12.3954 11.7623 12.2274 11.074 12.2274 10.276C12.2274 9.478 12.3954 8.79433 12.7314 8.225C13.072 7.651 13.5317 7.21233 14.1104 6.909C14.689 6.60567 15.333 6.454 16.0424 6.454C16.5837 6.454 17.0667 6.538 17.4914 6.706C17.916 6.86933 18.2754 7.08867 18.5694 7.364C18.8634 7.63933 19.0874 7.94267 19.2414 8.274C19.4 8.60067 19.4794 8.92733 19.4794 9.254C19.4794 9.25867 19.4794 9.26567 19.4794 9.275C19.4794 9.28433 19.4794 9.29367 19.4794 9.303L18.2964 9.303C18.2964 9.27967 18.294 9.254 18.2894 9.226C18.2847 9.19333 18.28 9.16067 18.2754 9.128C18.238 8.81533 18.119 8.54233 17.9184 8.309C17.7177 8.071 17.4564 7.88433 17.1344 7.749C16.8124 7.61367 16.446 7.546 16.0354 7.546C15.5734 7.546 15.144 7.64633 14.7474 7.847C14.3554 8.043 14.038 8.344 13.7954 8.75C13.5574 9.15133 13.4384 9.66 13.4384 10.276C13.4384 10.8873 13.5574 11.3983 13.7954 11.809C14.0334 12.2197 14.3484 12.53 14.7404 12.74C15.137 12.9453 15.5687 13.048 16.0354 13.048C16.5394 13.048 16.9547 12.9687 17.2814 12.81C17.608 12.6513 17.853 12.4413 18.0164 12.18C18.1844 11.914 18.2777 11.6293 18.2964 11.326L19.4794 11.326C19.4794 11.662 19.4047 11.998 19.2554 12.334C19.106 12.6653 18.8867 12.9687 18.5974 13.244C18.308 13.5147 17.9487 13.7317 17.5194 13.895C17.0947 14.0583 16.6024 14.14 16.0424 14.14ZM25.9037 14L25.9037 10.717C25.9037 10.4277 25.9037 10.178 25.9037 9.968C25.9037 9.75333 25.9037 9.57367 25.9037 9.429C25.9037 9.247 25.8897 9.051 25.8617 8.841C25.8384 8.62633 25.7801 8.42567 25.6867 8.239C25.5934 8.04767 25.4464 7.89133 25.2457 7.77C25.0497 7.64867 24.7767 7.588 24.4267 7.588C24.0721 7.588 23.7734 7.658 23.5307 7.798C23.2881 7.93333 23.0921 8.113 22.9427 8.337C22.7934 8.561 22.6861 8.80833 22.6207 9.079C22.5554 9.345 22.5227 9.60867 22.5227 9.87L21.8507 9.597C21.8507 9.037 21.9674 8.519 22.2007 8.043C22.4341 7.567 22.7607 7.18433 23.1807 6.895C23.6054 6.601 24.1024 6.454 24.6717 6.454C25.2364 6.454 25.6961 6.56833 26.0507 6.797C26.4054 7.02567 26.6667 7.34067 26.8347 7.742C27.0027 8.14333 27.0867 8.60533 27.0867 9.128C27.0867 9.31467 27.0867 9.555 27.0867 9.849C27.0867 10.1383 27.0867 10.4697 27.0867 10.843L27.0867 14L25.9037 14ZM21.3327 14L21.3327 6.566L22.5227 6.566L22.5227 14L21.3327 14ZM30.4607 14L30.4607 10.717C30.4607 10.3997 30.4607 10.1383 30.4607 9.933C30.4607 9.723 30.4607 9.54567 30.4607 9.401C30.4607 9.219 30.4491 9.023 30.4257 8.813C30.4024 8.603 30.3441 8.407 30.2507 8.225C30.1574 8.03833 30.0081 7.88667 29.8027 7.77C29.6021 7.64867 29.3197 7.588 28.9557 7.588C28.5964 7.588 28.2954 7.65567 28.0527 7.791C27.8147 7.92633 27.6234 8.10367 27.4787 8.323C27.3387 8.54233 27.2384 8.78033 27.1777 9.037C27.1171 9.289 27.0867 9.53167 27.0867 9.765L26.4147 9.506C26.4147 8.974 26.5267 8.477 26.7507 8.015C26.9794 7.54833 27.3014 7.17267 27.7167 6.888C28.1367 6.59867 28.6337 6.454 29.2077 6.454C29.7444 6.454 30.1924 6.559 30.5517 6.769C30.9157 6.979 31.1887 7.27533 31.3707 7.658C31.5574 8.036 31.6507 8.48633 31.6507 9.009C31.6507 9.205 31.6507 9.44767 31.6507 9.737C31.6507 10.0263 31.6507 10.353 31.6507 10.717L31.6507 14L30.4607 14Z"
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: "NONE",
      strokeJoin: "MITER",
      strokeGeometry: [],
      strokeAlign: "OUTSIDE",
      characters: "5 cm",
      fontName: {
        family: "Epilogue",
        style: "Regular"
      },
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: {
        unit: "PERCENT",
        value: 0
      },
      lineHeight: {
        unit: "PERCENT",
        value: 150
      },
      listSpacing: 0,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      textAlignHorizontal: "LEFT",
      textAlignVertical: "TOP",
      textAutoResize: "WIDTH_AND_HEIGHT",
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      textStyleId: ""
    },
    {
      id: "6:148",
      name: "A",
      visible: true,
      type: "TEXT",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 82,
        y: 398,
        width: 9,
        height: 21
      },
      absoluteRenderBounds: {
        x: 82.5459976196289,
        y: 401.6470031738281,
        width: 7.525001525878906,
        height: 10.352996826171875
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          82
        ],
        [
          0,
          1,
          398
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          82
        ],
        [
          0,
          1,
          398
        ]
      ],
      isMask: false,
      fills: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
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
          windingRule: "NONZERO",
          data: "M0.546 14L3.388 3.647L5.25 3.647L8.071 14L6.839 14L4.312 4.424L4.326 4.424L1.778 14L0.546 14ZM2.016 11.263L2.016 10.213L6.622 10.213L6.622 11.263L2.016 11.263Z"
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: "NONE",
      strokeJoin: "MITER",
      strokeGeometry: [],
      strokeAlign: "OUTSIDE",
      characters: "A",
      fontName: {
        family: "Epilogue",
        style: "Regular"
      },
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: {
        unit: "PERCENT",
        value: 0
      },
      lineHeight: {
        unit: "PERCENT",
        value: 150
      },
      listSpacing: 0,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      textAlignHorizontal: "LEFT",
      textAlignVertical: "TOP",
      textAutoResize: "WIDTH_AND_HEIGHT",
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      textStyleId: ""
    },
    {
      id: "6:149",
      name: "B",
      visible: true,
      type: "TEXT",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 267,
        y: 398,
        width: 9,
        height: 21
      },
      absoluteRenderBounds: {
        x: 267.98699951171875,
        y: 401.67498779296875,
        width: 6.657012939453125,
        height: 10.32501220703125
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          267
        ],
        [
          0,
          1,
          398
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          267
        ],
        [
          0,
          1,
          398
        ]
      ],
      isMask: false,
      fills: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
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
          windingRule: "NONZERO",
          data: "M4.417 3.675C5.05633 3.675 5.59767 3.76367 6.041 3.941C6.489 4.11367 6.82967 4.382 7.063 4.746C7.301 5.11 7.42 5.572 7.42 6.132C7.42 6.664 7.31033 7.10967 7.091 7.469C6.87633 7.82367 6.59867 8.09433 6.258 8.281C5.922 8.463 5.572 8.56333 5.208 8.582C5.60467 8.59133 5.98967 8.68233 6.363 8.855C6.73633 9.023 7.042 9.29367 7.28 9.667C7.52267 10.0357 7.644 10.528 7.644 11.144C7.644 11.746 7.52267 12.2617 7.28 12.691C7.042 13.1157 6.68033 13.44 6.195 13.664C5.70967 13.888 5.09833 14 4.361 14L0.987 14L0.987 3.675L4.417 3.675ZM2.142 8.505L1.736 8.099L3.857 8.099C4.60367 8.099 5.18467 7.94967 5.6 7.651C6.01533 7.34767 6.223 6.902 6.223 6.314C6.223 5.922 6.13667 5.61167 5.964 5.383C5.79133 5.14967 5.54633 4.98167 5.229 4.879C4.91633 4.77633 4.55 4.725 4.13 4.725L1.603 4.725L2.142 4.046L2.142 8.505ZM4.13 12.95C4.83933 12.95 5.39933 12.7937 5.81 12.481C6.22067 12.1683 6.426 11.7017 6.426 11.081C6.426 10.703 6.35833 10.3903 6.223 10.143C6.08767 9.891 5.90333 9.69267 5.67 9.548C5.43667 9.40333 5.16833 9.30067 4.865 9.24C4.56633 9.17467 4.25133 9.142 3.92 9.142L1.736 9.142L2.142 8.736L2.142 13.629L1.603 12.95L4.13 12.95Z"
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: "NONE",
      strokeJoin: "MITER",
      strokeGeometry: [],
      strokeAlign: "OUTSIDE",
      characters: "B",
      fontName: {
        family: "Epilogue",
        style: "Regular"
      },
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: {
        unit: "PERCENT",
        value: 0
      },
      lineHeight: {
        unit: "PERCENT",
        value: 150
      },
      listSpacing: 0,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      textAlignHorizontal: "LEFT",
      textAlignVertical: "TOP",
      textAutoResize: "WIDTH_AND_HEIGHT",
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      textStyleId: ""
    },
    {
      id: "6:150",
      name: "C",
      visible: true,
      type: "TEXT",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 188,
        y: 255,
        width: 10,
        height: 21
      },
      absoluteRenderBounds: {
        x: 188.70700073242188,
        y: 258.54901123046875,
        width: 7.8610076904296875,
        height: 10.59100341796875
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          188
        ],
        [
          0,
          1,
          255
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          188
        ],
        [
          0,
          1,
          255
        ]
      ],
      isMask: false,
      fills: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
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
          windingRule: "NONZERO",
          data: "M8.568 10.409C8.568 10.8243 8.491 11.2513 8.337 11.69C8.183 12.124 7.94967 12.5277 7.637 12.901C7.329 13.2697 6.93933 13.5683 6.468 13.797C5.99667 14.0257 5.44367 14.14 4.809 14.14C3.93633 14.14 3.19433 13.9137 2.583 13.461C1.97167 13.0037 1.505 12.376 1.183 11.578C0.865667 10.78 0.707 9.86767 0.707 8.841C0.707 7.80967 0.865667 6.89733 1.183 6.104C1.505 5.306 1.97167 4.68067 2.583 4.228C3.19433 3.77533 3.93633 3.549 4.809 3.549C5.537 3.549 6.15767 3.69833 6.671 3.997C7.18433 4.29567 7.59267 4.676 7.896 5.138C8.19933 5.6 8.39767 6.076 8.491 6.566C8.54233 6.81333 8.568 7.04667 8.568 7.266L7.371 7.266C7.371 7.14 7.35933 6.99533 7.336 6.832C7.28 6.44 7.14467 6.07833 6.93 5.747C6.72 5.411 6.43767 5.14267 6.083 4.942C5.72833 4.73667 5.30367 4.634 4.809 4.634C4.23033 4.634 3.724 4.79267 3.29 5.11C2.86067 5.42733 2.52467 5.89867 2.282 6.524C2.044 7.14933 1.925 7.92167 1.925 8.841C1.925 9.76033 2.044 10.535 2.282 11.165C2.52467 11.7903 2.86067 12.264 3.29 12.586C3.724 12.9033 4.23033 13.062 4.809 13.062C5.22433 13.062 5.59067 12.9873 5.908 12.838C6.22533 12.684 6.49133 12.481 6.706 12.229C6.92533 11.9723 7.091 11.6877 7.203 11.375C7.315 11.0577 7.371 10.7357 7.371 10.409L8.568 10.409Z"
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: "NONE",
      strokeJoin: "MITER",
      strokeGeometry: [],
      strokeAlign: "OUTSIDE",
      characters: "C",
      fontName: {
        family: "Epilogue",
        style: "Regular"
      },
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: {
        unit: "PERCENT",
        value: 0
      },
      lineHeight: {
        unit: "PERCENT",
        value: 150
      },
      listSpacing: 0,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      textAlignHorizontal: "LEFT",
      textAlignVertical: "TOP",
      textAutoResize: "WIDTH_AND_HEIGHT",
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      textStyleId: ""
    },
    {
      id: "6:151",
      name: "45°",
      visible: true,
      type: "TEXT",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 118,
        y: 366,
        width: 21,
        height: 21
      },
      absoluteRenderBounds: {
        x: 118.44100189208984,
        y: 369.3739929199219,
        width: 18.802650451660156,
        height: 10.766021728515625
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          118
        ],
        [
          0,
          1,
          366
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          118
        ],
        [
          0,
          1,
          366
        ]
      ],
      isMask: false,
      fills: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
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
          windingRule: "NONZERO",
          data: "M4.585 14L4.585 11.676L0.441 11.676L0.441 10.717L4.123 3.64L5.754 3.64L5.754 10.626L7.147 10.626L7.147 11.676L5.754 11.676L5.754 14L4.585 14ZM1.477 11.27L1.085 10.626L4.585 10.626L4.585 4.466L4.886 4.536L1.477 11.27ZM14.4503 4.718L10.4183 4.718L10.0543 8.12C10.0683 8.064 10.115 7.98933 10.1943 7.896C10.2783 7.80267 10.3996 7.707 10.5583 7.609C10.7216 7.511 10.9246 7.42933 11.1673 7.364C11.41 7.29867 11.6946 7.266 12.0213 7.266C12.8706 7.266 13.5146 7.56933 13.9533 8.176C14.3966 8.78267 14.6183 9.583 14.6183 10.577C14.6183 11.3423 14.4993 11.991 14.2613 12.523C14.028 13.055 13.6896 13.4587 13.2463 13.734C12.803 14.0047 12.2663 14.14 11.6363 14.14C11.1276 14.14 10.6843 14.0653 10.3063 13.916C9.93296 13.762 9.62496 13.5473 9.3823 13.272C9.1443 12.9967 8.96463 12.6747 8.8433 12.306C8.72663 11.9373 8.6683 11.5337 8.6683 11.095C8.6683 11.0903 8.6683 11.088 8.6683 11.088C8.6683 11.0833 8.6683 11.0787 8.6683 11.074L9.8513 11.074C9.8513 11.0787 9.8513 11.0833 9.8513 11.088C9.8513 11.088 9.8513 11.0903 9.8513 11.095C9.85596 11.7997 10.0146 12.3083 10.3273 12.621C10.6446 12.9337 11.0856 13.09 11.6503 13.09C12.0143 13.09 12.327 12.999 12.5883 12.817C12.8543 12.635 13.0573 12.3597 13.1973 11.991C13.342 11.6223 13.4143 11.158 13.4143 10.598C13.4143 9.85133 13.2766 9.28433 13.0013 8.897C12.7306 8.50967 12.3316 8.316 11.8043 8.316C11.4636 8.316 11.165 8.38367 10.9083 8.519C10.6516 8.64967 10.4393 8.81067 10.2713 9.002C10.108 9.19333 9.9913 9.37533 9.9213 9.548L8.7733 9.254L9.4103 3.675L14.4503 3.675L14.4503 4.718ZM17.8927 5.509C18.112 5.509 18.2987 5.43433 18.4527 5.285C18.6067 5.131 18.6837 4.94433 18.6837 4.725C18.6837 4.50567 18.6067 4.32133 18.4527 4.172C18.2987 4.018 18.112 3.941 17.8927 3.941C17.678 3.941 17.4937 4.018 17.3397 4.172C17.1857 4.32133 17.1087 4.50567 17.1087 4.725C17.1087 4.94433 17.1857 5.131 17.3397 5.285C17.4937 5.43433 17.678 5.509 17.8927 5.509ZM17.8927 6.076C17.6453 6.076 17.419 6.01533 17.2137 5.894C17.0083 5.77267 16.845 5.60933 16.7237 5.404C16.6023 5.19867 16.5417 4.97233 16.5417 4.725C16.5417 4.47767 16.6023 4.25133 16.7237 4.046C16.845 3.84067 17.0083 3.67733 17.2137 3.556C17.419 3.43467 17.6453 3.374 17.8927 3.374C18.1447 3.374 18.371 3.43467 18.5717 3.556C18.777 3.67733 18.9403 3.84067 19.0617 4.046C19.183 4.25133 19.2437 4.47767 19.2437 4.725C19.2437 4.97233 19.183 5.19867 19.0617 5.404C18.9403 5.60933 18.777 5.77267 18.5717 5.894C18.371 6.01533 18.1447 6.076 17.8927 6.076Z"
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: "NONE",
      strokeJoin: "MITER",
      strokeGeometry: [],
      strokeAlign: "OUTSIDE",
      characters: "45°",
      fontName: {
        family: "Epilogue",
        style: "Regular"
      },
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: {
        unit: "PERCENT",
        value: 0
      },
      lineHeight: {
        unit: "PERCENT",
        value: 150
      },
      listSpacing: 0,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      textAlignHorizontal: "LEFT",
      textAlignVertical: "TOP",
      textAutoResize: "WIDTH_AND_HEIGHT",
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      textStyleId: ""
    },
    {
      id: "6:152",
      name: "Frame 406",
      visible: true,
      type: "FRAME",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "CENTER",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 0,
        y: 637,
        width: 360,
        height: 125
      },
      absoluteRenderBounds: {
        x: 0,
        y: 619,
        width: 360,
        height: 101
      },
      effects: [
        {
          type: "DROP_SHADOW",
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.1599999964237213
          },
          offset: {
            x: -2,
            y: -2
          },
          radius: 16,
          spread: 0,
          visible: true,
          blendMode: "NORMAL",
          showShadowBehindNode: false
        }
      ],
      relativeTransform: [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          637
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          637
        ]
      ],
      isMask: false,
      fills: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          color: {
            r: 0.9882352948188782,
            g: 0.9647058844566345,
            b: 0.843137264251709
          },
          boundVariables: {}
        }
      ],
      fillGeometry: [
        {
          windingRule: "NONZERO",
          data: "M0 16C0 7.16345 7.16344 0 16 0L344 0C352.837 0 360 7.16344 360 16L360 125L0 125L0 16Z"
        }
      ],
      strokes: [],
      strokeWeight: 1,
      strokeCap: "NONE",
      strokeJoin: "MITER",
      strokeGeometry: [],
      strokeAlign: "INSIDE",
      children: [
        {
          id: "6:153",
          name: "Line 5",
          visible: true,
          type: "VECTOR",
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: "PASS_THROUGH",
          layoutAlign: "INHERIT",
          layoutGrow: 0,
          constraints: {
            horizontal: "MIN",
            vertical: "MIN"
          },
          opacity: 1,
          absoluteBoundingBox: {
            x: 52,
            y: 677,
            width: 40,
            height: 0
          },
          absoluteRenderBounds: {
            x: 49.33333206176758,
            y: 674.3333129882812,
            width: 45.33333969116211,
            height: 5.3333740234375
          },
          effects: [],
          relativeTransform: [
            [
              1,
              0,
              52
            ],
            [
              0,
              1,
              40
            ]
          ],
          absoluteTransform: [
            [
              1,
              0,
              52
            ],
            [
              0,
              1,
              677
            ]
          ],
          isMask: false,
          fills: [],
          fillGeometry: [],
          strokes: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.30980393290519714,
                g: 0.30980393290519714,
                b: 0.30980393290519714
              },
              boundVariables: {}
            }
          ],
          strokeWeight: 1,
          strokeCap: "CIRCLE_FILLED",
          strokeJoin: "MITER",
          strokeGeometry: [
            {
              windingRule: "NONZERO",
              data: "M-2.66667 0C-2.66667 1.47276 -1.47276 2.66667 0 2.66667C1.47276 2.66667 2.66667 1.47276 2.66667 0C2.66667 -1.47276 1.47276 -2.66667 0 -2.66667C-1.47276 -2.66667 -2.66667 -1.47276 -2.66667 0ZM37.3333 0C37.3333 1.47276 38.5272 2.66667 40 2.66667C41.4728 2.66667 42.6667 1.47276 42.6667 0C42.6667 -1.47276 41.4728 -2.66667 40 -2.66667C38.5272 -2.66667 37.3333 -1.47276 37.3333 0ZM0 0.5L40 0.5L40 -0.5L0 -0.5L0 0.5Z"
            }
          ],
          strokeAlign: "CENTER"
        },
        {
          id: "6:154",
          name: "Ellipse 28",
          visible: true,
          type: "ELLIPSE",
          rotation: 0,
          componentPropertyReferences: null,
          boundVariables: {},
          locked: false,
          exportSettings: [],
          blendMode: "PASS_THROUGH",
          layoutAlign: "INHERIT",
          layoutGrow: 0,
          constraints: {
            horizontal: "MIN",
            vertical: "MIN"
          },
          opacity: 1,
          absoluteBoundingBox: {
            x: 180,
            y: 661,
            width: 32,
            height: 32
          },
          absoluteRenderBounds: {
            x: 180,
            y: 661,
            width: 32,
            height: 32
          },
          effects: [],
          relativeTransform: [
            [
              1,
              0,
              180
            ],
            [
              0,
              1,
              24
            ]
          ],
          absoluteTransform: [
            [
              1,
              0,
              180
            ],
            [
              0,
              1,
              661
            ]
          ],
          isMask: false,
          fills: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.9882352948188782,
                g: 0.9647058844566345,
                b: 0.843137264251709
              },
              boundVariables: {}
            }
          ],
          fillGeometry: [
            {
              windingRule: "NONZERO",
              data: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
            }
          ],
          strokes: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0,
                g: 0,
                b: 0
              },
              boundVariables: {}
            }
          ],
          strokeWeight: 1,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          strokeGeometry: [
            {
              windingRule: "NONZERO",
              data: "M31 16C31 24.2843 24.2843 31 16 31L16 33C25.3888 33 33 25.3888 33 16L31 16ZM16 31C7.71573 31 1 24.2843 1 16L-1 16C-1 25.3888 6.61116 33 16 33L16 31ZM1 16C1 7.71573 7.71573 1 16 1L16 -1C6.61116 -1 -1 6.61116 -1 16L1 16ZM16 1C24.2843 1 31 7.71573 31 16L33 16C33 6.61116 25.3888 -1 16 -1L16 1Z"
            }
          ],
          strokeAlign: "INSIDE",
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
      layoutMode: "NONE",
      layoutWrap: "NO_WRAP",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "CENTER",
      counterAxisAlignItems: "MIN",
      counterAxisAlignContent: "AUTO",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 16,
      paddingBottom: 0,
      horizontalPadding: 0,
      verticalPadding: 16,
      itemSpacing: 80,
      counterAxisSpacing: 0,
      layoutPositioning: "AUTO",
      itemReverseZIndex: false,
      strokesIncludedInLayout: false,
      layoutGrids: [],
      overflowDirection: "NONE"
    },
    {
      id: "6:155",
      name: "Line 6",
      visible: true,
      type: "VECTOR",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 92,
        y: 388,
        width: 175,
        height: 0
      },
      absoluteRenderBounds: {
        x: 89.33333587646484,
        y: 385.3333435058594,
        width: 180.33334350585938,
        height: 5.33331298828125
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          92
        ],
        [
          0,
          1,
          388
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          92
        ],
        [
          0,
          1,
          388
        ]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [],
      strokes: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          color: {
            r: 0.30980393290519714,
            g: 0.30980393290519714,
            b: 0.30980393290519714
          },
          boundVariables: {}
        }
      ],
      strokeWeight: 1,
      strokeCap: "CIRCLE_FILLED",
      strokeJoin: "MITER",
      strokeGeometry: [
        {
          windingRule: "NONZERO",
          data: "M-2.66667 0C-2.66667 1.47276 -1.47276 2.66667 0 2.66667C1.47276 2.66667 2.66667 1.47276 2.66667 0C2.66667 -1.47276 1.47276 -2.66667 0 -2.66667C-1.47276 -2.66667 -2.66667 -1.47276 -2.66667 0ZM172.333 0C172.333 1.47276 173.527 2.66667 175 2.66667C176.473 2.66667 177.667 1.47276 177.667 0C177.667 -1.47276 176.473 -2.66667 175 -2.66667C173.527 -2.66667 172.333 -1.47276 172.333 0ZM0 0.5L175 0.5L175 -0.5L0 -0.5L0 0.5Z"
        }
      ],
      strokeAlign: "CENTER"
    },
    {
      id: "6:156",
      name: "Line 7",
      visible: true,
      type: "VECTOR",
      rotation: 45,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 92,
        y: 276,
        width: 112,
        height: 112
      },
      absoluteRenderBounds: {
        x: 89.33333587646484,
        y: 273.3333435058594,
        width: 117.33333587646484,
        height: 117.33331298828125
      },
      effects: [],
      relativeTransform: [
        [
          0.7071067690849304,
          0.7071067690849304,
          92
        ],
        [
          -0.7071067690849304,
          0.7071067690849304,
          388
        ]
      ],
      absoluteTransform: [
        [
          0.7071067690849304,
          0.7071067690849304,
          92
        ],
        [
          -0.7071067690849304,
          0.7071067690849304,
          388
        ]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [],
      strokes: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          color: {
            r: 0.30980393290519714,
            g: 0.30980393290519714,
            b: 0.30980393290519714
          },
          boundVariables: {}
        },
        {
          type: "IMAGE",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          scaleMode: "FILL",
          imageTransform: [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ],
          scalingFactor: 0.5,
          rotation: 0,
          filters: {
            exposure: 0,
            contrast: 0,
            saturation: 0,
            temperature: 0,
            tint: 0,
            highlights: 0,
            shadows: 0
          },
          imageHash: "dab615a6d68e5ca94e699853279717cb90541aac"
        }
      ],
      strokeWeight: 1,
      strokeCap: "CIRCLE_FILLED",
      strokeJoin: "MITER",
      strokeGeometry: [
        {
          windingRule: "NONZERO",
          data: "M-2.66667 0C-2.66667 1.47276 -1.47276 2.66667 0 2.66667C1.47276 2.66667 2.66667 1.47276 2.66667 0C2.66667 -1.47276 1.47276 -2.66667 0 -2.66667C-1.47276 -2.66667 -2.66667 -1.47276 -2.66667 0ZM155.725 0C155.725 1.47276 156.919 2.66667 158.392 2.66667C159.865 2.66667 161.059 1.47276 161.059 0C161.059 -1.47276 159.865 -2.66667 158.392 -2.66667C156.919 -2.66667 155.725 -1.47276 155.725 0ZM0 0.5L158.392 0.5L158.392 -0.5L0 -0.5L0 0.5Z"
        }
      ],
      strokeAlign: "CENTER"
    },
    {
      id: "6:157",
      name: "Vector 12",
      visible: true,
      type: "VECTOR",
      rotation: 0,
      componentPropertyReferences: null,
      boundVariables: {},
      locked: false,
      exportSettings: [],
      blendMode: "PASS_THROUGH",
      layoutAlign: "INHERIT",
      layoutGrow: 0,
      constraints: {
        horizontal: "MIN",
        vertical: "MIN"
      },
      opacity: 1,
      absoluteBoundingBox: {
        x: 107.07782745361328,
        y: 374.2259216308594,
        width: 6.918388366699219,
        height: 12.914337158203125
      },
      absoluteRenderBounds: {
        x: 106.57782745361328,
        y: 373.7259216308594,
        width: 7.918388366699219,
        height: 13.914337158203125
      },
      effects: [],
      relativeTransform: [
        [
          1,
          0,
          107.07782745361328
        ],
        [
          0,
          1,
          374.2259216308594
        ]
      ],
      absoluteTransform: [
        [
          1,
          0,
          107.07782745361328
        ],
        [
          0,
          1,
          374.2259216308594
        ]
      ],
      isMask: false,
      fills: [],
      fillGeometry: [],
      strokes: [
        {
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          color: {
            r: 0,
            g: 0,
            b: 0
          },
          boundVariables: {}
        }
      ],
      strokeWeight: 1,
      strokeCap: "ROUND",
      strokeJoin: "MITER",
      strokeGeometry: [
        {
          windingRule: "NONZERO",
          data: "M0 -0.5C-0.276142 -0.5 -0.5 -0.276142 -0.5 0C-0.5 0.276142 -0.276142 0.5 0 0.5L0 -0.5ZM6.41839 12.9143C6.41839 13.1905 6.64225 13.4143 6.91839 13.4143C7.19453 13.4143 7.41839 13.1905 7.41839 12.9143L6.41839 12.9143ZM0 0.5C2.3801 0.5 3.992 2.46252 5.02868 5.16317C6.05216 7.82942 6.41839 10.9942 6.41839 12.9143L7.41839 12.9143C7.41839 10.906 7.04045 7.61359 5.96226 4.8048C4.89726 2.0304 3.04996 -0.5 0 -0.5L0 0.5Z"
        }
      ],
      strokeAlign: "CENTER"
    }
  ],
  cornerSmoothing: 0,
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  clipsContent: true,
  layoutMode: "NONE",
  layoutWrap: "NO_WRAP",
  primaryAxisSizingMode: "FIXED",
  counterAxisSizingMode: "FIXED",
  primaryAxisAlignItems: "MIN",
  counterAxisAlignItems: "MIN",
  counterAxisAlignContent: "AUTO",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  horizontalPadding: 0,
  verticalPadding: 0,
  itemSpacing: 0,
  counterAxisSpacing: 0,
  layoutPositioning: "AUTO",
  itemReverseZIndex: false,
  strokesIncludedInLayout: false,
  layoutGrids: [],
  overflowDirection: "VERTICAL"
}