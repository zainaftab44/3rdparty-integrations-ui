<template>
  <div class="hello">
    <button @click="connect()">Click here to {{ gen_save }} access token</button>
  </div>
  <hr />
  <div class="postarea">
    <h1>Create Post</h1>
    <input type="text" v-model="title" placeholder=" Enter title" /><br />
    <ckeditor
      class="borders"
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <br />
    <button @click="createPost">Post</button>
  </div>
</template>

<script>
import axios from "axios";
import Balloon from "@ckeditor/ckeditor5-build-balloon";

export default {
  name: "Blogger",
  props: {},
  data() {
    return {
      title: "",
      gen_save: window.location.href.includes("&") ? " save " : " generate ",
      editor: Balloon,
      editorData: "",
      editorConfig: {
        placeholder: "Enter Post content here",
      },
    };
  },
  methods: {
    connect() {
      (function () {
        if (!window.location.href.includes("&"))
          window.location.href =
            "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http%3A%2F%2Flocalhost%3A8080&&prompt=consent&response_type=token&client_id=<your-client-id>&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fblogger&access_type=online&flowName=GeneralOAuthFlow";
        else {
          console.log(window.location.href);
          axios
            .post(
              "http://localhost:8000/blogger/saveaccesstoken",
              window.location.href.split("#")[1]
            )
            .then(function (data) {
              console.log(data);
            });
        }
      })();
    },
    createPost() {
      alert(this.title);
      axios
        .post(
          "http://localhost:8000/blogger/createpost",
          "title=" +
            encodeURIComponent(this.title) +
            "&content=" +
            encodeURIComponent(this.editorData)
        )
        .then(function (data) {
          alert(data);
        });
    },
    extactKeywords() {
      // var commonWords = ['i','a','about','an','and','are','as','at','be','by','com','de','en','for','from','how','in','is','it','la','of','on','or','that','the','this','to','was','what','when','where','who','will','with','und','the','www'];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  border: burlywood solid 1px;
  padding: 15px;
  font-size: 14pt;
  margin: 5px;
  border-radius: 20px;
  background-color: cornsilk;
  color: black;
}
input {
  font-size: 12pt;
  width: 80%;
  padding-left: 15px;
  height: 30px;
  border: 1px solid darkslategray;
  border-radius: 20px;
}
.borders {
  margin-top: 10px;
  border: darkslategray solid 1px;
  width: 80%;
  display: inline-block;
}
</style>
