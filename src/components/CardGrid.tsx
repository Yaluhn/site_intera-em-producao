import '../components/styles/CardGrid.css';
import card1 from "../assets/6.png";
import card2 from "../assets/5.png";
import card3 from "../assets/7.png";
import card4 from "../assets/8.png";
import card5 from "../assets/9.png";
import card6 from "../assets/10.png";
import { Link } from 'react-router-dom';

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
    {
      id: 4,
      title: "Nossos Projetos",
      description: "Descrição do card 4. Clique em ver mais para detalhes.",
      image: card4,
      link: "/nossos-projetos"
    },
    {
      id: 5,
      title: "Oficinas e Cursos",
      description: "Descrição do card 5. Clique em ver mais para detalhes.",
      image: card5,
      link: "/oficinas-e-cursos"
    },
    {
      id: 6,
      title: "Fale com a Gente",
      description: "Descrição do card 6. Clique em ver mais para detalhes.",
      image: card6,
      link: "/fale-conosco"
    }
  ];

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div className="card" key={card.id}>
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
                <Link to={card.link} className="card-link">
                  Ver mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
