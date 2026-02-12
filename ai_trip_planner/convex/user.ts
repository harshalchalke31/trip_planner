// Creating a mutation to insert a record into the db
"use client"
import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        imageUrl: v.string(),
    },
    handler: async(ctx,args) => {
        // If user already exists
        const user = await ctx.db.query('UserTable')
        .filter((que)=> que.eq(que.field('email'),args.email))
        .collect()

        // If user does not exist
        if (user?.length==0) {
            const userData = {
                name:args.name,
                email: args.email,
                imageUrl: args.imageUrl,
            }

            const result = await ctx.db.insert('UserTable',userData)
            return userData
        }

        return user[0]
    }

})