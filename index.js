import express from "express";
//import morgan from "morgan";
import cors from "cors";
//import { request } from "node:http";

const app = express();
app.use(express.json());
app.use(express.static('build'))
app.use(cors());
//app.use(morgan("tiny"));

app.use((request, response, next) => {
  console.log(request.method);
  console.log(request.path);
  console.log(request.body);
  next()
});

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/info", (request, response) => {
  response.send(`<h4>Phonebook has info of ${persons.length}</h4>
  <h4>${new Date()}</h4>`);
});

app.get("/api/persons", (request, response) => {
  response.status(200).json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const personRequest = request.body;
  let errorMsg = [];
  if (!personRequest.name) {
    errorMsg.push("El nombre no puede ser vacío");
  }
  console.log(personRequest);
  if (
    typeof personRequest.number === "undefined" ||
    isNaN(Number(personRequest.number))
  ) {
    errorMsg.push("El número no puede ser vacío");
  }
  if (errorMsg.length) {
    return response.status(400).json({
      error: errorMsg.join("/n"),
    });
  }
  let isPersonRepeat = persons.find(
    (person) => person.name === personRequest.name
  );
  if (isPersonRepeat) {
    return response.status(400).json({
      error: "El nombre no puede repetirce",
    });
  }

  personRequest.id = Math.round(Math.random() * 1000);

  persons = persons.concat(personRequest);
  response.status(404).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));