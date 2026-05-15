
import sharp from 'sharp'
import { existsSync } from 'fs'

const images = [
  ['public/photo/about/camion.png',                        'public/photo/about/camion.webp',                        534,  400],
  ['public/photo/about/salomon.jpeg',                      'public/photo/about/salomon.webp',                       896,  596],
  ['public/photo/realisations/renovation3_apres.jpeg',     'public/photo/realisations/renovation3_apres.webp',      1172, 880],
  ['public/photo/realisations/renovation3_avant.jpeg',     'public/photo/realisations/renovation3_avant.webp',      1172, 1550],
  ['public/photo/realisations/escalier_apres.jpeg',        'public/photo/realisations/escalier_apres.webp',         1172, 1564],
  ['public/photo/realisations/escalier_avant.jpeg',        'public/photo/realisations/escalier_avant.webp',         1172, 1564],
  ['public/photo/realisations/peinture5_avant.jpeg',       'public/photo/realisations/peinture5_avant.webp',        1182, 880],
  ['public/photo/realisations/peinture5_apres.jpeg',       'public/photo/realisations/peinture5_apres.webp',        1174, 880],
  ['public/photo/hero/peinture-chambre.jpeg', 'public/photo/hero/peinture-chambre.webp', 800, 600],
['public/photo/hero/escalier.jpeg',         'public/photo/hero/escalier.webp',          600, 800],
['public/photo/hero/bibliotheque.jpeg',     'public/photo/hero/bibliotheque.webp',       600, 450],
['public/photo/hero/exterieur.jpeg',        'public/photo/hero/exterieur.webp',         1200, 450],
['public/photo/realisations/renovation7_avant.png', 'public/photo/realisations/renovation7_avant.webp', 1172, 1560],
['public/photo/realisations/peinture6_avant.jpeg',  'public/photo/realisations/peinture6_avant.webp',  800, 600],
['public/photo/realisations/peinture6_apres.jpeg',  'public/photo/realisations/peinture6_apres.webp',  800, 600],
['public/photo/realisations/renovation6_avant.jpeg','public/photo/realisations/renovation6_avant.webp', 800, 600],
['public/photo/realisations/renovation6_apres.jpeg','public/photo/realisations/renovation6_apres.webp', 800, 600],
]

for (const [src, dest, w, h] of images) {
  if (!existsSync(src)) {
    console.warn(`⚠️  Fichier introuvable : ${src}`)
    continue
  }
  await sharp(src)
    .resize(w, h, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(dest)
  console.log(`✅  ${src} → ${dest}`)
}