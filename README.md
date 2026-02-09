# vue-tictac-toe

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

Manual
 1. Install node modules -> npm install
 2. Run the game  -> npm run serve

 Demo: https://alexn555-racing.com/projects/vue-tictac-toe/

```
 Plot
  Classic vuejs typescript tic tac toe using scss markup
  Your mission is to beat opponent by creating cross with 3 marks of your symbol.
  Game is played by two people, you has 'X' marks, other 'O' marks
  The game ends when someone wins or draw

  Application structure:
      assets / - images and sounds
        cup / - image of wins
        sounds / - sounds
      components /  - app components
          app / - main app component
            cup / - sub component of app for displaying number of wins for each player
          cell - piece of item where you put mark
          grid - main game logic and array of cells with statuses
          all components are divided: file.vue (template and includes), file.ts - script, file.scss - style
       utils / - utility classes
         soundManager - sounds handler
       tests / - unit tests
       theme-darkblue.scss - main styling of (mostly) background, text colors
                  to create ability to switch diffrent color schemes
       main.ts - start point of application

    Features
     To switch sounds on / off click on score board top panel
     It will indicated whethever sounds status

     You can any time restart game, this will start new match
     Win amount indicates how many matches player won
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Thank you and enjoy the app.
