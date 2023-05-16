<script setup>
const router = useRouter();

const gotoAndPage = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="lang">
    <div class="menu">
      <NuxtLink to="/">{{ $t("front_page") }}</NuxtLink>
      <NuxtLink to="/about">{{ $t("about_us") }}</NuxtLink>
      <a>{{ $t("contact_us") }}</a>
      <a>{{ $t("product_description") }}</a>
      <a href="javascript:;" @click="gotoAndPage('/news')">
        {{ $t("latest_news") }}
      </a>
      <a>{{ $t("history") }}</a>
    </div>
  </div>
</template>

<style scoped>
.menu {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
