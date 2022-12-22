

var veteranSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    password: String,
    profession: String,
    address: String,
    hobbies: String,
    events:[mongoose.Schema.Types.ObjectId],
    stars:String,
    followers:[mongoose.Schema.Types.ObjectId],
    invitations:[mongoose.Schema.Types.ObjectId],


});


var Veteran = mongoose.model("Veteran", veteranSchema);
