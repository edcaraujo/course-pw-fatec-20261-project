import app from "./app"

const HOST = "localhost";
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`-----------------------------------------`);
    console.log(`🚀 API Server is running!`);
    console.log(`-----------------------------------------`);
    console.log(`📡 API (v1):       http://${HOST}:${PORT}/api/v1`);
    console.log(`💓 Health Check:   http://${HOST}:${PORT}/status`);
    console.log(`-----------------------------------------`);
    console.log(`💡 Press CTRL+C to stop the server\n`);
});