from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def getMethod():
    return {
        "message": "Hello from fastapi app backend",
        "success": True
    }

@app.post("/getDetails/{pk}")
def getDetails(pk: int):
    return {
        "message": f"You entered this int id: {pk}",
        "success": True
    }

@app.post("/tellMyName/{name}/{age}")
def tellMyName(name: str, age: int):
    return {
        "message": f"your name is: {name} and your age is: {age}",
        "success": True
    }
