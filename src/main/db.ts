import Database from "better-sqlite3";
import { Customer } from "@shared/types";


const database = new Database('data.db', { verbose: console.log });

export function initTables(): void {
    database.prepare(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            lastVisit TEXT
        )
    `).run();
}

export const customers = {
    create(customer: Customer): void {
        const lastVisit = customer.lastVisit ? customer.lastVisit : new Date().toISOString();
        database.prepare('INSERT INTO customers (name, lastVisit) VALUES (?, ?)')
            .run(customer.name, lastVisit);
    },

    getAll(): Customer[] {
        return database.prepare('SELECT * FROM customers').all() as Customer[];
    }
}