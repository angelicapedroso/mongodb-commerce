db.produtos.find(
  { nome: { $nin: ["Big Mac", "McChicken"] } }, 
  { _id: false, nome: true, curtidas: true, vendidos: true },
);