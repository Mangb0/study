<template>
  <div class="loginView">
    <h1>LoginView</h1>
    <input v-model="id" />
    <button @click="onClickLogin">Login</button>
    <div>{{ $store.state.user }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let id = ref("");
    let user = ["mangbo"];
    const store = useStore();

    const onClickLogin = () => {
      console.log("onClickLogin");
      console.log(id.value);
      if (user.includes(id.value)) alert("login");
      store.commit("setUser", id.value);
    };

    return { id, user, onClickLogin };
  },
};
</script>

<style></style>
