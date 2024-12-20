const User = require("../Models/user")
const emoji = require('node-emoji');
const Chat = require('../models/chat');
// const randomEmoji = require('random-emoji');
const chatService ={}

chatService.sendEmoji = {
    getRandomEmoji: async (message, user) => {
        try {
            const randomEmoji = emoji.random();
            const emojiMessage = new Chat({
                chat: randomEmoji.emoji,
                user: {
                    // user._id는 MongoDB가 자동으로 생성하는 고유한 ObjectId
                    id: user._id,
                    name: user.name,
                }
            });
            return emojiMessage;
        } catch (error) {
            console.error("emoji_chat.service.js error: ", error);
            throw error;
        }
    },
    searchEmoji: async (keyword) => {
        try {
            const found = emoji.search(keyword);
            return found.map(e => e.emoji);
            // const [emoji] = randomEmoji.random({count: 1});
            // return emoji.character;
        } catch (error) {
            console.error("emoji_chat.service.js error: ", error);
            throw error;
        }
    }
};

// chatService.checkUser = async(sid) => {
//     try {
//         const user = await User.findOne({ token: sid });
//         if (!user) {
//             throw new Error("사용자를 찾을 수 없습니다.");
//         }
//         return user;
//     } catch (error) {
//         console.error("emoji_chat.service.js error: ", error);
//         throw error;
//     }
// }

module.exports = chatService;