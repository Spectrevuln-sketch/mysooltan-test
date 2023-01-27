const fs = require('fs/promises');

exports.ReadFilePath = async (path) => {
  console.log(path)
  try {
    const File = await fs.readFile(`${path}`, { encoding: 'utf8' });
    console.log(File)
  } catch (err) {
    console.log(err)
  }
}

exports.ConvertToJson = async (data) => {
  try {
    const Convert = JSON.parse(data)
    console.log(Convert)
  } catch (err) {
    console.log(err)
  }
}
exports.ConvertToString = async (data) => {
  try {
    const Convert = JSON.stringify(data)
    console.log(Convert)
  } catch (err) {
    console.log(err)
  }
}
exports.MoveFiles = async (oldPath, NewPath) => {
  try {
    if (oldPath === undefined) console.error('Old path is undefined')
    if (NewPath === undefined) console.error('new path is undefined')
    const newPath = await fs.rename(oldPath, NewPath)
    console.log(newPath)
  } catch (err) {
    console.log(err)
  }
}