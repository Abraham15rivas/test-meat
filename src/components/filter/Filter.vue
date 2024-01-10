<template>
  <v-card class="card-filter" >
    <v-list>
      <v-list-item
        v-for="(category, index) in categories"
        :key="index"
        link
        @click="filter(category)"
      >
        <v-list-item-title class="text-uppercase">
          {{ category }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
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
<style scoped>
  .card-filter {
    border-radius: 10px;
    box-shadow: 0px 4px 40px 0px #00000012;
  }
</style>