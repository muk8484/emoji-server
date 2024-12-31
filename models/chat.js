const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        chat: String,
        swapKey: String,
        type: {
            type: String,
            enum: ['text', 'loading', 'system', 'emoji'],
            default: 'emoji'
        },
        user: {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
        room: {
            type: mongoose.Schema.ObjectId,
            ref: "Room",
        },
    }, 
    {timestamps: true}
);

module.exports = mongoose.model("Chat", chatSchema);