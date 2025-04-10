import express from 'express';
import router from './route.js';
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello ,Express');
})
app.use('/user',router);
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});