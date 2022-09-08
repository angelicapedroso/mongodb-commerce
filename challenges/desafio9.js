db.produtos.find({
  valoresNutricionais: { 
    $elemMatch: { tipo: "calorias", quantidade: { $lte: 500 } }, 
  } }, 
  { _id: false, nome: true });