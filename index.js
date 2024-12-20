const {createServer} = require('http');
const {Server} = require("socket.io");
const app = require("./app");
const httpServer = createServer(app);
require("dotenv").config();

const io = new Server(httpServer, {
    cors:{
        origin: "*",  // 모든 도메인에서 접근 허용
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true,
    },
});

require("./utils/io")(io);

httpServer.listen(process.env.APP_SERVER__PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${process.env.APP_SERVER__PORT}`);
});