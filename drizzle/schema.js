import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const registerSchema = mysqlTable("register", {
  id: int().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  designation: varchar("designation", { length: 255 }).notNull(),
  pass: varchar("pass", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().onUpdateNow(),
});
