const express=require('express');
const router=express.Router();
const homeRoute=require('../controller/controller');


router.get('/',homeRoute);

module.exports=router;