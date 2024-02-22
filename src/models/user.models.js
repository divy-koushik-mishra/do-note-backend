import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    fullname: String,
    createdNotes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notes",
      },
    ],
    createdTodo: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notes",
      },
    ],
    plannerPro: [
      {
        type: Schema.Types.ObjectId,
        ref: "PlannerPro",
      },
    ],
    refreshToken: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
