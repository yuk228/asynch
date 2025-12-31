import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Welcome to the Google Keep Integration API"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True)
