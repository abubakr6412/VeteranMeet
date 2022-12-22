var OrganizationSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    address: String,
    type: String,
    followers: [mongoose.Schema.Types.ObjectId],
    events: [mongoose.Schema.Types.ObjectId],
    
});

var Organization = mongoose.model("Organization", OrganizationSchema);
