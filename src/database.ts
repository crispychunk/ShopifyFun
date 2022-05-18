import sqlite3 from "sqlite3";

class Database {
  private static instance: Database;

  private sqlInstance: sqlite3.Database;

  private constructor() {
    console.log("Initing database...");
    this.sqlInstance = new sqlite3.Database(":memory:");
    this.init();
    console.log("Initiated database");
  }

  private init() {
    const db = this.sqlInstance;
    db.run("CREATE TABLE inventory(item_id,name, amount,warehouse_id)");
    db.run("CREATE TABLE warehouse(warehouse_id,name, location)");
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // Wrap all sql functions to be able to handle async await

  public async run(sql: any, params: any) {
    return new Promise((resolve, reject) => {
      this.sqlInstance.run(sql, params, (err) => {
        if (err) return reject(err);
        resolve(null);
      });
    });
  }

  public async get(sql: any, params: any) {
    return new Promise((resolve, reject) => {
      this.sqlInstance.get(sql, params, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  public async all(sql: any, params: any) {
    return new Promise((resolve, reject) => {
      this.sqlInstance.all(sql, params, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}

export default Database;
