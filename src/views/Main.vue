<template>
  <div id="main">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Section1 from "@/components/Section1.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
import Section4 from "@/components/Section4.vue";
import Section5 from "@/components/Section5.vue";

@Component({
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
  },
})
export default class Main extends Vue {
  created() {
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
  }
}
</script>

<style scoped>
#main {
  height: 100%;
  width: 100%;
  min-width: 1200px;
}
</style>
