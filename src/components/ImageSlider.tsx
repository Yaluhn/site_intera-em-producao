import { useRef, useState, useEffect } from "react";
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

const cards: Card[] = [
  {
    id: 1,
    title: "Serviço X",
    description: 'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
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

const ImageSlider = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState(0);

  const maxItems = cards.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(prev => (prev + 1) % maxItems);
    }, 1000);

    return () => clearInterval(interval);
  }, [maxItems]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const item = gallery?.children[currentItem] as HTMLElement;

    if (item) {
      item.scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentItem]);

  return (
    <div className="container-img-slider">
      <div className="gallery-wrapper">
        <div className="gallery" ref={galleryRef}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`item ${index === currentItem ? "current-item" : ""}`}
            >
              <img src={card.image} alt={card.description} className="item-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
