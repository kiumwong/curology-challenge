<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kiumwong/curology-challenge.git">
    <img src="https://clipartart.com/images/curology-logo-clipart-7.gif" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Magic Potion Launch Site</h3>

  <p align="center">
    Revolutionizing the skincare industry!
    <br />
    <a href="https://github.com/kiumwong/curology-challenge.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kiumwong/curology-challenge.git">View Demo</a>
    ·
    <a href="https://github.com/kiumwong/curology-challenge.git/issues">Report Bug</a>
    ·
    <a href="https://github.com/kiumwong/curology-challenge.git/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Data Schema](#dataschema)
* [Scaling](#Scaling)
* [Front End](#frontend)
* [API Architecture](#apiarchitecture)
* [What Would You Do Differently?](#whatwouldyoudodifferently)
* [Improve or Scale the Application](#improveorscaletheapplication)

<!-- ABOUT THE PROJECT -->
## About The Project

![Interactive 3D Product Viewing with Add to Cart:](https://user-images.githubusercontent.com/68714620/96306930-b1775700-0fce-11eb-8bbf-a6e66c94515b.png)
![Form Validations](https://user-images.githubusercontent.com/68714620/96307073-f7ccb600-0fce-11eb-90d6-4161da88507e.png)
![](https://user-images.githubusercontent.com/68714620/96307229-4712e680-0fcf-11eb-9ef6-b5f616ce7907.png)



# Built With

* [ReactJS](https://reactjs.org/): A JavaScript library for building user interfaces.
* [Material-UI](https://material-ui.com/): A React UI framework.
* [NodeJS](https://nodejs.org/en/): A JavaScript library for server-side applications.
* [Express](https://material-ui.com/): A NodeJS framework.
* [PostgreSQL](https://www.postgresql.org/): An open source object-relational database.
* [Sequelize](https://sequelize.org/): An ORM(Object Relational Mapping) of PostreSQL

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
```sh
npm install npm@latest -g
```

### Installation

For /Client Folder:

1. Clone the repo
```sh
git clone https://github.com/kiumwong/curology-challenge.git
```
2. Install NPM packages
```sh
npm install
```
3. Run the application
```sh
npm run dev
```
4. Access the application
```sh
Access http://localhost:3000/
```

For /Server Folder:

1. Install NPM packages
```sh
npm install
```
2. Run the application
```sh
npm run dev
```
3. Access from Local Server
```sh
Access http://localhost:5678/api/v1/magic
```
4. Provide database credentials
```sh
Provide database credentials under config/config.js
```

<!-- Data Schema EXAMPLES -->
## Data Schema

Existing data schema represents transactional "orderItems" placed by a "userID" given a specific "productID which results in a "transactionID". For simplicity, I treated it as transactional data. However in a real life scenario, I would break and map the relationship as follows:

![Recommended Data Schema](https://user-images.githubusercontent.com/68714620/96242633-ad691c00-0f71-11eb-9478-b522d5abf9e5.png)

<!-- Scaling -->
## Scaling

Scaling comes at a price. The question now is how do we scale efficently which is measured by cost relative to demand. From a server perspective, there are 4 main factors that will drive up costs; Storage, CPU, Network I/O and Disk I/O. By monitoring and analyzing this data, it will be easy to determine, which metric is the bottleneck in the process. In terms of this application, I had leveraged localStorage as a means of validation so that it would reduce API costs. A common practice is to cache database queries based on frequency of queries ran which provides a O(1) vs O(n) space and time complexity. In addition, setting up load balancers, protocols for database indexes, caching, leveraging batch loads or queues will help you scale and reduce costs. If there is demand or high volume of orders, I would move out of heroku or add more dynos. 

<!-- CONTRIBUTING -->
## Front End

I had used reactJS on the front end as it provides a lot of advantage in View of MVC structure. One problem with MVC is bidrectional communication. It can get hard to debug and understand flow of data when app scales. As an alternative approach, Facebook has introduced Flux which is made of 4 key elements; Actions, Stores, Dispatchers and View. This structure allows for unidirectional communication. 

<!-- LICENSE -->
## API Architecture

I had applied a Restful CRUD API approach. It uses HTTP protocols like GET, PATCH, DELETE and POST to link resources to actions between client and server. REST also mandates the separation between client and server. From the data layer, I had applied CRUD to CREATE, READ, UPDATE or DELETE.   

<!-- CONTACT -->
## What Would You Do Differently?

Things I would have done differently:

1. Use Redux for better state management
2. Use TypeScript instead of ReactJS as static typing allows for better debugging processes and helps to catch errors
3. Work on a database more. It was hard to do sequelize commands without being able to work or see the data results. Production deployment failed due to sequelize models not importing.

<!-- ACKNOWLEDGEMENTS -->
## Improve or Scale the Application

As mentioned above:

1. Use caching to do more of the calculations. My application uses localStorage to do the initial test validations of the data. This will also save on costs when you hit the API. 
2. Use a database with good indexing and structure in place. I didn't focus too much on the database which definitely doesn't work out when you need to use the data to determine answers. 
3. Set up additional validation checks on the backend. I had focused most of my effort on the front end checks as data persisted there.
4. I created unit tests to test the end points but ideally should have try to work on some more.
5. I thought about using jwt tokens to track users who had already purchased items. As the data is transmitted back to the user, I would provide a jwt token so you can tack is customer is an existing customer. 
