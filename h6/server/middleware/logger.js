import * as fs from 'fs';

export const logger = (req, res, next) => {
  const date = new Date();
  const lDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  const log = `${lDate}: ${req.method} ${req.url}\n`;

  try {
    console.log('Writing log to file...');
    fs.appendFileSync('logs.txt', log);
    console.log('Log saved to file.');
  } catch (error) {
    console.log('Writing to file failed');
  }
  next();
};
