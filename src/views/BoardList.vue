<template>
  <div class="boardList">
    <h1>BoardList</h1>
    <div v-for="board in boards" :key="board.id">
      <h2>{{ board.title }}</h2>
      <p>{{ board.description }}</p>
    </div>
    <button @click="addBoard">Add Board</button>
    <button @class="modalStat = true">X</button>
  </div>
  <div class="black-bg" v-if="modalStat">
    <div class="white-bg">
      <h4>Plese select board Type</h4>
      <select></select>
      <button @click="modalStat = false">X</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const modalStat = ref(true);
    const boards = reactive([
      {
        id: 1,
        title: "Board 1",
        description: "Description 1",
      },
      {
        id: 2,
        title: "Board 2",
        description: "Description 2",
      },
      {
        id: 3,
        title: "Board 3",
        description: "Description 3",
      },
    ]);

    const addBoard = () => {
      const content = prompt("Title");
      boards.push({
        id: boards.length + 1,
        title: `Board ${boards.length + 1}`,
        description: content,
      });
    };

    return { boards, modalStat, addBoard };
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 50%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
