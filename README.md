# Da Silva Leite — Site vitrine

Stage BUT MMI 3ème année — Océane Leite — 2025/2026  
**peinturesld.oceaneleite.fr**

---

## Stack technique

| Outil | Rôle |
|---|---|
| Vite + Vue 3 | Framework front-end |
| Tailwind CSS | Styles utilitaires |
| @vueuse/motion | Animations au scroll |
| lucide-vue-next | Icônes |
| GitHub Actions | CI/CD → déploiement auto |
| VPS IONOS | Hébergement |

---

## Installation locale

### 1. Cloner le repo

```bash
git clone https://github.com/TON_PSEUDO/dasilva-leite.git
cd dasilva-leite
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
# → http://localhost:5173
```

### 4. Build de production

```bash
npm run build
# → génère le dossier dist/
```

---

## GitHub — mise en place

### Initialiser le repo local

```bash
git init
git add .
git commit -m "feat: initialisation projet Vue + Tailwind"
git branch -M main
git remote add origin https://github.com/TON_PSEUDO/dasilva-leite.git
git push -u origin main
```

---

## Déploiement automatique (GitHub Actions → VPS)

### 1. Ajouter les secrets GitHub

Dans ton repo GitHub → **Settings → Secrets and variables → Actions** → New repository secret :

| Secret | Valeur |
|---|---|
| `VPS_HOST` | IP de ton VPS IONOS |
| `VPS_USER` | Utilisateur SSH (ex: `root`) |
| `VPS_SSH_KEY` | Clé SSH privée (voir ci-dessous) |

### 2. Générer une clé SSH pour le déploiement

```bash
# Sur ta machine locale :
ssh-keygen -t ed25519 -C "deploy-dasilva" -f ~/.ssh/deploy_dasilva

# Copier la clé publique sur le VPS :
ssh-copy-id -i ~/.ssh/deploy_dasilva.pub root@IP_DU_VPS

# Copier le contenu de la clé PRIVÉE dans le secret VPS_SSH_KEY :
cat ~/.ssh/deploy_dasilva
```

### 3. Configuration Nginx sur le VPS

```nginx
server {
    listen 80;
    server_name peinturesld.oceaneleite.fr;

    root /var/www/peinturesld.oceaneleite.fr;
    index index.html;

    # Vue Router — fallback vers index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache assets Vite (hash dans le nom)
    location ~* \.(js|css|png|jpg|webp|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Activer HTTPS avec Certbot :
sudo certbot --nginx -d peinturesld.oceaneleite.fr
```

---

## Structure des composants

```
src/
├── assets/css/main.css    # Tailwind + CSS variables charte graphique
├── components/
│   ├── NavBar.vue          # Navigation fixe + scroll effect
│   ├── HeroSection.vue     # Hero avec animations Motion
│   ├── ServicesSection.vue # 4 cards services + hover
│   ├── AboutSection.vue    # Section à propos
│   ├── ContactSection.vue  # Formulaire de contact
│   └── FooterSection.vue   # Pied de page
├── App.vue                 # Composant racine
└── main.js                 # Entry point + plugins
```

---

## Workflow de développement

```bash
# Créer une nouvelle branche pour chaque feature
git checkout -b feat/galerie-photos

# Commiter régulièrement
git add .
git commit -m "feat: ajout galerie avant/après"

# Pousser → déclenche le déploiement automatique
git push origin main
```
