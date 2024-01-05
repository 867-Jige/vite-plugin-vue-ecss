# vite-plugin-vue-ecss

## Summarize

#### This is a plugin that automatically generates styles based on the style class name of the specified format.

## Installation

```sh
npm install vite-plugin-vue-ecss
```

## Usage in Vite

```js
import vitePluginVueEcss from "vite-plugin-vue-ecss";

export default {
  plugins: [
    vitePluginVueEcss({
      /* config */
    }),
  ],
};
```

## Configuration

```js
vitePluginVueEcss({
  /**
  * The output style file name. Default 'ecss.css' ， choosable => 'css' | 'less' | 'scss' | 'sass'
  * */
    fileName: string,

  /**
   * This is the default separator '--' between prefix and name attribute,
   * with space and -invalid This is the default separator '--' between prefix and name attribute, with space and -invalid.
   * */
    attrDecollator: string

  /**
   *   The class name matches the prefix. Default  'ecss'
   * */
    prefix: string

  /**
   * Customize the mapping of style property names, for example：{ 'w': 'width', h:'height', fs:'font-size' }
   * */
    attrMapExtension: object

  /**
   * The output path of the style file. Default  './' + fileName .
   * Note: When this value is set, the values of fileName are reassigned with the corresponding string from the path.
   * The plug-in creates a file based on the path, and you can import the file into your project
   * */
    outputPath：string
}),

```

## class edit

```html
<div class="ecss--w-100px--h-100px ecss--mg-20px-10px"></div>
```

## The resulting style file is as follows

```css
.ecss--w-100px--h-100px {
  width: 100px !important;
  height: 100px !important;
}
.ecss--mg-20px-10px {
  margin: 20px 10px !important;
}
```

# Tips：When you need to set a color, the color value in your class name does not need to be written with a # sign, for example:

```html
<div class="ecss--fs-20px--color-blue ecss--bgc-ff0000"></div>
```

## The resulting style file is as follows

```css
.ecss--fs-20px--color-blue {
  font-size: 20px !important;
  color: blue !important;
}
.ecss--bgc-ff0000 {
  background-color: #ff0000 !important;
}
```

# Abbreviated mapping of style attribute names

```js
{
  ac: "accent-color",
  aCt: "align-content",
  ai: "align-items",
  as: "align-self",
  ab: "alignment-baseline",
  aCps: "animation-composition",
  ad: "animation-delay",
  aDir: "animation-direction",
  aDur: "animation-duration",
  afm: "animation-fill-mode",
  aic: "animation-iteration-count",
  an: "animation-name",
  ani: "animation",
  aps: "animation-play-state",
  are: "animation-range-end",
  ars: "animation-range-start",
  at: "animation-timeline",
  atf: "animation-timing-function",
  ar: "app-region",
  a: "appearance",
  bf: "backdrop-filter",
  bv: "backface-visibility",
  bga: "background-attachment",
  bgbm: "background-blend-mode",
  bgClip: "background-clip",
  bg: "background",
  bgc: "background-color",
  bgi: "background-image",
  bgo: "background-origin",
  bgp: "background-position",
  bgr: "background-repeat",
  bgs: "background-size",
  bShift: "baseline-shift",
  bSource: "baseline-source",
  bs: "block-size",
  bbec: "border-block-end-color",
  bbes: "border-block-end-style",
  bbew: "border-block-end-width",
  bbsc: "border-block-start-color",
  bbss: "border-block-start-style",
  bbsw: "border-block-start-width",
  bbc: "border-bottom-color",
  bblr: "border-bottom-left-radius",
  bbrr: "border-bottom-right-radius",
  bbs: "border-bottom-style",
  bbw: "border-bottom-width",
  bCol: "border-collapse",
  bd: "border",
  beer: "border-end-end-radius",
  besr: "border-end-start-radius",
  bio: "border-image-outset",
  bir: "border-image-repeat",
  bis: "border-image-slice",
  biSou: "border-image-source",
  biw: "border-image-width",
  biec: "border-inline-end-color",
  bies: "border-inline-end-style",
  biew: "border-inline-end-width",
  bisc: "border-inline-start-color",
  biss: "border-inline-start-style",
  bisw: "border-inline-start-width",
  blc: "border-left-color",
  bls: "border-left-style",
  blw: "border-left-width",
  brc: "border-right-color",
  brs: "border-right-style",
  brw: "border-right-width",
  bser: "border-start-end-radius",
  bssr: "border-start-start-radius",
  btc: "border-top-color",
  btlr: "border-top-left-radius",
  btrr: "border-top-right-radius",
  bts: "border-top-style",
  btw: "border-top-width",
  b: "bottom",
  bSd: "box-shadow",
  bSz: "box-sizing",
  bAft: "break-after",
  bb: "break-before",
  bInsi: "break-inside",
  bRen: "buffered-rendering",
  cs: "caption-side",
  cc: "caret-color",
  c: "clear",
  clip: "clip",
  cp: "clip-path",
  cr: "clip-rule",
  color: "color",
  ci: "color-interpolation",
  cif: "color-interpolation-filters",
  cRen: "color-rendering",
  cCou: "column-count",
  cg: "column-gap",
  crc: "column-rule-color",
  crs: "column-rule-style",
  crw: "column-rule-width",
  cSpan: "column-span",
  cw: "column-width",
  cibs: "contain-intrinsic-block-size",
  cih: "contain-intrinsic-height",
  ciis: "contain-intrinsic-inline-size",
  cis: "contain-intrinsic-size",
  ciw: "contain-intrinsic-width",
  cn: "container-name",
  ct: "container-type",
  content: "content",
  cursor: "cursor",
  cx: "cx",
  cy: "cy",
  D: "d",
  dir: "direction",
  d: "display",
  db: "dominant-baseline",
  ec: "empty-cells",
  fill: "fill",
  fo: "fill-opacity",
  fr: "fill-rule",
  filter: "filter",
  fb: "flex-basis",
  fd: "flex-direction",
  fg: "flex-grow",
  fShr: "flex-shrink",
  fw: "flex-wrap",
  f: "float",
  fc: "flood-color",
  fOpa: "flood-opacity",
  ff: "font-family",
  fk: "font-kerning",
  fos: "font-optical-sizing",
  fp: "font-palette",
  fs: "font-size",
  fStretch: "font-stretch",
  fStyle: "font-style",
  fssc: "font-synthesis-small-caps",
  fss: "font-synthesis-style",
  fsw: "font-synthesis-weight",
  fv: "font-variant",
  fva: "font-variant-alternates",
  fvc: "font-variant-caps",
  fvea: "font-variant-east-asian",
  fvl: "font-variant-ligatures",
  fvn: "font-variant-numeric",
  fvp: "font-variant-position",
  fWeight: "font-weight",
  gac: "grid-auto-columns",
  gaf: "grid-auto-flow",
  gar: "grid-auto-rows",
  gce: "grid-column-end",
  gcs: "grid-column-start",
  gre: "grid-row-end",
  grs: "grid-row-start",
  gta: "grid-template-areas",
  gtc: "grid-template-columns",
  gtr: "grid-template-rows",
  h: "height",
  hc: "hyphenate-character",
  hlc: "hyphenate-limit-chars",
  hyphens: "hyphens",
  io: "image-orientation",
  ir: "image-rendering",
  il: "initial-letter",
  is: "inline-size",
  ibe: "inset-block-end",
  ibs: "inset-block-start",
  iie: "inset-inline-end",
  iis: "inset-inline-start",
  i: "isolation",
  jc: "justify-content",
  ji: "justify-items",
  js: "justify-self",
  l: "left",
  ls: "letter-spacing",
  lc: "lighting-color",
  lb: "line-break",
  lh: "line-height",
  lsi: "list-style-image",
  lsp: "list-style-position",
  lst: "list-style-type",
  mbe: "margin-block-end",
  mbs: "margin-block-start",
  mb: "margin-bottom",
  mie: "margin-inline-end",
  mis: "margin-inline-start",
  ml: "margin-left",
  mr: "margin-right",
  mt: "margin-top",
  me: "marker-end",
  mg: "margin",
  mm: "marker-mid",
  ms: "marker-start",
  mc: "mask-clip",
  mComposite: "mask-composite",
  mi: "mask-image",
  mMode: "mask-mode",
  mo: "mask-origin",
  mp: "mask-position",
  mRepeat: "mask-repeat",
  mSize: "mask-size",
  mType: "mask-type",
  md: "math-depth",
  mShift: "math-shift",
  mStyle: "math-style",
  mbSize: "max-block-size",
  mh: "max-height",
  miSize: "max-inline-size",
  mw: "max-width",
  mBlockSize: "min-block-size",
  mHeight: "min-height",
  mInlineSize: "min-inline-size",
  mWidth: "min-width",
  mbm: "mix-blend-mode",
  of: "object-fit",
  op: "object-position",
  ovb: "object-view-box",
  oa: "offset-anchor",
  od: "offset-distance",
  oPath: "offset-path",
  oPosition: "offset-position",
  or: "offset-rotate",
  o: "opacity",
  order: "order",
  orphans: "orphans",
  oc: "outline-color",
  oo: "outline-offset",
  os: "outline-style",
  ow: "outline-width",
  oAnchor: "overflow-anchor",
  ocm: "overflow-clip-margin",
  oWrap: "overflow-wrap",
  ox: "overflow-x",
  oy: "overflow-y",
  overlay: "overlay",
  obb: "overscroll-behavior-block",
  obi: "overscroll-behavior-inline",
  pad: "padding",
  pbe: "padding-block-end",
  pbs: "padding-block-start",
  pb: "padding-bottom",
  pie: "padding-inline-end",
  pis: "padding-inline-start",
  pl: "padding-left",
  pr: "padding-right",
  pt: "padding-top",
  po: "paint-order",
  per: "perspective",
  pOrigin: "perspective-origin",
  pe: "pointer-events",
  p: "position",
  R: "r",
  resize: "resize",
  r: "right",
  rot: "rotate",
  rg: "row-gap",
  rp: "ruby-position",
  rx: "rx",
  ry: "ry",
  s: "scale",
  sb: "scroll-behavior",
  smbe: "scroll-margin-block-end",
  smbs: "scroll-margin-block-start",
  smie: "scroll-margin-inline-end",
  smis: "scroll-margin-inline-start",
  spbe: "scroll-padding-block-end",
  spbs: "scroll-padding-block-start",
  spie: "scroll-padding-inline-end",
  spis: "scroll-padding-inline-start",
  sta: "scroll-timeline-axis",
  stn: "scroll-timeline-name",
  sg: "scrollbar-gutter",
  sit: "shape-image-threshold",
  sm: "shape-margin",
  so: "shape-outside",
  sr: "shape-rendering",
  speak: "speak",
  sc: "stop-color",
  sOpacity: "stop-opacity",
  stroke: "stroke",
  sd: "stroke-dasharray",
  sDashoffset: "stroke-dashoffset",
  sl: "stroke-linecap",
  sLinejoin: "stroke-linejoin",
  sMiterlimit: "stroke-miterlimit",
  StrokeOpacity: "stroke-opacity",
  sw: "stroke-width",
  ts: "tab-size",
  tl: "table-layout",
  ta: "text-align",
  tal: "text-align-last",
  tAnchor: "text-anchor",
  td: "text-decoration",
  tdc: "text-decoration-color",
  tdl: "text-decoration-line",
  tdsi: "text-decoration-skip-ink",
  tds: "text-decoration-style",
  tec: "text-emphasis-color",
  tep: "text-emphasis-position",
  tes: "text-emphasis-style",
  ti: "text-indent",
  to: "text-overflow",
  tr: "text-rendering",
  tShadow: "text-shadow",
  tsa: "text-size-adjust",
  tt: "text-transform",
  tup: "text-underline-position",
  tw: "text-wrap",
  tScope: "timeline-scope",
  t: "top",
  tAction: "touch-action",
  transform: "transform",
  tOrigin: "transform-origin",
  tStyle: "transform-style",
  tb: "transition-behavior",
  tDelay: "transition-delay",
  tDuration: "transition-duration",
  tp: "transition-property",
  ttf: "transition-timing-function",
  translate: "translate",
  ub: "unicode-bidi",
  us: "user-select",
  ve: "vector-effect",
  va: "vertical-align",
  vta: "view-timeline-axis",
  vti: "view-timeline-inset",
  vtn: "view-timeline-name",
  vtName: "view-transition-name",
  v: "visibility",
  wsc: "white-space-collapse",
  widows: "widows",
  w: "width",
  wc: "will-change",
  wb: "word-break",
  ws: "word-spacing",
  wm: "writing-mode",
  x: "x",
  y: "y",
  zi: "z-index",
  z: "zoom",
  wbhs: "-webkit-border-horizontal-spacing",
  wbi: "-webkit-border-image",
  wbvs: "-webkit-border-vertical-spacing",
  wba: "-webkit-box-align",
  wbdb: "-webkit-box-decoration-break",
  wbd: "-webkit-box-direction",
  wbf: "-webkit-box-flex",
  wbog: "-webkit-box-ordinal-group",
  wbo: "-webkit-box-orient",
  wbp: "-webkit-box-pack",
  wbr: "-webkit-box-reflect",
  wfs: "-webkit-font-smoothing",
  wlb: "-webkit-line-break",
  wlc: "-webkit-line-clamp",
  wl: "-webkit-locale",
  wmbi: "-webkit-mask-box-image",
  wmbio: "-webkit-mask-box-image-outset",
  wmbir: "-webkit-mask-box-image-repeat",
  wmbis: "-webkit-mask-box-image-slice",
  wmbiSource: "-webkit-mask-box-image-source",
  wmbiw: "-webkit-mask-box-image-width",
  wpca: "-webkit-print-color-adjust",
  wro: "-webkit-rtl-ordering",
  wthc: "-webkit-tap-highlight-color",
  wtc: "-webkit-text-combine",
  wtdie: "-webkit-text-decorations-in-effect",
  wtfc: "-webkit-text-fill-color",
  wto: "-webkit-text-orientation",
  wts: "-webkit-text-security",
  wtsc: "-webkit-text-stroke-color",
  wtsw: "-webkit-text-stroke-width",
  wud: "-webkit-user-drag",
  wum: "-webkit-user-modify",
  wwm: "-webkit-writing-mode",
}
```
