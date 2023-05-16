import { defineStore } from "pinia";
export const useLogingStore = defineStore("login", () => {
  const router = useRouter();

  const error_message = ref({
    username: "",
    password: "",
  });

  const isLoading = ref(false);

  const handleLoading = () => (isLoading.value = !isLoading.value);

  const sendLoginAuth = async ({ username, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      // https://vue-lessons-api.vercel.app
      const res = await $fetch("/auth/login", {
        method: "POST",
        body: { username, password },
      });

      // save token

      router.replace("/");
    } catch (error) {
      const { username } = error.response._data.error_message;
      error_message.value = {
        username,
        password: "password error",
      };
    } finally {
      isLoading.value = false;
    }
  };

  const checkAuth = async () => {
    // https://vue-lessons-api.vercel.app
    await $fetch("/testToken", {
      method: "POST",
    });
  };

  return {
    isLoading,
    handleLoading,
    sendLoginAuth,
    checkAuth,
    error_message,
  };
});
