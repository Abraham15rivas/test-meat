<template>
  <div>
    <form class="form" @submit.prevent="sendData">
      <div class="form__row">
        <div class="form__col--6">
          <label class="form__label" for="firstname">NOMBRE</label>
          <input
            id="firstname"
            :class="{
              'form__input': true,
              'form__input--disabled': (subscriptor.loading)
            }"
            type="text"
            v-model="subscriptor.data.firstname"
            :disabled="subscriptor.loading"
            required
          >
        </div>
        <div class="form__col--6">
          <label class="form__label" for="lastname">APELLIDO</label>
          <input
            id="lastname"
            :class="{
              'form__input': true,
              'form__input--disabled': (subscriptor.loading)
            }"
            type="text"
            v-model="subscriptor.data.lastname"
            :disabled="subscriptor.loading"
            required
          >
        </div>
      </div>
      <div class="form__row">
        <div class="form__col--6">
          <label class="form__label" for="email">MAIL</label>
          <input
            id="email"
            :class="{
              'form__input': true,
              'form__input--disabled': (subscriptor.loading)
            }"
            type="email"
            v-model="subscriptor.data.email"
            :disabled="subscriptor.loading"
            required
          >
        </div>
        <div class="form__col--6">
          <label class="form__label" for="phone">TELÉFONO</label>
          <input
            id="phone"
            :class="{
              'form__input': true,
              'form__input--disabled': (subscriptor.loading)
            }"
            type="number"
            min="0"
            v-model="subscriptor.data.phone"
            :disabled="subscriptor.loading"
            required
          >
        </div>
      </div>
      <center>
        <button
          :class="{
            'form__send-button': true,
            'form__send-button--disabled': (subscriptor.loading),
            'form__send-button--default': (!subscriptor.loading)
          }"
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
      subscriptor: {
        loading: false,
        data: {}
      }
    };
  },

  methods: {
    sendData(){
      if (Object.keys(this.subscriptor.data).length < 4) {
        this.$root.notifications.showNotification('Todos los campos deben estar completados', 'info')
        return false
      }

      this.subscriptor.loading = true

      try {
        repository.createNewsletter(this.subscriptor.data).then(res => {
          if(res.status == 200){
            this.$root.notifications.showNotification('Se ha enviado el formulario correctamente')
          }
        }).catch((error)=>{
          console.log(error);
          this.$root.notifications.showNotification('Ha ocurrido un error en el servidor, intente de nuevo más tarde', 'error')
        }).finally(() => {
          this.subscriptor.loading = false
        })
      } catch (error) {
        console.log("Error",error)
        this.$root.notifications.showNotification('Ha ocurrido un error en el servidor, intente de nuevo más tarde', 'error')
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  $primary-color: #D8AD3D;
  $secondary-color: #009CD9;

  .form {
    padding: 0px 250px;

    &__row {
      display: flex;
      flex-wrap: wrap;
    }

    &__col--6 {
      flex: 1;
      margin: 5px;
    }

    &__label {
      font-family: 'Open Sans', sans-serif !important;
      font-size: 13px;
      font-weight: 700;
      line-height: 24px;
      color: #24272A;
      display: block;
    }

    &__input {
      width: 85%;
      height: 50px;
      padding: 0 16px;
      border: 1px solid #CFCFCF;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      outline: 0;
      transition: 0.2s;
      margin-top: 10px;
      display: block;
    }

    &__input:focus {
      border-color: $primary-color !important;
    }

    &__input:required:invalid {
      border-color: #B72C2C;
    }

    &__send-button {
      width: 170px;
      height: 55px !important;
      color: white;
      margin: 50px;
      border-radius: 50px;
      border: none !important;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 700;
      line-height: 26px;
    }

    &__send-button:hover {
      background-color: $secondary-color !important;
    }

    &__send-button--default {
      background-color: $primary-color;
    }

    &__send-button--disabled {
      cursor: not-allowed;
      background-color: rgb(229, 229, 229) !important;
      pointer-events: none;
    }

    &__input--disabled {
      cursor: not-allowed;
      background-color: rgb(229, 229, 229) !important;
      pointer-events: none;
    }
  }

  /* Media query para tabletas */
  @media (max-width: 768px) and (min-width: 425px) {
    .form {
      padding: 0px 100px;
    }
  }

  @media (max-width: 426px) {
    .form {
      padding: 0px 50px;

      &__row {
        flex-direction: column !important;
      }

      &__send-button {
        width: 120px;
        height: 40px !important;
        font-size: 12px;
      }

      &__label {
        font-size: 10px;
      }

      &__input {
        width: 85%;
        height: 35px;
        padding: 0 16px;
        border: 1px solid #CFCFCF;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        outline: 0;
        transition: 0.2s;
        margin-top: 10px;
        display: block;
      }
    }
  }
</style>