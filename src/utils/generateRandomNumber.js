const generateRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default generateRandomNumber;
