var postSchema = new mongoose.Schema({
    postTitle: String,
    postContent: String,
    userId:mongoose.Schema.Types.ObjectId,
    userName: String,
  
});

var Post = mongoose.model("Post", postSchema);