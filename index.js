import express from "express";
import { connection } from "./db/index.js";

const router = express.Router();

// GET all to-do items

router.get("/", async (req, res) => {
  const db = await connection();
  const [todos] = await db.query("select * from todos");
  res.json(todos);
});

// POST a new to-do item

router.post("/", async (req, res) => {
  const db = await connection();
  const { title, description, completed = false } = req.body;
  const [result] = await db.query(
    "insert into todos ( title , description,completed ) VALUES(?,?,?)",
    [title, description, completed]
  );
  res.status(201).json({ id: result.insertId, title, description, completed });
});





// GET a specific to-do item by ID


router.get("/:id", async (req, res) => {
  const db = await connection();
  const [row] = await db.query("select * from todos where id=?", [
    req.params.id,
  ]);
  if (row) {
    res.json(row);
  } else {
    res.status(404).json(console.log("To-do item not found"));
  }
});

// PUT to update a to-do item by ID

router.put("/:id", async (req, res) => {
  const { title, description, completed } = req.body;
  const db = await connection();

  db.query("update todos set id=?,title=?,description=? where id = ?", [
    title,
    description,
    completed,
    req.params.id,
  ]);
  res.json({ message: "To-Do item updated successfully" });
});

// DELETE a to-do item by ID

router.delete("/:id", async (req, res) => {
  const db = await connection();
  const [result] = await db.query("delete from todos where id=?", [req.params.id]);

  if (result.affectedRows) {
    res.json({ message: "To-do item deleted successfully" });
  } else {
    res.status(404).json({ error: "To-do item not found" });
  }
});

export default router;
