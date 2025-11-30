import html2canvas from 'html2canvas-pro'
// reference: https://www.npmjs.com/package/html2canvas-pro

export default function Download() {
  // Selecting the grid.
  const capture = document.querySelector('#grid-container') as HTMLElement
  if (!capture) return

  // imported package to turn an element into an image.
  html2canvas(capture).then((canvas) => {
    const dataURL = canvas.toDataURL('image/png')

    // creates a temporary anchor tag
    const link = document.createElement('a')
    link.download = 'pixel-art.png'
    link.href = dataURL
    link.click()
    // removes the link after use.
    document.body.removeChild(link)
  })
}
