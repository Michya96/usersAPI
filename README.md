# usersAPI
usersAPI is an API that lets u GET, POST, PATCH and DELETE user data from mongoDB database with users.

# Usage
To use this api we must send and HTTP endpoint request to "https://michya96-heroku-users-app.herokuapp.com". Currently there are available endpoints for:
## Getting all users (GET /api/users)
This request will retrieve all users in the database, or all users with role given in the query.
Examples:

Receiving all users:
```
GET https://michya96-heroku-users-app.herokuapp.com/api/users
```
Getting users with "user" role:
```
GET https://michya96-heroku-users-app.herokuapp.com/api/users?role=user
```
## Getting one user (GET /api/user/:id)
This request will retrieve one user from the database, with matching id.
Example:
Getting an user with id = 4
```
GET https://michya96-heroku-users-app.herokuapp.com/api/user/4
```
## Adding one user (POST /api/users)
This request will add one user into database.
Example:
Request:
```
POST https://michya96-heroku-users-app.herokuapp.com/api/users
```
Body of the request(JSON):
```json
{
"firstName": "Tomasz",
"lastName": "Kowalczuk",
"email": "tkowalczuk1562@gmail.com",
"role": "user"
}
```
Email is a required field of type string, role is required field of type string and must be either "user" or "admin", firstName and lastName are optional fields of type string
with a maximum of 50 characters.

## Updating one user (PATCH /api/user/:id)
This request will update a field of a user with the given id.
Example:
Updating user's firstName with id = 3.
Request:
```
PATCH https://michya96-heroku-users-app.herokuapp.com/api/user/3
```
Body of the request:
```json
{
"firstName": "Michal"
}
```
## Deleting one user (DELETE /api/user/:id)
This request will delete an user with the given id.
Example:
Deleting user with id of 2.
Request:
```
DELETE https://michya96-heroku-users-app.herokuapp.com/api/user/2
```

# Authorization
This api will only accept requests when given a proper authorization token inside "auth-token" within the header
