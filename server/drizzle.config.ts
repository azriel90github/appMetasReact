import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./schema.ts",
  out: "./.migrations",
	dialect: "postgresql",
  dbCredentials: {  
    url: "postgresql://docker:docker@localhost:5432/inorbit"
  },
  
});