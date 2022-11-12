<template>
    <v-app-bar class="FR JC AC" fixed color="black" elevation="0" style="z-index:100">
    <div class="FR JSB width-content">
        <span class="pointer S20 C100">YJY's Portfolio</span>
        <div class="FR mt-1">
            <router-link to="/"><p class="pointer S16 C100 WBold mr-8">Portfolio</p></router-link>
            <router-link to="/career"><p class="pointer S16 C100 WBold mr-8">Career</p></router-link>
        </div>
    </div>
    </v-app-bar>
</template>

<script lang="ts">
// import Vue from 'vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Nav extends Vue {
  
}
</script>

<style scoped>
</style>
