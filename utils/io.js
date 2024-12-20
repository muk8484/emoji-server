const chatController = require('../controllers/emoji_chat.controller');

module.exports = (io) => {
    io.on("connection", async (socket) => {
        console.log("client is emoji-server connected ", socket.id);
        socket.on("disconnect", async () => {
            console.log("client is emoji-server disconnected ", socket.id);
        });
        socket.on("sendMessage", async (message, user, cb) => {
            try {
                // const user = await chatController.checkUser(socket.id);
                console.log("message: ", message);
                const emoji = await chatController.sendEmoji(message, user);
                console.log("emoji: ", emoji);
 
                // 3초 후에 이모지 전송 이모지 로딩 테스트 나중에 삭제
                setTimeout(() => {
                    io.emit("emoji", emoji);
                }, 2000); // 3000ms = 3초
                
                cb({ok: true});
            } catch (error) {
                cb({ok:false});
            }
        });
    });
};