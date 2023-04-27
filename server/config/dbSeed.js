const mongoose = require("mongoose");

const seeder = (seedArray) => {
  let doneWithSeeding = 0;

  seedArray.forEach((seed) => {
    doneWithSeeding++;
    seed.save();

    if (doneWithSeeding === seedArray.length) {
      setTimeout(() => mongoose.disconnect(), 1000);
    }
  });
};

module.exports = seeder;
