<template>
  <div>
    <main>
      <Home />
    </main>
    <Footer />
    <Notifications ref="notifications"/>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
    Home: () => import(/* webpackPrefetch: true */ '@/views/Home.vue'),
    Footer: () => import(/* webpackPrefetch: true */ '@/components/ui/Footer'),
    Notifications: () => import(/* webpackPrefetch: true */ '@/components/ui/Notifications.vue')
  },

  mounted(){
    setTimeout(() => {
      this.$root.notifications = this.$refs.notifications
    }, 500)
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Open+Sans&display=swap');

  body {
    margin: 0px;
    font-family: "Open Sans";
  }
</style>
