import express from "express"
const router=express.Router();
import person from "../models/person.js";

router.post('/', async (req,res)=>{

    try{
        const data=req.body;
    
        // create a newPerson document using mongoose model
        const newPerson=new person(data);


        // save the newPerson to database
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error!'})
    }

  
    
})


// get method to get the person
router.get('/', async (req,res)=>{
    try{
        const data= await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})


router.get('/:workType', async (req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=="chef" || workType=="waiter" || workType=="manager"){

            const response= await person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);

        }else
        {
            res.status(404).json({error:'Invalid work type!'})
        }
       
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})


// update
router.put('/:id',async (req,res)=>{
    try{
        const personId=req.params.id;
        const updatePersonData=req.body;

        const response= await person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true,
        })

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})


// delete
router.delete('/:id',async (req,res)=>{
    try{
        const personId=req.params.id;
       

        const response= await person.findByIdAndDelete(personId)

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log('data deleted');
        res.status(200).json({message:'Person deleted succesfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})


export default router;
