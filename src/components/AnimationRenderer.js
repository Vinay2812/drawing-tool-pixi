import Matter from 'matter-js';
import get from 'lodash/get';
function AnimaionRenderer(props) {
  const { figmaJson, parentContainer, engine, app, type, other, onCompleted } = props;

  const { World, Bodies, Constraint, Body, Events, Composite, Vector } = Matter;

  if (type == 'balloon') {
    const frames = findFramesWithModifierName(figmaJson, 'GRAVITATIONAL_FORCE');
    const balloons = [];
    for (let i = 0; i < frames.length; i++) {
      const { id, children } = frames[i];
      const balloonSprite = findChildByNameDeep(parentContainer, id);
      const rigidFrames = findFramesWithModifierName(children, 'RIGID_BODY');
      let totalMass = 1;
      for (let j = 0; j < rigidFrames.length; j++) {
        const { modifiers } = rigidFrames[j];
        const modifier = modifiers.find(i => i.type == 'RIGID_BODY');
        const weight = get(modifier, 'config.weight');
        totalMass += weight;
      }

      balloonSprite.pivot.set(balloonSprite.mattterWidth / 2, balloonSprite.matterHeight / 2);
      balloonSprite.x += balloonSprite.mattterWidth / 2;
      balloonSprite.y += balloonSprite.matterHeight / 2;

      const ground = Bodies.rectangle(
        balloonSprite.x + 10,
        balloonSprite.y + balloonSprite.matterHeight / 2 + 40,
        balloonSprite.mattterWidth + 200,
        10,
        {
          isStatic: true
        }
      );
      const balloon = Bodies.rectangle(
        balloonSprite.x,
        balloonSprite.y,
        balloonSprite.mattterWidth,
        balloonSprite.matterHeight,
        {
          mass: totalMass
        }
      );
      balloons.push(balloon);

      World.add(engine.world, [ground, balloon]);
      function applyFlyingForces() {
        Body.applyForce(balloon, balloon.position, {
          x: 0,
          y: -0.001
        });
      }

      Events.on(engine, 'beforeUpdate', applyFlyingForces);
      // Function to update Pixi.js sprites based on Matter.js bodies' positions
      function updateSprites() {
        balloonSprite.position.set(balloon.position.x, balloon.position.y);
      }

      // Add the ticker to update both Matter.js and Pixi.js
      app.ticker.add(updateSprites, i);
    }
    Events.on(engine, 'afterUpdate', () => {
      // Check if the simulation is stable based on your criteria
      const isSimulationStable = isStableSimulation(balloons);

      if (isSimulationStable) {
        balloons.forEach(balloon => {
          balloon.isStatic = true;
        });
        Events.off(engine);
        app.ticker.destroy();
        console.log('Simulation is now stable.');
        onCompleted && onCompleted();
        // Do something here, e.g., stop applying forces or perform an action
      }
    });
  } else if (type == 'rotate') {
    const { groundName, speed = 0.04 } = other;
    const rectangleSprite = app.stage.getChildByName(groundName);
    rectangleSprite.pivot.set(rectangleSprite.width / 2, rectangleSprite.height / 2);
    rectangleSprite.x += rectangleSprite.width / 2;
    rectangleSprite.y += rectangleSprite.height / 2;
    const rectangle = Bodies.rectangle(rectangleSprite.x, rectangleSprite.y, rectangleSprite.width, rectangleSprite.height, {
      isStatic: true
    });

    // Add the rectangle to the world
    World.add(engine.world, [rectangle]);

    // Define rotation speed (in radians per frame)
    const rotationSpeed = speed;

    // Rotate the rectangle over time
    function rotateRectangle() {
      Body.rotate(rectangle, rotationSpeed);
    }

    // // Store initial angle for comparison
    // let initialAngle = rectangle.angle;
    // // Counter for rotations
    // let rotationCount = 1;

    // // Event listener for each update
    // Matter.Events.on(engine, 'afterUpdate', () => {
    //   // Calculate the difference in angles
    //   if (rotationCount == 3) {
    //     Events.off(engine);
    //     console.log('Simulation is now stable.');
    //   }
    //   const angleDifference = Math.abs(rectangle.angle - initialAngle);

    //   // Threshold for a full rotation
    //   const rotationThreshold = Math.PI; // 360 degrees

    //   // Detect full rotations
    //   if (angleDifference + 0.039 > rotationThreshold) {
    //     // Increment rotation count
    //     rotationCount++;
    //     // Update initial angle for the next rotation detection
    //     initialAngle = rectangle.angle;
    //   }
    // });

    Events.on(engine, 'beforeUpdate', rotateRectangle);
    function updateSprites() {
      rectangleSprite.rotation = rectangle.angle;
    }
    // Add the ticker to update both Matter.js and Pixi.js
    app.ticker.add(() => {
      updateSprites();
    });
  } else if (type == 'seesaw') {
    var group = Body.nextGroup(true);
    const { groundName, weight1Name, weight2Name, seesawName, weight1Mass, weight2Mass } = other;
    let world = engine.world;
    const catapultSprite = findChildByNameDeep(parentContainer, seesawName);
    // console.log(catapultSprite, (catapultSprite.rotation * 180) / Math.PI);

    const body1Sprite = findChildByNameDeep(parentContainer, weight1Name);
    const body2Sprite = findChildByNameDeep(parentContainer, weight2Name);
    if (catapultSprite.rotation == 0) {
      catapultSprite.pivot.set(catapultSprite.mattterWidth / 2, catapultSprite.matterHeight / 2);
      catapultSprite.x += catapultSprite.mattterWidth / 2;
      catapultSprite.y += catapultSprite.matterHeight / 2;
    } else {
      catapultSprite.pivot.set(catapultSprite.mattterWidth / 2, catapultSprite.matterHeight /* / 2 */);
      catapultSprite.x += catapultSprite.mattterWidth / 2;
      // catapultSprite.y += catapultSprite.matterHeight / 2;
    }

    body1Sprite.pivot.set(body1Sprite.mattterWidth / 2, body1Sprite.matterHeight / 2);
    body1Sprite.x += body1Sprite.mattterWidth / 2;
    body1Sprite.y += body1Sprite.matterHeight / 2;

    body2Sprite.pivot.set(body2Sprite.mattterWidth / 2, body2Sprite.matterHeight / 2);
    body2Sprite.x += body2Sprite.mattterWidth / 2;
    body2Sprite.y += body2Sprite.matterHeight / 2;

    const ground = Bodies.rectangle(catapultSprite.x + 10, catapultSprite.y + 40, catapultSprite.mattterWidth + 200, 10, {
      isStatic: true,
      label: groundName
    });
    var catapult = Bodies.rectangle(
      catapultSprite.x,
      catapultSprite.y,
      catapultSprite.mattterWidth,
      catapultSprite.matterHeight,
      {
        collisionFilter: { group: group }
      }
    );
    const initail = {
      catapult: {
        x: catapult.position.x,
        y: catapult.position.y,
        angle: (catapultSprite.rotation * 180) / Math.PI,
        rotation: catapultSprite.rotation
      },
      body1: {
        x: body1Sprite.x,
        y: body1Sprite.y
      },
      body2: {
        x: body2Sprite.x,
        y: body2Sprite.y
      }
    };
    var body1 = Bodies.rectangle(catapult.position.x - 100, catapult.position.y - 80, 40, 40, { mass: weight1Mass });
    var body2 = Bodies.rectangle(catapult.position.x + 100, catapult.position.y - 80, 40, 40, { mass: weight2Mass });

    Composite.add(world, [
      ground,
      catapult,
      body1,
      body2,
      Constraint.create({
        bodyA: catapult,
        pointB: Vector.clone(catapult.position),
        stiffness: 1
      })
    ]);

    Matter.Events.on(engine, 'collisionActive', () => {
      // Iterate through all bodies in the world
      if (Math.abs(catapult.angle) < 0.00001) {
        catapult.isStatic = true;
        body1.isStatic = true;
        body2.isStatic = true;
        // body1Sprite.y += initail.catapult.rotation * (catapultSprite.mattterWidth / 2);
      }
      Matter.Events.off(engine, 'collisionActive');
    });

    Matter.Events.on(engine, 'collisionEnd', () => {
      setTimeout(() => {
        catapult.isStatic = true;
        body1.isStatic = true;
        body2.isStatic = true;
        app.ticker.destroy();
        onCompleted();
      }, 2500);
      Matter.Events.off(engine, 'collisionEnd');
    });

    function updateSprites() {
      // if (catapult.angle !== 0 && Math.abs(catapult.angle) < 0.00001) {
      //   app.ticker.destroy();
      //   // return;
      // }
      catapultSprite.rotation = catapult.angle;
      body1Sprite.rotation = body1.angle;
      body2Sprite.rotation = body2.angle;

      const a = (initail.catapult.rotation - catapult.angle) * (catapultSprite.mattterWidth / 2);
      body1Sprite.y = initail.body1.y + a;
      body2Sprite.y = initail.body2.y - a;
    }

    // Add the ticker to update both Matter.js and Pixi.js
    app.ticker.add(() => {
      updateSprites();
    });
  }
}

export default AnimaionRenderer;
const stableVelocityThreshold = 0.001; // Adjust this threshold as needed
const stableForceThreshold = 0.001; // Adjust this threshold as needed

function isStableSimulation(balloons) {
  // Check if velocities of all bodies are below the threshold
  const areVelocitiesStable = balloons.every(
    body => Math.abs(body.velocity.x) < stableVelocityThreshold && Math.abs(body.velocity.y) < stableVelocityThreshold
  );

  // Check if forces applied to all bodies are below the threshold
  const areForcesStable = balloons.every(
    body => Math.abs(body.force.x) < stableForceThreshold && Math.abs(body.force.y) < stableForceThreshold
  );

  // Return true if both velocity and force criteria are met
  return areVelocitiesStable && areForcesStable;
}

function checkMatterJsElement(name, pixiElement, engine) {
  let hasGround = false;
  for (let i = 0; i < engine.world.bodies; i++) {
    if (engine.world.bodies[i].label == name) {
      hasGround = true;
      break;
    }
  }
  if (!hasGround) {
    pixiElement.pivot.set(pixiElement.width / 2, pixiElement.height / 2);
    pixiElement.x += pixiElement.width / 2;
    pixiElement.y += pixiElement.height / 2;
  }
  return hasGround;
}

function findChildByNameDeep(parent, name) {
  if (parent.name === name) {
    return parent;
  }

  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    const foundChild = findChildByNameDeep(child, name);
    if (foundChild) {
      return foundChild;
    }
  }

  return null;
}

function findFramesWithModifierName(data, modifierType) {
  const objectsWithRigidBody = [];
  function hasRigidBodyModifier(obj) {
    if (obj.modifiers) {
      for (const modifier of obj.modifiers) {
        if (modifier.type === modifierType) {
          return true;
        }
      }
    }
    return false;
  }
  function traverse(node) {
    if (hasRigidBodyModifier(node)) {
      objectsWithRigidBody.push(node);
    }
    if (Array.isArray(node)) {
      for (const childNode of node) {
        childNode.visible && traverse(childNode);
        if (node.children && node.visible) {
          for (const child of node.children) {
            traverse(child);
          }
        }
      }
    } else if (node.children && node.visible) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }
  traverse(data);
  return objectsWithRigidBody;
}
