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
```

---

# /user/login Endpoint Documentation

## 📘 Description
The **`/user/login`** endpoint authenticates an existing user using their email and password.

---

## 📥 Request Data (JSON Body)

- **email** (`string`, required): Must be a valid email.
- **password** (`string`, required): Minimum 6 characters.

---

## 🚦 Response Status Codes

- **200 OK**: Login successful; returns a token and user details.
- **400 Bad Request**: Invalid input data.
- **401 Unauthorized**: Incorrect email or password.
- **500 Internal Server Error**: Unexpected error.

---

## 🧪 Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "strongpassword123"
}
```

---

# /user/profile Endpoint Documentation

## 📘 Description
The **`/user/profile`** endpoint retrieves the authenticated user's profile.

---

## 📥 Request Data

- No request body required.
- Requires valid authentication token via header or cookie.

---

## 🚦 Response Status Codes

- **200 OK**: Returns the user profile.
- **401 Unauthorized**: Authentication failed; token missing or invalid.

---

## 🧪 Example Request

```
GET /user/profile
```

---

# /user/logout Endpoint Documentation

## 📘 Description
The **`/user/logout`** endpoint logs out the authenticated user by clearing the token cookie and blacklisting the token.

---

## 📥 Request Data

- No request body required.
- Requires valid authentication token via header or cookie.

---

## 🚦 Response Status Codes

- **200 OK**: Successfully logged out.
- **401 Unauthorized**: Authentication failed; token missing or invalid.

---

## 🧪 Example Request

```
GET /user/logout
```
