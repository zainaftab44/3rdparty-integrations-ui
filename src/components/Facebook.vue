<template>
  <div class="hello">
    <div
      class="fb-login-button"
      data-width
      data-size="large"
      @data-onlogin="confirmLogin()"
      data-scope="public_profile,email,pages_show_list,pages_manage_posts"
      data-button-type="login_with"
      data-layout="default"
      data-auto-logout-link="fakse"
      data-use-continue-as="true"
    ></div>
    <br />
    <!-- <button @click="connect()">Click here to {{ gen_save }} access token</button> -->
  </div>
  <hr />
  <div class="postarea">
    <div id="fb-root"></div>
    <h1>Create Post</h1>
    <input type="text" v-model="title" placeholder=" Enter title" />
    <br />
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
  name: "Facebook",
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
    confirmLogin() {
      FB.getLoginStatus(function (response) {
        if (response.authResponse.accessToken) console.log(response);
        connect(response);
      });
    },
    connect(data) {
      console.log(data);
      axios.post("//localhost:8088/facebook/saveaccesstoken", data).then(function (data) {
        console.log(data);
      });
    },
    createPost() {
      alert(this.title);
      axios
        .post(
          "http://localhost:8000/facebook/createpost",
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
  mounted() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: "<your-app-id>",
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });

      FB.AppEvents.logPageView();
      FB.getLoginStatus((response) => {
        console.log(response);
        try {
          if (response.authResponse != "undefined" || response.authResponse != null) {
            if (response.status == "connected") {
              this.connect(response.authResponse);
              // console.log(JSON.parse(response.authResponse));
              // consol.log(JSON.stringify(response.authResponse));
            }
          }
        } catch (error) {
          console.log(error);
        }
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
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
