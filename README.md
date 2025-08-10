

![Hotel Booking Logo](https://raw.githubusercontent.com/hemang-2001/Hotel-Booking/c95599d174c58a6b87bfe7002749329eee38294c/client/src/assets/logo.svg)  <!-- Replace with your logo URL -->

<p align="center">
  <h3 align="center">Smart Stays - Hotel Booking System</h3>

  <p align="center">
    A seamless hotel booking experience for modern travelers.<br/>
    <a href="https://github.com/hemang-2001/smart-stays"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://smartstays-demo-url/">View Demo</a>
    ·
    <a href="https://github.com/hemang-2001/smart-stays/issues">Report Bug</a>
    ·
    <a href="https://github.com/hemang-2001/smart-stays/issues">Request Feature</a>
  </p>
</p>

---

## Table Of Contents

- [About the Project](#about-the-project)
- [Demo](#demo)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

---

## About The Project

Smart Stays is an advanced hotel booking system designed to deliver a *smooth and intuitive* experience for users searching for accommodation. Leveraging modern front-end technologies like **React.js, Redux, and Tailwind CSS**, the project brings together a powerful platform for browsing hotels, managing reservations, and handling user accounts. The dynamic, mobile-optimized layout ensures great usability across devices.

---

## Demo

![Smart Stays Demo](./client/src/assets/SmartStays-gif.gif)

---

## Features

- **User Registration and Login**  
- **Search Hotels:** Filter by location, date, guests  
- **Booking Management:** View, modify, cancel reservations  
- **Responsive Design:** Optimized for desktops/mobile  
- **Secure API Integration:** Uses Clerk & Axios

---

## Built With

This project is built with:

- React.js
- HTML, CSS, JavaScript
- Redux (if applicable)
- Tailwind CSS
- Axios
- Clerk (authentication)
- Vite

---

## Getting Started

Clone this repo and run the development server:

### Prerequisites

You’ll need the basics of JavaScript and React. Install Node.js (v18+), npm, or yarn.

### Installation

git clone https://github.com/hemang-2001/smart-stays.git
cd smart-stays
npm install

text

> Create a `.env` file and add your Clerk publishable key:
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

text

### Running Locally

npm run dev

text

App will be available at: [http://localhost:5173](http://localhost:5173)

---

## Project Structure

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
## Scripts

| Command           | Description                |
|-------------------|----------------------------|
| `npm run dev`     | Start development server   |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview production build   |
| `npm run lint`    | Run ESLint checks          |

---

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/smart-stays`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/smart-stays`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Authors

- **Hemang Bairwa** - Computer Science Engineering Student  
  [GitHub](https://github.com/hemang-2001)


---
