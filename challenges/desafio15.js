db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } },
  { upsert: true },
);
db.produtos.updateMany(
  { tags: { $elemMatch: { $eq: "bovino" } } },
  { $set: { avaliacao: 5 } },
  { upsert: true },
);

db.produtos.updateMany(
  { tags: { $elemMatch: { $eq: "ave" } } },
  { $set: { avaliacao: 3 } },
  { upsert: true },
);

db.produtos.find({}, { _id: false, nome: true, avaliacao: true });