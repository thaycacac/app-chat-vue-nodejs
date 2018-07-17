<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import router from './router'

// export default {
//   name: 'app',

//   components: {
//     CcMain, CcHello, CcLogin, CcSignup
//   },

//   data () {
//     return {
//       title: 'Sistema de Login',
//       online: false,
//       user: { name: '', email: '' },
//       tab: 0
//     }
//   },

//   methods: {
//     login ([name, email]) {
//       this.online = true
//       this.user.name = name
//       this.user.email = email
//     },

//     logout () {
//       this.closeDialog('logoutMsg')
//       this.axios
//       .get('/api/logout')
//       .then(() => {
//         this.online = false
//         this.user = {}
//       })
//       .catch(err => {
//         console.log('Error on logout', err)
//       })
//     },

//     toggleLeftSidenav () {
//       this.$refs.leftSidenav.toggle()
//     },

//     openDialog (ref) {
//       this.$refs[ref].open()
//     },

//     closeDialog (ref) {
//       this.$refs[ref].close()
//     }
//   },

//   watch: {
//     tab: function () {
//       if (this.online && this.tab === 2) {
//         this.openDialog('logoutMsg')
//       }
//     }
//   },

//   beforeMount () {
//     this.axios
//     .get('/api/login')
//     .then(res => {
//       this.online = res.data.auth
//       this.user = res.data.user
//     })
//     .catch(err => {
//       console.log(err.response.data.msg)
//     })
//   }
// }
</script>
<style>

</style>
