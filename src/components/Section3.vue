<template>
  <div id="ban-pick-container" class="FR JC AC">
    <div
      id="ban-pick-center-content"
      class="d-flex align-center justify-center"
    >
      <v-lazy transition="slide-x-transition">
        <div id="ban-pick-left">
          <div class="mb-7">
            <p class="S48 C000000" style="line-height: 1.15">
              1
            </p>
          </div>
          <div id="ban-pick-subtitle">
            <p class="S20 C000000" style="width: 388px">
              2
            </p>
          </div>
        </div>
      </v-lazy>
      <v-lazy transition="slide-x-reverse-transition">
        <div style="width: 484px">
          <v-img :src="require('@/assets/ban-pick.png')" />
        </div>
      </v-lazy>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section3 extends Vue {}
</script>

<style scoped>
#ban-pick-container {
  width: 100%;
  min-width: 1200px;
  height: 800px;
  background-color: white;
}

#ban-pick-center-content {
  width: 1200px;
}

#ban-pick-title {
  font-size: 48px;
  padding-bottom: 30px;
  letter-spacing: -0.3px;
  /* white-space: nowrap; */
  word-break: keep-all;
}

#ban-pick-left {
  width: 470px;
  margin-right: 200px;
}
</style>