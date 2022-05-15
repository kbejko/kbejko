<template>
  <div class="wrapper">
    <AppHeader />
    <main>
      <h1 class="title">
        <span class="name first">Klajdi</span>
        <span class="name last">Bejko</span>
      </h1>

      <img class="photo" src="~/assets/ninja-corn.jpg" alt="unicorn ninja" />

      <article class="content">
        <h2>Hi! I'm Klajdi Bejko.</h2>
        <p>I'm a developer and designer from Tirana, Albania currently living in NYC. I enjoy designing with code. My other passion is never finishing personal projects.</p>
      </article>

      <footer class="contact">
        <p>Get in touch with your inner self or me at kbejko@gmail</p>
      </footer>
    </main>
  </div>
</template>

<style>
:root {
  --black: hsl(213, 5%, 5%);
  --white: hsl(0, 20%, 99%);
  --accent: hsl(345, 85%, 50%);
  --code: hsl(115, 84%, 80%);
  --highlight: hsl(50, 100%, 50%);
  --link: hsl(215, 65%, 50%);
  --gray-1: hsl(215, 10%, 30%);
  --gray-2: hsl(215, 10%, 50%);
  --gray-3: hsl(215, 10%, 80%);

  --ff-body: "Recursive", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;

  --base-size: 16px;

  /* set variation axis values */
  /* Monospace: Sans (natural-width) or Mono (fixed-width) */
  --mono: "MONO" 0;

  /* Casual: Linear to Casual */
  --casl: "CASL" 0;

  /* Weight: Light to ExtraBlack; usually set with `font-weight` */
  --wght: "wght" 500;

  /* Slant: 0 to -15 degrees, auto cursive at -14 */
  --slnt: "slnt" 0;

  /* Cursive: always roman, auto substitution, or always cursive */
  --CRSV: "CRSV" 0.5;
}

html {
  background-color: var(--black);
  color: var(--white);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: var(--ff-body);
  font-variation-settings: var(--mono), var(--casl), var(--wght), var(--slnt),
    var(--CRSV);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited,
a:active {
  text-decoration: none;
  color: var(--link);
}

.wrapper {
  min-width: 100vw;
  min-height: 100vh;
  color: var(--gray-3);
  background: var(--black);
  padding: 3rem 5vw;
}

.photo {
  width: 100%;
  max-width: 30rem;
  margin: 2rem 0;
}
.title {
  font-size: clamp(1rem, 10vmin, 6rem);
  font-variation-settings: "wght" 1000, "CRSV" 1;
  line-height: 1;
}
@media (min-width: 600px) {
  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10rem 10vmax repeat(4, min-content) 3rem 1fr;
    gap: 0 1rem;
  }
  .info {
    grid-column: 1/5;
  }
  .title {
    grid-column: 4/5;
    grid-row: 2;
  }
  .content {
    grid-column: 1/2;
    grid-row: 4;
  }
  .photo {
    grid-column: 3/5;
    grid-row: 3/6;
  }
  .contact {
    grid-column: 4/5;
    grid-row: 7;
  }
}
</style>
