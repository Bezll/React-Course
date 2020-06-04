export { isAdult, canDrink, isSenior as default};

const isAdult =(age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;