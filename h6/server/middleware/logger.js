export const logger = (req, res, next) => {
  console.log('logger saying hi!');
  next();
};
