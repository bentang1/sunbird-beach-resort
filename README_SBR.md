# Sunbird Beach Resort — Website Project

A custom-built website for Sunbird Beach Resort (Main Beach, Gold Coast), replacing the current site at sunbirdbeachresort.com.au. Plain HTML/CSS/JavaScript — no build step, no framework, no installs required. Every page opens directly in a browser or from a simple local server (see below).

**Style:** tropical vibrant beach resort — ocean blue + coral/sunset accents, warm sand neutrals, Playfair Display (headings) + Inter (body text), smooth GSAP scroll fade in/out throughout.

---

## 1. Project structure

```
sunbird-beach-resort/
├── index.html          Home — continuous scroll (hero, welcome, highlights,
│                        rooms teaser, gallery teaser, testimonials,
│                        discover teaser, final CTA)
├── rooms.html          Rooms & Suites
├── facilities.html     Resort Facilities
├── gallery.html        Photo Gallery
├── discover.html       Discover Gold Coast
├── location.html       Location & map
├── contact.html        Contact Us (enquiry form)
├── book-online.html    Book Online
├── assets/
│   ├── css/style.css   All design tokens (colors, type, spacing) + every
│   │                    component on the site
│   └── js/main.js      Mobile nav, scroll fade in/out, the nav logo badge,
│                        contact form, gallery filter
└── README_SBR.md       This file
```

Every page shares the same nav bar and footer, styled from the single `style.css` file — so a color or spacing change made there applies everywhere at once.

---

## 2. How to preview it in your own browser

You don't need to install anything to look at the files, but opening them with a tiny local server (rather than double-clicking the file) avoids some browser quirks. Two ways to do it, from a Terminal window inside this folder:

**Option A — quickest, no extra software**
```bash
python3 -m http.server 8080
```
Then open **http://localhost:8080** in any browser. Stop it anytime with `Ctrl+C` in that terminal.

**Option B — auto-refreshing while you edit (VS Code)**
1. Install the **"Live Server"** extension (by Ritwick Dey) in VS Code.
2. Right-click `index.html` in the file list → **"Open with Live Server."**
3. It opens automatically and reloads the page every time a file is saved — handy while reviewing changes.

Either way, this only shows the site to you, on your own computer — it isn't visible to anyone else on the internet until it's uploaded to real hosting.

---

## 3. Before this goes live — things to finish

The site is fully built and functional, but it's intentionally full of clearly-marked placeholders so you can see the real structure before spending time on final content. Search for these before launch:

| Placeholder | Where | What to do |
|---|---|---|
| Dashed **"Insert Image"** boxes | Every page | Replace with real photos. Each box includes a caption describing exactly what shot to use (angle, subject, mood). |
| **"3D Rotating Item"** circle | Home page, desktop | Swap in your real rotating 3D logo/badge (e.g. an exported Spline scene, Three.js embed, or a looping transparent video) once you have it. |
| `[Insert Email Address]` | Footer, every page | Add the resort's real contact email. |
| Guest testimonial quotes | Home page | Sample placeholder quotes — swap in real guest reviews. |
| Book Online button | Nav bar + `book-online.html` | Currently a placeholder link — point it at your real booking engine (e.g. SiteMinder, ResRequest, or your OTA channel manager) once you have that URL. |
| Contact form | `contact.html` | Currently shows a "message sent" confirmation locally but isn't wired to actually deliver anywhere — needs a form backend (e.g. Formspree or Netlify Forms) before it can receive real enquiries. |

Phone number and street address are already filled in with the resort's real current details (carried over from the existing site).

---

## 4. Versions — how this project is tracked

This project uses **Git**, a tool that saves a snapshot of the whole site every time meaningful changes are made, without ever needing duplicate folders like `sunbird-v1`, `sunbird-v2`, etc. Every snapshot is kept forever, and you can jump back to any of them at any time.

### Version history so far

| Version | What it was |
|---|---|
| **v1** | Initial build — all 8 pages, tropical design system, GSAP fade in/out |
| **v2** | Added the scroll-docking "3D Rotating Item" badge that flies from the welcome section into the nav bar |
| **v2.5** | Fixed a positioning bug in that flight animation, made the docked badge bigger, and added this README |

### See what versions exist
```bash
git log --oneline --decorate
```
This lists every saved snapshot, newest first, with `(tag: v1)` etc. next to the ones that were given a named milestone.

### Go back to an older version
This is the safe way — it never deletes anything, it just makes your current files match the old version again (and you can always come forward again afterward):
```bash
git checkout v1 -- .
git commit -m "Reverted to v1"
```
Swap `v1` for `v2`, or for a specific commit hash from `git log`, to go back to a different point.

### Just look at an old version without changing anything
```bash
git checkout v1
```
Look around (e.g. refresh your browser preview), then return to the current version with:
```bash
git checkout main
```

### Save a new checkpoint as you keep editing
```bash
git add -A
git commit -m "describe what changed"
```
And whenever you reach a milestone worth naming (like "real photos added"):
```bash
git tag v3
```
