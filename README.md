# Food Lab — Marketing Website

Bilingual (Hebrew/English) B2B marketing site for an Israeli food factory quality automation company. Hebrew is the default language.

## Tech

- **Astro 4** + Tailwind CSS
- **Firebase Hosting** — static `dist/`
- **GitHub Actions** — deploy on push to `main`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Hebrew is at `/`, English at `/en`.

## Build

```bash
npm run build
```

Output is in `dist/`.

---

## Create local git repo and connect to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Food Lab marketing site"

# Add GitHub remote
git remote add origin https://github.com/alonzanbar/food-lab.git

# Or if using SSH
git remote add origin git@github.com:alonzanbar/food-lab.git

# Push to main
git branch -M main
git push -u origin main
```

If the `food-lab` repo already exists on GitHub and is empty:

```bash
git init
git add .
git commit -m "Initial commit: Food Lab marketing site"
git remote add origin https://github.com/alonzanbar/food-lab.git
git branch -M main
git push -u origin main
```

---

## Deploy to Firebase Hosting

### One-time setup

1. **Create Firebase project** (if not done):
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create project (e.g. "Food Lab") — note the **Project ID** (e.g. `food-lab` or `food-lab-xxxxx`)
   - Update `.firebaserc` with your actual Project ID

2. **Login and select project**:
   ```bash
   npx firebase login
   npx firebase use food-lab-489907
   ```

3. **Get deploy token** (for GitHub Actions):
   ```bash
   npx firebase login:ci
   ```
   Copy the token and add it as a GitHub secret:
   - Repo → Settings → Secrets and variables → Actions
   - New secret: `FIREBASE_TOKEN` = (paste token)

### Manual deploy

```bash
npm run build
npx firebase deploy --only hosting
```

### Deploy via GitHub Actions

After adding `FIREBASE_TOKEN` to GitHub secrets, every push to `main` will:

1. Build the site
2. Deploy to Firebase Hosting

---

## Form (demo request)

The contact form uses [Formspree](https://formspree.io/). To receive submissions:

1. Create a Formspree account and form
2. In `src/components/DemoForm.astro`, replace the `formAction` URL with your Formspree endpoint:
   ```astro
   const formAction = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

---

## Project structure

```
├── src/
│   ├── components/   Layout.astro, DemoForm.astro
│   ├── content/      en.json, he.json
│   ├── layouts/      Base.astro
│   ├── pages/        index, about, contact, privacy (+ en/ for English)
│   └── styles/       global.css
├── public/
├── firebase.json
├── .firebaserc
└── .github/workflows/deploy.yml
```

## URLs

| Page   | Hebrew (default) | English |
|--------|------------------|---------|
| Home   | `/`              | `/en`   |
| About  | `/about`         | `/en/about` |
| Contact| `/contact`       | `/en/contact` |
| Privacy| `/privacy`       | `/en/privacy` |
