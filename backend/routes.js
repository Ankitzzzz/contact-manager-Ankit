const express = require("express");
const router = express.Router();
const db = require("./db");

// Add contact
router.post("/contacts", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (phone.length < 10) {
    return res.status(400).json({ message: "Phone must be at least 10 digits" });
  }

  const sql = `INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)`;

  db.run(sql, [name, email, phone], function (err) {
    if (err) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(201).json({
      id: this.lastID,
      name,
      email,
      phone,
    });
  });
});

// Get all contacts
router.get("/contacts", (req, res) => {
  db.all("SELECT * FROM contacts", [], (err, rows) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(rows);
  });
});

// Update contact
router.put("/contacts/:id", (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.params;

  const sql = `UPDATE contacts SET name=?, email=?, phone=? WHERE id=?`;

  db.run(sql, [name, email, phone, id], function (err) {
    if (err) return res.status(400).json({ message: "Update failed" });
    res.json({ message: "Contact updated successfully" });
  });
});

// Delete contact
router.delete("/contacts/:id", (req, res) => {
  db.run("DELETE FROM contacts WHERE id=?", [req.params.id], function () {
    res.json({ message: "Contact deleted successfully" });
  });
});

module.exports = router;
