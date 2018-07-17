<template>
  <div class="container">
      <div class="frame">
            <ul>
                <li 
                style="width:100%"
                v-for="msg in messages">
                    <div class="msj macro" v-if="msg.sender !== sender">
                        <figure class="image is-48x48">
                            <img style="border-radius:50%" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                        <div class="text">
                            <p class="is-size-5">{{ msg.text }}</p>
                            <p><small>{{ msg.sender }}</small></p>
                        </div>
                    </div>
                    <div class="msj-rta macro" v-else>
                        <div class="text">
                            <p class="is-size-5">{{ msg.text }}</p>
                            <p><small>{{ msg.sender }}</small></p>
                        </div>
                    <figure class="image is-48x48">
                        <img style="border-radius:50%" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                    </div>
                </li>
            </ul>
      </div>
        <div class="columns">
            <div class="column is-10">
                    <div class="field">
                        <div class="control">
                            <input 
                            class="input is-large is-danger" 
                            type="text" 
                            placeholder="Input messages"
                            v-model="clientMsg"
                            @keyup.enter="onSubmit">
                        </div>
                    </div>
            </div>
            <div class="column is-2">
                <div 
                class="button is-rounded is-large is-danger"
                @click="onSubmit">Send...</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clientMsg: '',
      messages: [
        { sender: 'admin', text: 'Hello' },
        { sender: 'hoapnse05740', text: 'I\'m thaycacac' }
      ],
      sender: this.$store.state.email
    }
  },
  methods: {
    onSubmit () {
      let client = this.$socket

      client.emit('chatMessage', { sender: this.sender, text: this.clientMsg })
      this.messages.push({ sender: this.sender, text: this.clientMsg })
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
.mytext{
    border:0;padding:10px;background:whitesmoke;

}
.text{
    width:95%;display:flex;flex-direction:column;
}
.text > p:first-of-type{
    width:100%;margin-top:3px;margin-bottom:auto;line-height: 13px;font-size: 12px;
    margin-left: 15px;
}
.text > p:last-of-type{
    width:100%;text-align:right;color:silver;margin-bottom:-5px;margin-top:auto;
}
.text-l{
    float:left;padding-right:10px;
}        
.text-r{
    float:right;padding-left:10px;
}
.avatar{
    display:flex;
    justify-content:center;
    align-items:center;
    width:25%;
    float:left;
    padding-right:10px;
}
.macro{
    margin-top:5px;width:85%;border-radius:5px;padding:5px;display:flex;
}
.msj-rta{
    float:right;background:whitesmoke;
    background-color: hsl(171, 93%, 83%);
}
.msj{
    float:left;background:white;
    margin-left: 2px;
}
.frame{
    background:#e0e0de;
    height:90vh;
    overflow:hidden;
    padding:0;
}
.frame > div:last-of-type{
    position:absolute;bottom:0;width:100%;display:flex;
}
body > div > div > div:nth-child(2) > span{
    background: whitesmoke;padding: 10px;font-size: 21px;border-radius: 50%;
}
body > div > div > div.msj-rta.macro{
    margin:auto;margin-left:1%;
}
ul {
    width:100%;
    list-style-type: none;
    padding:18px;
    position:absolute;
    bottom:47px;
    display:flex;
    flex-direction: column;
    top:0;
    overflow-y:scroll;
}
.msj:before{
    width: 0;
    height: 0;
    content:"";
    top:-5px;
    left:-14px;
    position:relative;
    border-style: solid;
    border-width: 0 13px 13px 0;
    border-color: transparent #ffffff transparent transparent;         
}
.msj-rta:after{
    width: 0;
    height: 0;
    content:"";
    top:-5px;
    left:14px;
    position:relative;
    border-style: solid;
    border-width: 13px 13px 0 0;
    border-color: hsl(171, 93%, 83%) transparent transparent transparent;        
}  
input:focus{
    outline: none;
}        
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #d4d4d4;
}
::-moz-placeholder { /* Firefox 19+ */
    color: #d4d4d4;
}
:-ms-input-placeholder { /* IE 10+ */
    color: #d4d4d4;
}
:-moz-placeholder { /* Firefox 18- */
    color: #d4d4d4;
}  
</style>
