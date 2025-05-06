import React, { useState } from 'react';
import card1 from "../assets/6.png";
import card2 from "../assets/5.png";
import card3 from "../assets/7.png";
import '../components/styles/CardInfo.css';
import axios from 'axios';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const InforCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Dados do formulário
    const formData = { name, email, message };

    try {
      // Enviar dados para o back-end
      const response = await axios.post('http://localhost:5000/send-email', formData);

      if (response.data.success) {
        setStatus('E-mail enviado com sucesso!');
      } else {
        setStatus('Erro ao enviar e-mail.');
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      setStatus('Erro ao enviar e-mail.');
    }
  };

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

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Fale Conosco</h2>
        <input 
          type="text" 
          placeholder="Nome e sobrenome" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Seu e-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Sua mensagem" 
          rows={5} 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit">Enviar</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default InforCard;
