<template>
  <div class="section3 FC AC rel">
    <span class="S48 C100">Introduce</span>
    <span class="mb-12" style="min-width : 280px; min-height : 2px; background-color:#ffffff;"></span>
    
    <div class="FR JSB width-content">
      <v-lazy transition="slide-x-transition" class="width100" > 
        <div class="FC w-full bg-white rounded-lg drop-shadow p-10">
          
          <p class="mb-4">3년 차 개발자로 스타트업에서 <b>웹과 데스크톱 앱 서비스를 개발/배포/운영</b>하고 있습니다. 4명 정도 작은 규모의 팀에 개발자로 입사하여 120억 투자를 유치하고 약 30명 규모의 팀으로 성장한 현재까지 <b>필요한 기술 역량을 책임</b>지고 있습니다.</p>
          <p class="mb-4"><b>내 회사의 내 제품이 최고</b>가 되야 합니다. 이를 위해 빠르게 개발하고 배포하여 받은 피드백을 바탕으로 시용자를 이해하는 역량을 쌓고자 노력하고 있습니다. 또한, 한계를 분명히 알고 한계를 뛰어넘기 위해 <b>다양한 직무의 구성원들과 적극적으로 커뮤니케이션하며 협업</b>해왔습니다.</p>
          <p>반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다. 매주 수동으로 번거로운 작업 후 배포해야 하는 시간을 줄기이 위해 데스크톱 앱을 만들어 해당 업무 시간을 6시간 -> 5분으로 줄인 경험이 있습니다.</p>
        </div>
      </v-lazy>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section3 extends Vue {
}
</script>

<style scoped>
.section3 {
  background-color: #222222;
  padding: 80px 0;
}
</style>
