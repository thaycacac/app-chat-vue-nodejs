<template>
  <div>
    <br>
    <br>
    <section class="container">
      <p>{{name}}</p>
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
          <form @submit.prevent="login">
            <!-- TODO: EMAIL -->
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input 
                class="input" 
                :class="{'is-success': emailValid }" 
                type="email" 
                placeholder="Email input" 
                v-model="email">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right"
                v-if="emailValid === true">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p class="help is-success" v-if="emailValid === true">This email is available</p>
              <p class="help is-danger" v-if="emailValid === false">This email is invalid</p>
            </div>
            <!-- TODO: PASSWORD -->
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input 
                class="input" 
                type="password"
                :class="{'is-success' : passwordValid}" 
                placeholder="Password input" 
                v-model="password">
                <span class="icon is-small is-left">
                  <i class="fas fa-key"></i>
                </span>
                <span 
                class="icon is-small is-right"
                v-if="passwordValid">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p 
              class="help is-success"
              v-if="passwordValid">This password is available</p>
              <ul v-if="passwordValid === false">
                <li><p class="help is-danger" v-if="passwordValid === false">Contain at least one digit</p></li>
                <li><p class="help is-danger" v-if="passwordValid === false">Contain at least one lower case</p></li>
                <li><p class="help is-danger" v-if="passwordValid === false">Contain at least one upper case</p></li>
                <li><p class="help is-danger" v-if="passwordValid === false">Contain at least 8 from the mentioned characters</p></li>
              </ul>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <!-- <router-link to="/"> -->
                <button 
                class="button is-link is-success" 
                type="submit"
                >SignUp</button>
                <!-- </router-link> -->
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <div class="column is-3"></div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        loading: false
      }
    },
    methods: {
      login () {
        this.loading = true
        this.axios
      .post('/api/login', {
        email: this.email,
        password: this.password
      })
      .then(res => {
        if (res.data.auth) {
          this.$emit('auth', [res.data.name, res.data.email])
          console.log('login success')
        }
      })
      .catch(err => {
        this.failMsg = err.response.data.message
        this.loginFail = true
      })
      .then(() => {
        this.loading = false
      })
      }
    },
    computed: {
      emailValid () {
        let regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(this.email)) {
          return true
        } else if (this.email === '') {
          return null
        } else {
          return false
        }
      },
      passwordValid () {
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        if (regex.test(this.password)) {
          return true
        } else if (this.password === '') {
          return null
        } else {
          return false
        }
      }
    }
  }
</script>