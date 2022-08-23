<template>
  <div id="smooth-container" class="FC AC JC">
    <div class="mb-5">
      <p class="S48 C000000">
        1
      </p>
    </div>
    <div class="mb-12">
      <p class="S24 C000000">
        2
      </p>
    </div>
    <v-btn class="btn" @click="goToQuestions">
      <p class="S20 C000000">
        3
      </p>
    </v-btn>
    <!--  -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Section2 extends Vue {

}
</script>

<style scoped>
#smooth-container {
  width: 100%;
  min-width: 1200px;
  height: 420px;
  background-color: #f4f5f7;
}
.btn {
  width: 240px;
  height: 60px !important;
  border-radius: 4px;
  border: solid 2px #131515;
  box-shadow: none !important;
}
</style>