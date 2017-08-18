const mongoose = require('mongoose');

const BucketListSchema = mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    description : String,
    category : {
        type: String,
        require : true,
        enum : ['High', 'Medium', 'Low']
    }
});