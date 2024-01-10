<template>
  <div>
    <div class="d-flex justify-center">
      <span class="title mt-16">Contáctanos</span> 
    </div>
    <v-container>
      <v-row class="mt-10" justify="center">
        <v-col cols="12" md="4">
          <label class="label-form">NOMBRE</label>
          <v-text-field
            v-model="subscriptor.data.firstname"
            :rules="[rules.required]"
            outlined
            required
            :disabled="subscriptor.loading"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <label class="label-form">APELLIDO</label>
          <v-text-field
            v-model="subscriptor.data.lastname"
            :rules="[rules.required]"
            outlined
            required
            :disabled="subscriptor.loading"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="4">
          <label class="label-form mb-5">MAIL</label>
          <v-text-field
            v-model="subscriptor.data.email"
            :rules="[rules.required, rules.email]"
            outlined
            required
            :disabled="subscriptor.loading"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <label class="label-form mb-5">TELÉFONO</label>
          <v-text-field
            v-model="subscriptor.data.phone"
            :rules="[rules.required, rules.phone]"
            outlined
            required
            :disabled="subscriptor.loading"
          ></v-text-field>
        </v-col>
      </v-row>
      <center>
        <v-btn
          class="send-button mt-8"
          rounded
          elevation="0"
          color="primary"
          @click="sendData()"
          :disabled="subscriptor.loading"
        >
          Enviar
        </v-btn>
      </center>
    </v-container>
  </div>
</template>

<script>
import repository from "@/api/repository";
export default {
  name: 'FooterView',

  data() {
    return {
      rules: {
				required: value => !!value || 'Este campo es obligatorio.',
				phone: value => value?.length <= 11 || 'El número telefónico no debe ser mayor a 11 caracteres.',
        email: value => /.+@.+/.test(value) || 'El Correo Electrónico no es válido',
			},
      subscriptor: {
        loading: false,
        data: {}
      }
    };
  },

  methods: {
    sendData(){
      this.subscriptor.loading = true
      try {
        repository.createNewsletter(this.subscriptor.data).then(res => {
          if(res.status == 200){
            this.$root.notifications.show({
              title: 'Operación Exitosa!',
              info: 'Se ha enviado el formulario correctamente',
              color: 'success',
              icon: 'mdi-check-circle-outline'
            })
          }
        }).catch((error)=>{
          console.log(error);
          this.$root.notifications.show({
            title: 'Error!',
            info: 'Ha ocurrido un error en el servidor, intente de nuevo más tarde',
            color: 'error',
            icon: 'mdi-close-circle-outline'
          })
        }).finally(() => {
          this.subscriptor.loading = false
        })
      } catch (error) {
        console.log("Error",error)
        this.$root.notifications.show({
          title: 'Error!',
          info: 'Ha ocurrido un error en el servidor, intente de nuevo más tarde',
          color: 'error',
          icon: 'mdi-close-circle-outline'
        })
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  .title{
    font-family: 'Caveat', cursive !important;
    font-size: 80px !important;
    font-weight: 700;
    color: #3F454A !important;
  }

  .label-form{
    font-family: 'Open Sans', sans-serif !important;
    font-size: 13px;
    font-weight: 700;
    color: #24272A;
  }
  .send-button{
    width: 170px;
    height: 55px !important;
  }

  .send-button:hover{
    background-color: #009CD9 !important;
  }

</style>