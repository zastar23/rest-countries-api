<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex items-center justify-around my-10 input-div">
    <input
      type="text"
      @keypress="registerQuerry"
      placeholder="Search for a country..."
      v-model="querry"
      class="w-1/2 p-2 bg-slate-600 sm:max-w-sm input"
    />

    <div class="relative">
      <button @click="dropDown" class="p-2 bg-slate-600 dropdown">
        Filter by Region 🔽
      </button>
      <div
        v-if="showSelect"
        class="absolute left-0 bg-slate-600 right-0 mt-1 select"
      >
        <ul class="text-center" @click="selectedRegion">
          <li class="border-2 cursor-pointer border-black">America</li>
          <li class="border-2 cursor-pointer border-black">Asia</li>
          <li class="border-2 cursor-pointer border-black">Africa</li>
          <li class="border-2 cursor-pointer border-black">Europe</li>
          <li class="border-2 cursor-pointer border-black">Oceania</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      showSelect: false,
      querry: "",
      region: "",
    };
  },
  methods: {
    dropDown() {
      this.showSelect = !this.showSelect;
    },
    registerQuerry(e) {
      if (e.key === "Enter") {
        this.querry = document.querySelector("input").value.toLowerCase();
        this.$emit("searchValue", this.querry);
        this.querry = "";
        document.querySelector(".input-div").classList.add("hidden");
        router.push({ name: "SearchView", params: { search: this.querry } });
      }
    },
    selectedRegion(e) {
      if (!e.target.classList.contains("cursor-pointer")) return;
      this.region = e.target.innerHTML.toLowerCase();
      this.showSelect = !this.showSelect;
      this.$emit("regionSelect", this.region);
      router.push({ name: "RegionView", params: { region: this.region } });
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
