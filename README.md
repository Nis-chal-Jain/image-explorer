# Setup
This guide will help you set up your own instance of ImageExplorer.

## Prerequisites
- nodejs
- npm

## Steps
- Clone this repository
- Run `npm install` or `npm i` in the root directory
- Setup env variables
    - Generate your `Unsplash API key` (refer [Unsplash docs](https://unsplash.com/documentation#getting-started))
    - Create a `.env` file in the root directory with following content
    - `VITE_UNSPLASH_API_KEY="<UNSPLASH_API_KEY>"`     
- Run `npm run dev`

## Use this
Just go to [ImageExplorer website](https://image-explorer-vert.vercel.app/) hosted on Vercel.