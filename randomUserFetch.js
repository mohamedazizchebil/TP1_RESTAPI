function getUser(){
  const url = "https://randomuser.me/api/"
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.results[0].gender);
    console.log(data.results[0].name.first + " " + data.results[0].name.last);
    console.log(data.results[0].location.country);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
    
}
getUser();