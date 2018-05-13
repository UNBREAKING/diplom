export default ({ url, method, body }) => 
  fetch(url, {
    method,
    body,
    headers: { "Content-Type": "application/json" }
  })