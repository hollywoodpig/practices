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

  path {
    fill: var(--text);
  }
}
</style>
