<template>
    <v-app-bar
        class="FR JC AC"
        fixed
        color="transparent"
        elevation="0"
    >
    <div class="FR JSB width-content mt-3">
        <p class="pointer S24 C100 ">YJY's Portfolio</p>
        <div class="FR">
            <p class="pointer S16 C100 WBold mr-8">About me</p>
            <p class="pointer S16 C100 WBold mr-8">Skills</p>
            <p class="pointer S16 C100 WBold mr-8">Archiving</p>
            <p class="pointer S16 C100 WBold mr-8">Projects</p>
            <p class="pointer S16 C100 WBold">Career</p>
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
