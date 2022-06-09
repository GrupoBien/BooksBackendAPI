import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},//we set required our inputs, username has to been unique.
    password: {type: String, required: true},
  });

  
export default mongoose.model('User', UserSchema);