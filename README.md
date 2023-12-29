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

    fileName: string,  // The output style file name. Default 'ecss.css' ， choosable => 'css' | 'less' | 'scss'

    attrDecollator: string // This is the default separator '--' between prefix and name attribute, with space and -invalid This is the default separator '--' between prefix and name attribute, with space and -invalid.

    prefix: string // The class name matches the prefix. Default  'ecss'

    attrMapExtension: object // Customize the mapping of style property names, for example：{ 'w': 'width', h:'height', fs:'font-size' }

    outputPath：string // The output path of the style file. Default  './' + fileName . Note: When this value is set, the values of fileName are reassigned with the corresponding string from the path. The plug-in creates a file based on the path, and you can import the file into your project
}),

```

## class edit

```html
<div class="ecss--w-100px--h-100px"></div>
```

## The resulting style file is as follows

```css
.ecss--w-100px--h-100px {
  width: 100px !important;
  height: 100px !important;
}
```
