const getItems = async (req, res) => {
  console.log("get items");
  const db = req.app.get("db");
  const { category } = req.query;

  if (category === "books") {
    try {
      let items = await db.items.getBooks().catch(err => console.log(err));
      console.log(items);
      res.status(200).send(items);
    } catch (err) {
      console.log(err);
    }
  }
  if (category !== "books") {
    try {
      console.log("category is: ", category);
    } catch (err) {
      console.log(err);
    }
  }
};
module.exports = {
  getItems
};
