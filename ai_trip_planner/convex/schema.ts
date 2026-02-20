import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
        UserTable: defineTable({
            name: v.string(),
            imageUrl: v.string(),
            email: v.string(),
            subscribtion: v.optional(v.string()),

        }),

        TripDetailTable: defineTable({
            tripID: v.string(),
            tripDetail: v.any(),
            uid: v.optional(v.id('UserTable')),
        })
})