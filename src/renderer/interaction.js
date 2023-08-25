import get from 'lodash/get';
import set from 'lodash/set';
import * as math from 'mathjs';

export const attachInteraction = ({
  interaction,
  pixiObject,
  originalJson,
  setAnimationType,
  setFigmaJson,
  path,
  dragTarget
}) => {
  switch (interaction.event) {
    case 'ON_CLICK':
      pixiObject.eventMode = 'static';
      pixiObject.cursor = 'pointer';

      pixiObject.on('mousedown', function (e) {
        interaction.effects.forEach(effect => {
          switch (effect.type) {
            case 'UPDATE_VARIABLE':
              switch (effect.valueType) {
                case 'constant':
                  set(originalJson, effect.variable, effect.constant);
                  break;

                case 'COMPUTE_FUNCTION':
                  executeComputeFunction({ effect, originalJson });
                  break;

                default:
              }
              break;

            case 'TOGGLE_ANIMATION':
              setAnimationType(effect.config.animation);
              break;
            default:
          }
        });

        if (!interaction?.effects?.filter(i => i.type === 'TOGGLE_ANIMATION')?.length) setFigmaJson(originalJson);
      });

      break;
    case 'ON_DRAG':
      interaction.effects?.forEach(effect => {
        switch (effect.type) {
          case 'UPDATE_VARIABLE':
            const varIndex = originalJson.variables?.findIndex(i => i.name === effect.config?.variableName);
            if (varIndex === -1) break;
            if (!dragTarget) break;
            switch (effect.valueType) {
              case 'LAYER_PROPERTY':
                executeDragLayerProperty({ originalJson, path, dragTarget, effect, varIndex, init: true });
                break;

              case 'COMPUTE_FUNCTION':
                executeComputeFunction({ effect, originalJson });
                break;
              default:
            }

            break;
          default:
        }
      });
      break;

    default:
      interaction.effects?.forEach(effect => {
        switch (effect.type) {
          case 'UPDATE_VARIABLE':
            const varIndex = originalJson.variables?.findIndex(i => i.name === effect.config?.variableName);
            if (varIndex === -1) break;
            if (!dragTarget) break;

            switch (effect.valueType) {
              case 'LAYER_PROPERTY':
                executeDragLayerProperty({ originalJson, path, dragTarget, effect, varIndex, init: false });
                break;

              case 'COMPUTE_FUNCTION':
                executeComputeFunction({ effect, originalJson });
                if (interaction.event === 'ON_DROP') setFigmaJson(originalJson);
                break;
              default:
            }

            break;
          default:
        }
      });
  }
};

export const executeComputeFunction = ({ effect, originalJson }) => {
  const computeFunctionIndex = originalJson.computeFunctions?.findIndex(
    i => i.name === effect.config?.computeFunction?.type
  );
  const computeFunction = get(originalJson.computeFunctions, computeFunctionIndex);
  const valueObj = {};
  Object.keys(effect.config.computeFunction.params).forEach(key => {
    const variableName = effect.config.computeFunction.params[key];
    const varIndex = originalJson.variables?.findIndex(i => i.name === variableName);
    if (varIndex === -1) return;
    const currentVal = get(originalJson, ['variables', varIndex, 'value']);
    const defaultVal = get(originalJson, ['variables', varIndex, 'default']);
    valueObj[key] = currentVal ?? defaultVal;
  });
  let mathEval = computeFunction.output;
  computeFunction.params.forEach(p => {
    let value = parseInt(valueObj[p]);
    if (isNaN(value)) value = `'${valueObj[p]}'`;
    mathEval = mathEval.replace(new RegExp(p, 'g'), value);
  });
  let newVal = null;
  try {
    newVal = math.evaluate(mathEval);
  } catch (e) {
    newVal = eval(mathEval);
  }

  const varIndex = originalJson.variables?.findIndex(i => i.name === effect.config?.variableName);
  const currentVal = get(originalJson, ['variables', varIndex, 'value']);
  const defaultVal = get(originalJson, ['variables', varIndex, 'default']);

  if ((currentVal ?? defaultVal) === newVal) return;
  set(originalJson, ['variables', varIndex, 'value'], newVal);
};

export const executeDragLayerProperty = ({ originalJson, path, dragTarget, effect, varIndex, setFigmaJson, init }) => {
  const currentVal = get(originalJson, ['variables', varIndex, 'value']);
  const defaultVal = get(originalJson, ['variables', varIndex, 'default']);
  const rigidBody = get(originalJson, [...path, 'modifiers']).filter(m => m.type === 'RIGID_BODY');
  let data = dragTarget;
  if (rigidBody.length) data = get(rigidBody, [0, 'config']);
  const newVal = get(data, [effect.config?.value]);
  if ((currentVal || defaultVal) === newVal) return;

  if (!rigidBody.length) {
    ['absoluteBoundingBox', 'absoluteRenderBounds', 'position', 'relativeTransform'].forEach(i => {
      set(originalJson, [...path, i, effect.config?.value], newVal);
    });
  }
  set(originalJson, ['variables', varIndex, 'value'], newVal);

  if (init) setFigmaJson(originalJson);
};
