fetch('https://pokeapi.co/api/v2/pokemon/74/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p><p>Id:  ${pokemon.id}<p>
  <img src='${pokemon.sprites.front_default}'><p>Altura: ${pokemon.height} in<p><p>Peso: ${pokemon.weight} Lb<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/95/')
.then(response => response.json())
.then(pokemon => {
  let element = document.getElementById('elemento2')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p><p>Id:  ${pokemon.id}<p>
  <img src='${pokemon.sprites.front_default}'><p>Altura: ${pokemon.height} in<p><p>Peso: ${pokemon.weight} Lb<p><br>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/25/')
.then(response => response.json())
.then(pokemon => {
  let element = document.getElementById('elemento3')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p><p>Id:  ${pokemon.id}<p>
  <img src='${pokemon.sprites.front_default}'><p>Altura: ${pokemon.height} in<p><p>Peso: ${pokemon.weight} Lb<p><br>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))