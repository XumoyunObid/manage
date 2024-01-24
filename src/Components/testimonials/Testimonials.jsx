import testimonials from "./testimonials.module.scss"

import anisha from "../../assets/anisha.png"
import ali from "../../assets/ali.png"
import richard from "../../assets/richard.png"
import TestimonialCard from "./testimonialCard"
const Testimonials = () => {
  return (
    <section className="container">
      <div className={testimonials.testimonials}>
      <h2 className={testimonials.title}>What they’ve said</h2>
      <div className={testimonials.cardSection}>
        <TestimonialCard image={anisha} name="Anisha Li" text="  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" />

        <TestimonialCard image={ali} name="Ali Bravo" text=" “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”" />

        <TestimonialCard image={richard} name="Richard Watts" text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”" />
      </div>
      <button className={testimonials.btn}>Get Started</button>
      </div>
    </section>
  )
}

export default Testimonials
