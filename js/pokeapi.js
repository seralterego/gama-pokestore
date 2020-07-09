/* 
 * Disclaimer
 * devido a baixa qualidade da imagem no endereço da API original
 * src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
 * utilizei o de um banco com qualidade melhor
 * https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png
 */

const showcase_item = document.getElementById('showcase_item');
const numeroPokemons = 151;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

const tiposPrincipais = Object.keys(colors);
console.log(tiposPrincipais)

const fetchPokemons = async () => {
  for(let i=1; i<=numeroPokemons; i++) {
    await pegarPokemon(i);
  }
}

const pegarPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  criarCardPokemon(pokemon);
}

function criarCardPokemon(pokemon) {
  const elementoPokemon = document.createElement('div');
  elementoPokemon.classList.add('showcase-item');

  const tiposPokemon = pokemon.types.map(elementoTipo => elementoTipo.type.name)
  console.log(tiposPokemon);
  const tipo = tiposPrincipais.find(type => tiposPokemon.indexOf(type) > -1);

  const nomePokemon = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokeInnerHTML = `
    <img class="showcase-poke-img" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    <small class="showcase-poke-type"><span>${tipo}</span></small>
    <ul>
      <li><span class="showcase-poke-txt-1">Nome: </span><span class="showcase-poke-txt-2">${nomePokemon}</span></li>
      <li><span class="showcase-poke-txt-1">Id: </span><span class="showcase-poke-txt-2 id">${pokemon.id}</span></li>
      <li><span class="showcase-poke-txt-1">Height: </span><span class="showcase-poke-txt-2">${pokemon.height}</span></li>
      <li><span class="showcase-poke-txt-1">Weight: </span><span class="showcase-poke-txt-2">${pokemon.weight}</span></li>
    </ul>
    <div class="showcase-footer">
      <button class="showcase-poke-btn">Saiba mais</button>
      <i class="fas fa-cart-plus tooltip"><span class="tooltiptext">Adicione ao carrinho!</span></i>
    </div>
  `;

  elementoPokemon.innerHTML = pokeInnerHTML;

  showcase_item.appendChild(elementoPokemon);
}

fetchPokemons();


// Use the settings object to change the theme
/* mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

document.addEventListener("DOMContentLoaded", function (event) {

    var pokemons = [],
        pokemonDetails = [],
        offset = 0,
        loadNumber = 20
        btnMore = document.getElementById('more');

    function getMovies() {
        btnMore.style.display = 'none';
        list.showLoading();

        mobiscroll.util.getJson(`https://pokeapi.co/api/v2/pokemon?offset=` + ${offset} + `&limit=` + ${loadNumber}, function (data) {
            var i, item;

            for (i = 0; i < data.length; ++i) {
                item = data[i];
                list.add(item.id, item.title);
            }

            btnMore.style.display = 'block';
            list.hideLoading();

            if (length >= 100) {
                btnMore.style.display = 'none';
            }
        }, 'jsonp');
    }

    list = mobiscroll.listview('#demo', {
        theme: 'ios',
        themeVariant: 'light',
        animateAddRemove: false,
        striped: true,
        swipe: false
    });

    btnMore.addEventListener('click', function () {
        length += 10;
        getMovies();
    });

    getMovies();

}); */