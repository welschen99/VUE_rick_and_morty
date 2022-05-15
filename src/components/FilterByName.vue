<template>
  <div class="search">
    <input
      type="text"
      placeholder="Buscar por nombre"
      v-model="name"
      @keyup="filter()"
    >
    <!--cada vez que se presione una tecla ejecuta esta accion-->
  </div>
</template>

<script>
import { ref } from 'vue'//nos permite usarlo en un v model para capturar el texto que escribimos y traerlo al script
import { useStore } from 'vuex'
export default {
  setup() {
    const name = ref('')
    const store = useStore()//para poder acceder a las actions
    const filter = () => {
      store.dispatch('filterByName', name.value)//recibe el texto creado
    }
    return {
      name,
      filter
    }
  }
}
</script>

<style lang="scss">
.search {
  width: 400px;
  margin: 3rem auto 0;
  input {
    height: 53px;
    width: 400px;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>