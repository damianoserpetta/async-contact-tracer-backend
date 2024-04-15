/*
 *******    Data Access Layer    *******
 */

import User from "../models/userSchema.js";
/*
 *   CRUD
 */

async function getAllUsersRepository() {
  return await User.find();
}

async function getUserRepository(id) {
  return await User.findById(id);
}

async function postUserRepository(userInfo) {
  const user = new User({
    _id: userInfo._id,
    registerDate: userInfo.registerDate,
  });
  return await user.save();
}

async function putUserRepository(id, data) {}

async function patchUserRepository(id, update) {
  await User.findOneAndUpdate({ _id: id }, update);
  return User.findById(id);
}

async function deleteUserRepository(id) {
  return await User.deleteOne({ _id: id });
}

/*
 * Get Schema
 */
async function getUserSchemaRepository() {
  return User.schema.tree;
}

User.schema;
export {
  getUserRepository,
  getAllUsersRepository,
  postUserRepository,
  putUserRepository,
  patchUserRepository,
  deleteUserRepository,
  getUserSchemaRepository,
};
