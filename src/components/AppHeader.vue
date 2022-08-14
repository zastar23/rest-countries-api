<template>
  <header class="flex justify-around p-4 items-center">
    <div class="">
      <h1 class="text-2xl">Where in the world?</h1>
    </div>
    <div>
      <button
        v-on:click="changeLight"
        class="flex justify-center items-center text-s gap-2"
      >
        <span id="colorSwitch"
          ><img
            class="w-6 h-6"
            :src="src[currentSrc]"
            data-switch="{{isActive}}" /></span
        >{{ modeText[currentText] }}
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      src: [require("../../images/moon.svg"), require("../../images/sun.svg")],
      currentSrc: 0,
      modeText: ["Dark Mode", "Light Mode"],
      currentText: 0,
      isActive: false,
    };
  },
  mounted() {
    this.changeLight();
  },

  methods: {
    changeLight() {
      if (this.currentSrc < this.src.length - 1) {
        this.currentSrc++;
        this.currentText++;
      } else {
        this.currentSrc = 0;
        this.currentText = 0;
      }
      this.isActive = !this.isActive;

      this.$emit("change-light", this.isActive);
    },
  },
};
</script>

<style></style>
