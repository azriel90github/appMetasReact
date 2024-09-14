CREATE TABLE IF NOT EXISTS "goals" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"desired_wekly_frequence" integer NOT NULL,
	"create_at" timestamp with time zone DEFAULT now() NOT NULL
);
