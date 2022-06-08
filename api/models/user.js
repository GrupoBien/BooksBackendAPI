import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;//how many times how meny times have to encrypt

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},//we set required our inputs, username has to been unique.
    password: {type: String, required: true},
  });

UserSchema.pre('save', (params) => {
    
})
  
  export default mongoose.model('Pet', petSchema);