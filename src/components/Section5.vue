<template>
  <div id="rune-container" class="d-flex align-center justify-center">
    <div id="rune-center-content">
      <v-lazy transition="slide-y-transition">
        <div id="rune-title">
          <p class="S48 C000000">
            1
          </p>
          <p class="S48 C000000">
            2
          </p>
        </div>
      </v-lazy>

      <v-lazy transition="slide-y-transition">
        <div id="rune-subtitle">
          <p class="S20 C000000">
            3
          </p>
          <p class="S20 C000000 mb-4">
            4
          </p>
          <p class="S14" style="color: rgba(0, 0, 0, 0.6)">
            5
          </p>
        </div>
      </v-lazy>

      <v-lazy transition="slide-y-reverse-transition">
        <div style="width: 1200px; height: 195px">
          <v-img width="1200" :src="require('@/assets/rune-panel.png')" />
        </div>
      </v-lazy>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section5 extends Vue {}
</script>

<style scoped>
#rune-container {
  width: 100%;
  min-width: 1200px;
  height: 800px;
  background-color: white;
}

#rune-center-content {
  width: 1200px;
  text-align: center;
}

#rune-title {
  font-size: 48px;
  color: rgba(0, 0, 0, 0.87);
  padding-bottom: 20px;
}

#rune-subtitle {
  font-size: 20px;
  padding-bottom: 60px;
  color: rgba(0, 0, 0, 0.87);
}
</style>