# Portfolio Website Management Guide

This is your minimal, fast, and recruiter-focused portfolio. The architecture is data-driven, which means you almost never have to touch the UI components to update your content. Everything is maintained in clean TypeScript data files inside `src/data/`.

## 🚀 Running the Project Locally

```bash
# Install dependencies (only needed once or if package.json changes)
npm install

# Start the development server
npm run dev
```

## 🛠 How to Manage Your Content

### 1. Add, Remove, or Edit a Project
Open `src/data/projects.ts`
- **To add a project:** Add a new `{ ... }` object to the `projectsData` array following the existing `Project` structure. Ensure the `id` is unique (e.g., `id: "new-project-name"`).
- **To edit a project:** Modify the properties (like `title`, `description`, `keyInsights`) of the specific project object.
- **To add a GitHub or Live Link:** Set `githubUrl: "https://..."` and/or `liveUrl: "https://..."`.
- **To feature a project:** Set `featured: true` (it will show on the Home page).
- **To remove a project:** Delete the corresponding object from the array.

### 2. Add or Edit Skills
Open `src/data/misc.ts` and locate the `skillsData` array.
- You can add a new skill to an existing category array, e.g., `skills: ["Python", "C++", "Java"]`.
- To add a new skill category, add a new object: `{ name: "NEW CATEGORY", skills: ["Skill 1", "Skill 2"] }`.

### 3. Add a Journey / Build Log Entry
Open `src/data/misc.ts` and locate the `buildLogData` array.
- Add a new entry to the top of the list so it appears chronologically first on the site.
```typescript
{
  id: "log-4",
  date: "2024-01-05",
  title: "Started learning Docker",
  description: "Setting up containers for database local development."
}
```

### 4. Update Your Resume & Contact Links
Open `src/data/profile.ts`
- Update `email`, `github`, and `linkedin` fields.
- For the resume, save your PDF as `resume.pdf` in the `public/` folder, and keep `resumeUrl: "/resume.pdf"`.
- If you want to link an external resume, simply change `resumeUrl` to the Google Drive/Dropbox link.

### 5. Update Profile Information (About Me, Hero text)
Open `src/data/profile.ts`
- Edit `shortIntro` for the Hero page.
- Edit `about.howIWork`, `about.whatImLearning`, etc. to modify the About page paragraphs.

## 🎨 Changing Styles
The site uses Tailwind CSS. The primary colors and fonts are configured in `tailwind.config.js`. Global base styles (like buttons) are in `src/index.css`.

Enjoy maintaining your professional portfolio!
