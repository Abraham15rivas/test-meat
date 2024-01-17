<template>
  <div class="container">
    <section class="container__loading" v-if="articles.loading">
      <Loading />
    </section>
    <section v-else class="container__cards">
      <article
        class="container__card"
        v-for="(article, index) in articles.data"
        :key="index"
      >
        <div>
          <figure class="container__figure">
            <img class="container__card__img" :src="article.image" alt="" />
          </figure>
          <div class="container__body-card">
            <h3 class="container__body-card-h3">{{ article.title }}</h3>
            <p>
              {{ article.content }}
            </p>
            <a href="#" class="container__read-more">
              Ver más
            </a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import repository from "@/api/repository";
export default {
  name: 'CardsView',
  components:{
    Loading: () => import(/* webpackPrefetch: true */ '@/components/loading/Loading'),
  },
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
  $primary-color: #D8AD3D;

  .container {
    font-family: "Open Sans";
    display: flex;
    flex-wrap: wrap;

    &__loading {
      width: 100%;
      margin-top: 10%;
      align-items: center;
      justify-content: center;
    }

    &__cards {
      display: grid;
      max-width: 1200px;
      margin-inline: auto;
      padding-inline: 24px;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }

    &__card {
      --img-scale: 1.001;
      --title-color: black;
      --link-icon-translate: -20px;
      --link-icon-opacity: 0;
      position: relative;
      border-radius: 16px;
      box-shadow: none;
      background: #fff;
      transform-origin: center;
      transition: all 0.4s ease-in-out;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      &__img {
        max-width: 100%;
        transform-origin: center;
        transform: scale(var(--img-scale));
        transition: transform 0.4s ease-in-out;
      }
    }

    &__body-card {
      padding: 24px;
    }

    &__body-card-h3 {
      margin: 0 0 18px 0;
      font-family: "Open Sans";
      letter-spacing: 0.06em;
      color: var(--title-color);
      transition: color 0.3s ease-out;
    }

    &__card:has(:hover, :focus) {
      --img-scale: 1.1;
      --title-color: #D8AD3D;
      --link-icon-translate: 0;
      --link-icon-opacity: 1;
      .container__read-more {
        display: block;
        transition: all 0.4s ease-in-out;
        text-decoration: none;
      }
    }

    &__read-more {
      text-transform: uppercase;
      color: $primary-color;
      font-weight: bold;
      display: none;
      align-items: center;
      text-decoration: none;
    }

    &__figure {
      margin: 0;
      padding: 0;
      aspect-ratio: 16 / 9;
      overflow: hidden;
    }
  }
</style>
