const axios = require('axios');

module.exports = (req, res) => {
	axios.get(`https://swapi.co/api/people/${req.params.id}/`)
  .then(response => {
		console.log(res.data)
		let person = response.data
		console.log(person)
		res.send(person)
  })
  .catch(err => {
    console.log(err);
  })
}
