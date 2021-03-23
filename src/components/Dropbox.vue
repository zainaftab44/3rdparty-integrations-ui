<template>
  <div class="hello">
    <button @click="connect()">Click here to {{ gen_save }} access token</button>
  </div>
  <hr />
  <div class="postarea">
    <p :v-bind="display_name">{{ display_name }}</p>
    <p :v-show="email">{{ email }}</p>
    <p :v-show="verified">{{ verified }}</p>
    <button @click="testConnection">Get Profile</button>
  </div>
  <div>
    <table>
      <tr>
        <th>Filename</th>
        <th>Size</th>
        <th>Path</th>
      </tr>
      <tr v-for="file in files" :key="file.id">
        <td>{{ file.name }}</td>
        <td>{{ (file.size / (1024 * 1024)).toFixed(2) }}MB</td>
        <td>{{ file.path_display }}</td>
      </tr>
    </table>

    <button @click="getfiles">Get files</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dropbox",
  data() {
    return {
      gen_save: "",
      display_name: "Name: ",
      email: "Email: ",
      verified: "Verified: ",
      files: [],
    };
  },
  props: {},
  methods: {
    connect() {
      (function () {
        if (!window.location.href.includes("token="))
          window.location.href =
            "https://www.dropbox.com/oauth2/authorize?client_id=<your-client-id>&response_type=token&redirect_uri=" +
            encodeURIComponent(window.location.href);
        else {
          console.log(window.location.href);
          axios
            .post(
              "http://localhost:8000/dropbox/saveaccesstoken",
              window.location.href.split("#")[1]
            )
            .then((data) => {
              console.log(data);
            });
        }
      })();
    },
    getfiles() {
      // alert(this.title);
      axios.post("http://localhost:8000/dropbox/getfiles").then((data) => {
        // alert(JSON.stringify(data));
        data = data.data;
        console.log(data);
        this.files = data.entries;
        // this.display_name = "Name: " + data.name;
        // this.email = "Email: " + data.email;
        // this.verified = "Verified: " + (data.email_verified == true ? "yes" : "no") + "";
      });
    },
    testConnection() {
      // alert(this.title);
      axios.post("http://localhost:8000/dropbox/getprofile").then((data) => {
        // alert(JSON.stringify(data));
        data = data.data;
        this.display_name = "Name: " + data.name;
        this.email = "Email: " + data.email;
        this.verified = "Verified: " + (data.email_verified == true ? "yes" : "no") + "";
      });
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
th {
  background-color: #42b983;
  color: aliceblue;
}
table,
td {
  border: 1px solid darkgrey;
}
tr:nth-child(odd) {
  background-color: aqua;
}
tr:nth-child(even) {
  background-color: blanchedalmond;
}
.postarea {
  width: 200px;
  background: honeydew;
  color: hotpink;
}
.postarea > * {
  border: #42b983 dotted 1px;
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
