<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CountryCard v-on:code="saveCode($event)" />
</template>
<script>
import CountryCard from "../components/CountryCard.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    CountryCard,
  },
  data() {
    return {
      countryCode: "",
    };
  },
  methods: {
    saveCode(code) {
      this.countryCode = code.toLowerCase();
      this.$emit("countryCode", this.countryCode);
    },
  },
};
</script>
