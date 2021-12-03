const request = require("request");

const breed = process.argv[2].toLowerCase().substring(0);

const api = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const getBreed = (api) => {
  request(api, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        console.log(data[0].description);
      } else {
        console.log("The Breed not Found");
      }
    }
  });
};

getBreed(api);
