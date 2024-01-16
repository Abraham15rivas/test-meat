<template>
  <div class="container">
    <form class="form" @submit.prevent="sendData">
      <div class="container__row">
        <div class="container__col--6">
          <label class="form__label" for="firstname">NOMBRE</label>
          <input
            id="firstname"
            class="form__input"
            type="text"
            v-model="subscriptor.data.firstname"
            :disabled="subscriptor.loading"
            required
          >
        </div>
        <div class="container__col--6">
          <label class="form__label" for="lastname">APELLIDO</label>
          <input
            id="lastname"
            class="form__input"
            type="text"
            v-model="subscriptor.data.lastname"
            :disabled="subscriptor.loading"
            required
          >
        </div>
      </div>

      <div class="container__row">
        <div class="container__col--6">
          <label class="form__label" for="email">MAIL</label>
          <input
            id="email"
            class="form__input"
            type="email"
            v-model="subscriptor.data.email"
            :disabled="subscriptor.loading"
            required
          >
        </div>
        <div class="container__col--6">
          <label class="form__label" for="phone">TELÉFONO</label>
          <input
            id="phone"
            class="form__input"
            type="text"
            v-model="subscriptor.data.phone"
            :disabled="subscriptor.loading"
            required
          >
        </div>
      </div>

      <center>
        <button
          class="form__send-button"
          type="submit"
          :disabled="subscriptor.loading"
        >
          Enviar
        </button>
      </center>
    </form>
  </div>
</template>

<script>
import repository from "@/api/repository";

export default {
  name: 'FormView',

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
      if (Object.keys(this.subscriptor.data).length < 4) {
        this.$root.notifications.show({
          title: 'Error!',
          info: 'Todos los campos deben estar completados',
          color: 'error',
          icon: 'mdi-close-circle-outline'
        })
        return false
      }

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
  $color-primary: orange;
  $color-secondary: #009CD9;

  .container {
    &__row {
      display: flex;
      flex-wrap: wrap;
      flex: 1 0 30%;
      margin: 30px;
      justify-content: center;
    }

    &__col--6 {
      width: 50%;
    }
  }

  .form {
    padding: 0px 150px;

    &__label {
      font-family: 'Open Sans', sans-serif !important;
      font-size: 13px;
      font-weight: 700;
      color: #24272A;
      display: block;
    }

    &__input {
      width: 95%;
      height: 40px;
      padding: 0 16px;
      border: 2px solid #ddd;
      font-family: 'Rubik', sans-serif;
      outline: 0;
      transition: .2s;
      margin-top: 10px;
      display: block;
    }

    &__input:focus {
      border-color: $color-primary;
    }

    &__send-button {
      width: 170px;
      height: 55px !important;
      color: white;
      background-color: $color-primary;
      margin: 50px;
      border-radius: 30px;
      text-transform: uppercase;
      font-weight: bold;
    }

    &__send-button:hover {
      background-color: $color-secondary !important;
    }
  }
</style>