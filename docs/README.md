# /users/register Endpoint Documentation

## 📘 Description
The **`/users/register`** endpoint registers a new user in the system. It accepts user details in the request body and creates a new user record.

---

## 📥 Request Data (JSON Body)

- **fullname**: An object containing:
  - **firstname** (`string`, required): Minimum 3 characters.
  - **lastname** (`string`, optional): Minimum 3 characters if provided.
- **email** (`string`, required): Must be unique and at least 5 characters.
- **password** (`string`, required): User's secure password.
- **socketID** (`string`, optional): Used for real-time communication (if applicable).

---

## 🧪 Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "strongpassword123",
  "socketID": "optional-socket-id"
}
