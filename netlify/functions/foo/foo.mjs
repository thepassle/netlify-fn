export default async (req, context) => {
  console.log(1, req);
  return new Response("Hello, world!");
};

export const config = {
  path: ["/*"]
};