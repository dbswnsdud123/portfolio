<template>
  <div id="summary-panel" class="d-flex align-center justify-center">
    <div id="summary-center-content" class="d-flex">
      <v-lazy transition="slide-x-transition">
        <div id="summary-left">
          <div id="summary-banner-text">
            <p class="S60 C87">1</p>
          </div>
          <div class="pb-10">
            <p class="S20 C87">
              2
            </p>
          </div>
          <v-btn class="download-btn" width="240" height="60">
            <div class="FR JC AC height100">
              <p class="S20 C03dac5" style="letter-spacing: -0.3px">
                3
              </p>
            </div>
          </v-btn>
        </div>
      </v-lazy>
      <div id="summary-right">
        <v-lazy transition="slide-x-reverse-transition">
          <v-img :src="require('@/assets/main-panel.png')" />
        </v-lazy>
      </div>
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
#summary-banner-text {
  font-size: 60px;
  padding-bottom: 20px;

  line-height: 70px;
  word-break: keep-all;
}

#summary-left {
  width: 400px;
  color: white;
  margin-right: 122px;
}

#summary-right {
  width: 692px;
  height: 377px;
}

#summary-panel {
  padding-top: 90px;
  background-color: #131515;
  height: 710px;
  width: 100%;
  min-width: 1200px;
}
.adjusted-padding {
  padding-left: 18.75%;
  padding-right: 18.75%;
}

#summary-center-content {
  width: 1200px;
}
.download-btn {
  background-color: transparent !important;
  box-shadow: none;
  border: 1px solid #03dac5;
  border-radius: 4px;
}
</style>
