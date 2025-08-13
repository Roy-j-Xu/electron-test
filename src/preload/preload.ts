import { Customer } from "@shared/types";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "api",
    {
        customers: {
            getAll: () => ipcRenderer.invoke("customers:getAll"),
            create: (c: Customer) => ipcRenderer.invoke("customers:create", c),
        },
    }
)