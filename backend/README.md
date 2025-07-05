# TypeScript Backend Chat App

Welcome to the next step in your journey as a developer!  

In the previous module, you learned how to build a chat app using a React frontend and a Python Flask backend.  

Now, you’ll learn how to build a backend using **TypeScript** and **Node.js**—a popular choice for modern web development.

---

## Quickstart

Follow these steps to get the backend and frontend running and test the chat app quickly!

![](/backend/dev/demo.png)

### 1. Install Dependencies

Open a terminal in the `backend/` folder and run:

```sh
npm install
```

Then, in a separate terminal, go to the `frontend/` folder and run:

```sh
npm install
```

---

### 2. Set Up Environment Variables

In the `backend/` folder, copy the sample environment file and fill in your Azure OpenAI details:

```sh
cp .env-sample .env
# Edit .env and add your AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, and AZURE_OPENAI_DEPLOYMENT
```

---
## Start Backend and Frontend in Terminal (split the terminal)

![](/backend/dev/terminal.png)

### 3. Start the Backend

From the `backend/` folder:

```sh
npm run dev
```

This will start the backend server on [http://localhost:5000](http://localhost:5000).

---

### 4. Start the Frontend

From the `frontend/` folder:

```sh
npm run dev
```

This will start the frontend on [http://localhost:3000](http://localhost:3000).

![](/backend/dev/home.png)

---

### 5. Test the App

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Try the different chat options (Echo, Echo 2, and AI Chat) from the home page.
- Type a message and see the responses from the backend!


![](/backend/dev/demo.png)

---

**That’s it! You’re ready to develop and experiment with your TypeScript chat app. 🚀**


---

## 🆚 Flask Backend vs. TypeScript Backend

- **Flask Backend**: Uses Python. You write your backend logic in Python, and it runs on a Flask server.
- **TypeScript Backend**: Uses TypeScript (a typed version of JavaScript) and runs on Node.js. This is common in the industry for building fast, scalable web APIs.

**Why learn both?**  
Understanding both Python and TypeScript backends gives you more tools and flexibility as a developer!

---

## 🛠️ Initial Setup: TypeScript Backend

> These steps are already done for you in this repo, but here’s how you’d set it up from scratch:

```sh
mkdir backend
cd backend
npm init -y
npm install express cors
npm install --save-dev typescript @types/node @types/express ts-node nodemon
```

- `express` is the web server (like Flask, but for Node.js)
- `cors` allows your frontend to talk to your backend
- `typescript` lets you write safer, typed JavaScript
- `nodemon` and `ts-node` help you run and develop your server easily

You’ll also see a `tsconfig.json` (TypeScript config), `package.json` (project config), and a sample `.env-sample` for environment variables.

---

# Activities

## Activity 1: Basic Chat Echo API

**Goal:**  
Create a simple backend API that echoes back what you send it.

- The backend code is in [`app.ts`](app.ts).
- The frontend uses [`ChatEcho.tsx`](../frontend/src/chat/ChatEcho.tsx) and [`home.tsx`](../frontend/src/home.tsx).

**How it works:**
- When you type a message in the chat UI and hit send, the frontend sends your message to `/api/chat-echo/get-message`.
- The backend receives your message and sends back:  
  `Echo: {your message}`

**Why?**  
This helps you understand how the frontend and backend communicate using HTTP requests.

---

## Activity 2: Adding a New API (Import/Export Routers)

**Goal:**  
Learn how to organize your backend by creating and importing/exporting new APIs.

- The new API is in [`echoApi.ts`](echoApi.ts).
- It’s imported and used in [`app.ts`](app.ts).

**How it works:**
- The new endpoint is `/api/chat-echo2/get-message`.
- When you use this in the UI, you’ll see a special response:  
  `Echo: 👋 im echo 2: {your message}`

**What you learn:**  
- How to split your backend into multiple files (routers)
- How to import/export routers and add them to your main app

![](/backend/dev/chatEcho2.png)

---

## Activity 3: Adding Azure OpenAI Chat API

**Goal:**  
Connect your backend to Azure OpenAI to get real AI-powered chat responses!

- The Azure OpenAI logic is in [`chat.ts`](chat.ts).
- It’s imported and used in [`app.ts`](app.ts).

**How it works:**
- The endpoint `/api/get-message` now talks to Azure OpenAI.
- When you send a message, you get a real AI response (not just an echo).

**What you learn:**  
- How to use environment variables for API keys and endpoints
- How to call external APIs from your backend
- How to add advanced features to your chat app

![](/backend/dev/demo.png)

---

# 📝 Summary

- You now know how to build a backend in TypeScript/Node.js.
- You learned how to create simple APIs, organize your code, and connect to powerful AI services.
- You practiced importing/exporting routers and connecting your backend to your frontend.

---

## 🚦 Next Steps

- Try adding your own endpoints!
- Experiment with different responses or connect to other APIs.
- Think about how you could add authentication, a database, or more advanced features.

---

**Happy coding! 🚀**

