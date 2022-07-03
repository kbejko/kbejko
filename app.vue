<template>
  <div class="wrapper">
    <AppHeader />
    <NuxtPage />
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
</style>
