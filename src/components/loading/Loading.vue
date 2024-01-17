<template>
  <div class="loading">
    <div class="loading__balls"></div>
    <div class="loading__balls"></div>
    <div class="loading__balls"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent'
}
</script>


<style lang="scss" scoped>
  $primary-color: #D8AD3D;

  .loading {
    width: 120px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto;

    &__balls {
      width: 30px;
      height: 30px;
      background-color: $primary-color;
      animation: leap .5s alternate infinite;
      border-radius: 50%;
    }

    &__balls:nth-child(2) {
      animation-delay: .18s;
    }

    &__balls:nth-child(3) {
      animation-delay: .37s;
    }

    @keyframes leap {
      from {
        transform: scaleX(1.25);
      }
      to {
        transform:
        translateY(-50px) scaleX(1);
      }
    }
  }
</style>