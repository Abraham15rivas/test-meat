<template>
  <div class="card-filter">
    <nav class="card-filter__nav">
      <ul class="card-filter__ul">
        <li class="card-filter__li" v-for="(category, index) in categories" :key="index" @click="filter(category)">
          <span class="card-filter__span">{{ category }}</span>
        </li>
      </ul>
    </nav>
</div>
</template>
<script>
  export default {
    name: 'filterComponent',
    data() {
      return {
        categories: ['Todos', 'Productos', 'Recetas', 'Consejos']
      }
    },
    methods: {
      filter(categorySelected) {
        this.$emit('setFilter', categorySelected)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .card-filter {
    border-radius: 10px;
    box-shadow: 0px 4px 40px 0px #00000012;

    &__ul {
      list-style: none;
      padding: 0px;
    }

    &__li {
      cursor: pointer;
    }

    &__li:hover {
      background: rgb(234, 226, 226);
      border-radius: 10px;
    }

    &__span {
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 15px 30px;
      text-transform: uppercase;
    }
  }
</style>