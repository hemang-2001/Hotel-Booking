

![Hotel Booking Logo](https://raw.githubusercontent.com/hemang-2001/Hotel-Booking/c95599d174c58a6b87bfe7002749329eee38294c/client/src/assets/logo.svg)  <!-- Replace with your logo URL -->

# Hotel Booking System - Smart Stays - Client

Welcome to the **Hotel Booking System Client**! This frontend application allows users to search for hotels, check availability, and make reservations. It is designed to provide a seamless and user-friendly experience.

## Demo

![Smart Stays Demo](./client/src/assets/SmartStays-gif.gif)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration and Login**: Users can create accounts and log in to manage their bookings.
- **Search Functionality**: Easily search for hotels based on location, date, and number of guests.
- **Booking Management**: Users can view, modify, or cancel their bookings.
- **Responsive Design**: The application is optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: 
  - React.js
  - HTML
  - CSS
  - JavaScript
- **State Management**: Redux (if applicable)
- **API Integration**: Axios for making HTTP requests


## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/smart-stays.git
cd smart-stays
npm install
```

> Create a `.env` file in the root and add your Clerk publishable key:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

### Running Locally

```bash
npm run dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)

---

## 🔍 Project Structure

```
smart-stays/
│
├── client/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── favicon.svg
│   │   └── vite.svg
│   ├── README.md
│   ├── src/
│   │   ├── App.jsx
│   │   ├── assets/ #images and all logos used in project
│   │   ├── components/
│   │   │   ├── ExclusiveOffers.jsx
│   │   │   ├── FeaturedDestination.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── HotelCard.jsx
│   │   │   ├── hotelOwner/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── HotelReg.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsLetter.jsx
│   │   │   ├── StarRating.jsx
│   │   │   ├── Testimonial.jsx
│   │   │   └── Title.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages/
│   │       ├── AllRooms.jsx
│   │       ├── Home.jsx
│   │       ├── hotelOwner/
│   │       │   ├── AddRoom.jsx
│   │       │   ├── Dashboard.jsx
│   │       │   ├── Layout.jsx
│   │       │   └── ListRoom.jsx
│   │       ├── MyBookings.jsx
│   │       └── RoomDetails.jsx
│   ├── vercel.json
│   └── vite.config.js
└── README.md

```

---

## 📦 Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start development server       |
| `npm run build`| Build for production           |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks              |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Clerk](https://clerk.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 👤 Author

**Hemang B.**  
[GitHub](https://github.com/hemang-2001)
