export default defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 1000,
  };
  return { data };
});
