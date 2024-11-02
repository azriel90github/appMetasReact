import { db } from ".";
import { goalCompletions, goals } from "./schema";

async function seed() {
	await db.delete(goalCompletions);
	await db.delete(goals);

  await db.insert(goals).values([
    { title: "Acordar cedo", desireWeeklyFrequence: 5 },
    { title: "Me exercitar", desireWeeklyFrequence: 3 },
    { title: "Meditar", desireWeeklyFrequence: 1 },
  ])
}

seed();