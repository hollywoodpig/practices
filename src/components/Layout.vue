<template>
  <div class="layout base-styles">
    <Header title="Кирша Никита, ВД-30" />
    <Nav
      :items="practices"
      :active="activePracticeIndex"
      @selectPractice="selectPractice"
    />
    <Content :code="activePracticeCode" />
  </div>
</template>

<script>
import Content from "../components/Content.vue";
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";

export default {
  components: { Header, Nav, Content },
  name: "Layout",
  data() {
    return {
      isLoaded: false,
      practices: [],
      activePracticeIndex: 0,
    };
  },
  methods: {
    async fetchPractices() {
      const res = await fetch("https://api.npoint.io/6a72e7dddfc24d58ed89");
      const { practices } = await res.json();

      this.practices = practices;
      this.isLoaded = true;
    },
    selectPractice(index) {
      this.activePracticeIndex = index;
    },
  },
  computed: {
    activePracticeCode() {
      if (this.isLoaded) {
        return this.practices[this.activePracticeIndex].code;
      } else {
        return "VwmJeZa"; // a crutch, i know...
      }
    },
  },
  created() {
    this.fetchPractices();
  },
};
</script>

<style lang="scss">
.layout {
  display: grid;
  grid-gap: 1rem;
  grid-template: auto 1fr / auto 1fr;
  grid-template-areas:
    "header header"
    "nav content";

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "header "
      "nav"
      "content";
  }

  .header {
    grid-area: header;
  }

  .nav {
    grid-area: nav;
    margin-left: 1rem;

    @media (max-width: 576px) {
      margin: 0 1rem;
    }
  }

  .content {
    grid-area: content;
    overflow: hidden;
    margin-right: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 576px) {
      margin: 0 1rem;
    }
  }
}
</style>
