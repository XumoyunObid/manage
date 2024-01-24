import card from "./cards.module.scss"

const Cards = ({number, title, text}) => {
  return (
    <div className={card.card}>
      <span className={card.number}>{number}</span>
      <div>
        <h3 className={card.cardTitle}>{title}</h3>
        <p className={card.cardText}>{text}</p>
      </div>
    </div>
  )
}

export default Cards
