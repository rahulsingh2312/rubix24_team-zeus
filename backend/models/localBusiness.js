const mongoose = require("mongoose");

const localBusiness = new mongoose.Schema({
  local_name: {
    type: String,
    required: true,
  },
  country: {
    type: "String",
    required: true,
  },
  city_name: {
    type: "String",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
