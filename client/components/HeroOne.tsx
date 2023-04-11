import Hikes from './Hikes'

export default function ParallaxHero() {
  return (
    <div className="page">
      <section className="hero-image">
        <div className="container">
          <div className="bird-container bird-container--one">
            <div className="bird bird--one"></div>
          </div>

          <div className="bird-container bird-container--two">
            <div className="bird bird--two"></div>
          </div>

          <div className="bird-container bird-container--three">
            <div className="bird bird--three"></div>
          </div>

          <div className="bird-container bird-container--four">
            <div className="bird bird--four"></div>
          </div>
        </div>
        <img src="./images/mountain.jpg" alt="Header" />
      </section>
      <div className="hero-text-container">
        <div className="hero-title">
          <h1>WanderLust</h1>
        </div>
      </div>
      <section className="main">
        <div className="article">
          {/* article wrapper */}
          <h2>Welcome to Hiking 101</h2>
          <div className="columns">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate interdum erat, sit amet finibus ex egestas vitae.
              Vestibulum luctus convallis augue sit amet fermentum. Etiam
              facilisis consequat odio, non hendrerit metus consectetur in. In
              eget porttitor diam. Ut elit nisl, gravida vitae imperdiet id,
              molestie consectetur nisi. Cras at sapien egestas, hendrerit neque
              auctor, tempor enim. In tristique tincidunt pharetra. Suspendisse
              at suscipit urna. In nec dolor id lorem lobortis placerat in eget
              justo.
            </p>

            <p>
              Suspendisse dictum quam blandit nisl fringilla, sed accumsan nulla
              venenatis. Aliquam faucibus aliquet massa in finibus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aenean semper, dolor non euismod ultricies, odio
              nulla feugiat nisl, ac mollis lorem nisl eget erat. Suspendisse
              rutrum odio non orci egestas, non interdum massa bibendum.
              Praesent efficitur velit quis purus luctus feugiat. Nullam
              volutpat pulvinar enim.
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate interdum erat, sit amet finibus ex egestas vitae.
              Vestibulum luctus convallis augue sit amet fermentum. Etiam
              facilisis consequat odio, non hendrerit metus consectetur in. In
              eget porttitor diam. Ut elit nisl, gravida vitae imperdiet id,
              molestie consectetur nisi. Cras at sapien egestas, hendrerit neque
              auctor, tempor enim. In tristique tincidunt pharetra. Suspendisse
              at suscipit urna. In nec dolor id lorem lobortis placerat in eget
              justo.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate interdum erat, sit amet finibus ex egestas vitae.
              Vestibulum luctus convallis augue sit amet fermentum. Etiam
              facilisis consequat odio, non hendrerit metus consectetur in. In
              eget porttitor diam. Ut elit nisl, gravida vitae imperdiet id,
              molestie consectetur nisi. Cras at sapien egestas, hendrerit neque
              auctor, tempor enim. In tristique tincidunt pharetra. Suspendisse
              at suscipit urna. In nec dolor id lorem lobortis placerat in eget
              justo.
            </p>
            <img src="./images/mountain.jpg" alt="hero" />

            <p>
              Suspendisse dictum quam blandit nisl fringilla, sed accumsan nulla
              venenatis. Aliquam faucibus aliquet massa in finibus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aenean semper, dolor non euismod ultricies, odio
              nulla feugiat nisl, ac mollis lorem nisl eget erat. Suspendisse
              rutrum odio non orci egestas, non interdum massa bibendum.
              Praesent efficitur velit quis purus luctus feugiat. Nullam
              volutpat pulvinar enim.
            </p>

            <p>
              Suspendisse dictum quam blandit nisl fringilla, sed accumsan nulla
              venenatis. Aliquam faucibus aliquet massa in finibus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aenean semper, dolor non euismod ultricies, odio
              nulla feugiat nisl, ac mollis lorem nisl eget erat. Suspendisse
              rutrum odio non orci egestas, non interdum massa bibendum.
              Praesent efficitur velit quis purus luctus feugiat. Nullam
              volutpat pulvinar enim.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
