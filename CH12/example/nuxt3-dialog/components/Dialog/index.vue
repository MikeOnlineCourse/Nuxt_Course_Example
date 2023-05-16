<script setup>
import { dialogOption } from "@/composables/useDialog";

const { close } = useDialog();
</script>
<template>
  <dialog id="dialog">
    <header>{{ dialogOption.title }}</header>
    <main>{{ dialogOption.content }}</main>
    <footer>
      <button class="cancel" @click="close('cancel')">
        {{ dialogOption.cancel.btnName }}
      </button>
      <button class="confirm" @click="close('confirm')">
        {{ dialogOption.confirm.btnName }}
      </button>
    </footer>
  </dialog>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#dialog {
  width: 330px;
  height: 280px;
  overflow: hidden;
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 6px #ccc;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(218, 115, 56, 0.4);
}

header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
main {
  width: 100%;
  height: 180px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

footer {
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
}
footer button {
  width: 40%;
  height: 30px;
  margin: 0 5px;
  border: 0;
  outline: none;
  flex-shrink: -1;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
}

.cancel {
  background-color: #741d13;
}
.confirm {
  background-color: #2e7ca8;
}
</style>
