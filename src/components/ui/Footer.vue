<template>
  <div>
    <footer>
      <div class="footer">
        <span class="footer__title">Contáctanos</span>
      </div>
      <Form />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterView',
  components:{
    Form: () => import(/* webpackPrefetch: true */ '@/components/form/Form'),
  }
};
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: center;
    margin-top: 60px;

    &__title {
      font-family: 'Caveat', cursive !important;
      font-size: 80px !important;
      font-weight: 700;
      color: #3F454A !important;
    }
  }
</style>