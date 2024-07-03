# Blog Haven

Welcome to ***Blog Haven***, your go-to platform for writing, publishing, and sharing blogs with a vibrant community. Express yourself, connect with others, and customize your profile to let people know you better.

## Features

* **Write and Publish Blogs:** Share your stories, ideas, and insights with the world.
* **Connect with Others:**  Discover and engage with a diverse community of writers and readers.
* **Profile Customization:** Personalize your profile to showcase your personality and interests.
* **Engage with Content:** Appreciate or add comments on blogs to share your views and connect with authors.
* **Performance:** Get the number of views on your blog to estimate the reach it got

 ## Get Started

1. **Sign Up:** Create an account to start writing and sharing your blogs.
2. **Customize Your Profile:** Make your profile uniquely yours with customizations.
3. **Write and Publish:** Share your thoughts and stories with the world.
4. **Engage with the Community:** Comment and appreciate other blogs to interact and connect.

Join **Blog Haven** today and be a part of a dynamic community of writers and readers!
 - - - -
 ## Technologies Used

 1.  ### Frontend:
       1. ***Styling:*** Tailwind
       2. ***Templating Enjine:*** EJS
 2.  ### Backend :
       1. ***Database:*** MongoDB
       2. ***Authentication:*** JWT
       3. ***Framework:***  Express  
 - - - -

 ## Learning

 1. ***Authentication:*** Implemented authentication using JSON Web Tokens (JWT)
 2. ***Multer:*** Multer for handling image input from users
 3. ***Encrypting Password:*** Used bcrypt for encrypting user passwords before storing them in the database
 4. ***Sorting, Searching, and Insertion:*** Learned to implement these operations in MongoDB effectively
- - - -

## Future Features:

1. ***Like:*** Want to add Like functionality for blogs and comments
2. ***Sorting:*** Want to provide functionality for sorting blogs and comments based on these likes
3. ***Session and Refresh Token:*** Want to use the concept of Session and Refresh token for keeping user authenticated for a long duration instead of extending the duration of cookies

- - - 

## Contributing: 

 Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

 - - - -

 ### How to contribute: 

 ### Make sure you have Node.js and MongoDB installed on your device. 

   Install all dependencies listed in **package.json**
   ```bash
   npm install
   ```
   
  Create a **.env** file in your directory and add following variables
  ```.env
  PORT = PORTofYourChoice
  JWTSecretKey = "Any String"
  ```

  In **index.js** replace URL in connectToMongoDB() function with the Connection URL of MongoDB on your device
  ```javascript
 connectToMongoDB("mongodb://localhost:27017/Blogging-App")
 ```

   
