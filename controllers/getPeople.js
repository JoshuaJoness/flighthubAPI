const axios = require('axios');

module.exports = (req, res) => {
	axios.get('https://swapi.co/api/people')
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
// module.exports = {
//   getRecipes(req, res) {
//       const url = "https://gw.hellofresh.com/api/recipes/search?country=us&limit=9"
//       const token = "IUzI1NiIsInR5c"
//
//       axios
//       .get(url, {
//         "headers": {"Authorization": "Bearer " + token}
//       })
//       .then(response => {
//         console.log(response)
//         res.send(response) // <= send data to the client
//       })
//       .catch(err => {
//         console.log(err)
//         res.send({ err }) // <= send error
//       })
//   }
// }
