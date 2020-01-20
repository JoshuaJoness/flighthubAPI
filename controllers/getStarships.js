const axios = require('axios');

module.exports = (req, res) => {
	axios.get('http://swapi.co/api/starships')
  .then(response => {
		// console.log(res.data)
		let starships = response.data
		console.log(starships)
		res.send(starships)
  })
  .catch(err => {
    console.log(err);
  })
}
