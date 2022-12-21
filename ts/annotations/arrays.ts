const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// help with inference when extracting values
const myCar = carMakers[0];
const lastCar = carMakers.pop();

// prevents incompatible values
// carMakers.push(100);
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2020-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
