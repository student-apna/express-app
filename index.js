import express from 'express';
import { searchController, usernameController } from './controller.js';
const app = express();

// Define a simple route

app.get('/',(req,res)=>{
    res.send('Hello ,Express');
})

// Define a Dynamic route
app.get('/user/:username',usernameController);
// Define a query string route

// /search?keyword=express
app.get('/search',searchController);



const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

});