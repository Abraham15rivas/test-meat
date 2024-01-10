<template>
  <div>
    <Hero />
    <v-container>
      <v-row justify="end">
        <v-col cols="12" md="3">
          <Filters @setFilter="filterVal"/>
        </v-col>
        <v-col cols="12" md="9">
          <Articles
            :filter="filterParam"
          />
        </v-col>
    </v-row>
    </v-container>
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
