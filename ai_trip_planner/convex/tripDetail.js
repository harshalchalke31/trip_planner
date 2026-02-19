import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateTripDetail = mutation({
    args:{
        tripId: v.string(),
        tripDetail: v.any(),
        uid: v.id('UserTable')
    },
    handler: async(ctx, args) =>{
        const result = await ctx.db.insert('TripDetailTable',{
            tripID:args.tripId,
            tripDetail:args.tripDetail,
            uid:args.uid,
        })
    }
})