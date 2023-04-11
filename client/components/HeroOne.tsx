import Hikes from './Hikes'

export default function ParallaxHero() {
  return (
    <div className="page">
      <section className="hero-image">
        <img src="./images/mountain.jpg" alt="Header" />
      </section>
      <div className="hero-text-container">
        <div className="hero-title">
          <h1>Hiking 101</h1>
        </div>
      </div>
      <section className="main">
        <div className="article">
          {/* article wrapper */}
          <h2>Welcome to Hiking 101</h2>
          <div className="columns">
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.
            </p>

            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.
            </p>
            <hr />
            <p>
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure.
            </p>

            <p>
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it? But
              who has any right to find fault with a man who chooses to enjoy a
              pleasure that has no annoying consequences, or one who avoids a
              pain that produces no resultant pleasure?
            </p>
            <img src="./images/mountain.jpg" alt="hero" />

            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.
            </p>

            <p>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
