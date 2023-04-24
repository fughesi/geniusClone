const capitalizeFirstLetter = (word) => {
  const title = word?.toString().charAt(0).toUpperCase() + word?.slice(1);

  if (title) return title;

  return;
};

module.exports = capitalizeFirstLetter;
