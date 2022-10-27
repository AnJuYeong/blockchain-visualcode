import { signIn,signUp } from "./loginAction";
import { boardAdd, boardStart } from "./boardAction";
import { profilePicture } from "./reinfoAction";

export const loginAction = {signIn, signUp};
export const boardAction = {boardAdd,boardStart};
export const reinfoAction = { profilePicture };