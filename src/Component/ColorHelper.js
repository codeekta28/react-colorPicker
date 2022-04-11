
// {
//     paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//       { name: "purple", color: "#9C27B0" },
//       { name: "deeppurple", color: "#673AB7" },
//       { name: "indigo", color: "#3F51B5" },
//       { name: "blue", color: "#2196F3" },
//       { name: "lightblue", color: "#03A9F4" },
//       { name: "cyan", color: "#00BCD4" },
//       { name: "teal", color: "#009688" },
//       { name: "green", color: "#4CAF50" },
//       { name: "lightgreen", color: "#8BC34A" },
//       { name: "lime", color: "#CDDC39" },
//       { name: "yellow", color: "#FFEB3B" },
//       { name: "amber", color: "#FFC107" },
//       { name: "orange", color: "#FF9800" },
//       { name: "deeporange", color: "#FF5722" },
//       { name: "brown", color: "#795548" },
//       { name: "grey", color: "#9E9E9E" },
//       { name: "bluegrey", color: "#607D8B" }
//     ]
//   },
import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
// we create levels to define scale of colors

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
//   output of loop in levels is colors{50:[],100:[],200:[].....}
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    // we are reversing the scale to get the color from light ie white to dark and scale is an array of range of color from light to dark[#fff,#jfdkf....]
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        // in id we are replacing any space with -
        id: color.name.toLowerCase().replace(/ /g, "-"),
        // original mode is hex so just scale[i]
        hex: scale[i],
        // converting to rgb with help of .css
        rgb: chroma(scale[i]).css(),
        // converting rgb to rgba 
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
    // we define endcolor to be white
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    //   we darken the original color and converted it to hex
    hexColor,
    // givencolor
    end
    // end is white color
  ];
}

function getScale(hexColor, numberOfColors) {
    // numberOfColors is the total number of range ex here we are defining range in levels whose length is 10
  return chroma
//   in scale you need to give range of color[startcolor,middlecolor,endcolor]
    .scale(getRange(hexColor))
    // mode is the mode of color default is rgb but here it is hex lab stands for lightness ab
    .mode("lab")
    .colors(numberOfColors);

}

export { generatePalette };