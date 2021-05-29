# Simple CRUD App

An app to create,fetch,update and delete user
**FEATURES**
This app allows you to:

1. create a new user with the following details required:

- Email
- Name
- Country
using : https://newuser-crud-app.herokuapp.com/user/add as the url on postman and a post request. Then click on body, select raw, change text to json
and add details as following: 
{
"name": "******",
"email": "*****",
"country": "***"
}
After which you click on send
2. Fetch all users using: https://newuser-crud-app.herokuapp.com/user/ as the url on postman and a get request  or 

single user using: https://newuser-crud-app.herokuapp.com/user/:id as the url on postman and a get request while either pasting the user _id in the value under path variables in params tab or replacing :id in the url with the user _id.

4. Update already created user details using: https://newuser-crud-app.herokuapp.com/user/:id as the url on postman and a put request while either pasting the user _id in the value under path variables in params tab or replacing :id in the url with the user _id. Click on body, select raw, change text to json
and add details as following: 
{
"name": "******",
"email": "*****",
"country": "***"
} 
Then send
5. Delete user using: https://newuser-crud-app.herokuapp.com/user/:id as the url on postman and a delete request while either pasting the user _id in the value under path variables in params tab or replacing :id in the url with the user _id. Then send

Github Link: https://github.com/ogbunikejude/user-CRUD-App
Hosted Link: https://newuser-crud-app.herokuapp.com/
