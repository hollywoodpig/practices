<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li
        class="nav__item"
        :class="{ active: index === active }"
        :key="'practice-' + item.id"
        v-for="(item, index) in items"
        @click="onSelectItem(index)"
      >
        {{ item.id }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    items: Array,
    active: Number,
  },
  methods: {
    onSelectItem(index) {
      this.$emit("selectPractice", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  @media (max-width: 576px) {
    width: calc(100vw - 2rem);
  }

  @media (max-width: 320px) {
    width: calc(320px - 2rem);
  }
}

.nav__menu {
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  max-height: calc(24.5rem - 1px);
  overflow-y: overlay;

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-between;
    overflow-x: overlay;
  }
}

.nav__item {
  padding: 1rem;
  background: var(--bg);
  color: var(--text-item);
  text-align: center;
  user-select: none;
  cursor: pointer;

  &:nth-child(even) {
    background: var(--secondary);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);

    @media (max-width: 576px) {
      border-top: none;
      border-bottom: none;
      border-left: 1px solid var(--border);
      border-right: 1px solid var(--border);
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &:nth-child(even),
  &:nth-child(odd) {
    &.active {
      background: var(--accent);
      color: var(--white);

      &:hover {
        opacity: 0.95;
      }
    }

    &:hover {
      opacity: 0.8;
    }

    @media (min-width: 768px) {
      &::before {
        content: "Практическая работа № ";
      }
    }

    @media (max-width: 576px) {
      flex-grow: 1;
    }
  }
}
</style>
