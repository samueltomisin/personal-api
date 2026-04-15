# personal-api

# What the project is?
The project involves building a small backend API with Node.js and Express (Framework of my choice) and deploying it on a Linux VPS with Nginx as a reverse proxy. The API is intended to be minimal, while the primary focus is on deployment which involve running a service persistently, configuring a reverse proxy, and making endpoints publicly accessible.

# How to run it locally
**Prerequisites:** 
Node.js installed on your machine.

**Steps:**
1. Clone the repository
   git clone https://github.com/samueltomisin/personal-api.git
   cd personal-api

2. Install dependencies
```bash
   npm install
```
3. Start the server
```bash
   node server.js
```
4. The API will be running at `http://localhost:8000`


## The three endpoints and their expected responses

### `GET /`
Returns a confirmation that the API is running.

**Response:**
```json
{
  "message": "API is running"
}
```


### `GET /health`
Health check endpoint.

**Response:**
```json
{
  "message": "healthy"
}
```


### `GET /me`
Returns the developer's profile information.

**Response:**
```json
{
  "name": "Samuel Tomisin",
  "email": "samueltomisin31@gmail.com",
  "github": "https://github.com/samueltomisin"
}
```

### Your live deployment URL

**Base URL:** http://3.80.45.2/

| Endpoint | URL |
|---|---|
| `/` | http://3.80.45.2/ |
| `/health` | http://3.80.45.2/health |
| `/me` | http://3.80.45.2/me |

## Deployment Setup

- **Server:** AWS EC2 (Ubuntu)
- **App port:** 8000 (not publicly exposed)
- **Reverse proxy:** Nginx (routes public port 80 traffic to app)
- **Process manager:** pm2 (keeps the service alive across reboots)