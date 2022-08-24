<template>
  <div class="section1 rel">
    <div class="bg-filter abs"></div>
    <div class="content abs FC JC AC">
      <span class="pointer S64 C100">- 윤준영 -</span>
      <span class="pointer S64 C100 mt-n3 mb-2">웹 개발자 포트폴리오</span>
      <span class="mb-6" style="min-width : 40px; min-height : 2px; background-color:#F9C51D;"></span>
      <p class="S20 C87">안녕하세요.</p>
      <p class="S20 C87 mb-6">공부가 취미인 웹 개발자입니다.</p>
      <v-btn class="more-btn FR JC AC" color="#F9C51D">
        <p class="S16 ml-2 mt-1">
          더 알아보기
          <v-icon size="24" class="ml-n1 mb-1">mdi-chevron-down</v-icon>
        </p>
      </v-btn>
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
  height: 560px;
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
