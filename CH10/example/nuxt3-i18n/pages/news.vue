<script setup></script>
<template>
  <div>
    <h1>{{ $t("latest_news") }}</h1>

    <NuxtLink to="/">{{ $t("front_page") }}</NuxtLink>
  </div>
</template>
<style>
h1 {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
  margin-bottom: 20px;
}

a {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
}
</style>
