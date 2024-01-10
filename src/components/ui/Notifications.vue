<template>
  <v-snackbar
    v-model="snackbar"
    right
    top
    :color="color"
    multi-line
    text
  >
    <h4>{{ title }}</h4>
    <h5>{{ info }}</h5>
    <template #action="{ attrs }">
      <v-btn
        v-bind="attrs"
        @click="snackbar = false"
        icon
        :color="color"
      >
        <v-icon> {{ icon }} </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  export default {
    name: 'NotificationComponent',
    data(){
      return{
        snackbar: false,
        title: '',
        info: '',
        color: 'success',
        icon: 'mdi-check',
        timeout: 4000
      }
    },

    methods:{
      show(data) {
        this.title = data.title
        this.info = data.info
        this.color = data.color
        this.timeout = data.timeout
        this.icon = data.icon
        this.snackbar = true
      }
    }
  }
</script>