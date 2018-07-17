<template>
  <div>
    <section class="hero is-danger is-small">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <!-- nothing -->
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            <!-- Tile in here -->
          </h1>
          <h2 class="subtitle">
            Thaycacac
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <router-link to="/">
                <li class="is-active">
                  <a>Home</a>
                </li>
              </router-link>
              <router-link to="/register">
              <li>
                  <a>SignUp</a>
              </li>
              </router-link>
              <router-link to="/login">
              <li>
                <a>SignIn</a>
              </li>
              </router-link>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
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
