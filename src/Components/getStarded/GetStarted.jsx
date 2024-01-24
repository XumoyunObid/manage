import getstarted from "./GetStarted.module.scss"

const GetStarted = () => {
  return (
    <section className={getstarted.getstarted}>
      <div className={getstarted.group}>
        <img className={getstarted.rec1} src="/geststarted1.png" />
        <h2 className={getstarted.title}>
        Simplify how your team <br /> works today.
        </h2>
        <button className={getstarted.btn}>Get Started</button>
        <img className={getstarted.rec2} src="/getstarted2.png" />
      </div>
    </section>
  )
}

export default GetStarted
