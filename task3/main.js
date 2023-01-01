/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

document.querySelector('button').addEventListener('click', e => {
  e.preventDefault()
  console.log(e)
  document.getElementById('userButton').classList.add('hide')
  fetch('https://randomuser.me/api/')
  .then (res => res.json())
  .then (data => {


    let title = data.results[0].name.title
    let firstName = data.results[0].name.first
    let lastName = data.results[0].name.last
    let gender = data.results[0].gender
    let phone = data.results[0].phone
    let picture = data.results[0].picture.thumbnail
    let fullName = title + ' ' + firstName + ' ' + lastName
    console.log(title + ' ' + firstName + ' ' + lastName)
    console.log(gender)
    console.log(phone)
    console.log(picture)

    document.getElementById('userCard').innerHTML += `
    
    <img src="${picture}" alt="userPicture">
    <h3>${fullName}</h3>
    <p>${gender}</p>
    <p>${phone}</p>
    `
  })


})