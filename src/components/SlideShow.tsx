import { useState, useEffect } from 'react';
import '../components/styles/SlideShow.css';
import card1 from "../assets/6.png"
import card2 from "../assets/5.png"
import card3 from "../assets/7.png"
import card4 from "../assets/8.png"
import card5 from "../assets/9.png"
import card6 from "../assets/10.png"
{/*import { Link } from 'react-router-dom';*/}

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Nossa Equipe",
      description: "Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o 'fazer fora da caixa',a diversidade de olhares e a construção colaborativa para gerar novos caminhos e apostar em possibilidades inventivas.Temos como nossa missão promover a felicidade a partir das experiências dos produtos e serviços ofertados, de forma direta, eficaz e sobretudo rápida, para uma melhor experiência de ambos os lados.Amamos criatividade e inovação, e com elas acreditamos que um mundo melhor é possível!A INTERA é uma empresa de Gestão Criativa que propõe compartilhar as experiências de mais de 10 anos de atuação  na execução e planejamento de projetos e políticas nas áreas de Cultura, Turismo e Juventude. Oferecemos oficinas empreendedoras e aceleração de negócios e projetos, atuamos no desenvolvimento de metodologias de ensino, trilhas de inovação e impacto social elaboradas para preparar as pessoas para o futuro do trabalho.",
      image: card1,
      link: "/quem-somos"
    },
    {
      id: 2,
      title: "Alisson",
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

  const changeSlide = (newIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setFade(true);
    
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFade(false);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 450); 
    }, 450); 
  };

  const nextSlide = (): void => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    changeSlide(newIndex);
  };

  const prevSlide = (): void => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    changeSlide(newIndex);
  };

  const goToSlide = (index: number): void => {
    if (index === currentSlide) return;
    changeSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={prevSlide} disabled={isAnimating}>&#10094;</button>
      <div className={`slide ${fade ? 'fade-out' : 'fade-in'}`}>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title}/>
        <div className="slide-content">
          <h3>{slides[currentSlide].title}</h3>
          <p>{slides[currentSlide].description}</p>
          
        </div>
      </div>
      <button className="next" onClick={nextSlide} disabled={isAnimating}>&#10095;</button>
      
      <div className="dots-container">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
