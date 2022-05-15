import { createStore } from 'vuex'

export default createStore({
  state: {//
    characters:[],//variable para lamacenar los personajes
    charactersFilter:[],//para almacenar y trabajar los filtros y no hacer 2 peticiones
  },
  mutations: {//para poder modificar el state se usa el mutation
    setCharacters(state, payload){//state: accede  las variables del state y el playload que son la data que se manda
      state.characters = payload//para asignar la data del plaiload al array de caracters
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {//para modificar los state se hace a través de las acciones
    async getCharacters({commit}){//nos permite obtener los personajes y recibe el parametro comit para poder acceder a las mutations
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character?page=12')//espera la respuesta de la api, como es un get no hace falta especificarle el metodo
        const data = await response.json()//obtenemos los datos para mostrarlos en consola
        commit('setCharacters', data.results)//recibe el payload que es el objeto data, al iniciar la pagina carga en las dos tablas
        commit('setCharactersFilter', data.results)//la duplicamos
        console.log(data)
      }catch(error){
        console.error(error)
      }
    },

    filterByStatus({commit, state}, status) {//para agregarle la funcionalidad al filtro. recibe el comit y el state, y despues el status que enviamos desde el componente
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)//retorna todos los personajes que tenga el status que le pasamos
      })
      commit('setCharactersFilter', filter)//para almacenar el filtro
    },

    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()//lo transforma todo a minusculaj
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()//pasamos a minuscula todos los nombres de la api
        if(characterName.includes(formatName)) {//si incluye algo del texto
          return character
        }
      })
      commit('setCharactersFilter', filter)//almacenamos en el filtro
    }
  },
  modules: {
  }
})
