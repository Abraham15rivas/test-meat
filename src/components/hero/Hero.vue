<template>
  <div>
    <div>
      <v-img
        class="hero"
        src="../../assets/img/b2 1.png"
      ></v-img>
      <div class="content-title">
        <span class="title">El secreto de tu cocina</span>
      </div>
      <div class="gradient"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroView',
  };
</script>

<style lang="scss" scoped>
  .hero{
    width: 100%;
    height: 741px !important;
    left: 0px;
    top: 0px;
  }

  .gradient{
    position: absolute;
    width: 100%;
    height: 228.28px;
    left: 0px;
    top: 512.72px;
    background: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 32.22%, rgba(255, 255, 255, 0.71) 61.99%, rgba(255, 255, 255, 0.0729167) 93.72%, rgba(255, 255, 255, 0) 93.72%);
  }

  .content-title{
    position: absolute;
    width: 635px;
    height: 200px;
    left: 90px;
    top: 280px;
  }

  .title{
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
</style>
