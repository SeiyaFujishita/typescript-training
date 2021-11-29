export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

// type twoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type twoWayPlayer = Pitcher1 & Batter1;

const Otani: twoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
