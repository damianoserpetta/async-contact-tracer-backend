import Contact from "../models/contactSchema.js";

async function getAllContactsRepository() {
  return await Contact.find();
}

async function getAllContactsForDeviceRepository(deviceId) {
  return await Contact.find({ deviceDetector: deviceId });
}

async function getContactRepository(id) {
  return await Contact.findById(id);
}

async function postContactRepository(contactInfo) {
  const contact = new Contact({
    deviceDetector: contactInfo.deviceDetector,
    deviceDetected: contactInfo.deviceDetected,
    distance: contactInfo.distance,
    position: contactInfo.position,
    contactDate: contactInfo.contactDate,
  });
  return await contact.save();
}

async function putContactRepository(id, data) {}

async function patchContactRepository(id, update) {
  await Contact.findOneAndUpdate({ _id: id }, update);
  return Contact.findById(id);
}

async function deleteContactRepository(id) {
  return await Contact.deleteOne({ _id: id });
}

/*
 * Get Schema
 */
async function getContactSchemaRepository() {
  return Contact.schema.tree;
}

Contact.schema; // da eliminare?

export {
  getContactRepository,
  getAllContactsRepository,
  getAllContactsForDeviceRepository,
  postContactRepository,
  putContactRepository,
  patchContactRepository,
  deleteContactRepository,
  getContactSchemaRepository,
};
