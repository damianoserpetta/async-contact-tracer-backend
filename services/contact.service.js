import {
  getContactRepository,
  getAllContactsRepository,
  getAllContactsForDeviceRepository,
  postContactRepository,
  deleteContactRepository,
  patchContactRepository,
  getContactSchemaRepository,
} from "../repositories/contact.rep.js";

import { userExists, postUserService } from "../services/user.service.js";
import { userInfoConverter } from "../controllers/user.controller.js";

async function getContactService(id) {
  let contact;
  try {
    contact = await getContactRepository(id);
    if (contact == null) return { message: "Contact not found" };
  } catch (err) {
    return { message: err.message };
  }
  return contact;
}

async function getContactsForDevice(deviceId) {
  let contacts;
  try {
    contacts = await getAllContactsForDeviceRepository(deviceId);
    if (contacts == null) return { message: "Contacts not found" };
  } catch (err) {
    return { message: err.message };
  }
  return contacts;
}

async function getAllContactsService() {
  let contacts;
  try {
    contacts = await getAllContactsRepository();
    if (contacts == null) return { message: "Contacts not found" };
  } catch (err) {
    return { message: err.message };
  }
  return contacts;
}

async function postContactService(contactInfo) {
  if (!(await userExists(contactInfo.deviceDetector)))
    postUserService(userInfoConverter(contactInfo.deviceDetector));

  if (!(await userExists(contactInfo.deviceDetected)))
    postUserService(userInfoConverter(contactInfo.deviceDetected));

  let newContact;
  try {
    newContact = await postContactRepository(contactInfo);
  } catch (err) {
    console.error(err);
    return { message: err.message };
  }
  return newContact;
}

async function patchContactService(id, update) {
  let updatedContact;
  try {
    updatedContact = await patchContactRepository(id, update);
  } catch (err) {
    return { message: err.message };
  }

  return updatedContact;
}

async function deleteContactService(id) {
  // Controllare se esiste il contact
  try {
    await deleteContactRepository(id);
  } catch (err) {
    return { message: err.message };
  }
  return { message: "Contact has been deleted" };
}

/**
 *  Controlla se i campi in 'data' sono coerenti con lo
 *  schema Contact del DB.
 *
 * @param {Data to update in db} data
 */
async function contactDataValidatorService(data) {
  let schema = await getContactSchemaRepository();
  let filteredData = {};

  for (let key in schema) {
    if (data.hasOwnProperty(key)) {
      filteredData[key] = data[key];
    }
  }

  return filteredData;
}

export {
  getContactService,
  getAllContactsService,
  postContactService,
  patchContactService,
  deleteContactService,
  contactDataValidatorService,
  getContactsForDevice,
};
