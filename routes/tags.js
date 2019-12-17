const express = require('express');
const router = express.Router();
const tags = require('../data/tags.json');
const posts = require('../data/posts')
const app = express();
const port = 3000;

// router.get(('/tags'),(request, response) => {
//     response.send(response.json(tags)).status(200)
// });

router.get(('/tags/:tagId/posts'),(request, response) => {
    let resPosts = []
    let id = parseInt(request.params.tagId)
    
    posts.map(post => {
        console.log(post.tag_ids)
        console.log(id)
        if(post.tag_ids.includes(id)) {
            resPosts.push(post)
        }
    })
    console.log(resPosts)
    response.send(resPosts).status(200)
});

module.exports = router;