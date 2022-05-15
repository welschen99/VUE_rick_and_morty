<template>
    <div class="character">
        <div class="character__info">
            <img :src="character.image" :alt="character.name"><!-- le agregamod los 2 puntos para hacerlo dinamico y que busque el src en el props y el nombre tmb -->
            <h4>{{character.name}}</h4>
            <div class="status"><!-- Esto es para los colores -->
                  <span
                  :class="
                  character.status == 'Alive' ? 'alive':
                  character.status == 'Dead' ? 'dead':
                  'default'
                  "
                  ></span> 
                <span>{{character.status}} - {{character.species}}</span>
            </div>
            <div class="gender">
                <span>
                    Gender:{{character.gender}}
                </span>
            </div>
            <div class="origin">
                <span>
                    Origen:{{character.origin.name}}
                </span>
            </div>
            <div class="location">
                <span>
                    Location:{{character.location.name}}
                </span>
            </div>
        </div>
    </div>
    <br>
</template>

<script>
export default ({
    props: ['character']
})
</script>

<style lang="scss">
.character {
  background-color: var(--background-card);
  border-radius: 5px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  &:hover {
    transform: scale(1.10);
    h4 {
      color: var(--text-orange);
    }
  }
  span {
    color: var(--text-gray);
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  &__info {
    padding: 1.5rem;
    .status{
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      span {
        color: var(--text-gray);
        &:first-child {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      }
      .alive {
        background-color: rgb(67, 255, 5);
      }
      .dead {
        background-color: red;
      }
      .default {
        background-color: white;
      }
    }
    .origen {
      margin-bottom: 0.5rem;
    }
  }
}
</style>