# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Video Demo](#video-demo)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Me](#contact-me)
- [My Development Environment](#my-development-environment)
- [Languages, Technologies and Packages used](#languages-technologies-and-packages-used)

## Description

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms is massively beneficial to me as a full-stack web developer.

I was tasked with building the back end for an e-commerce site; which involved configuring a working Express.js API to use Sequelize to interact with a MySQL database.

## Database Models

The database for this application contains the following four models (click to expand):

<details>
- <summary> `Category` </summary>

- `id`

  - Integer.

  - Doesn't allow null values.

  - Set as primary key.

  - Uses auto increment.

- `category_name`

  - String.

  - Doesn't allow null values.
  </details>

<details>
- <summary>`Product`</summary>

- `id`

- Integer.

- Doesn't allow null values.

- Set as primary key.

- Uses auto increment.

- `product_name`

  - String.

  - Doesn't allow null values.

- `price`

  - Decimal.

  - Doesn't allow null values.

  - Validates that the value is a decimal.

- `stock`

  - Integer.

  - Doesn't allow null values.

  - Set a default value of `10`.

  - Validates that the value is numeric.

- `category_id`

  - Integer.

  - References the `Category` model's `id`.
  </details>

<details>
- <summary>`Tag`</summary>

- `id`

  - Integer.

  - Doesn't allow null values.

  - Set as primary key.

  - Uses auto increment.

`tag_name`</summary>

    - String.

</details>

<details>
- <summary>`ProductTag`</summary>

- `id`

  - Integer.

  - Doesn't allow null values.

  - Set as primary key.

  - Uses auto increment.

- `product_id`

  - Integer.

  - References the `Product` model's `id`.

- `tag_id`

  - Integer.

  - References the `Tag` model's `id`.

  </details>

## Associations

<details>
 <summary>Click to expand to see the association methods on my Sequelize models:</summary>

- `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

- `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.
</details>

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Video Demo

The following walkthrough videos show initial setup and the POST, PUT, and DELETE routes for products, categories and tags being tested in Postman:

[01 - Start Up - Sourcing schema, seeding database, starting application](https://drive.google.com/file/d/1HlMC5jrlXe0PlGayWbChywq42zh-fPrl/view?usp=sharing)

[02 - GET requests](https://drive.google.com/file/d/1FGiTsXqLJ0FB6sXnmsQLqyADNmYGZxYa/view?usp=sharing)

[03 - POST requests](https://drive.google.com/file/d/1dtIrZQGxSKtC_dvrbjj_E0wajwH-4ADj/view?usp=sharing)

[04 - PUT requests](https://drive.google.com/file/d/1t3Nb7-qjjzseKOuPSvu0EZWk8g58h7kO/view?usp=sharing)

[05 - DELETE requests](https://drive.google.com/file/d/1fXjEss65bC_y3zXAV3Sx4RlmFlvjwo_5/view?usp=sharing)

## Screenshots

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

## Installation

The application will be invoked by entering the following 3 commands line by line into your terminal / CLI

```

git clone git@github.com:faisal244/ecommerce-back-end.git
cd ecommerce-back-end
npm install

```

## Usage

Once all the dependancies have been installed, please provide the application with the source database schema by entering the following 2 commands in your terminal:

```
mysql -u root -p
When promted for a password, enter "password"
```

then type:

```

source [enter absolute file path for the provided schema.sql file in the schema folder here]

```

type quit to exit the MySQL shell.

Once the source database schema has been provided, please execute the following 2 commands in your terminal to seed the database with employee data and run this application:

```

npm run seed
npm run start

```

## Contact me

- Contact me by Email: [m.faisal244@gmail.com](mailto:m.faisal244@gmail.com)

- [Connect with me on linkedin](https://www.linkedin.com/in/faisal244/)

- [View my Portfolio](https://faisal244.github.io/Portfolio/)

## My Development Environment

- VScode
- Terminal
- Nodemon
- MacOS Monterey
- Git
- Github

## Languages, Technologies and Packages used

- Javascript
- Node.JS v18.3.0

- [NPM] sequelize
- [NPM] Dotenv
- [NPM] Express
- [NPM] Mysql2

---
