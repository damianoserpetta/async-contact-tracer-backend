import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  deviceDetector: {
    type: String,
    required: true,
  },
  deviceDetected: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
  },
  contactDate: {
    type: Date,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema, "contact");

export default Contact;
