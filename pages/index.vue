<template>
  <main class="home">
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
</template>

<style scoped>
.title {
  font-size: clamp(1rem, 10vmin, 6rem);
  font-variation-settings: "wght" 1000, "CRSV" 1;
  line-height: 1;
}
@media (min-width: 600px) {
  .home {
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
    grid-column: 3/4;
    grid-row: 3/6;
  }
  .contact {
    grid-column: 4/5;
    grid-row: 8;
  }
}
</style>
