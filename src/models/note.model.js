import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    noteTitle: {
      type: String,
      required: true,
    },

    noteContent: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      lowercase: true,
      default: "none",
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

export const Note = mongoose.model("Note", noteSchema);
