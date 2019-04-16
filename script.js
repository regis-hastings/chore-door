const doorImage1 = document.getElementById('door1');

const doorImage2 = document.getElementById('door2');

const doorImage3 = document.getElementById('door3');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreGenerator = () => {
  let choreDoor = Math.floor(Math.random * numClosedDoors);
  if (choreDoor === 0) {
      let openDoor1 = botDoorPath;
      let openDoor2 = beachDoorPath;
      let openDoor3 = spaceDoorPath;
  } else if (choreDoor == 1) {
      let openDoor2 = botDoorPath;
      let openDoor1 = beachDoorPath;
      let openDoor3 = spaceDoorPath
  } else {
      let openDoor3 = botDoorPath;
      let openDoor1 = beachDoorPath;
      let openDoor2 = spaceDoorPath;
  }
}

doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
};

doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
};

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
};

randomChoreGenerator();