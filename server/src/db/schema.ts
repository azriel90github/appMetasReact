import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const goals = pgTable("goals", {
	id: text('id').primaryKey(),
  title: text('title').notNull(),
  desireWeeklyFrequence: integer('desired_wekly_frequence').notNull(),
  createAt: timestamp('create_at', { withTimezone: true }).notNull()
});