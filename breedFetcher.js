const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const breed = breedName.toLowerCase().substring(0, 4);
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(api, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        const desc = data[0].description;
        callback(null, desc);
      } else {
        callback("Breed not Found", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
