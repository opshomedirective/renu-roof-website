// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR EVERY IMAGE ON THE SITE.
// Each key maps to a file in /public/images with the same name.
// When rebuilding in GoHighLevel, upload the file with the same
// name to the Media Library and swap the path for its GHL URL.
//
// All photos are licensed stock (Unsplash License) chosen to look
// like West Texas / the Permian Basin. PRIORITY: replace with real
// ReNu Roof job photos — the treatment being applied, and real
// before/after pairs — as soon as the client has them.
// ─────────────────────────────────────────────────────────────
const p = (file: string) => `/images/${file}`;

export const IMG = {
  // Brand
  logo: p("renu-roof-logo.png"),
  favicon: p("renu-roof-favicon.png"),
  gonanoLogo: p("gonano-logo.png"),
  gonanoLogoWhite: p("gonano-logo-white.png"),

  // West Texas & Permian Basin
  pumpjackSunset: p("pumpjack-sunset-permian.jpg"),
  pumpjackField: p("pumpjack-golden-field.jpg"),
  highwayDesert: p("west-texas-highway-desert.jpg"),
  roadMountains: p("west-texas-road-mountains.jpg"),
  farmlandSunset: p("west-texas-farmland-sunset.jpg"),
  ocotilloSunset: p("desert-sunset-ocotillo.jpg"),
  sunsetSky: p("west-texas-sunset-sky.jpg"),
  mesa: p("texas-mesa-desert.jpg"),
  texasFlag: p("texas-flag-blue-sky.jpg"),

  // Homes
  ranchWide: p("brick-ranch-home-wide.jpg"),
  ranchHip: p("brick-ranch-home-hip-roof.jpg"),
  ranchTan: p("brick-ranch-home-tan.jpg"),
  ranchLandscaped: p("brick-ranch-home-landscaped.jpg"),
  stoneRanch: p("brick-stone-ranch-home.jpg"),
  xeriscape: p("texas-home-xeriscape.jpg"),

  // Roofs & product
  shinglesClose: p("asphalt-shingles-closeup.jpg"),
  shinglePlane: p("shingle-roof-plane-sky.jpg"),
  darkDormer: p("dark-shingle-roof-dormer.jpg"),
  inspectors: p("inspectors-on-roof.jpg"),
  waterBeading: p("water-beading-hydrophobic.jpg"),

  // Weather
  hailGrass: p("hailstones-in-grass.jpg"),
  hailSize: p("hailstones-size.jpg"),
  hailClose: p("hailstones-closeup.jpg"),
  supercellSunset: p("supercell-sunset.jpg"),
  supercellPlains: p("supercell-plains.jpg"),
  lightning: p("lightning-plains.jpg"),
  dustStorm: p("dust-storm-fence.jpg"),
} as const;

export type ImgKey = keyof typeof IMG;
