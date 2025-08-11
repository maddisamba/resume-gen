import base64
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

userData=[
    {"file":"Siva","jobLink":"siva@gmail.com"},
    {"file":"Sai","jobLink":"sai@gmail.com"}
]

@app.get("/")
def getAllData():
    return userData

@app.get("/user/{email}")
def getUser(email:str):
    for user in userData:
        if(user["jobLink"]) == email:
            return user
    return {"name":"User Not Found","email":"User Not Found"}

@app.post("/addUser")
async def addUser(file: UploadFile = File(...), jobLink:str = Form(...)):
    content = await file.read()
    encoded_content = base64.b64encode(content).decode('utf-8')
    #userData.append(user)
    return {
        "jobLink":jobLink,
        "filename":file.filename,
        "Content":encoded_content
    }

