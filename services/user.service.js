/*
 *******    Service Layer    *******
 */

import {
  getUserRepository,
  getAllUsersRepository,
  postUserRepository,
  deleteUserRepository,
  patchUserRepository,
  getUserSchemaRepository,
} from "../repositories/user.rep.js";

async function getUserService(id) {
  let user;
  try {
    user = await getUserRepository(id);
    if (user == null) return { code: 404 };
  } catch (err) {
    return { message: err.message };
  }
  return user;
}

async function getAllUsersService() {
  let users;
  try {
    users = await getAllUsersRepository();
    if (users == null) return { code: 404 };
  } catch (err) {
    return { message: err.message };
  }
  return users;
}

async function postUserService(userInfo) {
  if (userExists(userInfo._id)) return { code: 404 };
  let newUser;
  try {
    newUser = await postUserRepository(userInfo);
  } catch (err) {
    return { message: err.message };
  }
  return newUser;
}

async function putUserService(id) {
  try {
  } catch (err) {}
}

async function patchUserService(id, update) {
  if (!userExists(id)) return { code: 404 };
  let updatedUser;
  try {
    updatedUser = await patchUserRepository(id, update);
  } catch (err) {
    return { message: err.message };
  }

  return updatedUser;
}

async function deleteUserService(id) {
  if (!userExists(id)) return { code: 404 };

  // Controllare se esiste l'user
  try {
    await deleteUserRepository(id);
  } catch (err) {
    return { message: err.message };
  }
  return { code: 200 };
}

async function userExists(id) {
  let user = await getUserService(id);
  if (user.code == 404) return false;

  return true;
}

export {
  getUserService,
  getAllUsersService,
  postUserService,
  putUserService,
  patchUserService,
  deleteUserService,
  userExists,
};
