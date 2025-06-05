const mongoose=require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_connect, {
        
    })
    .then(() => {
        console.log("✅ Connected to MongoDB successfully.");
    })
    .catch((error) => {
        console.error("❌ Failed to connect to MongoDB:", error);
    });
}

module.exports = connectToDb;
