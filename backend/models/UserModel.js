import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    nim:{
        type: Number,
        default: 0
    },
    kelas:{
        type: String,
        required: true
    },
    semester:{
        type: Number,
        default: 0
    },
    jeniskelamin:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },

});

export default mongoose.model('Users', User);