import Axios from "axios";
import { Credentials } from "./login.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/login`;

export const isValidLogin = async (credentials: Credentials): Promise<boolean> => Axios.post<boolean>(url, credentials).then(({ data }) => data);
