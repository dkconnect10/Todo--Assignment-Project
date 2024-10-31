import express from "express";
import { connection } from "./db/index.js";

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Retrieve a list of to-do items
 *     responses:
 *       200:
 *         description: A list of to-do items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   completed:
 *                     type: boolean
 */
router.get("/", async (req, res) => {
  const db = await connection();
  const [todos] = await db.query("SELECT * FROM todos");
  res.json(todos);
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new to-do item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: To-do item created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 */
router.post("/", async (req, res) => {
  const db = await connection();
  const { title, description, completed = false } = req.body;
  const [result] = await db.query(
    "INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)",
    [title, description, completed]
  );
  res.status(201).json({ id: result.insertId, title, description, completed });
});

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Retrieve a specific to-do item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the to-do item to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single to-do item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *       404:
 *         description: To-do item not found
 */
router.get("/:id", async (req, res) => {
  const db = await connection();
  const [row] = await db.query("SELECT * FROM todos WHERE id=?", [
    req.params.id,
  ]);
  if (row) {
    res.json(row);
  } else {
    res.status(404).json({ error: "To-do item not found" });
  }
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a specific to-do item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the to-do item to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: To-do item updated successfully
 *       404:
 *         description: To-do item not found
 */
router.put("/:id", async (req, res) => {
  const { title, description, completed } = req.body;
  const db = await connection();

  const [result] = await db.query("UPDATE todos SET title=?, description=?, completed=? WHERE id=?", [
    title,
    description,
    completed,
    req.params.id,
  ]);

  if (result.affectedRows) {
    res.json({ message: "To-do item updated successfully" });
  } else {
    res.status(404).json({ error: "To-do item not found" });
  }
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a specific to-do item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the to-do item to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: To-do item deleted successfully
 *       404:
 *         description: To-do item not found
 */
router.delete("/:id", async (req, res) => {
  const db = await connection();
  const [result] = await db.query("DELETE FROM todos WHERE id=?", [req.params.id]);

  if (result.affectedRows) {
    res.json({ message: "To-do item deleted successfully" });
  } else {
    res.status(404).json({ error: "To-do item not found" });
  }
});

export default router;
