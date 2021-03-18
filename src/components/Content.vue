<template>
  <article class="content">
    <iframe
      class="iframe"
      :src="src"
      scrolling="no"
      frameborder="no"
      loading="lazy"
      allowtransparency="true"
      allowfullscreen="true"
    >
    </iframe>
  </article>
</template>

<script>
export default {
  name: "Content",
  props: {
    code: String,
  },
  computed: {
    src() {
      return `https://codepen.io/randomrandomrandom/embed/${this.code}?theme-id=light&default-tab=html,result`;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid var(--border);
  border-radius: 0.5rem;

  @media (max-width: 576px) {
    height: calc(100vh - 10rem);
  }

  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
