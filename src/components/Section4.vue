<template>
  <div id="team-container" class="d-flex align-center justify-center">
    <div id="team-center-content" class="d-flex align-center">
      <v-lazy transition="slide-x-transition">
        <div id="team-left">
          <v-img :src="require('@/assets/team-member-panel.png')" />
        </div>
      </v-lazy>
      <v-lazy transition="slide-x-reverse-transition">
        <div id="team-right" class="FC AE">
          <div class="mb-7">
            <p class="S48 C87" style="width: 388px; line-height: 1.15">
              1
            </p>
          </div>
          <div>
            <p class="S20 C87">
              2
            </p>
            <p class="S20 C87">
              3
            </p>
          </div>
        </div>
      </v-lazy>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section4 extends Vue {}
</script>

<style scoped>
#team-container {
  width: 100%;
  min-width: 1200px;
  height: 800px;
  background-color: #019592;
}

#team-center-content {
  width: 1200px;
}

#team-left {
  width: 511px;
  margin-right: 200px;
}

#team-right {
  width: 442px;
  text-align: right;
}
</style>