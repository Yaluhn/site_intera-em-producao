import '../components/styles/CardGridService.css';
import card1 from "../assets/6.png";
import card2 from "../assets/5.png";
import card3 from "../assets/7.png";


interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const CardGrid = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Quem Somos",
      description: 'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
      image: card1,
      link: "/quem-somos"
    },
    {
      id: 2,
      title: "Serviços",
      description: "Descrição do card 2. Clique em ver mais para detalhes.",
      image: card2,
      link: "/servicos"
    },
    {
      id: 3,
      title: "Por onde Passamos",
      description: "Descrição do card 3. Clique em ver mais para detalhes.",
      image: card3,
      link: "/por-onde-passamos"
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div className="card-service" key={card.id}>
          <div className="card-inner">
            <div className="card-front">
              <div className="card-img">
                <img src={card.image} alt={card.title} />
                <div className="card-title">
                  <h3>{card.title}</h3>
                </div>
              </div>
            </div>

            <div className="card-back">
              <div className="card-description">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
