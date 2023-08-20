import Matter from 'matter-js';

function AnimaionRenderer(props) {
  const { engine, app, type, other } = props;

  const { World, Bodies, Constraint, Body, Events, Composite, Vector } = Matter;

  if (type == 'balloon') {
    const { balloonName, weightName, groundName, ballonMass, weightMass, ballonForce = { x: 0, y: 0 } } = other;
    const groundSprite = app.stage.getChildByName(groundName);
    const balloonSprite = app.stage.getChildByName(balloonName);
    const rectangleSprite = app.stage.getChildByName(weightName);

    groundSprite.pivot.set(groundSprite.width / 2, groundSprite.height / 2);
    groundSprite.x += groundSprite.width / 2;
    groundSprite.y += groundSprite.height / 2;

    rectangleSprite.pivot.set(rectangleSprite.width / 2, rectangleSprite.height / 2);
    rectangleSprite.x += rectangleSprite.width / 2;
    rectangleSprite.y += rectangleSprite.height / 2;

    balloonSprite.pivot.set(balloonSprite.width / 2, balloonSprite.height / 2);
    balloonSprite.x += balloonSprite.width / 2;
    balloonSprite.y += balloonSprite.height / 2;

    const ground = Bodies.rectangle(groundSprite.x, groundSprite.y, groundSprite.width, groundSprite.height, {
      isStatic: true,
      label: groundName
    });
    const balloon = Bodies.circle(
      balloonSprite.x - Math.max(balloonSprite.width, balloonSprite.height) / 2,
      balloonSprite.y - Math.max(balloonSprite.width, balloonSprite.height) / 2,
      Math.max(balloonSprite.width, balloonSprite.height) / 2,
      { mass: ballonMass }
    );
    const rectangle = Bodies.rectangle(rectangleSprite.x, rectangleSprite.y, rectangleSprite.width, rectangleSprite.height, {
      mass: weightMass
    });

    let sling = Constraint.create({
      bodyA: rectangle,
      bodyB: balloon,
      stiffness: 1
    });

    World.add(engine.world, [ground, sling, rectangle, balloon]);

    function applyFlyingForces() {
      Body.applyForce(balloon, balloon.position, ballonForce);
    }

    Events.on(engine, 'beforeUpdate', applyFlyingForces);

    // Function to update Pixi.js sprites based on Matter.js bodies' positions
    function updateSprites() {
      balloonSprite.position.set(
        balloon.position.x + Math.max(balloonSprite.width, balloonSprite.height) / 2,
        balloon.position.y + Math.max(balloonSprite.width, balloonSprite.height) / 2
      );
      rectangleSprite.position.set(rectangle.position.x, rectangle.position.y);
    }

    // Add the ticker to update both Matter.js and Pixi.js
    app.ticker.add(() => {
      updateSprites();
    });

    // Events.on(engine, 'afterUpdate', () => {
    //   // Check if the simulation is stable based on your criteria
    //   const isSimulationStable = isStableSimulation(engine);

    //   if (isSimulationStable) {
    //     Events.off(engine);
    //     console.log('Simulation is now stable.');
    //     // Do something here, e.g., stop applying forces or perform an action
    //   }
    // });
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
    const { groundName, weight1Names, weight2Names, seesawName, weight1Mass, weight2Mass } = other;
    const groundSprite = app.stage.getChildByName(groundName);
    const catapultSprite = app.stage.getChildByName(seesawName);

    catapultSprite.pivot.set(catapultSprite.width / 2, catapultSprite.height / 2);
    catapultSprite.x += catapultSprite.width / 2;
    catapultSprite.y += catapultSprite.height / 2;

    const catapult = Bodies.rectangle(catapultSprite.x, catapultSprite.y, catapultSprite.width, catapultSprite.height, {
      collisionFilter: { group: group }
      // isStatic: true
    });

    const elements = [];
    if (!checkMatterJsElement(groundName, groundSprite, engine)) {
      const ground = Bodies.rectangle(groundSprite.x, groundSprite.y, groundSprite.width, groundSprite.height, {
        isStatic: true,
        label: groundName
      });
      elements.push(ground);
    }

    const leftSprites = [];
    const rightSprites = [];

    weight1Names.forEach(name => {
      const sprite = app.stage.getChildByName(name);
      leftSprites.push(sprite);
    });
    weight2Names.forEach(name => {
      const sprite = app.stage.getChildByName(name);
      rightSprites.push(sprite);
    });

    const leftBodies = [];
    const rightBodies = [];
    leftSprites.forEach((sprite, i) => {
      if (!checkMatterJsElement(sprite.name, sprite, engine)) {
        const body = Bodies.rectangle(sprite.x, sprite.y, sprite.width, sprite.height, {
          // mass: weight1Mass
        });
        leftBodies.push(body);
        elements.push(body);
      }
    });
    rightSprites.forEach((sprite, i) => {
      if (!checkMatterJsElement(sprite.name, sprite, engine)) {
        const body = Bodies.rectangle(sprite.x, sprite.y, sprite.width, sprite.height, {
          // mass: weight2Mass
        });
        rightBodies.push(body);
        elements.push(body);
      }
    });

    Composite.add(engine.world, [
      ...elements,
      catapult,
      Constraint.create({
        bodyA: catapult,
        pointB: Vector.clone(catapult.position),
        stiffness: 1
      })
    ]);

    Matter.Events.on(engine, 'collisionActive', () => {
      if (Math.abs(catapult.angle) < 0.00017) {
        catapult.isStatic = true;
        leftBodies.forEach(body => {
          body.isStatic = true;
        });
        rightBodies.forEach(body => {
          body.isStatic = true;
        });
      }
      Matter.Events.off(engine, 'collisionActive');
    });

    function updateSprites() {
      catapultSprite.rotation = catapult.angle;
      leftBodies.forEach((body, i) => {
        const sprite = leftSprites[i];
        sprite.position.set(body.position.x, body.position.y);
        sprite.rotation = body.angle;
      });
      rightBodies.forEach((body, i) => {
        const sprite = rightSprites[i];
        // const sprite = rightSprites.find(sprite => sprite.name == body.label);
        sprite.position.set(body.position.x, body.position.y);
        sprite.rotation = body.angle;
      });

      catapultSprite.position.set(catapult.position.x, catapult.position.y);
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

function isStableSimulation(engine) {
  // Check if velocities of all bodies are below the threshold
  const areVelocitiesStable = engine.world.bodies.every(
    body => Math.abs(body.velocity.x) < stableVelocityThreshold && Math.abs(body.velocity.y) < stableVelocityThreshold
  );

  // Check if forces applied to all bodies are below the threshold
  const areForcesStable = engine.world.bodies.every(
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
