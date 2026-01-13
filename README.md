# Contacts Manager Web Application



## Project Overview
This is a simple web application that allows users to **manage contacts**. Users can **create, view, edit, and delete** contacts (name, email, phone) through a clean and user-friendly interface.  
This project is built as a full-stack application with **frontend** and **backend**.


## Features

### Must-Have
- **Create:** Add a new contact.
- **Read:** Display a list of contacts and view details of a single contact.
- **Update:** Edit an existing contact.
- **Delete:** Remove a contact (soft delete optional).
- **Validation:** Email format, phone number length, required fields.
- **UI/UX:** Basic, clean interface (table/list + form).
- **Error Handling:** Clear messages (e.g., 'Email already exists').
- **Persistence:** Data stored in a database or file (SQLite/PostgreSQL/MySQL/MongoDB/JSON).
- **Documentation:** README with setup steps and run commands.

### Bonus (Optional)
- Search/filter by name or email.
- Pagination (server or client side).
- Sorting (by name/email).
- Authentication (login) or JWT.
- Unit tests / Integration tests (2–3 meaningful tests).
- Docker support (Dockerfile + docker-compose).
- CI lint/test (GitHub Actions)

---
## Technologies Used

### Backend
- Node.js
- Express.js
- (Optional) Database: SQLite / PostgreSQL / MySQL / MongoDB / JSON

### Frontend
- HTML
- CSS
- JavaScript

---

## Suggested Database Schema (SQL Example)
```sql
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    phone VARCHAR(25) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

   ## Author
   Ankit Kumar Yadav
