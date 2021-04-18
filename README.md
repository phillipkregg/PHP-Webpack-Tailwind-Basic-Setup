# PHP-Webpack-Tailwind-Basic-Setup

-   This is a basic setup that uses standard PHP with no special templating or framework.

-   It integrates a Webpack build process with plugins that install Tailwind CSS.

-   A demo Tailwind navigation component has been added to the page as well.

### To run the development environment, use this:

`npm run dev`

This will also watch the build for any changes in the JavaScript files or Tailwind configuration.

### To run the production build use this:

`npm run prod`

This will create a `dist` folder that contains minified css, JavaScript, and images

### Since this project is using basic PHP, you can run the server that PHP provides:

`PHP -S localhost:9090`

The port can be any open port that you aren't currently using.

Use two seperate console tabs for both the PHP server and the Webpack build scripts, and you're ready to develop!
