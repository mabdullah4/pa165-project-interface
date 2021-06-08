import { IUser } from "../store/auth";

const isManager = (user?: IUser) => user?.type === "MANAGER";

export default isManager;
