## ✨ Features

### Completed Features

- **Top Page (My Page)**: Main dashboard with health overview and navigation
- **My Record Page**: Personal health records tracking and visualization
- **Column Page**: Health-related articles and content management
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM

### Authentication

- **Demo Login**: Any email and password combination will authenticate successfully
- **Session Management**: Users must login again on every page reload (demo behavior)
- **Protected Routes**: Automatic redirection to login for unauthenticated users

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- Yarn or npm package manager
- Docker (optional)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd health-app
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   `http://localhost:5173`

### Docker Deployment

For easy testing without environment setup:

1. **Build the Docker image**

   ```bash
   docker build -t health-app .
   ```

2. **Run the container**

   ```bash
   docker run -p 5173:5173 health-app
   ```

3. **Access the application**
   `http://localhost:5173`

## 📁 Project Structure

```
src/
├── modules/
│   ├── authentication/     # Login system and auth logic
│   ├── base/              # Shared components, store, utilities
│   ├── columnPage/        # Health articles and content
│   ├── myPage/            # Main dashboard (Top page)
│   └── myRecord/          # Personal health records
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🛠️ Technology Stack

- **Frontend Framework**: React + TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint + TypeScript ESLint
- **Package Manager**: Yarn

## 📱 Pages Overview

### 1. Login Page

- **Route**: `/` (when not authenticated)
- **Features**: Demo authentication (any email/password combination works)
- **Behavior**: Required on every page reload

### 2. Top Page (My Page)

- **Route**: `/` (when authenticated)

### 3. My Record Page

- **Route**: `/my-record` (when authenticated)

### 4. Column Page

- **Route**: `/column`
- **Note**: Accessible even when not logged in

## 🔐 Authentication Flow

1. User visits any protected route
2. If not authenticated, redirected to login page
3. Login with any email/password combination
4. Access granted to all protected routes
5. Session expires on page reload (demo behavior)
