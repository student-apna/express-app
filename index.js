import express from 'express';
import session from 'express-session'; 
import cookieParser from 'cookie-parser';
const app = express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.cookie('name','express-app',{maxAge:36000});
    res.send('Hello Express');
})

// app.get('/fetch',(req,res)=>{
//     console.log(req.cookies);
//     res.send('API called');

// })

// app.get('/remove-cookie',(req,res)=>{
//     res.clearCookie('name');
//     res.send('Cookie')
// })


// session

app.use(session({
    secret :'your-secret-key',    // change this in production
    resave:false,                 // Don't save session if unmodified
    saveUninitialized:true,       // Save new session
    cookie:{secure:false}          // set to true if using https
}));


// app.get('/visit',(req,res)=>{
//     if(req.session.page_views){
//         req.session.page_views++;
//         res.send(`You visited this page ${req.session.page_views} times`)
//     }
//     else{
//         req.session.page_views=1;
//         res.send("Welcome to this page for the first time!")
//     }
// })

// app.get('/remove-visit',(req,res)=>{
//     req.session.destroy();
//     res.send("Session Removed");

// })




// Session Based Authentication

// app.use(express.json())
// const users = [];
// app.post('/register',async (req,res)=>{
//     const {email,password} = req.body;
//     users.push({
//         email,password
//     })

//     res.send('User registered')

// })

// app.post('/login',async (req,res)=>{
//     const {email,password} = req.body;
//     const user = users.find(u=> u.email===email);
//     if(!user || password!==user.password){
//         return res.send('Not Authorized');
//     }

//     req.session.user = user;   // create a session
//     res.send('User Logged In');
// })


// app.get('/dashboard' ,(req,res)=>{
//     if(!req.session.user){
//         return res.send('Unauthorized');
//     }

//     res.send(`Welcome,${req.session.user.email}`);
// })










const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on Localhost:${PORT}`);
})

