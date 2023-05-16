export default defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 12,
  };
  return { data };
});
