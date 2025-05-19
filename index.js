import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.cookie('name','express-app',{maxAge:36000});
    res.send('Hello Express');
})

app.get('/fetch',(req,res)=>{
    console.log(req.cookies);
    res.send('API called');

})

app.get('/remove-cookie',(req,res)=>{
    res.clearCookie('name');
    res.send('Cookie cleared')
})











const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on Localhost:${PORT}`);
})

