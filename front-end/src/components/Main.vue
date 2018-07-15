<template>
  <div class="container">
    <h2 class="md-title">Olá {{ name }}, seja bem vindo!</h2>

    <div class="chat-container">
      <div class="chat-view">
        <div>
          <div v-for="msg in messages">
            <div :class="msg.sender == name ? 'self-msg' : 'chat-message'">
              <div>
                <b>{{ msg.sender }}</b><br>
                {{ msg.text }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <form id="chat-login" @submit.prevent="onSubmit">
        <div class="chat-input">
          <md-input-container md-inline>
            <label>Envie uma mensagem...</label>
            <md-input id="msgField" type="text" v-model="clientMsg" :debounce='0'></md-input>
          </md-input-container>

          <span style="align-self: center">
            <md-button type="submit" class="md-accent md-raised md-icon-button">
              <md-icon>send</md-icon>
            </md-button>
          </span>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',

  data () {
    return {
      clientMsg: '',
      messages: [
        { sender: 'admin', text: 'Olá!' },
        { sender: 'admin', text: 'Sejam bem viados!' }
      ]
    }
  },

  props: ['name', 'email'],

  methods: {
    onSubmit () {
      let client = this.$socket

      client.emit('chatMessage', { sender: this.name, text: this.clientMsg })
      this.messages.push({ sender: this.name, text: this.clientMsg })

      document.getElementById('msgField').value = ''
      this.clientMsg = ''
    }
  },

  sockets: {
    chatMessage: function (msg) {
      this.messages.push(msg)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 500px) {
  .chat-container {
    width: 100%;
    padding: 10px;
    background-color: #B0BEC5;
    box-shadow: 0px 0px 10px black;
  }
}
@media only screen and (min-width: 500px) {
  .chat-container {
    width: 50vw;
    padding: 10px;
    background-color: #B0BEC5;
    box-shadow: 0px 0px 10px black;
  }
}

.chat-view {
  display: flex;
  height: 40vh;

  flex-direction: column-reverse;
  justify-content: flex-start;

  overflow-y: auto;

  padding: 10px;
  box-shadow: 0 0 5px grey;
  background-color: white;
}

.chat-message {
  margin: 3px;
}
.chat-message div {
  display: inline-block;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 10px;

  background-color: lightblue;
}

.chat-input {
  display: flex;
}

.self-msg {
  margin: 3px;
  text-align: right;
}

.self-msg div {
  display: inline-block;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;

  text-align: left;

  background-color: lightgreen;
}
</style>
