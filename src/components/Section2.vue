<template>
  <div class="section2 FC AC JC">
    <span class="S48 C0">ABOUT ME</span>
    <span class="mb-5" style="min-width : 260px; min-height : 2px; background-color:#F9C51D;"></span>
    <p class="S18 C0 WBold mb-10">3년 차, 능동적인 프론트 엔드 개발자 윤준영입니다.</p>
    
    <div class="FR JC AS width-content">
      <v-avatar size="180px" class="border mr-8">
        <v-img width="190px" height="190px" :src="require('@/assets/profile.jpg')"></v-img>
      </v-avatar>
      <div class="FC mr-3">

        <div class="FR AC mb-5">
          <v-icon color="black" size="32" class="mr-3">mdi-account</v-icon>
          <p class="C0 S16">이름 : 윤준영</p>
        </div>

        <div class="FR AC mb-5">
          <v-icon color="black" size="32" class="mr-3">mdi-cellphone</v-icon>
          <p class="C0 S16">Contact : 010-3899-0434</p>
        </div>

        <div class="FR AC mb-5">
          <v-icon color="black" size="32" class="mr-3">mdi-gmail</v-icon>
          <p class="C0 S16">Mail : dbswnsdud12336@gmail.com</p>
        </div>

        <div class="FR AC mb-5">
          <v-icon color="black" size="32" class="mr-3">mdi-lead-pencil</v-icon>
          <p class="C0 S16">아주대 소프트웨어 학사</p>
        </div>
      </div>
      <div class="FC">

        <div class="FR AS mb-5">
          <v-icon color="black" size="32" class="mr-3">mdi-book-open</v-icon>
          <div class="FC">
            <p class="C0 S16 mb-1">github :</p>
            <a class="mb-5" href="https://github.com/dbswnsdud123">https://github.com/dbswnsdud123</a>
            <p class="C0 S16 mb-1">blog :</p>
            <a href="https://groot-dev.tistory.com">https://groot-dev.tistory.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section2 extends Vue {
}
</script>

<style scoped>
.section2 {
  background-color: white;
  padding: 80px 0;
}
</style>
