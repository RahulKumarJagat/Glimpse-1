import express from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import ScheduleSchema from "./models/schedule";

// Load environment variables
dotenv.config();

/**
 * Creates and configures the server
 * @param {number} PORT - Server port number
 * @returns {Object} Server components
 */
async function createServer(PORT = process.env.PORT || 5000) {
  try {
    // Initialize express and HTTP server
    const app = express();
    const httpServer = http.createServer(app);

    // Configure Socket.IO with CORS
    const io = new Server(httpServer, {
      path: "/ws",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    // Middleware setup
    app.use(express.json());
    app.use(cors());

    // API routes
    setupRoutes(app);

    // Socket.IO event handlers
    setupSocketHandlers(io);

    // Start the server
    httpServer.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    return { app, io, httpServer };
  } catch (error) {
    console.error("Server initialization failed:", error);
    process.exit(1);
  }
}

/**
 * Sets up Express routes
 * @param {express.Application} app - Express application
 */
function setupRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });
}

/**
 * Sets up Socket.IO event handlers
 * @param {Server} io - Socket.IO server instance
 */
function setupSocketHandlers(io) {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("chat", async (data) => {
      if (data.userId) {
        socket.emit("chat-message", {
          userId: data.userId,
          message: data.message,
          timestamp: new Date().toISOString(),
        });
      }
    });

    socket.on("schedule", async (data) => {
      try {
        const response = await ScheduleSchema.create(data);
        socket.emit("schedule-response", {
          success: true,
          data: response,
        });
      } catch (error) {
        console.error("Error creating schedule:", error);
        socket.emit("schedule-response", {
          success: false,
          error: "Failed to create schedule",
        });
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
}

/**
 * Creates a handler for test messages
 * @param {Socket} socket - Socket.IO socket instance
 * @returns {Function} Event handler function
 */
function handleTestMessage(socket) {
  return (data) => {
    console.log(`Received test message from client ${socket.id}:`, data);

    // Echo the message back to acknowledge receipt
    socket.emit("test-response", {
      received: true,
      message: "Server received your message",
      timestamp: new Date().toISOString(),
    });
  };
}

// Start the server
createServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
