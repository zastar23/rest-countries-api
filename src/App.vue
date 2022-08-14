<template>
  <div>
    <AppHeader v-on:change-light="colorMode" />
    <Inputs v-on:searchValue="registerSearchValue" />
    <router-view
      v-on:code="setCode"
      :useCode="useCode"
      :searchValue="searchValue"
    ></router-view>
    <router-view name="SearchView"></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Inputs from "./components/Inputs.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Inputs,
  },
  data() {
    return {
      useCode: "",
      searchValue: "",
    };
  },
  methods: {
    colorMode(isActive) {
      const body = document.querySelector("body");
      const header = document.querySelector("header");
      const card = document.querySelectorAll(".card");
      const btnRouter = document.querySelectorAll(".btnRouter");
      const input = document.querySelector(".input");
      if (isActive) {
        body.classList.remove("light");
        header.classList.remove("light-header");
        body.classList.add("dark");
        header.classList.add("dark-header");

        card.forEach((card) => card.classList.remove("light-card-bg"));
        card.forEach((card) => card.classList.add("dark-card-bg"));
        btnRouter.forEach((btn) => btn.classList.remove("btn-bg-light"));

        input.classList.remove("bg-slate-200");
        input.classList.add("bg-slate-600");
      }
      if (!isActive) {
        body.classList.remove("dark");
        header.classList.remove("dark-header");
        body.classList.add("light");
        header.classList.add("light-header");

        card.forEach((card) => card.classList.remove("dark-card-bg"));
        card.forEach((card) => card.classList.add("light-card-bg"));
        btnRouter.forEach((btn) => btn.classList.toggle("btn-bg-light"));

        input.classList.remove("bg-slate-600");
        input.classList.add("bg-slate-200");
      }
    },

    setCode(code) {
      this.useCode = code.toLowerCase();
    },

    registerSearchValue(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style>
.light {
  background-color: hsl(0, 0%, 90%);
  color: hsl(200, 15%, 8%);
}

.dark {
  background-color: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
}

.light-header {
  background-color: hsl(0, 0%, 100%);
}

.dark-header {
  background-color: hsl(209, 23%, 22%);
}
</style>
