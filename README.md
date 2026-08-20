# Thomas Alberto — Portfolio Website

Portfolio interaktif untuk Thomas Alberto (Full-Stack Software Engineer), dibangun dengan
Astro + React + Tailwind CSS, mengikuti design system bergaya Vercel (lihat `vercel-DESIGN.md`
di file proyek asli untuk spesifikasi lengkap token warna, tipografi, spacing, dan shadow).

## Tech Stack

- **Astro 7** — fondasi & static site generation
- **React 19** — komponen interaktif (islands, `client:load` / `client:visible`)
- **Tailwind CSS v4** — styling, dikonfigurasi lewat `@theme` di `src/styles/global.css`
- **Geist / Geist Mono** — font asli brand Vercel, self-hosted via `@fontsource`
- **lucide-react** — ikon

## Struktur Proyek

```text
/
├── public/
│   ├── favicon.svg / favicon.ico
│   └── Thomas-Alberto-CV.pdf     # diunduh lewat tombol "Resume" di Hero
├── src/
│   ├── components/
│   │   └── react/
│   │       ├── Navbar.tsx        # sticky nav + menu mobile
│   │       ├── Hero.tsx          # mesh gradient hero band
│   │       ├── About.tsx         # ringkasan + stats
│   │       ├── Skills.tsx        # grid kategori skill
│   │       ├── ExperienceTimeline.tsx
│   │       ├── Projects.tsx      # kartu proyek
│   │       ├── EducationCerts.tsx
│   │       ├── ContactCTA.tsx    # band gelap (polarity-flip)
│   │       ├── Footer.tsx
│   │       └── icons.tsx         # ikon GitHub/LinkedIn custom
│   ├── data/
│   │   └── cv.ts                 # semua konten CV terstruktur (data-driven)
│   ├── layouts/
│   │   └── Layout.astro          # shell HTML + meta SEO
│   ├── pages/
│   │   └── index.astro           # merakit semua section
│   └── styles/
│       └── global.css            # design tokens (warna, tipografi, radius, shadow)
└── astro.config.mjs
```

## Commands

Semua command dijalankan dari root proyek:

| Command           | Aksi                                             |
| :----------------- | :------------------------------------------------ |
| `npm install`       | Install dependencies                              |
| `npm run dev`       | Jalankan dev server di `localhost:4321`            |
| `npm run build`     | Build production ke `./dist/`                      |
| `npm run preview`   | Preview hasil build secara lokal                   |

## Mengedit Konten

Semua data CV (pengalaman, skill, proyek, sertifikasi) ada di satu file:
`src/data/cv.ts`. Ubah data di sana dan seluruh halaman akan otomatis ter-update —
tidak perlu menyentuh komponen React satu per satu.
