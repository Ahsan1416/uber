
const http=require('http');
const app=require('./app');
const server=http.createServer(app);
const port=process.env.Port || 5000;
const cors = require('cors'); // ✅ Add this line


app.use(cors())
server.listen(port, ()=>{
    console.log(`port is running on ${port} `)
});