<template>
  <v-app class="app">
    <Nav />
     
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
// import Vue from 'vue';
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue"
@Component({
  components: {
    Nav
  },
})
export default class App extends Vue {
  
}
</script>
<style src="./App.css">
</style>
