export default ({ url, method, body }) => 
  fetch(url, {
    method,
    body,
    credentials: 'include',
    headers: { "Content-Type": "application/json" }
  })
  .then(data => data.json())