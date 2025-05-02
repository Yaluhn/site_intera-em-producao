import { useState, useEffect, useRef } from "react";
import card1 from "../assets/6.png";
import card2 from "../assets/5.png";
import card3 from "../assets/7.png";
import card4 from "../assets/10.png";
import "../components/styles/ImageSlider.css";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const originalCards: Card[] = [
  {
    id: 1,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: card4,
  },
  {
    id: 2,
    title: "Serviço Y",
    description: "Descrição do card 2. Clique em ver mais para detalhes.",
    image: card1,
  },
  {
    id: 3,
    title: "Serviço Z",
    description: "Descrição do card 3. Clique em ver mais para detalhes.",
    image: card2,
  },
  {
    id: 4,
    title: "Serviço W",
    description: "Descrição do card 4. Clique em ver mais para detalhes.",
    image: card3,
  },
];

const cards = [...originalCards, ...originalCards, ...originalCards];

const ImageSlider = () => {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  const originalLength = originalCards.length;
  const totalItems = cards.length;

  useEffect(() => {
    if (itemRef.current) {
      const style = window.getComputedStyle(itemRef.current);
      const gap = parseFloat(style.marginRight) || 15;
      setItemWidth(itemRef.current.offsetWidth + gap);
    }
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setPosition((prev) => {
      if (prev >= totalItems - originalLength - 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setPosition(0);
        }, 0);
        return prev + 1;
      }
      return prev + 1;
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1800);

    return () => clearInterval(interval);
  }, );

  const getTransformValue = () => {
    return `translateX(-${position * itemWidth}px)`;
  };

  const getTransitionStyle = () => {
    return isTransitioning ? "transform 0.5s ease-in-out" : "none";
  };

  return (
    <div className="container-img-slider">
      <div className="gallery-wrapper">
        <div
          className="gallery"
          style={{
            transform: getTransformValue(),
            transition: getTransitionStyle(),
          }}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`item ${index === position + 1 ? "current-item" : ""}`}
              ref={index === 0 ? itemRef : null}
            >
              <img
                src={card.image}
                alt={card.description}
                className="item-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
