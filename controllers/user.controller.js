/*
 *******    Data Controller Layer - User    *******
 */

async function postUserController(req, res, next) {
  try {
    res.userInfo = userInfoConverter(req.body._id);
  } catch (err) {
    res.code = err.code;
  }
  next();
}

async function patchUserController(req, res, next) {
  res.id = req.query.id;
  res.update = req.body;
  next();
}

function userInfoConverter(id) {
  return {
    _id: id,
    registerDate: new Date(),
  };
}

export { postUserController, patchUserController, userInfoConverter };
