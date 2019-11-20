let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let ListSchema = new Schema({
    /**
     * Title of the List.
     */
    title: {
        type: String,
        required: "Please enter the name of the task"
    },
    /**
     * List created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /**
     * List content.
     */
    description: {
        type: String
    },
    /**
     * Last modified date.
     */
    dueDate: {
        type: Date,

    },
    time: {
      type:String,
    },
    completed: {
       type:Boolean,
       default: false
       }
},
);

// Duplicate the id field as mongoose returns _id field instead of id.
ListSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ListSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('lists', ListSchema);
