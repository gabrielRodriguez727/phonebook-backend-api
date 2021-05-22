import mongoose from "mongoose";

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}
console.log(process.argv);
const password = process.argv[2];

const url = `mongodb+srv://admin:${password}@clusterphonebook.jxuru.mongodb.net/phonebook?retryWrites=true`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
  important: Boolean,
});

const Contact = mongoose.model("Contact", contactSchema);

if (process.argv.length == 3) {
  Contact.find({}).then((contacts) => {
    contacts.forEach((contact) =>
      console.log(` ${contact.name} ${contact.number}`)
    );

    mongoose.connection.close();
  });
} else {
  const contact = new Contact({
    name: process.argv[3],
    number: process.argv[4],
  });

  contact.save().then((result) => {
    console.log(`added ${process.argv[3]} ${process.argv[4]}`);
    mongoose.connection.close();
  });
}
