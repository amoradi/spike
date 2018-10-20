const playerMapper = (srcPlayer) => {
  const player = {...srcPlayer};

  return {weight: player.weight, fName: player.fname, lName: player.lname };
};

module.exports = playerMapper;
