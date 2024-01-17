<template>
  <div class="card-filter">
    <nav class="card-filter__nav">
      <ul class="card-filter__ul">
        <li class="card-filter__li" v-for="(category, index) in categories" :key="index" @click="filter(category)">
          <span
            :class="{
              'card-filter__span': true,
              'card-filter__span--active': (category === categorySelected)
            }"
            @click="filter(category)"
          >
            {{ category }}
            <svg :class="{ 'card-filter__icon': true, 'card-filter__icon--active': (category === categorySelected) }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
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
        categories: ['Todos', 'Productos', 'Recetas', 'Consejos'],
        categorySelected: 'Todos'
      }
    },
    methods: {
      filter(categorySelected) {
        this.categorySelected = categorySelected
        this.$emit('setFilter', categorySelected)
      }
    }
  }
</script>

<style lang="scss">
  $primary-color: #D8AD3D;

  .card-filter {
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    line-height: 23px;
    border-radius: 10px;
    box-shadow: 0px 4px 40px 0px #00000012;
    padding: 24px;

    &__ul {
      list-style: none;
      padding: 0px !important;
    }

    &__li {
      cursor: pointer;
    }

    &__li:hover {
      color: $primary-color;
    }

    &__span {
      box-sizing: border-box;
      width: 100%;
      padding: 15px 0px;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__icon {
      min-width: 22px;
      width: 22px;
      height: 24px;
      margin-left: 5px;
      transform: translateX(var(--link-icon-translate));
      opacity: var(--link-icon-opacity);
      transition: all 0.1s;
      visibility: hidden;
    }

    &__span--active {
      color: $primary-color;
    }

    &__icon--active {
      visibility: visible;
    }
  }
</style>