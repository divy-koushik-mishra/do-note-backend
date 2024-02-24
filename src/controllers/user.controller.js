import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
    username: req.body,
  });
});

const test = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
  // .send("hii");
});
export { registerUser, test };
