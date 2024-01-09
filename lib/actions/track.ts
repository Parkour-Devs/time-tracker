"use server";
import { revalidatePath } from "next/cache";
import { getUserSession } from "../auth";
import { stopActivityInDB, updateActivity } from "../db/track";

export async function upsertActivity(data: FormData) {
    await updateActivity(data)
    revalidatePath("/track");
}

export async function stopActivity(data: FormData) {
    await stopActivityInDB(data);
    revalidatePath("/track");
}