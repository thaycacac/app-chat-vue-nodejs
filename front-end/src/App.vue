<template>
<div>
  <router-view></router-view>
    <main id="app" class="phone-viewport">
      <md-theme md-name="main">
        <md-toolbar>
          <!-- <md-button class="md-icon-button" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
          </md-button> -->

          <h1 class="md-title" style="flex: 1">{{ title }}</h1>
        </md-toolbar>

        <md-sidenav class="md-left" ref="leftSidenav">
          <md-toolbar md-class="dense">
              <h3 class="md-title">Sidenav content</h3>
          </md-toolbar>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
        </md-sidenav>

        <md-tabs class="md-accent" style="overflow: hidden" @change="t => tab = t">
          <md-tab id="main" md-label="Início" :md-active="online" :md-disabled="!online">
            <CcMain :name="user.name"></CcMain>
          </md-tab>
          <md-tab id="hello" md-label="Hello">
            <CcHello></CcHello>
          </md-tab>

          <md-tab v-if="!online" id="login" md-label="Login" :md-active="!online">
            <CcLogin @auth="login"></CcLogin>
          </md-tab>
          <md-tab v-if="online" id="logout" md-label="Logout"></md-tab>

          <md-tab v-if="!online" id="signup" md-label="Cadastre-se">
            <CcSignup></CcSignup>
          </md-tab>
        </md-tabs>

        <md-dialog ref="logoutMsg">
          <md-dialog-title>{{ title }}</md-dialog-title>

          <md-dialog-content><i>may the force be with you</i></md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-accent" @click="logout">Ok</md-button>
          </md-dialog-actions>
        </md-dialog>
      </md-theme>
    </main>
  </div>
</template>

<script>
// import router from './router'

import CcMain from './components/Main'
import CcHello from './components/Hello'
import CcLogin from './components/Login'
import CcSignup from './components/Signup'

export default {
  name: 'app',

  components: {
    CcMain, CcHello, CcLogin, CcSignup
  },

  data () {
    return {
      title: 'Sistema de Login',
      online: false,
      user: { name: '', email: '' },
      tab: 0
    }
  },

  methods: {
    login ([name, email]) {
      this.online = true
      this.user.name = name
      this.user.email = email
    },

    logout () {
      this.closeDialog('logoutMsg')
      this.axios
      .get('/api/logout')
      .then(() => {
        this.online = false
        this.user = {}
      })
      .catch(err => {
        console.log('Error on logout', err)
      })
    },

    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },

    openDialog (ref) {
      this.$refs[ref].open()
    },

    closeDialog (ref) {
      this.$refs[ref].close()
    }
  },

  watch: {
    tab: function () {
      if (this.online && this.tab === 2) {
        this.openDialog('logoutMsg')
      }
    }
  },

  beforeMount () {
    this.axios
    .get('/api/login')
    .then(res => {
      this.online = res.data.auth
      this.user = res.data.user
    })
    .catch(err => {
      console.log(err.response.data.msg)
    })
  }
}
</script>

<style>
.center{
  display: flex;
  width: 100vw;

  margin-top: 100px;

  flex-direction: column;

  justify-content: center;
  align-items: center;
}
</style>
