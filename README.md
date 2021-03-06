<h1 align="center">Dogs of Skyrim and Fallout</h1>
<p align="center">What can I say? I like The Elder Scrolls V and Fallout 4</p>

<div align="center">
  
[![Netlify Status](https://api.netlify.com/api/v1/badges/6f35eb57-55c5-4dde-a43c-3b8cb3007ec0/deploy-status)](https://app.netlify.com/sites/greatdogs/deploys)

</div>
<br/>

## Overview

This project was initiated with [Create React App](https://github.com/facebook/create-react-app) and utilizes two separate API calls to grab images and characteristics of dog breeds based on the user's selection. For each selection, the user will learn a little bit about the breed and see information about the Skyrim or Fallout versions. In addition to React, I use ESlint and Prettier for code pattern formatting and SCSS for CSS preprocessing. This is still a work in progress 🚧.

Demo it [here](https://falloutskyrimdogs.netlify.app).

<br/>

## Getting Started

### Incorporating your unique API key

1.  Get your API key from [TheDogAPI](https://thedogapi.com/) by signing up for a free account and requesting a key
2.  Create a `.env` file in the root directory
3.  Add `.env` to your `.gitignore` file (even if you don't think you are going to do any commits, it's better to err on the side of security).
4.  Copy the following line of code into the `.env` file and input your API key where prompted

<pre>
REACT_APP_CANINE_API_KEY = Your API key here
</pre>

### Installation

1. Make sure that you have a local or global installation of [Node.js](https://nodejs.org/en/)
2. Fork then clone this repository to your local environment
3. Navigate to the folder via CLI or terminal and type `npm install` to install dependencies
4. Run `npm start` to open the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Auto-compile Sass:

1. In the package.json file, add the following code to your `scripts` block

```json
"sass": "node-sass -w src/scss/App.scss -o src --recursive"
```

2. In the terminal, type `npm run sass` to start watching the sass file

<br/>

## React Elements

- Destructured props
- Proptypes
- React Hooks

<br/>
