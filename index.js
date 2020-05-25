const sharp = require("sharp");

main();

async function main() {
  const SIZE = 400;

  const FILE_NAME = "clover_club.png";
  const SOURCE_PATH = `inputs/${FILE_NAME}`;
  const OUTPUT_PATH = `outputs/${FILE_NAME}`;

  // trim: deletes the pixels that are the same color as the first top left pixel (here, transparent)
  const file = sharp(SOURCE_PATH).trim();

  await file
    .resize(SIZE, SIZE, {
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      fit: "contain",
    })
    .toFile(OUTPUT_PATH);

  console.log("finished !");
}
