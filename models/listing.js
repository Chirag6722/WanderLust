const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { ref } = require('joi');

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    image : {
        url: String,
        filename: String
    },
    price : {
        type : Number
    },
    location : {
        type : String
    },
    country : {
        type : String 
    },
    // ✅ NEW CATEGORY FIELD
    category: {
        type: String,
        enum: [
        "trending", "rooms", "iconic", "mountains",
        "castles", "pools", "camping", "farms", "arctic",
        "domes", "boats"
        ],
        required: true
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    } 
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if (listing) {
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
