<template>
  <div class="section5 FC AC JC">
    <span class="S48 C0">SKILLS</span>
    <span class="mb-12" style="min-width : 170px; min-height : 2px; background-color:black;"></span>
    <div class="FC width-content">
      <div class="FR JSB width100">
        <div class="FC AS width33">
          <v-lazy transition="slide-y-transition">
            <div class="FC AC w-64 bg-white rounded-lg drop-shadow p-10 mb-10">
              <p class="S24 COrange">Frontend</p>
              <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
              
              <v-avatar tile size="150px">
                <v-img contain :src="require('@/assets/skills/html.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" class="mb-7">
                <v-img contain :src="require('@/assets/skills/vue.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" class="mb-7">
                <v-img contain :src="require('@/assets/skills/nuxt.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" class="mb-7">
                <v-img contain :src="require('@/assets/skills/electron.svg')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" class="mb-7">
                <v-img contain :src="require('@/assets/skills/pwa.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" class="mb-7">
                <v-img contain :src="require('@/assets/skills/tailwind.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%">
                <v-img contain :src="require('@/assets/skills/jquery.png')"></v-img>
              </v-avatar>
            </div>
          </v-lazy>
          <v-lazy transition="slide-y-transition">
            <div class="FC AC w-64 bg-white rounded-lg drop-shadow p-10">
              <p class="S24 COrange">Language</p>
              <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
              
              <v-avatar tile size="156px" class="my-n3">
                <v-img contain :src="require('@/assets/skills/ts.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" class="mb-12">
                <v-img contain :src="require('@/assets/skills/js.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%">
                <v-img contain :src="require('@/assets/skills/python.png')"></v-img>
              </v-avatar>
            </div>
          </v-lazy>
        </div>

        <div class="FC AC width33">
          <v-lazy transition="slide-y-transition">
            <div class="FC AC w-64 bg-white rounded-lg drop-shadow p-10 mb-10">
              <p class="S24 COrange">Backend</p>
              <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
              
              <v-avatar tile size="140px">
                <v-img contain :src="require('@/assets/skills/node.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="80%" size="70px" class="mb-7">
                <v-img :src="require('@/assets/skills/fast-api.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="80%" size="80px" class="mb-7">
                <v-img :src="require('@/assets/skills/flask.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="80%" size="70px">
                <v-img :src="require('@/assets/skills/mysql.png')"></v-img>
              </v-avatar>
            </div>
          </v-lazy>
          <!--  -->
          <v-lazy transition="slide-y-transition">
            <div class="FC AC w-64 bg-white rounded-lg drop-shadow p-10">
              <p class="S24 COrange">Deployment</p>
              <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
              
              <v-avatar tile size="125px">
                <v-img contain :src="require('@/assets/skills/aws.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="80%" size="125px" class="mb-7">
                <v-img :src="require('@/assets/skills/docker.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" size="30px" class="mb-7">
                <v-img :src="require('@/assets/skills/github-action.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" size="100px">
                <v-img contain :src="require('@/assets/skills/jenkins.png')"></v-img>
              </v-avatar>
            </div>
          </v-lazy>
        </div>

        <div class="FC AE width33">
          <v-lazy transition="slide-y-transition">
            <div class="FC AC w-64 bg-white rounded-lg drop-shadow p-10 mb-10">
              <p class="S24 COrange">Version Control</p>
              <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
              
              <v-avatar tile size="100px">
                <v-img contain :src="require('@/assets/skills/git.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="90%" size="35px" class="ml-7">
                <v-img :src="require('@/assets/skills/github.png')"></v-img>
              </v-avatar>
            </div>
          </v-lazy>
          <!--  -->
          <v-lazy transition="slide-y-transition">
            <div class="FC AC w-64 bg-white rounded-lg drop-shadow p-10">
              <p class="S24 COrange">Communication</p>
              <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
              
              <v-avatar tile size="120px">
                <v-img contain :src="require('@/assets/skills/jira.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" size="60px" class="mt-n2 mb-7">
                <v-img :src="require('@/assets/skills/clickup.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="90%" size="40px" class="mb-2">
                <v-img :src="require('@/assets/skills/slack.svg')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" size="100px">
                <v-img contain :src="require('@/assets/skills/confluence.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" size="80px" class="mb-3">
                <v-img contain :src="require('@/assets/skills/figma.png')"></v-img>
              </v-avatar>
              <v-avatar tile width="100%" size="90px">
                <v-img contain :src="require('@/assets/skills/zeplin.png')"></v-img>
              </v-avatar>
            </div>
          </v-lazy>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section5 extends Vue {
}
</script>

<style scoped>
.section5 {
  background-color: #F9C51D;
  padding: 60px 0px;
}
</style>
