import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    fullName: String,
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
