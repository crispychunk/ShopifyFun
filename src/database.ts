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

  public getSqlDatabase() {
    return this.sqlInstance;
  }
}

export default Database;
