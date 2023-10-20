import { Elysia } from "elysia";

const headers = {
  'x-powered-by': 'benchmark',
  'content-type': 'application/json',
  connection: 'keep-alive',
  'keep-alive': 'timeout=5'
  // Để connection được duy trì timeout 5s, tránh request liên tục thì đóng mở liên tục
  // Khi set thế này cho request, nó cũng fix cứng header, tránh các trường này tự động thay đổi tùy vào request
}

// http://localhost:3000/benchmark/testing?id=10
const app = new Elysia().get("/benchmark/:name", (c) => {
  c.set.headers = headers;
  return JSON.stringify({
    name: c.params.name,
    id: c.query.id
  })
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
