const axios = require('axios');

module.exports = (req, res) => {
	axios.get('https://swapi.co/api/planets/')
  .then(response => {
		// console.log(res.data)
		let planets = response.data
		console.log(planets)
		res.send(planets)
  })
  .catch(err => {
    console.log(err);
  })
}
