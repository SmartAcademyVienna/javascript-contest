// DONOT change anything from this file

import "../css/style.css";
const sticksByDigits = Array.from(document.querySelectorAll(".digit")).map($d =>
  ["one", "two", "three", "four", "five", "six", "seven"].map(i =>
    $d.querySelector(`.stick.${i}`)
  )
);

const digitMap = [
  [90, 270, 90, 270, 270, 90, 90],
  [90, -90, 0, 360, 360, 90, 0],
  [90, 0, 90, 450, 90, 90, 0],
  [90, 270, 90, 270, 360, 0, 0],
  [0, 270, 270, 360, 360, 90, 0],
  [0, 270, 270, 270, 360, 0, 270],
  [0, 270, -90, 270, 270, 0, -90],
  [90, 270, 90, 360, 360, 90, 0],
  [90, 270, 90, 270, 270, 0, 90],
  [90, 270, 90, 360, 360, 0, 90]
];

function setDigit(digits) {
  sticksByDigits.forEach(($sticks, iDigit) => {
    const digit = digits[iDigit];
    $sticks.forEach(($stick, iStick) => {
      $stick.style.transform = `rotate(${digitMap[digit][iStick]}deg)`;
    });
  });
}

export { setDigit };
