<template>
  <div class="footer">
    <h1>Footer</h1>
    <div>
      <p>공부시작</p>
      <button @click="onClickTimer">타이머 시작</button>
    </div>
    <h3>{{ study }}</h3>
    <h3>공부한 시간: {{ studyTime }}초</h3>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const study = ref(false);
    let studyStart;
    let studyEnd;
    let studyTime = ref(0);

    const onClickTimer = () => {
      if (study.value) {
        studyEnd = new Date();
        console.log(studyEnd);
        studyTime.value += Math.floor(studyEnd / 10 - studyStart / 10) / 100;
        alert(Math.floor(studyEnd / 10 - studyStart / 10) / 100 + "초");
      } else {
        studyStart = new Date();
        console.log(studyStart);
      }
      study.value = !study.value;
    };
    console.log("footer");
    return { onClickTimer, study, studyTime };
  },
};
</script>

<style></style>
