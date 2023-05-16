import peopleModel from "@/server/models/people.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { _id, name } = body;
  const oldData = await peopleModel.findOne({ _id });
  await peopleModel.updateOne(oldData, { name });
  await oldData.save();
  const updateData = await peopleModel.findOne();
  return { success: true, data: updateData };
});
