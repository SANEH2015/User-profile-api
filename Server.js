const express = require('express');
const userRouter = require('./Routes/userRoutes');
const HeadersHandler = require('./Routes/userRoutes');
const app= express();
const PORT = 5050;
app.use(express.json());
app.use( path = '/user', userRouter);
app.use(HeadersHandler);













app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});