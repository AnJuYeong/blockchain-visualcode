import { signIn,signUp } from "./loginAction";
import { boardAdd, boardStart } from "./boardAction";
import { profilePicture,profileSet } from "./reinfoAction";
import { nftAdd } from "./nftAction";

export const loginAction = {signIn, signUp};
export const boardAction = {boardAdd,boardStart};
export const reinfoAction = { profilePicture,profileSet };
export const nftAction = {nftAdd};