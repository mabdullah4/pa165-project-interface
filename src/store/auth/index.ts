import { IAuthAction } from "./actions";
import { AuthEvents } from "./events";

export interface IUser {
    id: number;
    name: string;
    email: string;
}

interface IAuthState {
    isLoggedIn: boolean;
    user?: IUser;
}

const initial: IAuthState = {
    isLoggedIn: false,
};

const auth = (state: IAuthState = initial, action: IAuthAction): IAuthState => {
    switch (action.type) {
        case AuthEvents.LOGIN:
            return { ...state, isLoggedIn: true, user: action.payload };
        case AuthEvents.LOGOUT:
            return { isLoggedIn: false };
        default:
            return { ...state };
    }
};

export default auth;
