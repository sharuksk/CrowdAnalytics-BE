const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const crowdBackupSchema = new Schema ({
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
    time: {
        type: Date
    }
});


module.exports = Backup = mongoose.model('crowdBackup', crowdBackupSchema);
