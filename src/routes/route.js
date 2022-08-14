const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// voting assignment
let person =[
    {
        name:"pk",
        age:10,
        votingStatus:false

    },
    {
        name:"SK",
        age:20,
        votingStatus:false

    },
    {
        name:"AA",
        age:70,
        votingStatus:false
    },
    {
        name:"SC",
        age:5,
        votingStatus:false
    },
    {
        name:"HO",
        age:40,
        votingStatus:false
    }
]

router.post("/checkVotingStatus",function(req,res){
    let votingAge = req.query.age
    let voteAblePerson =[]
    for(let i=0;i<person.length;i++){
        if(person[i].age >=votingAge){
            person[i].votingStatus=true
            voteAblePerson.push(person[i])

        }
    }
     res.send({person:voteAblePerson,status:true})
})















// router.post("/checkVotingStatus",function(req,res){
//     let votingAge = req.query.age
//     let myValue = person.filter(item => item.age > votingAge ? item.votingStatus = true :null)
//     res.send(myValue)
// })



   










router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;