<template>
  <div class="form-group">
    <input
      @input="$emit('input', $event.target.value)"
      :value="value"
      :type="type"
      :name="id"
      :id="id"
      class="form-group__input"
      autocomplete="off"
    />
    <label class="form-group__label" :for="id">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String,
    placeholder: String,
    id: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;

  &__input,
  &__label {
    transition: var(--trs);
  }

  &__input {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--border);
    background: transparent;
    padding: 0.5rem 0;
    transition: var(--trs);

    &:focus {
      border-color: var(--accent);

      & ~ .form-group__label {
        transform: translateY(-25%);
        font-size: 0.8rem;
      }
    }
  }

  &__label {
    user-select: none;
    position: absolute;
    left: 0;
    transform: translateY(50%);
    cursor: text;
    opacity: 0.5;
  }
}
</style>
