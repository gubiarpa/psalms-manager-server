const { Schema, model } = require('mongoose');

const PsalmSchema = Schema({
    name: {
        type: String,
    },
    state: {
        type: Boolean,
        default: true,
    }
});

PsalmSchema.methods.toJSON = function() {
    const { __v, _id,...psalm } = this.toObject();
    psalm.uid = _id;
    return psalm;
}

module.exports = model('Psalm', PsalmSchema);