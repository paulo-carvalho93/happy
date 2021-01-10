<div align="center">

<p align="center">
  <img alt="screenshot" src="./.github/assets/logo.png" />
<p>

<p align="center">	
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/paulo-carvalho93/happy-NLW">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulo-carvalho93/happy-NLW">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">
  
</p>

**Happy** is a project to connect people and orphanages, aiming to provide greater interactivity of these institutions with people interested in helping children and making their days happier!

The project was developed during the third edition of _Next Level Week_, held by [Rocketseat](https://github.com/Rocketseat) between October 12th and 16th, 2020.

<p align="center">
  <img alt="screenshot" width="650px" src="./.github/assets/happy.png" />
<p>

</div>

## Summary

- [Technology](#rocket-technology)
  - [Backend](#hammer-backend)
  - [Web](#computer-web)
  - [Mobile](#iphone-mobile)
- [How to run](#boom-how-to-run)
  - [Backend](#hammer-backend-1)
  - [Web](#computer-web-1)
  - [Mobile](#iphone-mobile-1)


## :rocket: Technology

<div align="center">

![node](https://img.shields.io/badge/node.js-33933?&logoColor=FFF&style=for-the-badge&logo=node.js)
![react](https://img.shields.io/badge/react-61dafb?&logoColor=000&style=for-the-badge&logo=react)
![typescript](https://img.shields.io/badge/typescript-007acc?&logoColor=FFF&style=for-the-badge&logo=typescript)
![mapbox](https://img.shields.io/badge/mapbox-000?&logoColor=FFF&style=for-the-badge&logo=mapbox)
![expo](https://img.shields.io/badge/expo-000020?&logoColor=FFF&style=for-the-badge&logo=expo)
![sqlite](https://img.shields.io/badge/sqlite-003b57?&logoColor=FFF&style=for-the-badge&logo=sqlite)
![openstreetmap](https://img.shields.io/badge/openstreetmap-7ebc6f?&logoColor=FFF&style=for-the-badge&logo=openstreetmap)
![leaflet](https://img.shields.io/badge/leaflet-199900?&logoColor=FFF&style=for-the-badge&logo=leaflet)

</div>

### :hammer: Backend

The application's _backend_ was developed using [Typescript](https://www.typescriptlang.org/) language using the [NodeJS](https://nodejs.org/en/) framework . The database chosen was [SQLite](https://sqlite.org/index.html) due to the ease of configuration. For creating tables and add new columns we choose ORM [typeorm](https://typeorm.io/#/). The [Yup](https://yarnpkg.com/package/yup) package was also used to validate requests.

### :computer: Web

The _web_ version of the application was developed with [Typescript](https://www.typescriptlang.org/) using the framework [ReactJS](https://reactjs.org/). The _map_ was made using a composition of [Leaflet](https://leafletjs.com/) library and [MapBox](https://www.mapbox.com/) API . Finally, API calls to the backend were made with [axios](https://www.npmjs.com/package/axios).

### :iphone: Mobile

The _mobile_ version of the application was developed with [Typescript](https://www.typescriptlang.org/) language using the framework [React Native](https://reactnative.dev/) and [Expo](https://expo.io/) to increment the speed of development.

---

# :boom: How to run

- ### **Prerequisites**

  - It's **necessary** to have **[Node.js](https://nodejs.org/en/)** installed on the computer
  - It's **necessary** to have **[Git](https://git-scm.com/)** installed and configured on the computer
  - Also, it's **necessary** to have a package manager either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.
  - Finally, it is **essential** to have **[Expo](https://expo.io/)** installed globally on the machine for mobile propose.
  
Clone the repository:

```sh
  $ git clone https://github.com/paulo-carvalho93/happy-NLW.git
```

### :hammer: Backend

```sh
  # API
  $ cd backend
  # Installing project dependencies.
  $ yarn install # or npm install
  
  # Setting up the database and creating the tables.
  $ yarn typeorm migration:run

  # Start API
  $ yarn dev # or npm dev

```


### :computer: Web

```sh
  # API
  $ cd web
  # Installing project dependencies.
  $ yarn install # or npm install
  
  # Start Web Project
  $ yarn start # or npm start
  
  # Do you want to publish ?
  $ yarn build # or npm build
  # Static files for web will be saved in the `public` folder
  
```

### :iphone: Mobile


Here, I'm assuming that you have Android/Iphone Emulator and Expo app is installed.

If you are using an emulator, you need to activate routes from the backend. Why?
Your emulator needs to know where's your server and which URL it's running.

```
  # Run the following code at CMD
  $ adb reverse tcp:3333 tcp:3333
```


```sh
  # API
  $ cd mobile
  # Installing project dependencies.
  $ yarn install # or npm install
  
  # Start Web Project
  $ expo start
```


### :memo: License

This project is under MIT license. See the [LICENSE](LICENSE.md) file for more details.

---
