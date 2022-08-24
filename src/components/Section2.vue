<template>
  <div class="section2 FC AC JC">
    <span class="S48 C0">ABOUT ME</span>
    <span class="mb-12" style="min-width : 260px; min-height : 2px; background-color:#F9C51D;"></span>
    <div class="FC width-content">
      <div class="FR JSB width100 mb-12">
        <div class="FR AS width33">
          <v-icon color="black" size="40" class="mr-6">mdi-account</v-icon>
          <div class="FC">
            <p class="C0 S20 WBold mb-2">이름</p>
            <p class="C0 S16">윤준영</p>
          </div>
        </div>

        <div class="FR AS width33" style="padding-left:40px">
          <v-icon color="black" size="40" class="mr-6">mdi-calendar-blank</v-icon>
          <div class="FC">
            <p class="C0 S20 WBold mb-2">생년월일</p>
            <p class="C0 S16">96.01.29</p>
          </div>
        </div>

        <div class="FR AS width33" style="padding-left:140px">
          <v-icon color="black" size="40" class="mr-6">mdi-map-marker</v-icon>
          <div class="FC">
            <p class="C0 S20 WBold mb-2">주소지</p>
            <p class="C0 S16">경기도 성남시</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="FR JSB JC width100">
        <div class="FR AS width33">
          <v-icon color="black" size="40" class="mr-6">mdi-cellphone</v-icon>
          <div class="FC">
            <p class="C0 S20 WBold mb-2">연락처</p>
            <p class="C0 S16">010-3899-0434</p>
          </div>
        </div>

        <div class="FR AS width33" style="padding-left:40px">
          <v-icon color="black" size="40" class="mr-6">mdi-gmail</v-icon>
          <div class="FC">
            <p class="C0 S20 WBold mb-2">이메일</p>
            <p class="C0 S16">dbswnsdud12336@gmail.com</p>
          </div>
        </div>

        <div class="FR AS width33" style="padding-left:140px">
          <v-icon color="black" size="40" class="mr-6">mdi-lead-pencil</v-icon>
          <div class="FC">
            <p class="C0 S20 WBold mb-2">학력</p>
            <p class="C0 S16">아주대학교</p>
            <p class="C0 S16">소프트웨어</p>
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
  height: 440px;
}
</style>
