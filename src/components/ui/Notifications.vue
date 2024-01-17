<template>
  <div id="toasts">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'NotificationComponent',
    methods: {
      getBackgroundColor (color) {
        switch (color) {
          case 'info':
            return '#009CD9'
          case 'error':
            return '#B72C2C'
          default:
            return 'green'
        }
      },
      showNotification (message, color = 'green') {
        const toasts = document.getElementById('toasts')

        const notification = document.createElement('div')

        notification.style['background-color']  = this.getBackgroundColor(color)
        notification.style['color']             = 'white'
        notification.style['border-radius']     = '5px'
        notification.style['padding']           = '1em 2em'
        notification.style['margin']            = '0.5em'
        notification.style['box-shadow']        = '4px 4px 0'

        notification.innerText = message
        toasts.appendChild(notification)

        setTimeout(() => {
          notification.remove()
        }, 3000)
      }
    }
  }
</script>

<style lang="css" scoped>
  #toasts {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>