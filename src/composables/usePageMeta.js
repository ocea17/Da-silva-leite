import { onMounted } from 'vue'

export function usePageMeta({ title, description, canonical, ogImage } = {}) {
  onMounted(() => {
    if (title) document.title = title
    setMeta('name',     'description',    description)
    setMeta('property', 'og:title',       title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image',       ogImage)
    setMeta('property', 'og:url',         canonical)
    setMeta('name',     'twitter:card',   'summary_large_image')
    if (canonical) setCanonical(canonical)
  })
}

function setMeta(attr, name, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}