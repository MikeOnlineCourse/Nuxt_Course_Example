<script setup>
const auth = useCookie("auth", {
  domain: ".nuxt3demo.com",
});

const openCenteredWindow = (url, windowName, w, h) => {
  const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
  const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
  return window.open(
    url,
    windowName,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`
  );
};

const login = () => {
  openCenteredWindow(
    "http://login.nuxt3demo.com:3000/login?isOpen=true",
    "nuxt3 login",
    510,
    710
  );
};

const checkAuth = async () => {
  try {
    await $fetch("https://vue-lessons-api.vercel.app/testToken", {
      method: "POST",
      headers: {
        Authorization: auth.value?.token,
      },
    });
  } catch (error) {
    if (error.response?.status === 403) {
      console.log("not login");
      cookie.value = null;
    }
  }
};

const token = auth.value?.token;

onMounted(() => {
  checkAuth(); // 檢查 token 是否正確
  const timer = setInterval(() => {
    const auth2 = useCookie("auth");
    if (token !== auth2.value?.token) {
      window.location.reload();
      clearInterval(timer);
    }
  }, 100);
});
</script>

<template>
  <div id="app">
    <button v-if="!token" @click="login">Login</button>
    <h1 v-else>登入中</h1>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  background-color: #a4d984;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  cursor: pointer;
  width: 340px;
  height: 90px;
  padding-left: 5px;
  font-size: 32px;
  border: 7px solid #f26386;
  border-radius: 70px;
  color: #ffffff;
  background-color: #f588af;
}
</style>
