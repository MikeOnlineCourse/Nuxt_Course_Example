<script setup>
import { xssParse } from "@/lib/filterXss.js";

const { t } = useI18n();

const content = computed(() => xssParse(t("about_content")));
</script>
<template>
  <div class="about">
    <NuxtLink to="/">{{ $t("front_page") }}</NuxtLink>
    <div v-html="content"></div>
    <!-- <div v-html="$t('about_content')"></div> -->
  </div>
</template>
<style scoped>
.about {
  width: 500px;
}
a {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
