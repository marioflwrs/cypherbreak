import express from "express"
import cors from "cors"
import jams from "./api/jams.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/jams", jams)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app