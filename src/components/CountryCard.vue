<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div
    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 overflow-hidden"
  >
    <div
      class="card dark-card-bg max-w-xs"
      v-for="(country, i) in countries.slice(0, 12)"
      :key="i"
    >
      <router-link
        to="/CardDetails"
        :data-code="country.cca2"
        @click="getCountryCode"
      >
        <div class="h-1/2">
          <img
            :src="country.flags.svg"
            alt="country flag"
            :data-code="country.cca2"
            class="rounded-t-lg"
          />
        </div>

        <div class="p-4" :data-code="country.cca2">
          <h3 class="my-5 font-bold text-xl" :data-code="country.cca2">
            {{ country.name.common }}
          </h3>

          <p class="font-medium text-base md:text-xl" :data-code="country.cca2">
            Population:
            <span class="ml-2 tracking-wider">{{
              country.population.toLocaleString()
            }}</span>
          </p>

          <p class="font-medium text-base md:text-xl" :data-code="country.cca2">
            Region:
            <span class="ml-2 tracking-wider">{{ country.region }}</span>
          </p>

          <p class="font-medium text-base md:text-xl" :data-code="country.cca2">
            Capital:
            <span class="ml-2 tracking-wider">{{ country.capital[0] }}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CountryCard",
  data() {
    return {
      countries: [],
      code: "",
    };
  },
  created() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => (this.countries = response.data))
      .catch((err) => console.error(err.message));
  },
  methods: {
    getCountryCode(e) {
      console.log(this.code);
      this.code = e.target.dataset.code;
      this.$emit("code", this.code);
    },
  },
};
</script>
<style scoped>
.dark-card-bg {
  background-color: hsl(209, 23%, 22%);
}

.light-card-bg {
  background-color: hsl(0, 0%, 100%);
}

.card {
  /* width: 80%; */
  margin: 2rem auto;
  border-radius: 10px;
}

img {
  width: 100%;
  height: 100%;
}
</style>
