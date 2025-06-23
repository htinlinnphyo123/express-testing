const app = require("../config/app");
const connectMongoDB = require('../config/db');

(async () => {
    try {
        await connectMongoDB();
        app.listen(3000, () => {
            console.log('Server is running at port 3000');
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
})();
