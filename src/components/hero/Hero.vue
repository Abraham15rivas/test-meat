<template>
  <div>
    <div class="hero">
      <img
        class="hero__image"
        src="../../assets/img/b2 1.png"
      ><img>
      <div class="hero__content__title">
        <span class="hero__title">El secreto de tu cocina</span>
      </div>
      <div class="hero__gradient"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroView',
  };
</script>

<style lang="scss" scoped>
  .hero {
    &__image {
      width: 100%;
      height: 741px !important;
      left: 0px;
      top: 0px;
    }

    &__gradient {
      position: absolute;
      width: 100%;
      height: 228.28px;
      left: 0px;
      top: 512.72px;
      background: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 32.22%, rgba(255, 255, 255, 0.71) 61.99%, rgba(255, 255, 255, 0.0729167) 93.72%, rgba(255, 255, 255, 0) 93.72%);
    }

    &__title {
      position: absolute;
      left: 9.17%;
      right: 46.74%;
      top: 9%;
      bottom: 82.9%;
      width: 520px;
      font-family: 'Caveat', cursive !important;
      font-style: normal;
      font-weight: 700;
      font-size: 120px !important;
      line-height: 100px;
      display: flex;
      align-items: center;
      color: #3F454A;
    }

    &__content__title {
      position: absolute;
      width: 635px;
      height: 200px;
      left: 90px;
      top: 280px;
    }
  }
</style>
