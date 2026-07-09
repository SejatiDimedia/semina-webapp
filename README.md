# Semina Web App

Semina is a comprehensive web application for event management. It consists of a modern React dashboard for administrators and organizers, and a robust Node.js/Express backend API.

## 🚀 Features

- **Event Management**: Create, update, and manage events.
- **Admin Dashboard**: A sleek and responsive React interface for managing the platform.
- **RESTful API**: A powerful backend built with Express and MongoDB.
- **Authentication**: Secure user login and authorization.

## 🛠️ Tech Stack

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Containerized via Docker)

## 📦 Project Structure

The project is structured into distinct services:

- `/client`: The React frontend dashboard (running on port `3000`)
- `/server`: The Node.js/Express backend API (running on port `9010`)

## ⚙️ Local Setup

Follow these steps to run the project locally.

### Prerequisites
- Node.js (v16+)
- Docker Desktop
- npm or yarn

### 1. Database Setup
We use Docker to spin up a dedicated MongoDB instance for this project.
```bash
# From the root directory
docker compose up -d
```
*Note: The database runs on port `27018` to prevent conflicts with local MongoDB instances.*

### 2. Backend Server Setup
```bash
cd server
npm install
npm start
```
The server will run on [http://localhost:9010](http://localhost:9010).

### 3. Frontend Client Setup
```bash
cd client
npm install
npm start
```
The dashboard will run on [http://localhost:3000](http://localhost:3000).

## 📄 License

This project is proprietary and confidential.
