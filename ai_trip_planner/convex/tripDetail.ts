import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const CreateTripDetail = mutation({
    args:{
        tripID: v.string(),
        tripDetail: v.any(),
        uid: v.optional(v.id('UserTable'))
    },
    handler: async(ctx, args) =>{
        const result = await ctx.db.insert('TripDetailTable',{
            tripID:args.tripID,
            tripDetail:args.tripDetail,
            uid:args.uid,
        })
        return result
    }
})
