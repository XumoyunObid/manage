import card from "./card.module.scss"

const testimonialCard = ({image, name, text}) => {
  return (
    <div className={card.card}>
      <img src={image}/>
      <p className={card.name}>{name}</p>
      <p className={card.text}>{text}</p>
    </div>
  )
}

export default testimonialCard
