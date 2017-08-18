const express = require('express');
const router = express.Router();

// get
router.get('/', (req, res)=> {
    res.send('Get');
});
// post
router.post('/', (req, res, next) =>{
    res.send('Post');
});
// delete : id
router.delete('/:id', (req, res, next) => {
    res.send('Delete')
});

module.exports = router;