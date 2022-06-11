const { Schema, model } = require('mongoose');

const CelebrationSchema = Schema({
    name: {
        type: String,
    },
    state: {
        type: Boolean,
        default: true,
    }
});

CelebrationSchema.methods.toJSON = function() {
    const { __v, _id,...celebration } = this.toObject();
    celebration.uid = _id;
    return celebration;
}

module.exports = model('Celebration', CelebrationSchema);