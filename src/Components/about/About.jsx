import Cards from "./Cards"
import about from "./about.module.scss"

const About = () => {
  return (
    <section className="container">
      <div className={about.about}>
        <div className={about.aboutLeft}>
          <h2 className={about.aboutTitle}>What’s different about <br /> Manage?</h2>
          <p className={about.aboutText}>Manage provides all the functionality your <br /> team needs, without the complexity. Our <br /> software is tailor-made for modern digital <br /> product teams. </p>
        </div>
        <div className={about.aboutRight}>
          <Cards number={1} title="Track company-wide progress" text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again." />
          <Cards number={2} title="Track company-wide progress" text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again." />
          <Cards number={3} title="Track company-wide progress" text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again." />
        </div>
      </div>
    </section>
  )
}

export default About
