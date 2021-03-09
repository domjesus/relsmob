const especies = {
  21: "pensão por morte",
  31: "auxílio por incapacidade temporária",
  32: "aposentadoria por incapacidade permanente",
  42: "aposentadoria por tempo de contribuição",
  41: "aposentadoria por idade",
  46: "aposentadoria especial",
  91: "auxílio por incapacidade temporária - acidentário",
  92: "aposentadoria por incapacidade permanente - acidentária",
  95: "auxílio-suplementar",
  94: "auxílio-acidente",
};

function getNameOfEspecie(especieNumero) {
  if (!especies.hasOwnProperty(especieNumero)) return "ESPÉCIE NÃO CADASTRADA!";
  return especieNumero ? especies[especieNumero] : "NÚMERO DE ESPÉCIE/NB NÃO INFORMADO NA ABA 'DADOS BÁSICOS'";
}

export { getNameOfEspecie };
