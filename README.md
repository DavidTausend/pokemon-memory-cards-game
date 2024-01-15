<h1 align="center">Gotta catch 'em all!</h1>

<img src="assets/images/pictures/hidden_pokemon_large.webp" alt="A decorative picture featuring the pokemon memory game">

<h3 align="center"><a href="https://davidtausend.github.io/pokemon-memory-cards-game/">➡️ View the live project here ⬅️</a></h3>

<br/>

<div align="center">

![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fdavidtausend.github.io%2Fpokemon-memory-cards-game%2F
)

</div>

## Introduction

Experience the fun and challenge of the Pokémon Memory Card Game, designed for all ages with vibrant graphics and beloved Pokémon characters. Start your engaging Pokémon adventure now!

<br>

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [User Experience (UX)](#user-experience--ux-)
  * [User Stories](#user-stories)
    + [User goals](#user-goals)
    + [Company goals](#company-goals)
- [Design](#design)
  * [Color Scheme](#color-scheme)
  * [Components](#components)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
- [Features](#features)
  * [Music](#music)
  * [Score](#score)
  * [Reset Game](#reset-game)
  * [Timer](#timer)
  * [Schuffle cards](#schuffle-cards)
  * [Keyboard](#keyboard)
  * [Future Implementations](#future-implementations)
    + [Multiplayer Mode](#multiplayer-mode)
    + [Additional Levels and Difficulty Settings](#additional-levels-and-difficulty-settings)
    + [Social Media Integration](#social-media-integration)
    + [Mobile App Version](#mobile-app-version)
    + [Customizable Themes](#customizable-themes)
    + [Game Progress Save](#game-progress-save)
    + [Feedback](#feedback)
    + [Pokemon API Integration](#pokemon-api-integration)
    + [Achievements and Rewards](#achievements-and-rewards)
- [Technologies](#technologies)
  * [Programming Languages](#programming-languages)
  * [Applications, Plugins & Tools Used](#applications--plugins---tools-used)
- [Deployment & Local Development](#deployment---local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    + [How to Fork](#how-to-fork)
    + [How to Clone](#how-to-clone)
    + [Committing and Pushing Changes](#committing-and-pushing-changes)
- [Testing](#testing)
  * [Automated Testing](#automated-testing)
    + [Validator Testing](#validator-testing)
      - [HTML](#html)
      - [CSS](#css)
    + [LightHouse](#lighthouse)
      - [Desktop](#desktop)
      - [Mobile](#mobile)
      - [Improvements](#improvements)
      - [Final Score](#final-score)
      - [Accessibility](#accessibility)
  * [Manual testing](#manual-testing)
    + [User Stories Testing](#user-stories-testing)
    + [Full Testing](#full-testing)
      - [Devices](#devices)
      - [Browsers](#browsers)
  * [Bugs](#bugs)
    + [Known Bugs](#known-bugs)
    + [Solved Bugs](#solved-bugs)
- [Credits](#credits)
  * [Content](#content)
    + [External Articles and Guides](#external-articles-and-guides)
    + [Community Contributions and Forums](#community-contributions-and-forums)
    + [Design and Spacing Techniques](#design-and-spacing-techniques)
  * [Software Design Documentation](#software-design-documentation)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

[Generate TOC](https://ecotrust-canada.github.io/markdown-toc/)

<br>

## User Experience (UX)

The Pokémon Memory Card Game, with its user-centered design, offers a simple, fun, and nostalgic experience for all ages, emphasizing intuitive play and the classic appeal of Pokémon.

### User Stories

#### User goals

- Users seek a fun and challenging memory card game with familiar Pokemon characters.
- The game should be easy to understand with clear instructions, suitable for all ages.
- Expectations include clickable cards, responsive buttons, and an interactive interface.
- Desirable for an enriched gaming experience.
- Users want to see and improve their scores during gameplay.

#### Company goals

- Aim to keep users engaged and encourage repeated plays.
- Leverage Pokemon themes to appeal to a broad audience and enhance brand recognition.
- Ensure the game is accessible to users of varying abilities.
- Ensure seamless performance across various devices.

## Design

### Color Scheme

The game's color scheme is dynamic and engaging, drawing from the colorful Pokemon universe: 

- Primary Background: Dark blue (#12181f), offering a striking contrast.
- Text Color: White (#FFFFFF) for readability against the dark background.
- Button Color: Dark red (#D32F2F) with white text, highlighting interactivity.
- Card Background: Neutral, emphasizing the colorful Pokemon images.
- Modal Background: Gray black (#333), ensuring focus on content.
- Interactive Elements: Include hover effects and animations for engagement.

### Components

The game incorporates various UI components, each contributing to an engaging user experience:

1. Header Section: Includes the game title, a welcome message, and a responsive image.

2. Main Game Area: Features a card grid, a timer, a score counter, and action buttons like "Start Game," "Instructions," and "Music Settings."

3. Card Elements: Interactive Pokemon cards with flip and shake animations.

4. Modal Windows: Instruction and music setting modals with overlay design.

5. Responsive Design: Media queries for adaptability across devices.

6. Interactive Buttons: For various game actions, styled to match the game theme.

7. Score List: Displays the top 5 high scores to motivate players to beat their previous records, dynamically updating to reflect ongoing performance.

### Imagery

The Pokemon Memory Card Game uses themed imagery, like hidden Pokemon in the header and individual Pokemon on cards, to create an engaging experience. Images adapt responsively across devices, ensuring a consistent and visually appealing interface for the game.

### Wireframes

Wireframes for the Pokemon Memory Card Game detail the layout and user interaction. They include the game area, action buttons, and modals for instructions and music, guiding the development of a cohesive, user-friendly interface.

## Features

### Regular Expression

The regular expression `^[A-Za-z\s]+$` is used in the game for validating player names. This pattern ensures that only alphabetic characters and spaces are allowed, preventing entries with numbers or special characters. If the entered name doesn't match the pattern, the user is alerted, and the input isn't accepted. This feature maintains data consistency and enhances user experience by ensuring proper name formats.

- The regular expression `^[A-Za-z\s]+$` is used. This means:
  - `^` asserts the start of a line.
  - `[A-Za-z]` allows uppercase and lowercase letters.
  - `\s` allows spaces.
  - `+` indicates one or more of the preceding elements.
  - `$` asserts the end of a line.

### Music

Music plays a significant role in enhancing the gameplay experience. A background track adds to the game's ambiance, creating an engaging atmosphere. Players have control over the music with features to play, pause, and adjust the volume. This functionality not only personalizes the experience but also makes the game more accessible and enjoyable for all users, regardless of their audio preferences.

### Score

The scoring system in the "Pokemon Memory Card Game" adds a competitive element:

- Points increase by 100 for correct matches, rewarding memory and accuracy.
- Incorrect matches deduct 100 points, adding challenge.
- The timer influences the final score, encouraging speed.
- High scores are recorded for personal best tracking.

### Reset Game

The Reset Game feature in the Pokemon Memory Card Game enables players to restart their game, resetting the score, reshuffling cards, and resetting the timer, ensuring a fresh gameplay experience each time.

### Timer

In the Pokemon Memory Card Game, a timer starts with the first card flip, displaying time in minutes and seconds. It adds an element of challenge, allowing players to track their speed. The timer resets for each new game, ensuring consistent time tracking.

### Schuffle cards

The game shuffles the Pokemon cards before each round, ensuring a unique and challenging experience each time. This randomization is key to the memory aspect of the game, as it prevents memorization of card positions from previous games.

### Keyboard



### Future Implementations

#### Multiplayer Mode

Adding a feature for players to compete against friends.

#### Additional Levels and Difficulty Settings

Implement different levels of difficulty, from easy to hard, catering to various age groups and skill levels.

#### Social Media Integration

 Enabling score sharing and friend invites through social media.

#### Mobile App Version

Creating a mobile app version for on-the-go gaming.

#### Customizable Themes

Allowing players to personalize game themes and card designs.

#### Game Progress Save

Implementing a save feature for pausing and resuming games.

#### Feedback

Creating a platform for players to submit suggestions and feedback.

#### Pokemon API Integration

Incorporating the [PokeAPI](https://pokeapi.co/) to expand the card collection, adding a dynamic and ever-growing range of Pokemon cards to the game. This feature will enrich the game's diversity and appeal to a broader audience of Pokemon enthusiasts.

#### Achievements and Rewards

Implementing a rewards system for achieving certain milestones in the game.

#### Database

Future updates for the Pokemon Memory Card Game will include integrating a database to save and compare player scores, enabling leaderboard features for enhanced competition and engagement.

## Technologies

### Programming Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Applications, Plugins & Tools Used

[Gitpod](https://www.gitpod.io): Gitpod served as my primary IDE for HTML, CSS, and JavaScript development, offering a seamless environment for coding and real-time change previews.

[Github](https://github.com/): Github was essential for repository hosting, enabling code sharing, and project management.

[Favicon](https://www.flaticon.com/): Flaticon provided a range of social media icons suitable for use as favicons on the site.

[Mycolor](https://mycolor.space/): Assisted in selecting a cohesive color palette, significantly impacting the website's aesthetic and user experience.

[Tiny](https://tinypng.com/): TinyPNG was instrumental in compressing images for the web, reducing file sizes without substantial quality loss and improving website loading times.

[Git](https://git-scm.com/): Employed for version control, facilitating efficient code changes management and team collaboration.

[ChatGPT](https://chat.openai.com/auth/login): Provided assistance in content creation, spell-checking, and code improvement suggestions, especially in accessibility and semantic naming.

[Shields](https://shields.io/): Used to create and integrate badges into the README for enhanced project documentation.

[Resize images](https://www.iloveimg.com/resize-image): Utilized for resizing images, ensuring they fit well within the website's design while maintaining quality. This tool was crucial for optimizing images for different screen sizes and improving the overall visual presentation of the site.

[Am I Responsive](https://ui.dev/amiresponsive): This tool was used to display how the website looks across different devices, ensuring responsive design.

[Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=de): Employed for auditing the website's performance, accessibility, and SEO, providing insights for improvements and optimizations.

[Wave](https://wave.webaim.org/): Used for assessing website accessibility, Wave helped identify and rectify accessibility issues, ensuring the site's usability for a diverse range of users. This tool was integral in making the website more inclusive and adhering to accessibility standards.

[Preview](https://support.apple.com/de-de/guide/preview/welcome/mac): Preview was utilized for image editing tasks like resizing and color adjustments, as well as for viewing images. Its ease of use and versatility made it a valuable tool in managing and modifying visual assets for the project.

[Slack](https://slack.com): Used for engaging with the Code Institute's online community, Slack was crucial for asking questions, exchanging ideas, and receiving guidance, significantly aiding in the project's development.

[Google Chrome](https://www.google.com/): Key for testing and debugging, Chrome's Developer Tools were essential for live editing and responsive design checks.

[Balsamiq](https://balsamiq.com): Utilized in the initial design phase, Balsamiq helped in creating wireframes, aiding in the visual and structural planning of the website.

[Python Tutor](https://pythontutor.com/javascript.html#mode=edit): Used for visualizing JavaScript code execution, aiding in debugging.

[JS Code quality tool](https://jshint.com/): Employed to analyze JavaScript code for errors and enforce coding standards.

[Web Vitals](https://web.dev/articles/vitals?hl=de): Monitored the site's performance and user experience metrics.

[Contrast Checker](https://webaim.org/resources/contrastchecker/): Ensured text and background combinations met accessibility standards.

[Esprima](https://esprima.org/demo/validate.html): This JavaScript validator was vital for syntax parsing, ensuring code correctness and debugging assistance.

[Regular Expression](https://regexr.com/): Used to test and refine regular expressions, crucial for validating user inputs and enhancing data integrity.

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [pokemon-memory-cards-game](https://davidtausend.github.io/pokemon-memory-cards-game/)

To deploy the site using GitHub Pages:

1. Login (or signup) to GitHub.
2. Go to the repository for this project: [DavidTausend/pokemon-memory-cards-game](https://davidtausend.github.io/pokemon-memory-cards-game/)
3. Click the settings button.
4. Select "Pages" in the left-hand navigation menu.
5. From the source dropdown, select the "main" branch and press save.

The site has now been deployed. Please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project: [DavidTausend/pokemon-memory-cards-game](https://davidtausend.github.io/pokemon-memory-cards-game/)
3. Click the "Fork" button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project: [DavidTausend/pokemon-memory-cards-game](https://davidtausend.github.io/pokemon-memory-cards-game/)
3. Click on the "Code" button, select whether you would like to clone with HTTPS, SSH, or GitHub CLI, and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type `git clone` into the terminal and then paste the link you copied in step 3. Press enter.


#### Committing and Pushing Changes

After making changes to your local copy, you can commit and push them to GitHub:

1. Open the terminal in the directory of your cloned repository.
2. Use `git status` to see the changes you've made.
3. Use `git add .` to stage all changes for commit, or `git add <filename>` to stage specific files.
4. Use `git commit -m "Your commit message here"` to commit your changes with a descriptive message.
5. Use `git push origin main` to push your changes to the main branch on GitHub.

## Testing

### Automated Testing

#### Validator Testing

##### HTML

<div align="center"><img src="assets/images/readme/testing/html_validator.webp"></div>

The W3C Markup Validator confirms the HTML is error-free, ensuring compliance with web standards, as indicated by the Lighthouse report.

##### CSS

<div align="center"><img src="assets/images/readme/testing/css_validator.webp"></div>

Validated error-free by the Jigsaw validator, the CSS effectively enhances the site's performance and cross-browser compatibility, as shown in the Lighthouse report.

##### JavaScript

<div align="center"><img src="assets/images/readme/testing/js_validator.webp"></div>

Employed JSHint, a JavaScript Code Quality Tool and the esprima validator confimrs that the JavaScript code passed without any major issues.

#### LightHouse

Lighthouse was employed to evaluate the website's performance, accessibility, best practices, and SEO via Chrome Developer Tools. Future plans include regular Lighthouse audits to continually enhance these aspects, ensuring optimal site efficiency and user experience.

##### Desktop

<div align="center"><img src="assets/images/readme/testing/lighthouse_desktop.webp"></div>

##### Mobile

<div align="center"><img src="assets/images/readme/testing/lighthouse_mobile.webp"></div>

##### Improvements

##### Final Score

<div align="center"><img src="assets/images/readme/testing/lighthouse_desktop_final.webp"></div>
<div align="center"><img src="assets/images/readme/testing/lighthouse_mobile_final.webp"></div>

##### Accessibility

### Manual testing

#### User Stories Testing

`User Goals`

| User Goals | How are they achieved? |
| :------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------- |
|I want an engaging and fun memory game to play.|Implemented a Pokémon-themed card memory game that's both challenging and enjoyable.|
|I need the game to be accessible on various devices.|Responsive design ensures the game is playable on desktops, tablets, and mobiles.|
|I want clear instructions on how to play the game.|Added an 'Instructions' button that opens a modal with easy-to-understand game rules.|
|I want to control the game's background music.|Integrated a Music Settings allowing players to adjust the volume or toggle the music.|
|I enjoy visually appealing games.|Designed with attractive Pokémon card images and engaging animations.|
|I prefer games that are easy to navigate.|Simple and intuitive UI with accessible buttons and straightforward navigation.|

`Company Goals`

| Company Goals | How are they achieved? |
| :------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------- |
|We aim to provide an entertaining gaming experience.|Developed an immersive Pokemon memory game that's fun and captivating for players.|
|We want to attract a wide range of users.|Ensured cross-device compatibility and a universally appealing Pokémon theme.|
|We aim to create a user-friendly game interface.|Implemented a clean and intuitive design with easy-to-use controls and instructions.|
|We want to offer customizable user experiences.|Provided music control options to cater to different user preferences.|
|We aim to maintain user engagement and retention.|Included various Pokémon characters and a scoring system to keep players engaged.|
|We plan to expand our game with more features.|Future implementations like multiplayer mode and more card sets are planned to enhance the game.|

#### Full Testing

##### Devices

- 24-inch Desktop Monitor
- 13-inch MacBook Pro
- 11 inch iPad Pro
- iPhone 14 PRO Max
- Samsung S20 Ultra

##### Browsers

- Google Chrome
- Firefox
- Safari
- Edge
- Samsung Internet

<br>

### Bugs

#### Known Bugs

##### Multiple Card Click Issue

If the user quickly clicks several cards, the first card doesn't flip back, disrupting the game flow. This allows more than two cards to be visible simultaneously, which is against the game's rules and reduces the challenge.

A possible fix might be adding a delay or disabling clicks until the first two cards' animations finish.

#### Solved Bugs

## Credits

### Content

The content and design for the Pokémon Memory Card Game were developed by the creator, drawing inspiration from official Pokémon resources and classic memory card games. Game instructions, user interface text, and the unique scoring system were all originally created, while audio elements were selected to enhance the game's ambiance, with credit to their respective sources.

#### External Articles and Guides

youtube.com

#### Community Contributions and Forums

forum.freecodecamp.org
https://stackoverflow.com/

#### Design and Spacing Techniques

css-tricks.com, youtube.com, w3schools.com

### Software Design Documentation

youtube.com, https://github.com/DavidTausend/tausendlin/blob/main/README.md?plain=1

### Media

### Acknowledgments

- My Mentor,[Matt Bodden](https://github.com/MattBCoding): Immense gratitude for his invaluable guidance, insightful feedback, and continuous support throughout the project.

- Code Institute Tutors and Staff: Thanks for their expertise and assistance, offering crucial support and resources for the project's development.

- Online Coding Communities: Appreciation for the knowledge and solutions shared on platforms like Stack Overflow and GitHub, aiding in problem-solving.

- Graphic and Audio Resource Contributors: Recognition for their artistic talents that added engaging dimensions to the game.

- Open Source Contributors: Acknowledgment of their shared resources and code snippets that enhanced the game's features.

- Personal Learning and Development: Acknowledgment of the growth and learning achieved, thanking all who contributed to this journey.

[Back to Top ^](#introduction)