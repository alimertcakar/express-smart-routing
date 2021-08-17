module.exports = (router) => {
  router
    .get("/", (req, res) => res.send("GET"))
    .post("/", (req, res) => res.send("POST"));
  return router;
};

export default function (router) {
  router.get("/", (req, res) => {
    res.end("xxx");
  });
}
