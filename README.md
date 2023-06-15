# 🛒🐾 Pocket Cart

# Discover a curated selection of high-quality products and join us in creating a world where every pet thrives!🐶🐱🐭🐦🐹


## 📖 Table of Contents
* General Info
* Planning & Problem Solving
* Built With
* Getting Started
* Features
* Screenshots
* Room for Improvement
* License
* Contributing
* Contact
<br><br>
## 📄 General Info
Pocket Cart is a web-based platform that offers a convenient and comprehensive shopping experience for pet owners. With a wide range of products including food, treats, flea, tick and worm treatments, litter, accessories, and toys for various pets, our website is designed to meet the needs of pet owners and ensure the happiness and well-being of their furry companions.

This project is led by a dedicated team comprising Dom, Karen, Riley, Roxanne, and Stuart. As part of our journey in the General Assembly Software Engineering Immersive course, we have come together to create this eCommerce website, leveraging our skills and knowledge in web development. Despite being located in different time zones, we collaborate effectively to ensure continuous progress and deliver a high-quality product to our users.
<br><br>
## ✏️ Planning & Problem Solving
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/miro1.png)

![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/miro2.png)
<br></br>
## 🦾 Built With
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

[![Gatsby](https://img.shields.io/badge/gatsby-8a4baf?style=for-the-badge&logo=gatsby&logoColor=#8a4baf)](https://www.gatsbyjs.com)

[![Rails](https://img.shields.io/badge/rails-A91401?style=for-the-badge&logo=rubyonrails&logoColor=FFFFFF)](https://rubyonrails.org)


[![TailwindCSS](https://img.shields.io/badge/tailwindcss-4A4A55?style=for-the-badge&logo=tailwindcss&logoColor=fffff)](https://tailwindcss.com)

[![Node.js](https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodedotjs&logoColor=4FC08D)](https://nodejs.org/en)

[![stripe](https://img.shields.io/badge/stripe-d6d6d6?style=for-the-badge&logo=stripe&logoColor=6772E5)](https://stripe.com/en-au)

<br><br>

## ⚙️ Getting Started
### Prerequisites

Please note that these instructions assume you have Node.js and npm installed on your machine. If not, please install them before proceeding.

Node.js

Head to [Node.js](https://nodejs.org/en/download) and install the correct version for your operating system.

npm
```sh
npm install npm@latest -g
```
### Installation
You can clone this repository and run it locally on your machine. Use the following command to clone the repository:
For the front end:
```
git clone https://github.com/Griffy92/online-shop-client.git
```
For the back end:
```
git clone https://github.com/Griffy92/online-shop-server.git
```
### Running the Project
After cloning the repository, navigate to the project directory and install the necessary dependencies. Given that this project uses Gastby and React as front end and Rails as the back end, you can use the following commands:
For the front end:
```
cd online-shop-client
npm install
npm run clean
npm run develop
```
For the back end:
```
cd online-shop-server
rails db:migrate
rails db:seed
bundle install
rails server
```
<br><br>
## 🛍️ Features
There are several aspects of Pocket Cart at the moment: Admin, User Authentication, Search, Filter, Cart, Orders, Shipping and Payment.

- ### Admin
  - Product Management: Access an admin dashboard to manage products, including adding new products, updating existing product details, and removing products from the inventory.
  - Inventory Management: Monitor and track product stock levels and manage inventory to ensure availability of products.
  - Order Management: View and filter customer orders.
  - User Management: Manage user accounts, including creating new accounts, and handling user permissions and roles.

- ### User Authentication
  Sign Up, Sign In, Password Reset (You will get an email to reset your password), Log Out, Confirmation Email (Once you place an order successfully).

- ### Search
  Use the search functionality to find specific products by keywords, product names, or categories.
  
- ### Filter
  Utilize advanced filtering options to narrow down product listings based on category, price range, new item and more. Easily find the products that match your preferences and requirements.
- ### Cart 
  - Add to Cart: Select your desired products and add them to your shopping cart.
  - Manage Cart: View and modify the items in your cart, update quantities, and remove products if needed.

 - ### Order
   - Proceed to the checkout process to review your order details and provide shipping information.
   - Review your historical orders once you logged in.
  
- ### Shipping & Payment
  Enjoy a seamless and secure shopping experience with a variety of payment methods. We integrate with Stripe to ensure the safety and convenience of your financial transactions.

<br><br>
## 📸 Screenshots

### Home Page
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/Home.png)
### Sign In Page
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/Sign%20in.png)
### My Account Page
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/My%20Account.png)
### Search
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/Search.png)
### Cart
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/Cart.png)
### Product Page
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/Product.png)
### Payment Page
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/shipping%20%26%20payment.png)
### Admin Page
![image]()
### Order Confirmation
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/Order%20Confirmation.png)
### Password Reset
![image](https://raw.githubusercontent.com/Rox-Liu/online-shop-client/main/src/images/readme_assets/Password%20Reset.png)

<br><br>
## 🚀 Room for improvement
- Improved UI
- Optimize the application to ensure mobile compatibility and a seamless user experience on all devices
- Add "Buy Now" button for better customer experience
<br><br>
## 🔐 License
This project is licensed under the [MIT License](LICENSE).
<br><br>
## 🌱 Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

- Fork the repository
- Create a new branch for your feature or bug fix
- Make your modifications and commit changes
- Push your changes to your forked repository
- Submit a pull request explaining your changes
<br><br>
## 📧 Contact

- Dom -- dominicwong09@gmail.com
- Karen -- karenliang9546@gmail.com
- Riley -- riley.mercer4@gmail.com
- Roxanne -- roxanneliu819@gmail.com
- Stuart -- stuartcannone@gmail.com

<br><br>

![image](https://raw.githubusercontent.com/Rox-Liu/project-02/main/public/readme_assets/Group%20Image/readme_everyone_v4.png)
