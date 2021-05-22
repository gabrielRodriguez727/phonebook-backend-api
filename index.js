import "./load-dotenv.js";
import express from "express";
//import morgan from "morgan";
import cors from "cors";
import Person from "./models/person.js";

const app = express();
app.use(express.json());
app.use(express.static("build"));
app.use(cors());
//app.use(morgan("tiny"));

app.use((request, response, next) => {
  console.log(request.method);
  console.log(request.path);
  console.log(request.body);
  next();
});

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/info", (request, response) => {
  Person.find({}).then((persons) => {
    response.send(`
    <h4>Phonebook has info of ${persons.length}</h4>
    <h4>${new Date()}</h4>
    `);
  });
});

app.get("/api/persons", (request, response) => {
  Person.find({})
    .then((persons) => {
      response.json(persons);
    })
    .catch((error) => response.status(500).json(error));
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Person.findById(id)
    .then((person) => {
      response.status(200).json(person);
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Person.findByIdAndRemove(id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response) => {
  const personRequest = request.body;
  let errorMsg = [];
  if (!personRequest.name) {
    errorMsg.push("El nombre no puede ser vacío");
  }
  console.log(personRequest);
  if (typeof personRequest.number === "undefined" || personRequest.number) {
    errorMsg.push("El número no puede ser vacío");
  }
  if (errorMsg.length) {
    return response.status(400).json({
      error: errorMsg.join("/n"),
    });
  }
  const person = new Person({ ...personRequest });

  person.save().then((savedPerson) => {
    response.status(201).json(savedPerson).end();
  });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));