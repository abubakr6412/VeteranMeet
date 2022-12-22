var eventSchema = new mongoose.Schema({
  id: String,
     ename: String,
     stars: String,
     description: String,
     date: String,
     adress: String,
     time: String,
     Userid: mongoose.Schema.Types.ObjectId,
 
     
 })
 
 
 
 
 
 var Event = mongoose.model("Event", eventSchema);
 
 