<template>
<br>
<div><h1>Rick and Morty</h1></div>
<filter-by-status/>
<filter-by-name/>
<list-characters/>
<paginas/>
</template>

<script>
import ListCharacters from './components/ListCharacters.vue'
import FilterByStatus from './components/FilterByStatus.vue'
import FilterByName from './components/FilterByName.vue'

export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #000000;
  --background-card: #4b4b4b;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #ffc800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
  font-size: 500%
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>
