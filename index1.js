import express, { urlencoded } from 'express';
import router from './route.js';
// import { userLogin, userSignup } from './controller.js';
const app = express();


import multer from 'multer';
import {storage} from './config/multer.js'

// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     const userName = "Mehtab Alam";
//     res.render('index',{userName});
// })

// app.use(express.static('public'))
// app.use(express.static('images'))

// app.use('/public',express.static('public'))
// app.use('/images',express.static('images'))


app.get('/',(req,res)=>{
    res.send("hello world");
})


// app.get('/user/:username' ,(req,res)=>{
//     const username = req.params.username;
//     res.send(`Welcome ${username}`);
// })

// app.get('/search',(req,res)=>{ 
//     const keyword = req.query.keyword;
//     res.send(`Searching for ${keyword}`);
// }) 

// app.get('/user/login',userLogin);
// app.get('/user/signup',userSignup);

app.use('/user',router);
app.use(express.json());

// app.post('/users',(req,res)=>{
//     const {name,email} = req.body;
//     res.json({
//         message :`the user ${name} with email ${email} login successfully`
//     })
// })


// app.put('/users/:id',(req,res)=>{
//     const userId = req.params.id;
//     const {name,email} = req.body;
//     res.json({
//         message:`User ${userId} updated to ${name},${email}`
//     })
// })

// app.delete('/user/:id',(req,res)=>{
//     const userId = req.params.id;
//     res.json({
//         message:`User with ID ${userId} deleted successfully`
//     })
// })

// handle muttiple router

// app.get('/things/:name/:id', (req, res) => {
//     const { id, name } = req.params;
//     const idPattern = /^\d{5}$/; // Regex for exactly 5 digits

//     // Check if id does NOT match the pattern
//     if (!idPattern.test(id)) {
//         return res.status(400).json({ error: 'id must be exactly 5 digits long' });
//     }

//     // If validation passes, return the id and name
//     res.json({
//         id,
//         name
//     });
// });

//types of middleware

// Application Level Middleware
// app.use((req,res,next)=>{
//     console.log('A new request recieved at'+Date.now());
//     next();
// })

// Router Level Middleware


// handling form data

app.use(urlencoded({extended:true}))





// app.use(upload.array())



// recieve any file  and save in the folder


// const upload = multer(
//     {
//         storage,
//         limits:{
//             fileSize:1024000
//         }
//     });

// app.use(upload.single('image'))

// app.get('/form',(req,res)=>{
//     console.log(req.body);
//     console.log(req.file);
//     res.send('Form recieved')
// })







const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT} number`);
})