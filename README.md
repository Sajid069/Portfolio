# Md Sajid Hossain Khan - Portfolio Website

A professional portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) showcasing my skills, experience, and projects.

## Features

- Responsive single-page application
- Modern UI with Tailwind CSS
- Interactive project showcase
- Contact form with MongoDB integration
- Smooth scrolling and animations
- Mobile-first design

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** Git

## Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── assets/        # Images and other static files
│       ├── styles/        # CSS files
│       └── App.js         # Main React component
├── server/                 # Backend Express application
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Express server entry point
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Sajid069/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the development servers:
   ```bash
   # Start backend server (from server directory)
   npm run dev

   # Start frontend server (from client directory)
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Add environment variables (PORT, MONGODB_URI)

### Frontend Deployment (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the build command: `npm run build`
4. Set the output directory: `build`
5. Deploy

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License. 