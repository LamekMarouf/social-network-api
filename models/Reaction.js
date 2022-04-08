const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,a
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;