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
    const { groundName, weight1Name, weight2Name, seesawName, weight1Mass, weight2Mass } = other;
    const groundSprite = app.stage.getChildByName(groundName);
    const catapultSprite = app.stage.getChildByName(seesawName);
    const body1Sprite = app.stage.getChildByName(weight1Name);
    const body2Sprite = app.stage.getChildByName(weight2Name);

    // groundSprite.pivot.set(groundSprite.width / 2, groundSprite.height / 2);
    // groundSprite.x += groundSprite.width / 2;
    // groundSprite.y += groundSprite.height / 2;

    catapultSprite.pivot.set(catapultSprite.width / 2, catapultSprite.height / 2);
    catapultSprite.x += catapultSprite.width / 2;
    catapultSprite.y += catapultSprite.height / 2;

    body1Sprite.pivot.set(body1Sprite.width / 2, body1Sprite.height / 2);
    body1Sprite.x += body1Sprite.width / 2;
    body1Sprite.y += body1Sprite.height / 2;

    body2Sprite.pivot.set(body2Sprite.width / 2, body2Sprite.height / 2);
    body2Sprite.x += body2Sprite.width / 2;
    body2Sprite.y += body2Sprite.height / 2;

    // const hasGround = engine.world.bodies.filter(b => b.label == groundName).length > 0;
    // const ground = Bodies.rectangle(groundSprite.x, groundSprite.y, groundSprite.width, groundSprite.height, {
    //   isStatic: true,
    //   label: groundName
    // });
    const catapult = Bodies.rectangle(catapultSprite.x, catapultSprite.y, catapultSprite.width, catapultSprite.height, {
      collisionFilter: { group: group }
    });

    const body1 = Bodies.rectangle(body1Sprite.x, body1Sprite.y, body1Sprite.width, body1Sprite.height, {
      mass: weight1Mass
    });

    const body2 = Bodies.rectangle(body2Sprite.x, body2Sprite.y, body2Sprite.width, body2Sprite.height, {
      mass: weight2Mass
    });
    Composite.add(engine.world, [
      // ground,
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
      }
      Matter.Events.off(engine, 'collisionActive');
    });

    function updateSprites() {
      catapultSprite.rotation = catapult.angle;
      body1Sprite.rotation = body1.angle;
      body2Sprite.rotation = body2.angle;
      body1Sprite.position.set(body1.position.x, body1.position.y);
      body2Sprite.position.set(body2.position.x, body2.position.y);
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
