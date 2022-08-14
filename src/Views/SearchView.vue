<template>
  <router-link to="/">
    <button
      @click="visible"
      class="mx-4 px-5 py-2 shadow-md my-5 btnRouter btn-bg-dark"
    >
      ⬅ Back
    </button>
  </router-link>
  <div class="overflow-hidden">
    <div
      class="card dark-card-bg max-w-4xl xl:flex xl:max-w-full"
      v-for="(code, i) in countryData"
      :key="i"
    >
      <div class="sm:w-3/4 m-auto xl:w-1/2">
        <img
          :src="code.flags.svg"
          alt="country flag"
          class="rounded-t-lg p-4"
        />
      </div>
      <div
        class="p-4 info-container sm:flex justify-around items-center xl:gap-10 xl:items-start"
      >
        <div class="flex-column">
          <h3 class="my-5 font-bold text-xl sm:text-3xl">
            {{ code.name.common }}
          </h3>

          <p class="text-base md:text-xl my-2">
            Native Name:
            <span class="ml-2 tracking-wider">{{
              Object.values(code.name.nativeName)[0].official
            }}</span>
          </p>

          <p class="text-base md:text-xl my-2">
            Population:
            <span class="ml-2 tracking-wider"
              >{{ code.population.toLocaleString() }}
            </span>
          </p>

          <p class="text-base md:text-xl my-2">
            Region: <span class="ml-2 tracking-wider">{{ code.region }}</span>
          </p>
          <p class="text-base md:text-xl my-2">
            Sub Region:
            <span class="ml-2 tracking-wider">{{ code.subregion }}</span>
          </p>

          <p class="text-base md:text-xl my-2">
            Capital:<span class="ml-2 tracking-wider">
              {{ code.capital[0] }}</span
            >
          </p>
        </div>
        <div class="flex-column xl:mt-10">
          <p class="text-base md:text-xl my-2 mt-10">
            Top Level Domain:
            <span class="ml-2 tracking-wider">{{ code.tld[0] }}</span>
          </p>

          <p class="text-base md:text-xl my-2">
            Currencies:<span class="ml-2 tracking-wider">
              {{ Object.values(code.currencies)[0].name }}</span
            >
          </p>

          <p class="text-base md:text-xl my-2">
            Languages:
            <span class="ml-2 tracking-wider">{{
              Object.values(code.languages)[0]
            }}</span>
          </p>
          <div v-if="code.borders" class="mt-10 p-4">
            <h4 class="font-bold">Border Countries:</h4>
            <button
              class="mr-4 px-5 py-2 shadow-md my-3 btnRouter btn-bg-dark"
              v-for="(neighbour, i) in code.borders"
              :key="i"
            >
              {{ neighbour }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      path: "https://restcountries.com/v3.1/name/" + this.searchValue,
      countryData: [],
    };
  },

  props: {
    searchValue: String,
  },
  mounted() {
    axios
      .get(this.path)
      .then((response) => (this.countryData = response.data))
      .catch((err) => console.error(err));
  },
  methods: {
    visible() {
      document.querySelector(".input-div").classList.remove("hidden");
    },
  },
};
</script>
