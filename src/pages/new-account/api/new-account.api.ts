import Axios from "axios";
import { NewAccount } from "./new-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveNewAccount = (newAccount: NewAccount): Promise<boolean> => Axios.post<boolean>(url, newAccount).then(({ data }) => data);
