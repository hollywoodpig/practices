<template>
  <div>
    <Layout v-if="isPassed" />
    <Login v-else :password="password" @pass="pass" />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import Login from "./components/Login.vue";

export default {
  components: { Login, Layout },
  name: "App",
  data() {
    return {
      password: "",
      isPassed: false,
    };
  },
  methods: {
    async fetchPassword() {
      const res = await fetch("https://api.npoint.io/6a72e7dddfc24d58ed89");
      const { password } = await res.json();

      this.password = password;
    },
    pass() {
      this.isPassed = true;
    },
  },
  created() {
    this.fetchPassword().then(() => {
      if (localStorage.getItem("password") === this.password) {
        this.pass();
      }
    });
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
  --trs: 0.3s ease;
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

::selection {
  background: var(--accent);
  color: var(--white);
}

body {
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

input,
textarea {
  font-family: var(--font);
  font-size: inherit;
  color: var(--text);
  outline: none;
}

button {
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
}

.base-styles {
  height: 100vh;
  min-width: 320px;
  font-size: 16px;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
}
</style>
