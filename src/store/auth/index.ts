import { ILoginResponse } from "../../pages/auth/Login";
import { IAuthAction } from "./actions";
import { AuthEvents } from "./events";

export interface IUser {
    id: number;
    name: string;
    email: string;
    type: "MANAGER" | "TENNIS_USER";
    createdAt: Date;
}

interface IAuthState {
    isLoggedIn: boolean;
    token?: string;
    user?: IUser;
}

const initial: IAuthState = {
    isLoggedIn: false,
};

const auth = (state: IAuthState = initial, action: IAuthAction): IAuthState => {
    switch (action.type) {
        case AuthEvents.LOGIN:
            localStorage.setItem("logged_in", JSON.stringify(action.payload));
            return { ...state, isLoggedIn: true, user: action.payload.user, token: action.payload.token };
        case AuthEvents.LOGOUT:
            localStorage.removeItem("logged_in");
            return { isLoggedIn: false };
        default:
            try {
                const user: ILoginResponse = JSON.parse(localStorage.getItem("logged_in") || "");
                return { ...state, isLoggedIn: true, ...user };
            } catch (error) {
                return { ...state };
            }
    }
};

export default auth;
