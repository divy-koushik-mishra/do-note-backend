import mongoose, { Schema } from "mongoose";

const plannerProSchema = new Schema(
  {
    createdBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Planner = mongoose.model("Planner", plannerProSchema);
