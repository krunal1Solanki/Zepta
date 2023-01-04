const mongoose=require('mongoose')
const eventschema=new mongoose.Schema({
    event:{
        type:String
    },
    triggerTime:{
        type:String
    }
})

module.exports= mongoose.model('Event',eventschema);