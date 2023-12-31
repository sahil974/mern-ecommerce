const mongoose = require('mongoose')

const { Schema } = mongoose
{
    // {
    //     "name": "satyam ",
    //     "email": "satyam@gmail.com",
    //     "phone": "929384821",
    //     "street": "56th street",
    //     "city": "varanasi",
    //     "state": "UP",
    //     "pinCode": "221002"
    // }

}
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    addresses: {
        type: [Schema.Types.Mixed]
    },
    orders: {
        type: [Schema.Types.Mixed]
    }

})

const virtual = userSchema.virtual('id')
virtual.get(function () {
    return this._id
})

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

exports.User = mongoose.model('User', userSchema)

