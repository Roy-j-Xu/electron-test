import { ipcMain } from "electron";
import * as db from "./db";

export default function initIpcChannels() {
    ipcMain.handle(
        "customers:create",
        (_, customer) => db.customers.create(customer)
    );

    ipcMain.handle(
        "customers:getAll",
        () => db.customers.getAll()
    );

}