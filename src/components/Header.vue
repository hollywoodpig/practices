<template>
  <header class="header">
    <Logo />
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
import Logo from "./ui/Logo.vue";

export default {
  components: { Logo },
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  &__title {
    color: var(--text-item);
    font-size: 1rem;
    font-weight: normal;
    text-align: right;
  }
}

@media (prefers-color-scheme: dark) {
  .header__title {
    color: var(--text);
  }
}
</style>
