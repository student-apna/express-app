import express from 'express';
import { connectDB } from './config/db.js';
import { Person } from './models/person.js';
const app = express();


await connectDB()
app.get('/',(req,res)=>{  
    res.send('Hello Express')
})

app.use(express.json())
// add new person 
app.post('/person',async(req,res)=>{
    
    const {email,name,age} = req.body;
    const newPerson = new Person({
        name,
        age,
        email
    })
    await newPerson.save();
    console.log(newPerson);
    res.send('person Added')
    
})

// updating data in mongoDB

app.put('/person',async(req,res)=>{
    const {id} = req.body;

//     const personData =  await Person.findById(id);
//     personData.age = 25;
//    await personData.save();
const personData = await Person.findByIdAndUpdate(id,{age:28})

    console.log(personData);
    res.send('person updated')
    
    
})

// Deleting data from DB

app.delete('/person/:id',async (req,res)=>{
    const {id} = req.params;
    await Person.findByIdAndDelete(id);
    res.send('user Deleted')

})


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})