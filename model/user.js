const connect = require('../config/connection')

let UserSchema = connect.Schema({
    nome:{type:String},
    email:{type:String},
    pass:{type:String},
    id:{type:Number}
})

module.exports = connect.model("User", UserSchema)