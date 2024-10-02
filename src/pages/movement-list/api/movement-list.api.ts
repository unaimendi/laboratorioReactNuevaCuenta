import Axios from "axios";
import { Account, MovementListVm } from "./movement-list.api-model";

const accountUrl = `${import.meta.env.VITE_BASE_API_URL}/account-list/`;

export const getAccount = (id: string): Promise<Account> => Axios.get<Account>(`${accountUrl}${id}`).then((response) => response.data);

const movementUrl = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementList = (accountId: string): Promise<MovementListVm[]> => Axios.get<MovementListVm[]>(movementUrl, { params: { accountId } }).then((response) => response.data);
