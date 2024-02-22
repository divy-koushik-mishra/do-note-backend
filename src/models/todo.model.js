import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    todoTitle: {
      type: String,
      required: true,
    },

    isDone: {
      type: Boolean,
      default: true,
    },
    createdBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
