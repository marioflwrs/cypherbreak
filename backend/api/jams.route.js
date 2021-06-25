import express from "express";
import JamsCtrl from "./jams.controller.js";

const router = express.Router(JamsCtrl.apiGetJams)

router.route("/").get(JamsCtrl.apiGetJams)

export default router