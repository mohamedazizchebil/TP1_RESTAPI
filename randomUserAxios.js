const axios = require('axios');
const url = "https://randomuser.me/api/";
async function getUser(){
  try{
    const res = await axios.get(url);
    const response = res.data;
    console.log(response.results[0].gender);
      console.log(response.results[0].name.first + " " + response.results[0].name.last);
      console.log(response.results[0].location.country);

  }
  catch (error) {
    console.error(error);
  }
  
  
}
getUser();