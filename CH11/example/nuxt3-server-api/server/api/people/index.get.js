import peopleModel from "@/server/models/people.model";

export default defineEventHandler(async (event) => {
  const people = await peopleModel.find();
  return people;
});
