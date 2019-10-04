# lecture-9-react

Let's get React up and running with Flask. Run these commands in your Project 2 (or scratch) folder.

## Upgrade Node version to 7

```$ nvm install 7```

## Install Webpack

This line installs Webpack on your Cloud9 workspace.

```$npm install webpack --save-dev```

## Install `npm` dependencies from `package.json`

This line starts `npm`, which looks inside our `package.json` file, retrieves a list of
packages, and installs them to the `node_modules` folder inside your repository. `node_modules` folder **does not** need to be pushed to Heroku or GitHub.

```$ npm install```

**Note: This command MUST be ran from the folder that contains package.json! You will get an error if you are in a different folder!**

## Compile Javascript using Webpack

This line starts up Webpack, which looks inside `webpack.config.js`, loads
configuration options, and starts transpiling your JS code into `static/script.js`.

```$ npm run watch```

(The program should not stop running. Leave it running.)

## Run the web app

Open a new terminal in your AWS Cloud9 environment (click the little green + button near your current terminal and choose 'New Terminal'). Run `app.py` (from the same folder, but new terminal) and verify that the React renders. You should see "Hello World from React!" in the preview.

**Do not manually edit `static/script.js`! It will update when you make changes. You do need to push this file to Heroku and GitHub**

## Edit HTML

Find the text that says "Hello World from React!" Make a change. Your webpack should still be running in the other terminal (and some logs will spit out). Try previewing the changes in the Preview Window in AWS. Notice that nothing is updating. You need to click 'Pop out to New Window', and hard refresh the browser (see command below). 

PS This is a known problem for a bunch of people. Unfortunately, there is no known fix besides turning off the cache option for the whole browser (which we don't want to do).

**You will always need to do a hard refresh (Ctrl+R/Cmd+Shift+R) of an external tab in your browser (while Webpack is running) to see changes**

