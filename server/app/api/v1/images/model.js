const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let imageSchema = Schema(
  {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
  // {
  // 	name: { type: String },
  // },
  // { timestamps: true }
);

module.exports = model("Image", imageSchema);
