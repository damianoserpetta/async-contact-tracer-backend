/*
 *******    Data Controller Layer - Contact    *******
 */

async function postContactController(req, res, next) {
  res.contactInfo = {
    deviceDetector: req.body.deviceDetector,
    deviceDetected: req.body.deviceDetected,
    position: req.body.position,
    distance: req.body.distance,
    contactDate: req.body.contactDate,
  };
  next();
}
async function patchContactController(req, res, next) {
  res.id = req.query.id;
  res.update = req.body;
  next();
}

export { postContactController, patchContactController };
