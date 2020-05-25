const sharp = require("sharp");

const sourcePath = "inputs/clover_club.png";
const outputPath = "outputs/clover_club.png";

main();

function main() {
  sharp(sourcePath)
    .resize(400)
    .extend({
      top: 10,
      bottom: 10,
      right: 100,
      left: 56,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toFile(outputPath)
    .then(() => console.log("toto"));
}
