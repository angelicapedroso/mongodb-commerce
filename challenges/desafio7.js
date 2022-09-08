db.produtos
  .find({
    $and: [
      { vendidos: { $ne: 50 } },
      { tags: { $exists: false } },
      ],
  }, { _id: false, nome: true, vendidos: true, tags: true })
  .sort({ vendidos: 1 });