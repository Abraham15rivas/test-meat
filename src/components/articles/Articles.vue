<template>
  <v-container>
    <v-row v-if="articles.loading">
      <v-col
        class="px-0"
        cols="12"
        md="4"
        v-for="(loader, index) in 3"
        :key="index"
       >
        <v-skeleton-loader
          class="mx-3"
          v-bind="attrs"
          type=" image, article"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        class="px-0"
        cols="12"
        md="4"
        v-for="(article, index) in articles.data"
        :key="index"
       >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto card card-hover"
            elevation="1"
          >
            <v-img
              class="image-card"
              height="200px"
              :src="article.image"
              contain
            ></v-img>

            <v-card-title class="title-card pb-0">
              {{ article.title }}
            </v-card-title>

            <v-card-text class="content-card">
              {{ article.content }}
            </v-card-text>
            <v-expand-transition>
              <v-card-actions
                v-if="hover"
                class=""
              >
              <v-btn
                color="orange"
                text
              >
                Ver más
              </v-btn>
            </v-card-actions>
            </v-expand-transition>

          </v-card>
          </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import repository from "@/api/repository";
export default {
  name: 'CardsView',
  data() {
    return {
      articles: {
        loading: false,
        data: []
      }
    };
  },
  props: {
    filter: {
      type: String
    }
  },
  watch: {
    'filter' (filter) {
      this.getArticles(filter)
    }
  },
  mounted(){
    this.getArticles()
  },
  methods: {
    getArticles(filter){
      this.articles.loading = true
      let valueFilter = filter !== 'Todos' ? filter : null

      try {
        repository.getArticles(valueFilter)
          .then(res => {
            if (res.status === 200) {
              this.articles.data = res.data
            }
          }).catch((error) => {
            console.log("Error",error)
          }).finally(() => {
            this.articles.loading = false
          })
      } catch (error) {
        console.log("Error",error)
      }
    },
  }
};
</script>

<style lang="scss" scoped>
  .card{
    width: 270px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 4px 40px 0px #00000012;
  }

  .image-card{
    border-radius: 10px 10px 0px 0px !important;
  }

  .title-card{
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 700;
    font-size: 18px;
    font-style: normal !important;
  }

  .content-card{
    font-weight: 400;
    font-size: 14px;
    color: #24272A;
  }

  .card-hover:hover {
    color: orange;
  }
</style>
