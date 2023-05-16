<script setup>
const peopleData = ref({
  name: "",
  email: "",
  age: "",
});
</script>

<template>
  <div class="app">
    <div class="todo_bar">
      <div class="input_box">
        <input
          v-model="peopleData.name"
          class="info"
          type="text"
          placeholder="名字"
        />
        <input
          v-model="peopleData.email"
          class="info"
          type="text"
          placeholder="信箱"
        />
        <input
          v-model="peopleData.age"
          class="info"
          type="text"
          placeholder="年齡"
        />
      </div>
      <button class="create">新增</button>
    </div>

    <div class="todo">
      <div class="todo_item">
        <div class="todo_name">
          <p v-if="true">name</p>
          <input v-else class="name_info" type="text" placeholder="名字" />
        </div>
        <div class="todo_update">
          <button class="put_btn">
            {{ true ? "edit" : "save" }}
          </button>
          <button class="remove_btn">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#__nuxt {
  width: 100vw;
  height: 100vh;
  background-color: #6cb7da;
}
.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.todo_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input.info {
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}
button.create {
  width: 150px;
  height: 30px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #d77186;
  color: #fff;
  border: 2px solid #d75725;
  cursor: pointer;
  box-shadow: 0px 2px 0px rgb(180, 49, 75);
}
button.create:active {
  border: 2px solid #982b00;
  box-shadow: 0px 0px 0px rgb(152, 43, 0);
}
p {
  font-size: 26px;
  color: #fff;
  font-weight: bold;
}
.todo {
  margin-top: 50px;
}
.todo_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.todo_name {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
input.name_info {
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}
button.put_btn,
button.remove_btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
  margin: 0 2px;
}
.todo_update {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
