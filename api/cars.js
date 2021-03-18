const db = require("../data/db-config");

async function insert(car) {
  const [id] = await db("cars").insert(car);
  return db("cars").where({ id }).first();
}

async function update(id, changes) {
  await db("cars").update(changes).where({ id });
  return db("cars").where({ id }).first();
}

function remove(id) {
  return db("cars").where({ id }).delete();
}

function getAll() {
  return db("cars");
}

function findById(id) {
  return db("cars").where({ id }).first();
}

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};