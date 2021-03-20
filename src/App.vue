<template>
  <transition name="scale" mode="out-in">
    <Layout v-if="isPassed" />
    <Login v-else :password="password" @pass="pass" />
  </transition>
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
  --trs: 0.4s ease;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000;
    --border: #333;
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
  background: var(--bg);
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
  border-radius: none;
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

// transitions

.scale-enter-active,
.scale-leave-active {
  transition: var(--trs);
}

.scale-enter,
.scale-leave-to {
  transform: scale(1.2);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: var(--trs);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
