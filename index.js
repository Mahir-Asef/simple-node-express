const express =require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello from my second node !!!!');
});
const users=[
    {id:0,name:'xhevior',email:'vior@gmail.com',phone:'017888888888'},
    {id:1,name:'hevior',email:'hevior@gmail.com',phone:'01999999999999'},
    {id:2,name:'evior',email:'evior22@gmail.com',phone:'06666666666666'},
    {id:3,name:'vior',email:'heor11@gmail.com',phone:'0122333333333'},
    {id:4,name:'heor',email:'heor@gmail.com',phone:'0344444444444'},
    {id:5,name:'hev',email:'hev@gmail.com',phone:'0177777777777777'},
]

app.get('/users',(req,res)=>{
    const search=(req.query.search);
    if(search){
        const searchResult = users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//app.METHOD
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser); 
    console.log('hitting the post',req.body);
    // res.send(JASON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    // console.log(req.params.id);
    const userId=req.params.id;
    const user=users[userId];
    res.send(user);
})
app.get('/fruits',(req,res)=>{
    res.send(['mango','banana','apple'])
})
app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Yummy Yummy tok marka Fazli');
})

app.listen(port,()=>{
    console.log('listening to port ', 5000);
})