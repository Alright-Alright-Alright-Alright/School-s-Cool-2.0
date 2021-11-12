const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        isPrivate: {
            type: Boolean,
            default: false,
        },
        bannerImage: {
            type: String,
        },   
        members: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        recources: [
            {
                type: Schema.Types.ObjectId,
                ref: "File",
            } 
        ],
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            }  
        ]      
    },
    {
        timestamps: true,
      }
)

module.exports = model("Topic", topicSchema);
