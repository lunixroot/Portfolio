# Personal Portfolio Website

A modern, responsive portfolio website built with React and Node.js featuring a dynamic contact form with email integration.

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Express](https://img.shields.io/badge/Express-5.x-lightgrey)

## ✨ Features

- 🎨 Modern and responsive UI with Tailwind CSS
- 💼 Portfolio projects showcase
- 📧 Functional contact form with email notifications
- 🌙 Clean, professional design
- ⚡ Fast loading and optimized performance
- 🔒 Secure backend with environment variables
- 📱 Mobile-friendly design

## 🛠️ Tech Stack

### Frontend
- **React** 18.x - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Nodemailer** - Email sending functionality
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## 📂 Project Structure

```
my-portfolio/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx          # Main App component
│   │   └── index.tsx        # Entry point
│   ├── .env                 # Environment variables (not in git)
│   ├── .env.example         # Environment variables template
│   └── package.json
│
├── backend/                 # Node.js backend application
│   ├── routes/
│   │   └── emailRoutes.js   # Email API routes
│   ├── server.js            # Express server
│   ├── .env                 # Environment variables (not in git)
│   └── package.json
│
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Environment Variables

#### Frontend Setup

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_BACKEND_URL=http://localhost:3000
```

#### Backend Setup

Create a `.env` file in the `backend` directory:

```env
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**Note:** For Gmail, you need to generate an [App Password](https://support.google.com/accounts/answer/185833):
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use that password in your `.env` file

### Running Locally

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   # Server will run on http://localhost:3000
   ```

2. **Start the Frontend Application** (in a new terminal)
   ```bash
   cd frontend
   npm start
   # App will open at http://localhost:3000 (or another port if 3000 is taken)
   ```

The contact form will now send emails through your backend server!


1. **Update Personal Information**
   - Edit components in `frontend/src/components/`
   - Update social links in `Contact.tsx` and `Footer.tsx`

2. **Add Projects**
   - Add project data in `Projects.tsx`
   - Include project images in `frontend/public/`

3. **Modify Styling**
   - Tailwind classes can be edited directly in components
   - Update `tailwind.config.js` for theme customization

## 📧 Contact Form

The contact form features:
- Form validation
- Loading states
- Success/error messages
- Email notifications sent to your Gmail
- Professional email templates

## 🔐 Security

- ✅ Environment variables for sensitive data
- ✅ `.env` files excluded from Git
- ✅ CORS configured for frontend-backend communication
- ✅ Input validation on backend
- ⚠️ Remember to change Gmail app password after any exposure

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Adarsh Thakur**

- GitHub: [@lunixroot](https://github.com/lunixroot)
- LinkedIn: [adarsht740](https://www.linkedin.com/in/adarsht740/)
- Email: adarsht740@gmail.com

## 🙏 Acknowledgments

- React documentation
- Tailwind CSS
- Node.js community
- All open-source contributors

---

⭐ If you like this project, please give it a star on GitHub!
