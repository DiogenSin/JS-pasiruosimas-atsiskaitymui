/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/

fetch('http://localhost:3000/movies')
.then (res => res.json())
.then (data => {
    data.forEach(movie => {
      console.log(movie)
      let Id = movie.id
      let image = movie.photos.poster[0]
      let name = movie.title
      let actors = []
      
      movie.castAndCrew.actors.forEach(actor => {
        actors.push(actor.name)
      })

      console.log(Id + ' ' + image + ' ' + name + ' ' + actors)
      document.querySelector('body').innerHTML += `
      
      <div id="${Id}" class="movieCard">
      <img src="${image}" alt="${name}">
      <div class="movieInfo">
        <h3>${name}</h3>
        <p>${actors}</p>
      </div>
    </div>
      
      
      
      
      
      
      `
    });
})