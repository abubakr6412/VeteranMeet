const express=require("express");

const mongoose=require("mongoose");

const bodyParser=require("body-parser");
const app=express();
const port=3100;
const multer = require('multer');
const fs = require('fs');
var cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/Community");
mongoose.connection.once("open", function(){
    console.log("Connection has been made");
}).on("error", function(error){
    console.log("Connection error:", error);
});


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





var postSchema = new mongoose.Schema({
    postTitle: String,
    postContent: String,
    userId:mongoose.Schema.Types.ObjectId,
    userName: String,
  
});

var Post = mongoose.model("Post", postSchema);


var imageSchema = new mongoose.Schema({
    name: String,
    image:{
        data: Buffer,
        contentType: String
    }
});


var Image = mongoose.model("Image", imageSchema);



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});


const upload = multer({storage: storage});

app.post('/upload', upload.single('image'), (req, res, next) => {
    const saveImage = new Image({
        name: req.body.name,
        image: {
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: "image/png"
        }
    });
    saveImage.save()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res
        .status(500)
        .send("Error Occured");
    });
});


app.get('/image', (req, res, next) => {
    Image.find()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res
        .status(500)
        .send("Error Occured");
    });
});




// id,
// ename,
// stars,
// description,
// date,
// adress,
// time,
// id

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








app.post('/signup', (req,res)=>{
    console.log(req.body);
    var veteran = new Veteran(req.body);
    veteran.save();
    res.send("success");

}
);

app.post('/login', (req,res)=>{
    console.log(req.body);
    Veteran.findOne({email: req.body.email, password: req.body.password}, function(err, veteran){
       try{
        if(veteran){
            res.send(veteran);
        }
        else{
            res.send("Login failed");   
        }
       }
         catch(err){
            res.send("Login failed");
        }

       
       
        
    });


}
);


app.post('/post', (req,res)=>{

  

    var post = new Post(req.body);
    post.save();
    res.send("success");


}

);

app.get('/posts/:id', (req,res)=>{
   //find matching posts
    Post.find({userId: req.params.id}, function(err, posts){
        try{
        res.send(posts);
        }
        catch(err){
            res.send("error");
        }
    }
    );

}
);


//get all veterans
app.get('/veterans', (req,res)=>{

    Veteran.find({}, function(err, veterans){
       try{
        res.send(veterans);
       }

         catch(err){    
            res.send("error");
         }
    }
    );
 
 }
    );


app.get('/veterans/:id', (req,res)=>{
    //send other veterans if not already following 
    Veteran.find({_id: {$ne: req.params.id}}, function(err, veterans){
        try{
            //remove followers from list
            for(var i=0; i<veterans.length; i++){
                for(var j=0; j<veterans[i].followers.length; j++){
                    if(veterans[i].followers[j] == req.params.id){
                        veterans[i].followers.splice(j,1);
                    }
                }
            }

        res.send(veterans);
        }
        catch(err){
            res.send("error");
        }
    }   
    );
    

   



    


}
);


//add veteran to follower list
app.post('/follow', (req,res)=>{
    console.log(req.body);
    try{
    //add follower to veteran and if column doesn't exist, create it

    Veteran.findOneAndUpdate({_id: req.body.id}, {$push: {followers: req.body.followerId}}, function(err, veteran){
            if(err){
                console.log(err);
            }
            else{
                console.log(veteran);
            }
        });
        //send follower to veteran
        res.send(veteran.followers);

}
catch(err){
    res.send("error");
}
} );  


//display posts of followed veterans
app.get('/followedPosts/:id', (req,res)=>{
    //find veteran
    console.log(req.params.id);
    Veteran.findOne({_id: req.params.id}, function(err, veteran){
        try{
        //find posts of followed veterans
        Post.find({userId: {$in: veteran.followers}}, function(err, posts){
            try{
            res.send(posts);
            }
            catch(err){
                res.send("error");
            }
        }
        );
    }
    catch(err){
        res.send("error");
    }
    }
    );
 
 }
    );


    //create event
app.post('/createEvent', (req,res)=>{
    
    console.log(req.body);
    var event = new Event(req.body);
    event.save();
    res.send("success");

}

);


//get all events hobby related
app.get('/events', (req,res)=>{
    //find matching posts
     Event.find({}, function(err, events){
         try{
         res.send(events);
         }
         catch(err){
             res.send("error");
         }
     }
     );
 
 }
    );



 


//get all events of veteran checking hobby from params
app.get('/events/:hobby', (req,res)=>{
    //find matching posts
        Event.find({hobby: req.params.hobby}, function(err, events){
            try{
            res.send(events);
            }
            catch (err){
                res.send("error");
            }
        }
)}
        );








 //get userid and eventid from params add event to user events
    app.post('/addEvent/:id/:eid', (req,res)=>{
        console.log(req.params.id);
        console.log(req.params.eid);
        try{
        //add event to veteran and if column doesn't exist, create it
        
        //add stars of followed events to veteran
        Event.findOne({_id: req.params.eid}, function(err, event){
            try{
            Veteran.findOneAndUpdate({_id: req.params.id}, {$inc: {stars: event.stars}}, function(err, veteran){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(veteran);
                }
            });
        }
        catch(err){
            res.send("error");
        }
        }
        );
        


        Veteran.findOneAndUpdate({_id: req.params.id}, {$push: {events: req.params.eid}}, function(err, veteran){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(veteran);
                }
            });
            //send events to veteran
            res.send(veteran.events);

    }
    catch(err){
        res.send("error");
    }
    } );



    
     



    //get all events of veteran
app.get('/myEvents/:id', (req,res)=>{
    //find veteran
    console.log(req.params.id);
    Veteran.findOne({_id: req.params.id}, function(err, veteran){
        try{
        //find posts of followed veterans
        Event.find({_id: {$in: veteran.events}}, function(err, events){
            try{
            res.send(events);
            }
            catch(err){
                res.send("error");
            }
        }
        );
    }
    catch(err){
        res.send("error");
    }
    }
    );
 
 });

 //update veteran profile
    app.post('/updateProfile/:id', (req,res)=>{
        console.log(req.params.id);
        console.log(req.body);
        try{
        //update veteran profile
        Veteran.findOneAndUpdate({_id: req.params.id}, req.body, function(err, veteran){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(veteran);
                }
            });
            //send updated veteran

            Veteran.findOne({_id: req.params.id}, function(err, veteran){
                try{
                res.send(veteran);
                }
                catch(err){
                    res.send("error");
                }
            }
            );

           

    }
    catch(err){
        res.send("error");
    }
    }   );


      
    
    app.post('/organization', function(req, res){
        var organization = new Organization(req.body);
        organization.save(function(err, result){
            if(err){
            }
            res.send("success");    
        });
    });
    
    app.get('/organization', function(req, res){
        Organization.find({}, function(err, result){
            if(err){
            }
            res.send(result);
        });
    });
    
    
    //add eventid to event array in organization
    app.post('/organization/event/:id', function(req, res){
        Organization.findById(req.params.id, function(err, result){
            if(err){

            }
            result.events.push(req.body.event);
            result.save(function(err, result){
                if(err){
                }
                res.send(result);
            });

        });
    });

    
                        
    //add follower to organization
    app.post('/organization/follower/:id', function(req, res){
        Organization.findById(req.params.id, function(err, result){
            if(err){
    
            }
            result.followers.push(req.body.follower);
            result.save(function(err, result){
                if(err){
                }
                res.send(result);
            });
    
        });
    });
    
    //login for organization
    app.post('/ologin', function(req, res){
         console.log(req.body);
        Organization.findOne({email: req.body.email}, function(err, result){
            if(err){
            }
            if(result){
                if(result.password == req.body.password){
                    res.send(result);
                }
                else{
                    res.send("error");
                }
            }
            else{
                res.send("error");
            }
        });

    });




    //invite veteran to event
    app.post('/invite/:id/:eid', (req,res)=>{
       Veteran.findById(req.params.id, function(err, veteran){
              if(err){
    
              }
              veteran.invitations.push(req.params.eid);
              veteran.save(function(err, result){
                if(err){
    
                }
                res.send(result);
              });
         });
    } );




//add invitation id to event array in veteran 
app.post('/veteran/invitation/:uid/:iid', function(req, res){
    Veteran.findById(req.params.uid, function(err, result){
        if(err){

        }
        result.events.push(req.params.iid);
        //remove invitation from invitations array
        result.invitations.pull(req.params.iid);
        result.save(function(err, result){
            if(err){
            }
            res.send(result);
        });

    });
});


//get all invitations of veteran
app.get('/invitations/:id', (req,res)=>{
    //find veteran
    console.log(req.params.id);
    Veteran.findOne({_id: req.params.id}, function(err, veteran){
        try{
        //find posts of followed veterans
        Event.find({_id: {$in: veteran.invitations}}, function(err, events){
            try{
            res.send(events);
            }
            catch(err){
                res.send("error");
            }
        }
        );
    }
    catch(err){
        res.send("error");
    }
    }
    );
 
 });

//delete invitation
app.delete('/invitation/:id/:eid', (req,res)=>{
    Veteran.findById(req.params.id, function(err, veteran){
        if(err){

        }
        veteran.invitations.pull(req.params.eid);
        veteran.save(function(err, result){
            if(err){
            }
            res.send(result);
        });

    });
});


//get veteran based upon event hobby 
app.get('/veteran/:hobby', (req,res)=>{
    Veteran.find({hobby: req.params.hobby}, function(err, veteran){
        try{
        res.send(veteran);
        }
        catch(err){
            res.send("error");
        }
    }
    );
 
 });

//get all events 
app.get('/events', (req,res)=>{
    Event.find({}, function(err, events){
        try{
        res.send(events);
        }
        catch(err){
            res.send("error");
        }
    }
    );
 
 });




app.listen(port,()=>{
    console.log(`Server is up & Running on ${port}`);
})



