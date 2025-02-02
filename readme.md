# If you want to run this then follow these steps:

## Need to have:

- Docker installed
- Node.js 18+ installed
- Git installed

## Steps to Run

### 1. Clone the Repository

```bash
git clone https://github.com/crackedresearcher/devops-check.git
cd devops-check
```

### 2. Backend Setup (FastAPI)

```bash
cd fastapi-backend

# Create and activate virtual environment
python3 -m venv env
source env/bin/activate  # On Windows: .\env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
uvicorn main:app --reload
```

The backend will run on http://localhost:8000

### 3. Frontend Setup (Next.js)

Open a new terminal and:

```bash
cd nextjs-frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_SERVER_URL=http://localhost:8000" > .env.local

# Run the development server
npm run dev
```

The frontend will run on http://localhost:3000

### 4. Alternative: Using Docker

If you prefer using Docker:

```bash
# Create network
docker network create my-app-network

# Build and run backend
cd fastapi-backend
docker build -t my-fastapi-backend .
docker run -d --name backend --network my-app-network -p 8000:8000 my-fastapi-backend

# Build and run frontend
cd ../nextjs-frontend
docker build -t my-nextjs-frontend .
docker run -d --name frontend --network my-app-network -p 3000:3000 -e NEXT_PUBLIC_SERVER_URL=http://backend:8000 my-nextjs-frontend
```

## Testing the App

1. Open http://localhost:3000 in your browser
2. Test the API endpoints:
   - GET: http://localhost:8000/
   - POST: http://localhost:8000/getDetails/55
   - POST: http://localhost:8000/tellMyName/alex/78

## Troubleshooting

- If the frontend can't connect to the backend, check if NEXT_PUBLIC_SERVER_URL is set correctly
- For Docker issues, check logs using `docker logs frontend` or `docker logs backend`
- Make sure ports 3000 and 8000 are not in use by other applications

## Cleanup

```bash
# For Docker setup
docker stop frontend backend
docker rm frontend backend
docker network rm my-app-network

# For local setup
# Just stop the running servers with Ctrl+C
```
