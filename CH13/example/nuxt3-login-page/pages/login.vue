<script setup>
import { useLogingStore } from "@/stores/login";

const store = useLogingStore();

const cookie = useCookie("auth");

const router = useRouter();

const user = ref({
  username: "mike",
  password: "7654321",
});

const sandLogin = () => {
  const payload = {
    username: user.value.username,
    password: user.value.password,
  };
  store.sendLoginAuth(payload);
};

onMounted(() => {
  if (cookie.value?.token) {
    router.replace("/");
  }
});
</script>
<template>
  <div class="login_box">
    <div class="center">
      <div class="input_box">
        <p>NAME</p>
        <input
          type="text"
          placeholder="輸入使用者名稱"
          v-model="user.username"
        />
        <p v-if="store.error_message.username" class="error">
          {{ store.error_message.username }}
        </p>
      </div>
      <div class="input_box mb-20">
        <p>PASSWORD</p>
        <input type="password" placeholder="輸入密碼" v-model="user.password" />
        <p v-if="store.error_message.password" class="error">
          {{ store.error_message.password }}
        </p>
      </div>
      <button class="btn" @click="sandLogin">登入</button>
    </div>
  </div>
</template>
<style scoped>
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 500px;
  height: 700px;
  padding: 20px 0;
  background-color: #d7c9be;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1px rgb(26, 29, 53);
}
p,
label {
  color: #657359;
  margin-bottom: 6px;
  font-size: 34px;
  font-weight: bold;
}
input[type="text"],
input[type="password"],
input[type="number"] {
  width: 280px;
  height: 50px;
  padding-left: 5px;
  font-size: 22px;
  border: 1px solid #657359;
  border-radius: 60px;
  padding-left: 20px;
}
.input_box {
  margin-bottom: 20px;
}

label {
  margin-right: 15px;
}

p.error {
  color: rgb(255, 46, 46);
  font-size: 18px;
  padding-top: 4px;
}
.mb-20 {
  margin-bottom: 30px;
}
h1 {
  color: aliceblue;
}
.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #9aa582;
  border: 2px solid #657359;
  color: #f1e4db;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 40px;
  border-radius: 20px;
}
</style>
