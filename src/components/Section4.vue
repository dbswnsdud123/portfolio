<template>
  <div class="section4 FC AC rel">
    <span class="S48 C100">PROJECTS</span>
    <span class="mb-12" style="min-width : 250px; min-height : 2px; background-color:#ffffff;"></span>

    <v-lazy transition="slide-y-transition" class="width-content" style="margin-bottom : 80px"> 
      <div class="FC w-full bg-white rounded-lg drop-shadow p-10">
        <div class="FC JC AC width100">
          <span class="S32 WBold mb-2">GGQ Desktop Application</span>
          <p class="S14 mb-5">(2021.06 ~ 현재 진행)</p>
        </div>
        <div class="FR">
          <div class="FC width100">
            <v-carousel class="mb-5">
              <v-carousel-item 
                v-for="i in 3" :key="i" 
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="FR JC AC width100 height100 bg-img">
                  <img :class="i==2 ? 'height100' : 'width100'" :src="require(`@/assets/desktop_ggq/${i}.png`)" />
                </div>
              </v-carousel-item>
            </v-carousel>
            <div class="width100 FR">
              <div class="FC width70">
                <p class="mb-2"><b>게이머들의 전적 통계, 게임의 정보, 자동 전적 검색 등 게임의 편의성을 위한 데스크톱 어플리케이션</b>입니다.</p>
                <p class="mb-2">당시 완성되지 않았던 AI를 활용한 분석을 서비스하는 것은 반발감만 얻을 것으로 판단해서 게임의 편의성을 제공하는 <b>데스크톱 어플리케이션을 제안 및 개발</b>하게 되었습니다. 다른 어플리케이션들과 달리 UI를 게임에 따라다니게 하고, 자동으로 전적 검색을 하는 등의 UI/UX로 차별점을 두었고 이를 통해 현재는 MAU 100,000 이상의 프로그램이 되었으며, PC방 업체와 협업하여 전국 PC방에 프로그램 설치를 진행 중입니다.</p>
                <p>이 프로젝트를 통해 <b>"우리가 할 수 있는 것보다 사용자가 원하는 것"의 중요성을 깨달았고, 같은 기능을 제공하더라도 편한 UI/UX가 사용자에게 감동</b>을 주는 것을 느꼈습니다.</p>
              </div>
              <v-divider vertical class="mx-3"></v-divider>
              <div class="FC width30">
                <span class="S20 mb-1">FE</span>
                <p class="mb-2">Electron, Vue.js, Vuex, Vuetify, TypeScript</p>
                <span class="S20 mb-1">Deployment</span>
                <p>AWS S3, AWS Cloudfront</p>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </v-lazy>

    <v-lazy transition="slide-y-transition" class="width-content" style="margin-bottom : 80px"> 
      <div class="FC w-full bg-white rounded-lg drop-shadow p-10">
        <div class="FC JC AC width100">
          <span class="S32 WBold mb-2">Image Converter</span>
          <p class="S14 mb-5">(2022.03 ~ 2022.04)</p>
        </div>
        <div class="FR">
          <div class="FC width50">
            <v-carousel>
              <v-carousel-item 
                v-for="i in 1" :key="i" 
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="FR JC AC width100 height100 bg-img">
                  <img class="width100" :src="require(`@/assets/desktop_converter/${i}.png`)" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="FC width50 pl-10">
            <p class="mb-2"><b>다양한 이미지 파일 형식을 webp 형식으로 변환시켜 주는 데스크톱 어플리케이션</b>입니다.</p>   
            <p class="mb-2">이미지 파일의 용량을 줄이고, 브라우저에서의 이미지 렌더링 속도를 향상 시키기 위해 이미지 형식을 webp로 변환하는 작업이 필요했습니다. 디자이너분들이 많은 양의 이미지를 변환 시키는 작업을 하려면 유료 프로그램을 사용해야하고, 속도도 느리기 때문에 이를 해결하기 위해 개발하게 되었습니다.</p> 
            <p class="mb-2">이 프로젝트를 통해 <b>한 사람의 작은 아이디어와 능동적인 실천이 여러 사람의 업무를 편하게</b> 해줄 수 있다는 것은 느꼈습니다.</p>
            <v-divider class="mb-2"></v-divider>
            <div class="FC">
              <span class="S20 mb-1">FE</span>
              <p class="mb-2">Electron, Vue.js, TypeScript, Tailwind CSS</p>
              <span class="S20 mb-1">Deployment</span>
              <p>AWS S3, AWS Cloudfront</p>
            </div>
          </div>
        </div>      
      </div>
    </v-lazy>

    <v-lazy transition="slide-y-transition" class="width-content" style="margin-bottom : 80px"> 
      <div class="FC w-full bg-white rounded-lg drop-shadow p-10">
        <div class="FC JC AC width100">
          <span class="S32 WBold mb-2">Play Like a Pro(PLAP)</span>
          <p class="S14 mb-5">(2022.06 ~ 2022.11)</p>
        </div>
        <div class="FR">
          <div class="FC width50">
            <v-carousel>
              <v-carousel-item 
                v-for="i in 3" :key="i" 
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="FR JC AC width100 height100 bg-img">
                  <img :src="require(`@/assets/page_plap/${i}.png`)" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="FC width50 pl-10">
            <p class="mb-2"><b>'롤'이라는 게임의 프로와 장인의 정보를 제공하고, 프로와 장인을 기반으로 사용자의 게임을 분석해주는</b> 페이지 입니다.</p>   
            <p class="mb-2">GGQ 데스크톱 어플리케이션에 엣지 컴퓨팅을 넣어 로컬 리소스를 활용한 게이머의 게임 경기 분석을 웹 페이지로 보여주고 있습니다.</p>
            <p class="mb-2">Git Flow를 적용하고 Docker, Github Action, AWS ECS를 통해 CI/CD 자동화를 구축했습니다.</p>
            <p class="mb-2">이 프로젝트를 통해 <b>체계적으로 설계 및 구축된 프로젝트가 기능 추가, 유지 보수에 </b>미치는 긍정적인 영향을 알 수 있었습니다.</p>
            <v-divider class="mb-2"></v-divider>
            <div class="FC">
              <span class="S20 mb-1">FE</span>
              <p class="mb-2">Nuxt.js, Vuex, TypeScript, Tailwind CSS</p>
              <span class="S20 mb-1">Deployment</span>
              <p>Docker, Github Action, AWS ECS, AWS EC2, AWS Cloudfront, AWS Route53</p>
            </div>
          </div>
        </div>      
      </div>
    </v-lazy>

    

    <v-lazy transition="slide-y-transition" class="width-content" style="margin-bottom : 80px"> 
      <div class="FC w-full bg-white rounded-lg drop-shadow p-10">
        <div class="FC JC AC width100">
          <span class="S32 WBold mb-2">GGQ Remote Banpick</span>
          <p class="S14 mb-5">(2022.01 ~ 2022.03)</p>
        </div>
        <div class="FR">
          <div class="FC width50">
            <v-carousel>
              <v-carousel-item 
                v-for="i in 3" :key="i" 
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="FR JC AC width100 height100 bg-img">
                  <img class="height100" :src="require(`@/assets/page_remote/${i}.png`)" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="FC width50 pl-10">
            <p class="mb-2"><b>핸드폰으로 게임 시작 전 단계를 원격으로 진행할 수 있게 해주는 웹 어플리케이션</b>입니다.</p>   
            <p class="mb-2">PC방에서 회사 동료들과 게임을 하는 도중, 옆에 친구들에게 자신의 게임 전 행동 양식을 설명해주고 화장실을 가거나, 담배를 피우러 가는 등 자리를 비우는 것을 많이 보고 이에 아이디어를 얻어 시작한 프로젝트입니다.</p>
            <p class="mb-2">이 프로젝트를 통해 <b>다양한 화면에서의 반응형 UI, 다양한 브라우저에서의 웹 표준</b> 등에 대해 깊이 고민하고 개발할 수 있게 되었습니다.</p>
            <v-divider class="mb-2"></v-divider>
            <div class="FC">
              <span class="S20 mb-1">FE</span>
              <p class="mb-2">PWA, Vue.js, Vuex, TypeScript, Tailwind CSS</p>
              <span class="S20 mb-1">Deployment</span>
              <p class="mb-2">AWS S3, AWS Cloudfront, AWS Route53</p>
              <span class="S20 mb-1">ETC.</span>
              <p>Websocket</p>
            </div>
          </div>
        </div>      
      </div>
    </v-lazy>

    <v-lazy transition="slide-y-transition" class="width-content" style="margin-bottom : 80px"> 
      <div class="FC w-full bg-white rounded-lg drop-shadow p-10">
        <div class="FC JC AC width100">
          <span class="S32 WBold mb-2">GGQ PRO</span>
          <p class="S14 mb-5">(2021.01 ~ 2021.04)</p>
        </div>
        <div class="FR">
          <div class="FC width50">
            <v-carousel>
              <v-carousel-item 
                v-for="i in 3" :key="i" 
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="FR JC AC width100 height100 bg-img">
                  <img class="width100" :src="require(`@/assets/page_pro/${i}.png`)" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="FC width50 pl-10">
            <p class="mb-2"><b>롤 프로팀 내부의 경기, 프로 팀들 간의 비공식 경기를 기록</b>해주는 웹사이트입니다.</p>   
            <p class="mb-2">회사 전체의 사업 전략과 비즈니스 모델을 'AI 분석을 통해 게임을 더 잘하게 해준다'로 변경하고 난 뒤, 처음 프로젝트입니다.</p>
            <p class="mb-2">일반 게이머들의 경기는 자동으로 데이터가 수집되어 기록되고 관리되지만, 프로의 경기는 코치나 감독의 <b>수작업이 필요하므로 이를 자동화하면 단순 업무 시간을 단축</b>해 코칭 업무에 집중시켜줄 수 있으리라 판단했습니다. 현재까지도 2022년 우승팀인 GEN.G와 컨택을 하면서 발전시켜나가고 있습니다.</p>   
            <p class="mb-2">이 프로젝트를 통해 <b>프로팀들이 가진 불편함을 해소</b>해주면서 정답지로 활용할 수 있는 프로들의 경기를 얻을 수 있었습니다.</p>
            <v-divider class="mb-2"></v-divider>
            <div class="FC">
              <span class="S20 mb-1">FE</span>
              <p class="mb-2">Vue.js, Vuex, Vuetify, TypeScript</p>
              <span class="S20 mb-1">Deployment</span>
              <p>AWS S3, AWS Cloudfront, AWS Route53</p>
            </div>
          </div>
        </div>      
      </div>
    </v-lazy>

    <v-lazy transition="slide-y-transition" class="width-content" style="margin-bottom : 80px"> 
      <div class="FC w-full bg-white rounded-lg drop-shadow p-10">
        <div class="FC JC AC width100">
          <span class="S32 WBold mb-2">GGQ Homepage</span>
          <p class="S14 mb-5">(2021.03 ~ 2021.04)</p>
        </div>
        <div class="FR">
          <div class="FC width50">
            <v-carousel>
              <v-carousel-item 
                v-for="i in 3" :key="i" 
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="FR JC AC width100 height100 bg-img">
                  <img class="height100" :src="require(`@/assets/page_home/${i}.png`)" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="FC width50 pl-10">
            <p class="mb-2"><b>지지큐컴퍼니 홈 페이지</b>입니다.</p>   
            <p class="mb-2">지지큐컴퍼니가 시리즈 A 투자를 받기 전, 대외적으로 소개할 수 있는 페이지가 필요한 상황이었습니다.</p>
            <p class="mb-2">처음에는 기존에 사용했던 Vue.js를 사용해 페이지를 만들고 배포했으나 네이버, 구글 등의 검색 사이트에 검색 순위가 낮게 나와 페이지를 여러 번 넘겨야 확인할 수 있었습니다. 방법을 찾던 도중 <b>SSR, SEO에 관해 알게 되었습니다. Vue.js에서 SSR을 이용할 수 있는 Nuxt.js로 변경하고 다양한 SEO 방법을 적용한 결과, 페이지 게재 1순위를 달성</b>할 수 있었습니다.</p>   
            <p class="mb-2">이 프로젝트를 통해 <b>목적에 맞는 기술을 선택하고 사용하는 것</b>의 중요성을 깨달았습니다.</p>
            <v-divider class="mb-2"></v-divider>
            <div class="FC">
              <span class="S20 mb-1">FE</span>
              <p class="mb-2">Nuxt.js, Vuex, Vuetify, TypeScript</p>
              <span class="S20 mb-1">Deployment</span>
              <p>AWS EC2, AWS Cloudfront, AWS Route53</p>
            </div>
          </div>
        </div>      
      </div>
    </v-lazy>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section4 extends Vue {
}
</script>

<style scoped>
.section4 {
  background-color: #1D809F;
  padding: 80px 0;
}


.bg-img {
  background-color: #222222;
}

</style>
