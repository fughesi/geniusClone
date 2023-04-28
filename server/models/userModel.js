const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: { type: String, trim: true },
    username: { type: String, required: "username is required!" },
    firstName: { type: String },
    lastName: { type: String },
    isActive: { type: Boolean },
    age: { type: Number },
    iqPoints: { type: Number },
    email: { type: String, lowercase: true, trim: true, unique: true, required: "email is required!" },
    phone: { type: String },
    password: { type: String, min: 6, required: "password is required!" },
    about: { type: String },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    stats: {
      annotations: { type: Number, default: 0 },
      questions: { type: Number, default: 0 },
      answers: { type: Number, default: 0 },
      suggestions: { type: Number, default: 0 },
      transcriptions: { type: Number, default: 0 },
      pyongs: { type: Number, default: 0 },
    },
    homeAddress: {
      number: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
    },
    shippingAddress: {
      number: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
    },
    billingAddress: {
      number: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
    },
    shoppingCart: [
      {
        id: { type: mongoose.SchemaTypes.ObjectId, ref: "Merch" },
        quantity: { type: Number, default: 1 },
      },
    ],
    savedForLater: [
      {
        id: { type: mongoose.SchemaTypes.ObjectId, ref: "Merch" },
        quantity: { type: Number, default: 1 },
      },
    ],
    createdAt: { type: Date, immutable: true, default: () => new Date() },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
