export const useAddCount = () => {
  const count = ref(0);

  const addCount = () => {
    count.value++;
  };

  return {
    count,
    addCount,
  };
};
