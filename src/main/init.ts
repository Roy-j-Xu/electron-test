import { initTables } from "./db";
import initIpcChannels from "./api";

export default function initialization(): void {
    initTables();
    initIpcChannels();
}