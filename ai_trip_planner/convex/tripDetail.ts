import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


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


export const GetUserTrips = query({
    args: {
        uid: v.id('UserTable')
    },
    handler:async(ctx, args) => {
        const result = await ctx.db.query('TripDetailTable')
        .filter(que => que.eq(que.field('uid'), args.uid))
        .order('desc')
        .collect()

        return result
    }
})

export const GetTripById = query({
    args: {
        uid: v.id('UserTable'),
        tripid: v.string()
    },
    handler:async(ctx, args) => {
        const result = await ctx.db.query('TripDetailTable')
        .filter(que => que.and(
            que.eq(que.field('uid'), args.uid),
            que.eq(que.field('tripID'), args.tripid)
        ))
        .collect()

        return result[0]
    }
})