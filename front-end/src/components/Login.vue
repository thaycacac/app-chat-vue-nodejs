<template>
  <div id="login" class="center">
    <div class="login">
      <md-theme md-name="login">
        <div class="md-title">Login</div>

        <form id="form-login" v-on:submit.prevent="onSubmit">
          <md-input-container :class="emailInfo === 'invalid' ? 'md-input-invalid' : ''" :md-theme="emailInfo === 'invalid' ?  'warning' : 'success'">
            <label>Email</label>
            <md-input type="email" v-model="email" :debounce='0' required></md-input>

            <md-icon v-if="emailInfo === 'valid'" class="md-accent">check_circle</md-icon>
            <md-icon v-if="emailInfo === 'invalid'" class="md-warn">close</md-icon>
            <md-spinner v-if="emailInfo === 'checking'" :md-size="20" md-indeterminate></md-spinner>

            <span class="md-error">Insira um email válido</span>
          </md-input-container>

          <md-input-container :class="passInfo === 'invalid' ? 'md-input-invalid' : ''" :md-theme="passInfo === 'invalid' ?  'warning' : 'success'">
            <label>Senha</label>
            <md-input type="password" v-model="password" :debounce='0' required></md-input>

            <md-icon v-if="passInfo === 'valid'" class="md-accent">check_circle</md-icon>
            <md-icon v-if="passInfo === 'invalid'" class="md-warn">close</md-icon>
            <md-spinner v-if="passInfo === 'checking'" :md-size="20" md-indeterminate></md-spinner>

            <span class="md-error">A senha precisa ter 8 dígitos ou mais</span>
          </md-input-container>

          <md-layout md-gutter>
            <md-layout :md-flex="65">
              <md-spinner v-if="loading" :md-size="40" :md-stroke="2" md-indeterminate></md-spinner>
              <span v-else v-show="loginFail" class="errorMsg">
                <md-icon>error_outline</md-icon>
                <small>&nbsp; {{ failMsg }}</small>
              </span>
            </md-layout>
            <md-layout :md-flex="25">
              <md-button type="submit" class="md-raised md-accent">Login</md-button>
            </md-layout>
          </md-layout>
        </form>
      </md-theme>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: '',

      emailInfo: '',
      passInfo: '',

      loginFail: false,
      failMsg: '',

      loading: false
    }
  },

  methods: {
    onSubmit () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    },
    checkEmail: _.debounce(function () {
      if (this.email.indexOf('@') === -1) {
        this.emailInfo = 'invalid'
      } else {
        this.emailInfo = 'valid'
      }
    }, 500),

    checkPass: _.debounce(function () {
      if (this.password.length < 8) {
        this.passInfo = 'invalid'
      } else {
        this.passInfo = 'valid'
      }
    }, 500)
  },

  watch: {
    email: function () {
      this.emailInfo = 'checking'
      this.checkEmail()
    },

    password: function () {
      this.passInfo = 'checking'
      this.checkPass()
    }
  }
}
</script>

<style scoped>
.login {
  min-width: 300px;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 0px 5px lightgrey;
}

.errorMsg {
  display: flex;
  align-items: center;
  color: red;
}
</style>
