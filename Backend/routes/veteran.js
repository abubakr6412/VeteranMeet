const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Veteran Route");
}
);

module.exports=router;