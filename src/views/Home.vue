<template>
  <div>
    <Hero />
    <div class="container">
      <div class="container__row">
        <div class="container__col--1">
          <Filters @setFilter="filterVal" />
        </div>
        <div class="container__col--2">
          <Articles :filter="filterParam" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components:{
    Hero: () => import(/* webpackPrefetch: true */ '@/components/hero/Hero'),
    Articles: () => import(/* webpackPrefetch: true */ '@/components/articles/Articles'),
    Filters: () => import(/* webpackPrefetch: true */ '@/components/filter/Filter'),
  },

  data() {
    return {
      filterParam: '',
    };
  },

  methods: {
    filterVal(value){
      console.log('in home', value);
      this.filterParam = value
    }
  },
};
</script>

<style lang="scss" scoped>
  .container {
    &__row {
      display: flex;
      flex-wrap: wrap;
      flex: 1 0 30%;
      margin: 10px;
    }

    &__col--1 {
      padding-left: 100px;
      width: 15%;
    }

    &__col--2 {
      width: 60%;
    }
  }

  /* Media query para tabletas */
  @media (max-width: 768px) {
    .container {
      &__col--1 {
        padding-left: 0px;
        padding-bottom: 20px;
        width: 100%;
      }

      &__col--2 {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0px;
      }
    }
  }
</style>
