const fs = require('fs');
const resizeImg = require('resize-img');
 
(async () => {
  const file = 'src/icon.png'
  const dest = 'icon'
  const sizes = [16,32,57,60,72,76,96,114,120,144,152,180,192,194]

  if (!fs.existsSync('icon')) {
    fs.mkdirSync('icon')
  }

  console.log('Generate images in folder: /icon')
  for (i of sizes){
    console.log(`icon-${i}x${i}.png ✅`)

    const image = await resizeImg(fs.readFileSync(file), {
      width: i,
      height: i
    })

    fs.writeFileSync(`${dest}/icon-${i}.png`, image)
  }

  fs.copyFile(file, `${dest}/icon.png`, (err) => {
    if (err) {
      console.log("Oops! An Error Occured:", err);
    }
    else {
      console.log('icon.png ✅');
    }
  });
  
})();