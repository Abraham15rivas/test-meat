<template>
  <v-container>
    <v-row>
      <v-col class="px-0" cols="12" v-for="(article, index) in articles.data" :key="index">
        <v-card
          class="mx-2 card"
          elevation="1"
        >
          <v-img
            class="image-card align-end"
            height="200px"
            :src="article.image"
          >
          </v-img>

          <v-card-title class="title-card pb-0">
            {{ article.title }}
          </v-card-title>

          <v-card-text class="content-card">
            {{ article.content }}
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              text
            >
              Ver más
            </v-btn>
          </v-card-actions>
        </v-card>
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

  mounted(){
    this.getArticles();
  },
  methods: {
    getArticles(){
      this.loadingData = true
      try {
        repository.getArticles().then(res => {
          this.articles.data = res.data
        });
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
    height: 438px;
    border-radius: 0px 0px 10px 10px !important;
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
</style>
