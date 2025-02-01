const request = require("request");
const url = "https://randomuser.me/api/"
function getUser(callback) {
    request(url, function (error, response, body) {
        if (error) {
            callback(error, null);
        } else {
            const User = JSON.parse(body);
            callback(null, User);
        }
    });
}

getUser((error, data) => {
  if (!error) {
      console.log(data.results[0].gender);
      console.log(data.results[0].name.first + " " + data.results[0].name.last);
      console.log(data.results[0].location.country);
  } else {
      console.error("Erreur :", error);
  }
});