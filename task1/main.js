/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()
  console.log(e)

  let chosenMeasure = e.target.elements.matas.value
  let givenTemperature = e.target.elements.temperature.valueAsNumber

  console.log(chosenMeasure)
  console.log(givenTemperature)

  switch (chosenMeasure) {
    case 'celcijus':
      let toFarenheit = givenTemperature*33.8
      console.log(toFarenheit.toFixed(2) + ' Farenheito')
      e.target.elements.converted.value = toFarenheit.toFixed(2) + ' Farenheito'

      break;
    case 'farenheitas':
      let toCelsius = givenTemperature/33.8
      e.target.elements.converted.value = toCelsius.toFixed(2) + ' celcijaus'
      break;
    default: console.log('Kažkas negerai')
  }
})