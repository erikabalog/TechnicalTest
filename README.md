# TechnicalTestHiberus

This document outlines the steps taken to approach and implement the test project.

# Technologies Used

Frontend: Visual Studio Code, React
Backend: Next.js
Database: MongoDB

# Project Setup

I chose Visual Studio Code as my development environment due to familiarity and recommendations from React documentation. Next.js was selected for the backend to align with React's full-stack architecture vision.

# Frontend Setup

Initialized the project folder and installed required packages (Next.js, React).
Created custom files and folders for frontend components.
Utilized React Dev Tools extension for debugging purposes.

# Backend Setup

Established MongoDB connection using a custom function (connectToMongoDB) within dbConfig.ts.
Defined the User Model (userModel.js) to structure user data.
Stored sensitive information such as MongoDB connection string and token secret in a .env file.

# Frontend Implementation

Created custom pages for sign-up, login, logout, and profile.
Utilized TypeScript for typing within the login page and other components.
Added .env to .gitignore to secure environment variables.

# Backend Implementation

Installed required packages (mongoose, bcryptjs, jsonwebtoken) for backend functionalities.
Implemented API routes for user authentication (signup and login).
Created endpoints to handle user registration and login processes.

# Signup Process (Backend)

Established database connection and imported necessary modules (connectToMongoDB, User).
Implemented logic to hash passwords using bcryptjs and save user data to the database.
PROBLEM: I currently have an issue ongoing where I always get a 500 error when signing up, but I can't figure out why. I've invested a few hours into research but since I couldn't find the error, I decided to send the test like this anyway because of the deadline, but I have 2 users successfully registered in the database, just stopped working for some reason. Will keep looking to fix it and will update you when I fix it.

# Signup Process (Frontend)

Integrated axios for making HTTP requests to the backend API.
Designed UI components for user registration, including form inputs and button.
Implemented redirection to the login page upon successful signup.

# Login Process (Frontend)

Used axios, Link, and useRouter from Next.js for login functionality.
Designed UI components similar to signup page with email and password inputs.
Implemented redirection to the profile page upon successful login.

# Login Process (Backend)

Utilized database connection and user model to fetch user data.
Verified user existence and validated password using bcryptjs.
Generated and sent encrypted JWT token for authentication.

# Logout Process (Frontend & Backend)

I decided not to implement a Logout page, but instead when user logs in, they go to User Page, and from there, the user can logout.

# User Page Process (Backend)

Get the logged in User token and set it to immediately expire, then redirect to Home Page.

# User Page Process (Frontend)

Used axios, Link, and useRouter from Next.js for logout functionality.
Designed a simple button as UI components to logout user.
Implemented redirection to the home page upon successful logout.

PROBLEM: Profile page is not protected from unathenticated user because I didn't have enough time to implement it. Will try to add it later and update you.

TOTAL TIME TO IMPLEMENT (APROX.): 16-18h
