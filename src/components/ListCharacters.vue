<template>
    <section>
        <h2>Página 1 - 42</h2>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <CardCharacter :character="character" /> <!--:character = nombre que le asignas a la props en cardCharacter y el otro character viene del for de aca-->
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'//para acceder al store y a las actions
import CardCharacter from './CardCharacter.vue'

export default({
    components:{//viene de la carpeta de components asique hay que declaralo
        CardCharacter
    },
    setup() {
        const store = useStore()
        const characters = computed(()=>{
            return store.state.charactersFilter//para acceder a los state y mostrar los caracter filtros
        })
        onMounted(()=>{//para usar el actions
            store.dispatch('getCharacters')//para acceder a los actions
        })

        return{//para poder usarlos debemos retornalos
            characters
        }
    },
})
</script>


<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>