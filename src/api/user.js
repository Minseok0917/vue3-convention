import { beAPI } from "./instances";

export const fetchUser = () => beAPI.get("/");
