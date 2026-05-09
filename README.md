# BarberBook Pro

Full **BarberBook Pro** shop UI in one `index.html` — **blue & chrome silver** theme. Source of truth is `BradleyVS App Dashboard/BarberBook_Pro.html` (copy here before commit).

Older marketing `styles.css` pages are **not** this app; the live product is this file only.

## First-time login (security)

**There are no default passwords in the repository** (so GitHub secret scanning stays clean). On a fresh browser / first open:

1. You’ll see **Create your owner password** — choose a strong password (min 8 characters). It is stored only in **local storage** on that device.
2. Default owner email in code is `owner@example.com` — you can change it later via Staff/settings workflows, or sign in with that email after setup.

If you **import a backup JSON**, use the credentials from that file.

## GitHub

Create the repository (if you haven’t):

1. [New repository](https://github.com/new) → name: **`BarberBook-Pro`** · Public · **don’t** add README (this folder already has one).
2. From this folder on your Mac:

```bash
cd ~/Desktop/BarberBook-Pro
git init -b main
git add .
git commit -m "Initial BarberBook Pro site"
git remote add origin https://github.com/ronb12/BarberBook-Pro.git
git push -u origin main
```

*(Change `ronb12` if your GitHub username or org is different.)*

## Vercel

1. [New project → Import Git Repository](https://vercel.com/new) → pick **`BarberBook-Pro`**.
2. Framework preset: **Other** (static). Root: `./` · Build: leave empty · Output: `.` (or default).
3. Deploy. Production URL is usually **`https://barberbook-pro.vercel.app`** (or with a team suffix).
4. Set **`DATABASE_URL`** in Vercel to a Neon pooled Postgres connection string so the `/api/state` and `/api/health` serverless routes persist app state in Neon instead of browser-only storage.

Add that URL to the main **BVS Dashboard** app row for BarberBook Pro if it differs from the default in the repo.

## Local preview

```bash
cd ~/Desktop/BarberBook-Pro
npx --yes serve .
```

Open the URL shown (often http://localhost:3000).
