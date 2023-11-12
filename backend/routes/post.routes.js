const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require("../controllers/post.controller");
const router = express.Router(); 


router.get("/",getPosts);


  router.post("/", setPosts);
// router.post("/", (req,res)=>{
//     res.json({ message: req.body.message});
//     });
    

  

    router.put("/:id", editPost);



    router.delete("/:id",deletePost);

//La route pour créer les likes des poste

router.patch("/like-post/:id",likePost);

//La route pour créer les likes des poste

router.patch("/dislike-post/:id", dislikePost);



module.exports = router; 