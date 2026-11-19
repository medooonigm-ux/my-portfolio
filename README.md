# Ahmed Nigm — Personal Portfolio Website

A modern, responsive, and performance-optimized personal portfolio built for **Ahmed Nigm** using React, Vite, Tailwind CSS, and Lucide Icons.

It communicates Ahmed's unique positioning as a **Third-Year Cybersecurity Student at Zagazig University** developing in both **Front-End Development** and **Cybersecurity Fundamentals**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory, ready to deploy directly to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 📁 Project Structure

```
├── index.html                   # HTML5 shell, SEO tags, fonts, Open Graph
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Custom cybersecurity dark theme tokens
├── vite.config.js               # Vite build configuration
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Main component layout
    ├── index.css                # Tailwind directives & glow effects
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all portfolio content
    ├── components/
    │   ├── BackgroundNetwork.jsx # Subtle interactive canvas particle animation
    │   ├── Navbar.jsx            # Responsive sticky header & mobile drawer
    │   ├── Hero.jsx              # Hero section with student status badge
    │   ├── About.jsx             # About story & academic background
    │   ├── Skills.jsx            # Categorized skills (Front-End & Cybersecurity)
    │   ├── Projects.jsx          # Filterable projects showcase (All, Front-End, Cyber)
    │   ├── ProjectCard.jsx       # Project card with tags & actions
    │   ├── ProjectModal.jsx      # Interactive project details popup
    │   ├── Cybersecurity.jsx     # Team Pentest project & TryHackMe labs
    │   ├── Education.jsx         # Zagazig University degree milestones
    │   ├── Certificates.jsx      # DEPI, Creativa, NTI credentials
    │   ├── CertificateModal.jsx  # Lightbox viewer for certificates
    │   ├── Contact.jsx           # Contact form & verified social links
    │   └── Footer.jsx            # Minimalist developer footer
    └── assets/                  # Placeholders for real assets
        ├── profile/             # Place photo.jpg here
        ├── certificates/        # Place depi.jpg, creativa.jpg, nti.jpg here
        └── projects/            # Place project screenshot images here
```

---

## 🖼️ Adding Your Real Assets

To add your real personal photo and certificates:
1. **Personal Photo**:
   - Save your image as `photo.jpg` in `src/assets/profile/`.
   - In `src/data/portfolioData.js`, import and set:
     ```javascript
     import myPhoto from '../assets/profile/photo.jpg';
     // In personal:
     photo: myPhoto,
     ```
2. **Certificates**:
   - Save your certificate images (e.g. `depi.jpg`, `creativa.jpg`, `nti.jpg`) in `src/assets/certificates/`.
   - In `src/data/portfolioData.js`, assign the imported image to the corresponding certificate item in `certifications`.
3. **GitHub Project Links**:
   - In `src/data/portfolioData.js`, add your repository URL to `githubUrl: "https://github.com/..."` for any project. The "Source Code" button will automatically appear!
