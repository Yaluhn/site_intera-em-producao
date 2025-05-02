import card1 from "../assets/6.png";
import card2 from "../assets/5.png";
import card3 from "../assets/7.png";
import '../components/styles/CardInfo.css';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const InforCard = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Gmail",
      description: 'intera',
      image: card1,
      link: "/quem-somos"
    },
    {
      id: 2,
      title: "Instagram",
      description: "@interacriativa",
      image: card2,
      link: "/servicos"
    },
    {
      id: 3,
      title: "Youtube",
      description: "canal do youtube",
      image: card3,
      link: "/por-onde-passamos"
    },
    {
      id: 4,
      title: "Gmail",
      description: 'intera',
      image: card1,
      link: "/quem-somos"
    },
    {
      id: 5,
      title: "Instagram",
      description: "@interacriativa",
      image: card2,
      link: "/servicos"
    },
    {
      id: 6,
      title: "Instagram",
      description: "@interacriativa",
      image: card2,
      link: "/servicos"
    },
  ];

  return (
    <div className="container-contact">
      <div className="Cards-info">
        {cards.map((card) => (
          <div key={card.id} className="cardBody-info">
            <img src={card.image} className="card-info-img" />
            <div className="card-info-content">
              <h2 className="card-info-title">{card.title}</h2>
              <a className="card-info-description" href={card.link}>{card.description}</a>
            </div>
          </div>
        ))}
      </div>

      <form className="contact-form">
        <h2>Fale Conosco</h2>
        <input type="text" placeholder="Nome e sobrenome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" rows={5} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default InforCard;
