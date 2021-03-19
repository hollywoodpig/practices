<template>
  <button @click.prevent="onPressed" class="button" :class="scheme">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    scheme: String,
  },
  methods: {
    onPressed() {
      this.$emit("pressed");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: var(--trs);

  &:hover {
    box-shadow: 0 0 0.5rem rgba(#000, 0.2);
  }

  &.primary {
    background: var(--accent);
    color: var(--white);
  }
}

@media (prefers-color-scheme: dark) {
  .button {
    &:hover {
      box-shadow: 0 0 0.5rem rgba(#fff, 0.4);
    }
  }
}
</style>
