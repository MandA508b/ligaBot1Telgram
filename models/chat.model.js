const db= require('../db/db')

const schema = new db.Schema({
    advertisementId: {
        type: db.Schema.Types.ObjectId,
        required: true
    },
    customerId: {
        type: db.Schema.Types.ObjectId,
        required: true
    },
    clientId: {
        type: db.Schema.Types.ObjectId,
        required: true
    },
    room: {
        type: String,
        required: true
    }
})

module.exports = db.model('Chat', schema)