<script setup>
const dialog = useDialog();

const openDialog = () => {
  dialog.open({
    title: "這是標題喔",
    content: "就跟你說是內文了",
    confirm: {
      btnName: "正常",
      onComplete: () => {
        console.log("確認了喔");
      },
    },
    cancel: {
      btnName: "不正常",
      onComplete: () => {
        console.log("取消了喔");
      },
    },
  });
};
</script>

<template>
  <div class="index">
    <div>
      <button @click="openDialog">OPEN</button>
    </div>
  </div>
</template>

<style scoped>
.index {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: #f1c061;
  color: #2e7ca8;
  border: 3px solid #2e7ca8;
  cursor: pointer;
  font-weight: bold;
}
button:active {
  color: #741d13;
  border: 3px solid #741d13;
}
</style>
