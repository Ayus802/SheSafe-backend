const zod = require('zod');
const { UserModel } = require('../models/user-model');

const signupModel = zod.object({
    name : zod.string().trim(),
    gender : zod.string().trim(),
    phone : zod.number(),
    email : zod.string(),
    password : zod.string(),
    aadharNo : zod.number()
})

const loginZod = zod.object({
    email: zod.string().trim(),
    password : zod.string().trim()
})

const signUp =  async (req,res)=>{
    const body = req.body;

    try{

        const { success }  = signupModel.safeParse(body);
    
    if (!success){
        res.json({
            message:"Input Format Wrong"
        })
    }

    const user = await UserModel.find({
        email: body.email
    })

    if(user.length!=0){
        res.send(`user already exist ${user}`);
    }

    await UserModel.create(body)

    res.send('user created');

    }
    catch(err){
        console.error(err)
    }
    
    
}

const logIn = async (req, res)=>{

    const body = req.body;

    try{

        const {success} = loginZod.safeParse(body);

    if(!success){
        res.send('Invalid Input')
    }

    const user = await UserModel.findOne({
        email: body.email
    })
    if(!user){
        res.send("User Don't Exist")
    }

    if (user.password!=body.password){
        res.send('password incorrect')
    }
    res.send(`Login Successful ${user.name}`)

    }catch(err){
        console.error(err)
    }
    
}

module.exports =  {signUp ,logIn}