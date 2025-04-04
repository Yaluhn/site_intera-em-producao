
import "../App.css";
import Card from "./Card";
import cardProps from '../localVariables/CardsProps';



export const Main = () => {
  return (
    <main className="main">
      {cardProps.map((cardProps) => (
        <Card
        key={cardProps.id}
        id={cardProps.id}
        name={cardProps.name}
        color={cardProps.color}
        background={cardProps.background || 'defaultBackground'}
        head={cardProps.head}
        />))}
    </main>
  )
}

// function cardRepeat(cardProps: { id: number; name: string; color: string; head: string; }) {
//   return (
//   <Card
//   key={cardProps.id}
//   id={cardProps.id}
//   name={cardProps.name}
//   color={cardProps.color}
//   head={cardProps.head}
//   />
//   )
// }
