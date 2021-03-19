<template>
  <img class="logo" src="../../assets/logo.svg" alt="логотип" />
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo {
  height: 3em;
  user-select: none;
  -webkit-user-drag: none;
}

@media (prefers-color-scheme: dark) {
  .logo {
    filter: invert(1);
  }
}
</style>
