<template>
  <div class="boardList">
    <h1>BoardList</h1>
    <div v-for="board in boards" :key="board.id">
      <h2>{{ board.title }}</h2>
      <p>{{ board.description }}</p>
    </div>
    <button @click="addBoard">Add Board</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
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

    return { boards, addBoard };
  },
};
</script>

<style></style>
