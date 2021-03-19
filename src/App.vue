<template>
  <div class="layout">
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
import Content from "./components/Content.vue";
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";

export default {
  components: { Header, Nav, Content },
  name: "App",
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
:root {
  --white: #fff;
  --bg: #fff;
  --border: #ddd;
  --text: #0d0d0d;
  --text-item: #999;
  --secondary: #f5f5f5;
  --accent: #0082fa;
  --font: system-ui, -apple-system, segoe-ui, sans-serif;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000;
    --border: #222;
    --text: #666;
    --text-item: #0a0a0a;
    --secondary: #000;
    --accent: #ff7d05;
  }
}

::-webkit-scrollbar {
  width: 4px;
  height: 2px;
}

::-webkit-scrollbar-thumb {
  background: rgba(#000, 0.2);
  border-radius: 1rem;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar-thumb {
    background: rgba(#fff, 0.2);
  }
}

body {
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

.layout {
  height: 100vh;
  min-width: 320px;
  font-size: 16px;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
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
