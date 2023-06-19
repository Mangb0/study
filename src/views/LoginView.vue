<template>
  <div class="loginView">
    <h1>LoginView</h1>
    <input v-model="id" />
    <button @click="onClickLogin">Login</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let id = ref("a");
    let user = ["mangbo"];

    const onClickLogin = () => {
      console.log("onClickLogin");
      console.log(id.value);
      if (user.includes(id.value)) alert("login");
    };

    return { id, user, onClickLogin };
  },
};
</script>

<style></style>
