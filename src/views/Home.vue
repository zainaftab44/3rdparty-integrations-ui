<template>
  <div class="home">
    <div class="social">
      <h1>Blogger</h1>
      <Blogger />
    </div>
    <div class="social">
      <h1>Dropbox</h1>
      <Dropbox />
    </div>

    <div class="social">
      <h1>Facebook</h1>
      <Facebook />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Blogger from "@/components/Blogger.vue";
import Dropbox from "@/components/Dropbox.vue";
import Facebook from "@/components/Facebook.vue";

export default {
  name: "Home",
  components: {
    Blogger,
    Dropbox,
    Facebook
  }
};
</script>

<style scoped>
.home {
  width: max-content;
  margin: 0 auto;
  align-items: center;
  align-content: center;
}
.social {
  margin: 20px;
  width: 800px;
  padding: 30px;
  border: black solid 1px;
  border-radius: 20px;
}
.social > h1 {
  width: 100%;
  text-align: center;
  background: black;
  color: white;
}
</style>
