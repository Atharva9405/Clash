import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hey, working...");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
