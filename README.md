# 📊 Bhart Chauhan - Data Analyst Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://bhartchauhan.me)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com)

> A modern, responsive portfolio website showcasing data analytics projects and skills.

## 🌐 Live Website

**Visit:** [bhartchauhan.me](https://bhartchauhan.me)

## ✨ Features

- 🎨 **Modern n8n-inspired design** with gradient backgrounds
- 📱 **Fully responsive** - works on mobile, tablet, and desktop
- 🚀 **Fast performance** - optimized React build
- 📧 **Working contact form** with Formspree integration
- 🎯 **Project filtering** by tech stack (Python, SQL, Power BI, Excel)
- 🌙 **Smooth animations** and hover effects
- ♿ **Accessible** design with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend:** React 18.x
- **Styling:** Custom CSS with modern gradients
- **Icons:** Boxicons
- **Form:** Formspree API
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 📂 Project Structure

```
my-portfolio/
├── public/                 # Static files
│   ├── index.html         # HTML template with SEO meta tags
│   └── Bhart_Chauhan_Data_Analyst_Resume.pdf
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/              # JSON data
│   │   └── projects.json
│   ├── port.css           # Main styling
│   ├── App.js             # Root component
│   └── index.js           # Entry point
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/BHARTCHAUHAN/-my-portfolio.git

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## 🎨 Customization

### Update Projects

Edit `src/data/projects.json` to add/modify projects:

```json
{
  "icon": "bx bxl-python",
  "title": "Your Project",
  "description": "Project description",
  "tags": ["Python", "SQL"],
  "githubLink": "https://github.com/username/repo",
  "stack": ["Python", "SQL"]
}
```

### Update Personal Info

- **Hero Section:** `src/components/Hero.jsx`
- **About Section:** `src/pages/About.jsx`
- **Skills:** `src/pages/Skills.jsx`
- **Contact Info:** `src/pages/Contact.jsx`

## 📧 Contact Form Setup

Contact form uses [Formspree](https://formspree.io). To use your own:

1. Create account at formspree.io
2. Get your form endpoint
3. Update `src/pages/Contact.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Connect custom domain in Vercel settings
4. Update DNS records in domain provider

### Other Platforms

Works with any static hosting: Netlify, GitHub Pages, AWS S3, etc.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bhart Chauhan**

- Website: [bhartchauhan.me](https://bhartchauhan.me)
- GitHub: [@BHARTCHAUHAN](https://github.com/BHARTCHAUHAN)
- LinkedIn: [Bhart Chauhan](https://www.linkedin.com/in/bhart-chauhan-8a65bb277/)
- Email: chauhanbhart2792@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using React**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
