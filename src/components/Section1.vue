<template>
  <div class="section1 rel">
    <div class="bg-filter abs"></div>
    <div class="content abs FC JC AC">
      <span class="pointer S64 C100">- 윤준영 -</span>
      <span class="pointer S64 C100 mt-n3 mb-2">누구보다 빠른 프론트 엔드 개발자</span>
      <span class="mb-6" style="min-width : 40px; min-height : 2px; background-color:#F9C51D;"></span>
      <p class="S16 C87 mb-6">2022년 11월 업데이트</p>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section1 extends Vue {
}
</script>

<style scoped>
.section1 {
  background-image: url("../assets/bg.png");
  height: 500px;
}
.bg-filter {
  min-width: 100%;
  min-height: 100%; 
  background-color: black;
  opacity: 0.85;
}
.content {
  min-width: 100%;
  min-height: 100%;
  z-index: 10;
}

.more-btn{
  width: 160px;
  height: 50px !important;
  border-radius: 30px;
}
</style>
