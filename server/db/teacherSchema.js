const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// schema for teacher
const teacherSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
      phone: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    locality:{
        type: String,
        required: true
    },
    teaching_mood:{
        type: String,
        required: true
    },
    degree:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

});

//middleware hasing password
teacherSchema.pre('save', async function (next){
    
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    };
    next();
    
});

const Teacher = mongoose.model('TEACHER',teacherSchema);

module.exports = Teacher;