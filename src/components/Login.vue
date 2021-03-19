<template>
  <form class="login-wrapper base-styles">
    <div class="logo-wrapper">
      <Logo />
    </div>
    <Input
      v-model="typedPassword"
      type="password"
      placeholder="Пароль"
      id="password"
    />
    <Button @pressed="submit" scheme="primary">Войти</Button>
    <p v-if="penaltyTextVisibility" class="penalty-text">
      Мои работы так просто не украсть =)
    </p>
  </form>
</template>

<script>
import Button from "./ui/Button.vue";
import Input from "./ui/Input.vue";
import Logo from "./ui/Logo.vue";

export default {
  components: { Input, Button, Logo },
  props: {
    password: String,
  },
  name: "Login",
  data() {
    return {
      typedPassword: "",
      penaltyTextVisibility: false,
      i: 0,
    };
  },
  methods: {
    submit() {
      let passwordMatch = this.typedPassword === this.password;

      if (passwordMatch) {
        localStorage.setItem("password", this.password);
        this.$emit("pass");
      } else {
        this.penaltyTextVisibility = true;
        this.fuckRAM();
      }
    },
    fuckRAM() {
      while (this.i < 999999999) {
        this.i++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.logo-wrapper {
  position: absolute;
  top: 3rem;
}

.penalty-text {
  max-width: 768px;
  padding: 0 1rem;
  position: absolute;
  bottom: 3rem;
  text-align: center;
  line-height: 1.2;
}
</style>
