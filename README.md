# Habitify-Ai
# Habitify - Habit Tracking Application

## Deployment Guide

### Prerequisites

- Docker and Docker Compose installed
- Supabase account with project credentials

### Environment Setup

1. **Backend Environment**
   - Create a `.env` file in the `backend` directory using the `.env.example` as a template
   - Fill in your MongoDB URI, JWT Secret, and Gemini API Key
   - Add your Supabase URL and Anon Key

2. **Frontend Environment**
   - The frontend uses environment variables from the Docker Compose file
   - For local development, create a `.env` file in the `frontend` directory

### Deployment Steps

#### Production Deployment

1. **Build and start the application**:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d --build
   ```

2. **Access the application**:
   - Frontend: http://localhost:80
   - Backend API: http://localhost:5000

#### Development Deployment

1. **Start the development environment**:
   ```bash
   # In the project root
   docker-compose -f frontend/docker-compose.yml up -d --build
   ```

### Environment Variables

Make sure to set these environment variables before deployment:

```
# Required for both production and development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### SSL Configuration

For production with SSL:
1. Update the `nginx.conf` file with your domain and SSL certificate paths
2. Uncomment the SSL configuration lines

### Troubleshooting

- If the frontend can't connect to the backend, check that the `VITE_API_URL` is correctly set
- For database connection issues, verify your MongoDB URI is correct
- For Supabase issues, ensure your Supabase URL and Anon Key are correct