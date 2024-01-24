import showcase from "./showcase.module.scss";

const Showcase = () => {
  return (
    <section className={showcase.showcase}>
      <div className={showcase.showcaseLeft}>
        <h1 className={showcase.title}>
          Bring everyone <br />
          together to build <br />
          better products.
        </h1>
        <p className={showcase.text}>Manage makes it simple for software teams <br /> to plan day-to-day tasks while keeping the <br /> larger team goals in view.</p>
        <button className={showcase.btn}>Get Started</button>
      </div>
      <div className={showcase.showcaseRight}>
        <div className={showcase.showcaseCharts}>
          <img src="/Showcase/showcaseBar.png" />
          <img src="/Showcase/showcasePie.png" />
        </div>
        <div className={showcase.showcasePercentages}>
        <img src="/Showcase/showcase89.png" className={showcase.showcasePerc1} />
        <img src="/Showcase/showcase1.png" className="showcasePerc2" />
        <img src="/Showcase/showcase88.png"  className="showcasePerc3"/>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
