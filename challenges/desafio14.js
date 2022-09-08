db.produtos.find(
  { ingredientes: { $elemMatch: { $eq: "picles" } } }, 
  { 
    _id: false, 
    nome: true, 
    ingredientes: true, 
    valoresNutricionais: { $slice: 3 } },
);