# Hybrid Athlete System — GitHub Pages Deploy (No-code)

This folder is ready to publish as a **shareable link** using **GitHub Pages**.

## What you have
- `index.html` (the app)
- `service-worker.js` (offline support)
- `manifest.json` + icons (installable on phones)
- `.nojekyll` (prevents GitHub from processing files)

---

## Publish as a link (GitHub Pages)

### 1) Create a new repository
- In GitHub: click **New**
- Repository name: `hybrid-athlete-system` (or any name)
- Set to **Public** (recommended for easy sharing)
- Click **Create repository**

### 2) Upload these files
On the repo page:
- Click **Add file → Upload files**
- Drag **ALL files from this folder** into GitHub (including `.nojekyll`)
- Click **Commit changes**

### 3) Turn on GitHub Pages
- Go to **Settings** (repo)
- Left menu: **Pages**
- Under **Build and deployment**
  - Source: **Deploy from a branch**
  - Branch: **main**
  - Folder: **/ (root)**
- Click **Save**

### 4) Copy your shareable link
GitHub will show a Pages URL like:
`https://YOURUSERNAME.github.io/hybrid-athlete-system/`

---

## Install on a phone (after it’s live)

### iPhone
- Open the link in **Safari**
- Tap **Share**
- Tap **Add to Home Screen**

### Android
- Open the link in **Chrome**
- Tap menu (⋮)
- Tap **Install app** (or **Add to Home screen**)

---

## Troubleshooting
- If you don’t see the Pages link immediately, refresh the Pages settings page.
- If the app shows an older version, refresh once; if still stuck, clear site data for that URL.


## v2 updates
- Primary + optional secondary focus
- Lift logger (sets/reps/weight) with weekly tonnage chart
- Progress charts for check-ins
- Sports psychology prompts (default on, toggle off)


## v3 updates
- Workout option: Easier / Standard / Advanced (adjusts plan automatically)


## v5 updates
- User mode: Athlete / Coach (individual) / Coach (team)
- Development level: Youth / High school / College
- Season phase selector: Off-season / Pre-season / In-season / Post-season / Return-to-play
- Position/role selector for Basketball, Football, Volleyball, Baseball
- Sport performance blocks adapt to role + season + level
- Athlete mode hides roster tab
