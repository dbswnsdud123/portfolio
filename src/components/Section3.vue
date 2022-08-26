<template>
  <div class="section2 FC AC JC">
    <span class="S48 C0">SKILLS</span>
    <span class="mb-12" style="min-width : 170px; min-height : 2px; background-color:black;"></span>
    <div class="FC width-content">
      <div class="FR JSB width100 mb-12">
        <div class="FC AS width33">
          <div class="FC AC w-72 bg-white rounded-lg drop-shadow p-10 mb-10">
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
            <v-avatar tile width="100%" class="mb-7">
              <v-img contain :src="require('@/assets/skills/jquery.png')"></v-img>
            </v-avatar>
          </div>
          <div class="FC AC w-72 bg-white rounded-lg drop-shadow p-10">
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
        </div>

        <div class="FC AC width33">
          <div class="FC AC w-72 bg-white rounded-lg drop-shadow p-10 mb-10">
            <p class="S24 COrange">Backend</p>
            <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
            
            <v-avatar tile size="150px">
              <v-img contain :src="require('@/assets/skills/node.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="80%" size="80px" class="mb-7">
              <v-img :src="require('@/assets/skills/fast-api.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="70%" size="90px" class="mb-7">
              <v-img :src="require('@/assets/skills/flask.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="70%" size="85px">
              <v-img :src="require('@/assets/skills/mysql.png')"></v-img>
            </v-avatar>
          </div>
          <!--  -->
          <div class="FC AC w-72 bg-white rounded-lg drop-shadow p-10">
            <p class="S24 COrange">Deployment</p>
            <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
            
            <v-avatar tile size="140px">
              <v-img contain :src="require('@/assets/skills/aws.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="80%" size="140px" class="mb-7">
              <v-img :src="require('@/assets/skills/docker.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="100%" size="40px" class="mb-7">
              <v-img :src="require('@/assets/skills/github-action.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="100%" size="100px">
              <v-img contain :src="require('@/assets/skills/jenkins.png')"></v-img>
            </v-avatar>
          
          </div>
          
        </div>

        <div class="FC AE width33">
          <div class="FC AC w-72 bg-white rounded-lg drop-shadow p-10 mb-10">
            <p class="S24 COrange">Version Control</p>
            <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
            
            <v-avatar tile size="130px">
              <v-img contain :src="require('@/assets/skills/git.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="90%" size="60px">
              <v-img :src="require('@/assets/skills/github.png')"></v-img>
            </v-avatar>
          </div>
          <!--  -->
          <div class="FC AC w-72 bg-white rounded-lg drop-shadow p-10">
            <p class="S24 COrange">Communication</p>
            <div class="mt-3" style="min-width : 170px; min-height : 1px; background-color:#CCCCCC;"></div>
            
            <v-avatar tile size="120px">
              <v-img contain :src="require('@/assets/skills/jira.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="100%" size="60px" class="mt-n2 mb-7">
              <v-img :src="require('@/assets/skills/clickup.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="85%" size="45px" class="mb-2">
              <v-img :src="require('@/assets/skills/slack.svg')"></v-img>
            </v-avatar>
            <v-avatar tile width="100%" size="100px">
              <v-img contain :src="require('@/assets/skills/confluence.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="100%" size="80px">
              <v-img contain :src="require('@/assets/skills/figma.png')"></v-img>
            </v-avatar>
            <v-avatar tile width="100%" size="100px">
              <v-img contain :src="require('@/assets/skills/zeplin.png')"></v-img>
            </v-avatar>
          
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
  background-color: #F9C51D;
  padding: 60px 0px;
}
</style>
