import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // token: {
    //   type: Number,
    //   required: false,
    // },
    computer:{
      type: Boolean,
      default: false,
  },

  hour: {
    type: String,
    required: true,  // 1pm to 2pm
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
