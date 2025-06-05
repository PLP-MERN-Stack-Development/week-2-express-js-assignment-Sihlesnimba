# 📦 Express.js RESTful API Assignment

## 🚀 Overview

This project is a RESTful API built with Express.js that performs CRUD operations on a `products` resource. It includes robust routing, middleware for logging, authentication, validation, and comprehensive error handling. Advanced features like pagination, search, and product statistics are also implemented.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js v18+
- npm
- Postman, curl, or Insomnia for testing

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd week2-express-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the environment file:

   ```bash
   cp .env.example .env
   ```

4. Set your API key in the `.env` file:

   ```env
   API_KEY=test123
   PORT=3000
   ```

5. Start the server:

   ```bash
   npm start
   ```

---

## 📘 API Documentation

### Headers

All modifying routes (`POST`, `PUT`, `DELETE`) require:

```http
x-api-key: <your-api-key>
Content-Type: application/json
```

### Endpoints

#### `GET /api/products`

Returns all products.

- Supports query parameters:

  - `category=<category>` – filter by category
  - `page=<number>&limit=<number>` – pagination

#### `GET /api/products/:id`

Returns a single product by `id`.

#### `POST /api/products`

Creates a new product.

```json
{
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 1299.99,
  "category": "electronics",
  "inStock": true
}
```

#### `PUT /api/products/:id`

Updates an existing product.

#### `DELETE /api/products/:id`

Deletes a product.

#### `GET /api/products/search?q=term`

Search products by name.

#### `GET /api/products/stats`

Returns count of products by category.

---

## 🔐 Middleware

- **Logger**: Logs method, URL, and timestamp.
- **Authentication**: Checks for valid `x-api-key`.
- **Validation**: Ensures valid fields in `POST` and `PUT`.
- **JSON Parsing**: Parses incoming JSON requests.

---

## ❗ Error Handling

- Global error handler for catching and formatting all errors.
- Custom error classes:

  - `NotFoundError`
  - `ValidationError`
  - `AuthenticationError`

---

## 📁 Project Structure

```
week2-express-api/
├── controllers/
├── middleware/
├── routes/
├── utils/
├── server.js
├── .env.example
└── README.md
```

---

## 🧪 Sample cURL Commands

**Create Product**

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-api-key: test123" \
  -d '{"name":"Pen","description":"Blue ink","price":2.99,"category":"stationery","inStock":true}'
```

**Get Products with Pagination**

```bash
curl http://localhost:3000/api/products?page=1&limit=5
```

**Search Products**

```bash
curl http://localhost:3000/api/products/search?q=pen
```

---

## 👨‍💻 Author

Created as part of the Power Learn Project (PLP) Week 2 Express.js Assignment.

---
