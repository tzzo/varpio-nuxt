function setMetaImg(img, width, height) {
  return [
    {
      hid: 'og:image',
      property: 'og:image',
      content: img,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: img,
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: width,
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: height,
    },
  ]
}

function setMetaTitle(title) {
  return [
    {
      hid: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: title,
    },
  ]
}

function setMetaDescription(desc) {
  return [
    {
      hid: 'description',
      property: 'description',
      content: desc,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: desc,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: desc,
    },
  ]
}

export { setMetaImg, setMetaTitle, setMetaDescription }