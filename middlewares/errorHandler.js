export default function errorHandler(error, request, response, next) {
  console.error(error);
  console.log(error.name);
  if (error.name === "CastError") {
    response.status(400).json({ message: "ID is malformed" });
  } else if (error.name === "ValidationError") {
    response.status(400).json({ message: error.message });
  } else {
    response.status(500).end();
  }
}
