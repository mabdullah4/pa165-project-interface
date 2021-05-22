import { AuthEvents } from "./events";
import { makeAction, IActionUnion } from "../actions";
import { IUser } from ".";

export const SetLogin = makeAction<AuthEvents.LOGIN, IUser>(AuthEvents.LOGIN);
export const SetLogout = makeAction<AuthEvents.LOGOUT>(AuthEvents.LOGOUT);

const actions = {
    SetLogin,
    SetLogout,
};

export type IAuthAction = IActionUnion<typeof actions>;
