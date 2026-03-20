# BarberBook Pro

Public marketing / product shell for **BarberBook Pro** — barber shop management (Bradley Virtual Solutions portfolio).

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

Add that URL to the main **BVS Dashboard** app row for BarberBook Pro if it differs from the default in the repo.

## Local preview

```bash
cd ~/Desktop/BarberBook-Pro
npx --yes serve .
```

Open the URL shown (often http://localhost:3000).
