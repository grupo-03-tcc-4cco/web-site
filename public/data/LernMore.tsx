const text = [
  {
    title: "Como vai funcionar a Extração?",
    subtitle: `A extração será por meio do Google Takeout, recurso do próprio Google
    que permite exportar dados de vários serviços, incluindo o Youtube. E
    através dele poderemos extrair os arquivos JSON do histórico
    de visualizações de conta que serão carregadas em nosso banco de dados.`,
  },
  {
    title: "“Mas você vai usar meus dados para realizar o projeto?”",
    subtitle: `Coletaremos apenas dados históricos de exibição do
    Youtube, e serão enviados anonimamente e tratados com base em
    dados. Pode ficar tranquilo!`,
    sx: {
      textAlign: "right",
    },
  },
  {
    title: "“Não entendo nada de computadores, não poderei ajudar.”",
    subtitle: `Não se preocupe! Não é necessário ter conhecimento de informática para
    realizar a extração. Montamos um passo a passo explicando tudo o que
    tem que ser feito.`,
  },
];

const iWantToHelp = {
  buttonHref: "/steps",
};

const back = {
  buttonHref: "/",
};

export default { text, iWantToHelp, back };
