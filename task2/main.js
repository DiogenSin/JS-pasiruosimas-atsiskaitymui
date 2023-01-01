/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/

let img1Clicked = 0
let img2Clicked = 0

document.getElementById('container').addEventListener('click', event => {
  event.preventDefault()
  console.log(event)
  console.log(event.target.alt)
  if(event.target.alt == 'Laukai'){
    ++img1Clicked
  } else if (event.target.alt == 'Ezeras'){
    ++img2Clicked
  }
  console.log('Pirmas pav.: ' + img1Clicked)
  console.log('Antras pav.: ' + img2Clicked)

  document.getElementById('clickCounter').value = img1Clicked + ' <<< Laukai | Ežeras >>> ' + img2Clicked
})