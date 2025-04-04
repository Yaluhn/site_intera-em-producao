import { P } from "./P";



const style = {
  display: 'flex',
  fontSize: '0.9em',
  color: '#4B2617',
  width: '90vw',
  padding: '2.5vw'
};

const h1 = {
  margin: '0 0',
  color: '#4B2617',
  padding: '2.5vw; 1vh',
  marginTop: '0',
  marginBottom: '0',
  textAlign: 'center' as "center",
};


export const QuemSomos = () => {
  return (
    <div className="quemSomos">
      
      <div className="quemSomosText">
        <h1 style={ h1 }>Criatividade para transformar!</h1>
        <div className="quemSomosLine">
            <P style={style} p='Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa", a diversidade de olhares e a construção colaborativa para gerar novos caminhos e apostar em possibilidades inventivas.' />
            <P style={style} p='Temos como nossa missão promover a felicidade a partir das experiências dos produtos e serviços ofertados, de forma direta, eficaz e sobretudo rápida, para uma melhor experiência de ambos os lados.'/>
            <P style={style} p='Amamos criatividade e inovação, e com elas acreditamos que um mundo melhor é possível!'/>        </div>
      </div>
    </div>)
}