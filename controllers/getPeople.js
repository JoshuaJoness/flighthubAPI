const axios = require('axios');

module.exports = (req, res) => {
	axios.get('https://swapi.co/api/people/')
  .then(response => {
		// console.log(res.data)
		let people = response.data
		console.log(people)
		res.send(people)
  })
  .catch(err => {
    console.log(err);
  })
}
