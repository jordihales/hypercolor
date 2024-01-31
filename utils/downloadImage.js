import * as htmlToImage from 'html-to-image'

export function createAndDownloadImage(gradientEl, imageFilename) {
  htmlToImage
    .toJpeg(gradientEl, { pixelRatio: 1, quality: 1 })
    .then((imageData) => {
      const downloadLink = document.createElement('a')

      downloadLink.download = imageFilename
      downloadLink.href = imageData

      downloadLink.click()
    })
}
