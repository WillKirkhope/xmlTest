let data = "dummydata.json"

fetch(data)
.then(response => response.json())
.then(data => {
  // console.log(data)
  // console.log(data[0].model)
  displayThatShit(data)
  displayThatImage(data)
})

// console.log(data)

// function fuchThis(data){
//   displayThatShit(data)
// }

function displayThatShit(data){
  let disp = document.querySelector('p')
  disp.innerText = data[0].model
  // disp.innerText = data[0].manufacturer
}

function displayThatImage(data){
  let imgg = document.querySelector('img')
  imgg.src = data[0]['listing-photos'][0].url
}
