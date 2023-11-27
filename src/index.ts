import express from "express";
const app = express();
import userRoutes from './routes/userRoutes'
import tweetRoutes from './routes/tweetRoutes'
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet',tweetRoutes)
app.get('/', (req, res) => {
    res.send("Hello word updated");
});



app.listen(3000, () => {
    console.log("server ready at localhost:3000");
});