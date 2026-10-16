<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:240B20,50:8B0032,100:160B18&height=185&section=header&text=Portfolio%202.0&fontSize=42&fontColor=FFFFFF&fontAlignY=38&animation=fadeIn&desc=React%20%7C%20Liquid%20Glass%20%7C%203D%20Motion&descAlignY=61&descSize=15" alt="Portfolio 2.0 animated banner" width="100%" />
</p>

# Nurul Faiyaz — Portfolio Website

Premium personal portfolio with iOS 26 Liquid Glass design, 3D elements (Three.js), and smooth animations (Framer Motion).

## Tech Stack
- **React 18** + **Vite**
- **Framer Motion** — page animations, staggered reveals, micro-interactions
- **Three.js / React Three Fiber** — 3D morphing glass orbs in hero section
- **Tailwind CSS** — utility styling
- **Lucide React** — icons throughout

## Design System
- **Theme**: Pristine white + Maroon (#8B0032) accent
- **Style**: iOS 26 Liquid Glassmorphism — frosted panels, soft shadows, liquid transitions
- **Typography**: Playfair Display (headings) + DM Sans (body) + JetBrains Mono

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done! `netlify.toml` handles SPA routing automatically.

## Sections
1. **Hero / About** — Identity, photos, university, skills, academic marks (hidden in modals)
2. **SQA Engineer** — Testing skills, roles, domains, training
3. **Cloud Security** — Infrastructure security, provider proficiency, domains
4. **Cybersecurity Expert** — Bio, mega skills, services, goals

## Customization Checklist
- [ ] Replace photo placeholders with your actual photos
- [ ] Replace logo placeholders (EWU, EWUCSC, SHKSC, DCC) with actual logos
- [ ] Add certificate images in the accordion for SHKSCDC and SHKSC-ELC
- [ ] Update social links if they change
- [ ] Add/remove skills as needed
