"use strict";

const delay = ms => {
  const promice = new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promice;
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
