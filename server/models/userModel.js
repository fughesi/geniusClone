const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    isActive: { type: Boolean },
    age: { type: Number },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
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
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
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
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
