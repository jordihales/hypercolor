import * as htmlToImage from 'html-to-image'

export function downloadImage(el, filename) {
  htmlToImage.toJpeg(el, { pixelRatio: 1, quality: 1 }).then(data => {
    const link = document.createElement('a')

    link.download = filename
    link.href = data
    link.click()
  })
}
