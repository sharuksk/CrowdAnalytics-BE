const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const crowdDataSchema = new Schema ({
    personin: {
        type: Number
    },
    personout: {
        type: Number
    },
    inside: {
        type: Number
    },
    total: {
        type: Number
    },
    timestamp: {
        type: Date
    }
});


module.exports = CrowdData = mongoose.model('crowdData', crowdDataSchema);
