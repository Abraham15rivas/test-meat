import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#D8AD3D',
        secondary: '#009CD9',
        tertiary: '#3F454A'
      },
    },
},
});
