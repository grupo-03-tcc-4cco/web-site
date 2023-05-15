import Link from "next/link";
import image1 from "../image/image1.png";
import image2 from "../image/image2.png";
import image3 from "../image/image3.png";
import image4 from "../image/image4.png";
import image5 from "../image/image5.png";
import image6 from "../image/image6.png";
import image7 from "../image/image7.png";
import image8 from "../image/image8.png";
import image9 from "../image/image9.png";
import image10 from "../image/image10.png";
import image11 from "../image/image11.png";
import image12 from "../image/image12.png";
import image13 from "../image/image13.png";
import image14 from "../image/image14.png";

const steps = [
  {
    title: "Tutorial Extração de Dados",
    firstText: (
      <>
        1. Acesse o site do{" "}
        <Link href="https://takeout.google.com/">Google Takeout</Link>.
      </>
    ),
    secondText: " 2. Logue em sua conta Google.",
    thirdText: "",
    fourthText: "",
    image1: {
      alt: "",
      src: image1,
      width: 304,
      height: 361,
    },
    image2: {
      alt: "",
      src: "",
      width: 0,
      height: 0,
    },
  },
  {
    title: "Tutorial Extração de Dados",
    firstText: "3. Em “Criar uma exportação” selecione “Desmarcar tudo”.",
    secondText: "",
    thirdText: "4. Desça a tela e selecione apenas “Youtube e Youtube Music”.",
    fourthText: "",
    image1: {
      alt: "",
      src: image2,
      width: 399,
      height: 361,
    },
    image2: {
      alt: "",
      src: image3,
      width: 399,
      height: 111,
    },
  },
  {
    title: "Tutorial Extração de Dados",
    firstText: "5. No card do Youtube, clique em “Vários Formatos”.",
    secondText: "",
    thirdText:
      "6. Na aba que se abrirá, em “Histórico”, troque a opção “HTML” para “JSON”.",
    fourthText: "7. Após essa troca, clique em “OK” no final do aba.",
    image1: {
      alt: "",
      src: image4,
      width: 545,
      height: 101,
    },
    image2: {
      alt: "",
      src: image2,
      width: 399,
      height: 111,
    },
  },
  {
    title: "Tutorial Extração de Dados",
    firstText:
      "8. No card do Youtube, clique em “Todos os dados do Youtube inclúidos”.",
    secondText: "",
    thirdText: "9. Na aba que se abrirá, selecione apenas a opção “histórico”.",
    fourthText: "10. Clique em “OK” no final do aba.",
    image1: {
      alt: "",
      src: image10,
      width: 442,
      height: 137,
    },
    image2: {
      alt: "",
      src: image11,
      width: 285,
      height: 322,
    },
  },
  {
    title: "Tutorial Extração de Dados",
    firstText:
      "11. Verifique se no card  está marcado “JSON formato” e “1 tipo selecionado” e clique em “Próxima etapa”.",
    secondText: "",
    thirdText:
      "12. No destino do arquivo, em “Transferir para:” selecione Adicionar ao Google Drive.",
    fourthText: "",
    image1: {
      alt: "",
      src: image8,
      width: 442,
      height: 137,
    },
    image2: {
      alt: "",
      src: image9,
      width: 458,
      height: 190,
    },
  },
  {
    title: "Tutorial Extração de Dados",
    firstText: `13. Em “Frequência” marque “Exportar uma vez. Em “Tipo de arquivo” selecione “.zip” e em “Tamanho do arquivo” selecione “1 GB”. 
      Em seguida, clique em “Criar exportação” no final da aba.`,
    secondText: "",
    thirdText: "",
    fourthText: "",
    image1: {
      alt: "",
      src: image12,
      width: 442,
      height: 372,
    },
    image2: {
      alt: "",
      src: "",
      width: 0,
      height: 0,
    },
  },
  {
    title: "Tutorial Extração de Dados",
    firstText: "14. Clique em “Criar exportação” no final da aba.",
    secondText: "",
    thirdText: "15. Na próxima página, clique em “Abrir no Google Drive”.",
    fourthText: "",
    image1: {
      alt: "",
      src: image13,
      width: 442,
      height: 372,
    },
    image2: {
      alt: "",
      src: image14,
      width: 514,
      height: 166,
    },
  },
];

export default steps;
