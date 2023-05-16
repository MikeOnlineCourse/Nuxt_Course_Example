import peopleModel from "@/server/models/people.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name, email, age } = body;

  const people = new peopleModel({ name, email, age });

  await people.save();

  return { success: true, body };
});
