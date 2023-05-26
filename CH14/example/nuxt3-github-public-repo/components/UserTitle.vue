<script setup>
const { state } = useIndexStore();

const { searchData } = useRepoSearch();

const editNameText = ref("");

const isEdit = ref(false);

const handEditNameFn = () => {
  editNameText.value = state.userName;
  isEdit.value = true;
};

const handSeachTextFn = () => {
  isEdit.value = false;
  searchData(editNameText.value);
};

const closeEditFn = () => {
  isEdit.value = false;
};
</script>
<template>
  <div class="user_title">
    <img :src="state.avatarUrl" alt="" />
    <div class="edit_box">
      <h1 v-show="!isEdit">{{ state.userName }}</h1>
      <input
        v-show="isEdit"
        v-on:keyup.enter="handSeachTextFn"
        type="text"
        v-model="editNameText"
      />
      <div class="edit_btn">
        <a v-show="!isEdit" href="javascript:;" @click="handEditNameFn">
          <img src="../assets/edit.svg" alt="" />
        </a>
        <div v-show="isEdit">
          <a href="javascript:;" @click="handSeachTextFn">
            <img src="../assets/check-mark.svg" alt="" />
          </a>
          <a href="javascript:;" @click="closeEditFn">
            <img src="../assets/cancel-button.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user_title {
  > img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 65px auto 20px auto;
    border: 5px solid #fff;
  }
}
.edit_box {
  width: 310px;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  > h1 {
    display: block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size: 25px;
    text-align: center;
  }
  > input {
    width: 100%;
    height: 30px;
    padding-left: 5px;
    font-size: 18px;
  }
  .edit_btn {
    display: flex;
    justify-content: center;
    a {
      display: block;
      width: 18px;
      margin-left: 10px;
    }
    > div {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
