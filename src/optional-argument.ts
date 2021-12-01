export {};

const bmi = (height: number, weight: number, printable?: boolean): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};
bmi(1.74, 65, true);
