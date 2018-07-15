<template>
  <div style="display: flex; justify-content: center">
    <div class="signup">
      <md-theme md-name="login">
        <div class="md-title">Cadastre-se</div>

        <form id="form-signup" @submit.prevent="onSubmit">
          <md-input-container md-theme="success">
            <label>Nome completo</label>
            <md-input type="text" v-model="name" required></md-input>
          </md-input-container>

          <md-input-container :class="emailInfo === 'invalid' ? 'md-input-invalid' : ''" :md-theme="emailInfo === 'invalid' ?  'warning' : 'success'">
            <label>Email</label>
            <md-input type="email" v-model="email" required></md-input>

            <md-icon v-if="emailInfo === 'valid'" class="md-accent">check_circle</md-icon>
            <md-icon v-if="emailInfo === 'invalid'" class="md-warn">close</md-icon>
            <md-spinner v-if="emailInfo === 'checking'" :md-size="20" md-indeterminate></md-spinner>

            <span class="md-error">Insira um email válido</span>
          </md-input-container>

          <div class="container">
            <md-input-container md-inline :class="passInfo === 'invalid' ? 'md-input-invalid' : ''" :md-theme="passInfo === 'invalid' ?  'warning' : 'success'">
              <label>Senha</label>
              <md-input type="password" v-model="password" required></md-input>

              <md-icon v-if="passInfo === 'valid'" class="md-accent">check_circle</md-icon>
              <md-icon v-if="passInfo === 'invalid'" class="md-warn">close</md-icon>
              <md-spinner v-if="passInfo === 'checking'" :md-size="20" md-indeterminate></md-spinner>

              <span class="md-error">A senha precisa ter 8 dígitos ou mais</span>
            </md-input-container>

            <div style="flex-basis: 10%"></div>

            <md-input-container md-inline :class="rePassInfo === 'invalid' ? 'md-input-invalid' : ''" :md-theme="rePassInfo === 'invalid' ?  'warning' : 'success'">
              <label><small>Digite sua senha novamente</small></label>
              <md-input type="password" v-model="rePassword" required></md-input>

              <md-icon v-if="rePassInfo === 'valid'" class="md-accent">check_circle</md-icon>
              <md-icon v-if="rePassInfo === 'invalid'" class="md-warn">close</md-icon>
              <md-spinner v-if="rePassInfo === 'checking'" :md-size="20" md-indeterminate></md-spinner>

              <span class="md-error">As senhas não são iguais</span>
            </md-input-container>
        </div>

          <md-layout md-gutter>
            <md-layout :md-flex="60">
              <md-spinner v-if="loading" :md-size="40" :md-stroke="2" md-indeterminate></md-spinner>
              <span v-else v-show="signupFail" class="errorMsg">
                <md-icon>error_outline</md-icon>
                <small>&nbsp; {{ failMsg }}</small>
              </span>
            </md-layout>
            <md-layout :md-flex="40">
              <md-button type="submit" class="md-raised md-accent">Cadastrar</md-button>
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
  name: 'signup',

  data () {
    return {
      name: '',
      email: '',
      password: '',
      rePassword: '',

      emailInfo: '',
      passInfo: '',
      rePassInfo: '',

      signupFail: false,
      failMsg: '',

      loading: false
    }
  },

  methods: {
    onSubmit () {
      this.loading = true

      this.axios.post('/api/signup', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then(res => {
        alert(res.data.message)
      })
      .catch(err => {
        console.log(err.message)
        this.failMsg = err.response.data.message
        this.signupFail = true
      })
      .then(() => {
        this.loading = false
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
    }, 500),

    checkrePass: _.debounce(function () {
      if (this.rePassword !== this.password) {
        this.rePassInfo = 'invalid'
      } else {
        this.rePassInfo = 'valid'
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
      if (this.rePassword !== '') this.checkrePass()
    },
    rePassword: function () {
      this.rePassInfo = 'checking'
      this.checkrePass()
    }
  }
}
</script>

<style scoped>
.signup
 {
  min-width: 350px;
  max-width: 400px;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 0px 5px lightgrey;
}

.errorMsg {
  display: flex;
  align-items: center;
  color: red;
}

.container {
  display: flex;
}
</style>
