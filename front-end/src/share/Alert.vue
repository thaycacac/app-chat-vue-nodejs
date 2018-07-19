<template>
    <div> {{alert}}</div>
</template>

<script>
import store from '@/store'
import router from '@/router'
export default {
  data () {
    return {
      title: this.$store.state.error.title,
      message: this.$store.state.error.message
    }
  },
  computed: {
    alert ({commit}) {
      this.$dialog.alert({
        title: this.title,
        message: this.message,
        type: 'is-danger',
        hasIcon: true,
        icon: 'times-circle',
        onConfirm () {
          store.dispatch('setError')
          router.push('/')
        }
      })
    }
  }
}
</script>


<style>

</style>
