const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))


app.get("/editProfile", function(req, res){
    res.sendFile(__dirname + "/edit-account-profile.html")
}) 


app.post("/editProfile", function(req, res){
    const profilePic = req.body.profilePicture
    const profileNam = req.body.profileName
    res.send("profile has changed to " + `<img src="${profilePic}" >` + " and profileName has been updated to " + profileNam)
})







app.listen(3000, function(){
    console.log("server at 3000")
})