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
                <a class="navbar-item is-active">
                  Git
                </a>
                <span class="navbar-item">
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Message
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
              <router-link 
              to="/"
              v-if="isLogin">
                <li class="is-active">
                  <a>Home</a>
                </li>
              </router-link>
              <router-link 
              to="/register"
              v-if="!isLogin">
                <li>
                  <a>SignUp</a>
                </li>
              </router-link>
              <router-link 
              to="/login"
              v-if="!isLogin">
                <li>
                  <a>SignIn</a>
                </li>
              </router-link>
              <li 
              @click="logout" 
              v-if="isLogin">
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
  import store from './store'
  export default {
    methods: {
      logout () {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      isLogin () {
        return store.getters.email !== ''
      }
    }
  }
  
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
