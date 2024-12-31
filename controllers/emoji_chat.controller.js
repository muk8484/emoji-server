const chatService = require('../services/emoji_chat.service');
const chatController = {}

chatController.sendEmoji = async (message, user, messageId) => {
    try {
        const emojiMessage = await chatService.sendEmoji.getRandomEmoji(message, user, messageId);
        console.log("emojiMessage: ", emojiMessage);
        return emojiMessage;
    } catch (error) {
        console.error( "emoji_chat.controller.js error: ", error);
        throw error;
    }
};

// chatController.checkUser = async(sid) => {
//     try {
//         const user = await chatService.checkUser(sid);
//         return user;
//     } catch (error) {
//         console.error('Controller_checkUser - 사용자 확인 실패:', error);
//         throw error;
//     }
// };

module.exports = chatController;