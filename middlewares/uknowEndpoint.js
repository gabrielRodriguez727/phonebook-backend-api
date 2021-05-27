export default function uknowEndpoint(request, response) {
  response.status(404).send({ error: "unknown endpoint" });
}
