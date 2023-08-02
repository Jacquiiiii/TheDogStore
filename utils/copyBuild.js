const path = require('path')
const fs = require('fs')

const sourcePath = path.resolve("./build")
const desPath = path.resolve("../server/public")

const copy = (srcDir, destDir) => {
  fs.cp(srcDir, destDir, { recursive: true }, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

copy(sourcePath, desPath)