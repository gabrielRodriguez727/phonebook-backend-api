import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength:3
  },
  number: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{8}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  important: Boolean,
});
personSchema.plugin(uniqueValidator);
personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Person = mongoose.model("Person", personSchema);

export default Person;
