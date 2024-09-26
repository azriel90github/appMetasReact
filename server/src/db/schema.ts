import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createId } from '@paralleldrive/cuid2'

export const goals = pgTable("goals", {
	id: text("id").primaryKey().$defaultFn(() => createId()),
	title: text("title").notNull(),
	desireWeeklyFrequence: integer("desired_wekly_frequence").notNull(),
	createAt: timestamp("create_at", { withTimezone: true })
  .notNull()
  .defaultNow(),
});

export const goalCompletions = pgTable('goal_completions', {
	id: text('id').primaryKey(),
	goalId: text('goal_id')
	.references(() => goals.id)
	.notNull(),
	createAt: timestamp("create_at", { withTimezone: true })
  .notNull()
  .defaultNow(),
}) 