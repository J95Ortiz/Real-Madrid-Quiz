# **REAL MADRID QUIZ**

![AmIResponsive Screenshot](assets/readme_images/full_site_amiresponsive.png)

# CONTENTS

- [INTRODUCTION](#introduction)

- [CONTENTS](#contents)

- [USER EXPERIENCE](#user-experience)

  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [Site Structure](#site-structure)
  - [Design Choices](#design-choices)

- [FEATURES](#features)

  - [Outline](#outline)
  - [Main Features](#main-features)
    - [Navigation Bar](#navigation-bar)
    - [Footer](#footer)
    - [Index Page](#index-page)
    - [Quiz Page](#quiz-page)
    - [Results Screen](#results-screen)
  - [Future Features](#future-features)

- [TESTING](#testing)

  - [Performance & Accessibility](#performance--accessibility)
  - [Validator Testing](#validator-testing)

- [TROUBLESHOOTING](#testing)

- [DEPLOYMENT](#deployment)

- [CREDIT](#credit)
  - [Content Credits](#content-credit)
  - [Media Credts](#media-credits)
  - [Acknowledgements](#acknowledgements)

# INTRODUCTION

This project was designed to be used as a quiz game which the user can play. It's built and set up so the User Feels they can test their Real Madrid knowledge.

I created the quiz around the current Real Madrid Senior Team and its history because my intention is for it to be an extension to my first portfolio website which you can find linked below:

- [**_Real Madrid Page_**](https://j95ortiz.github.io/Real-Madrid-Portfolio-project-1/index.html)

- [**_Real Madrid Github Repository_**](https://github.com/J95Ortiz/Real-Madrid-Portfolio-project-1)

Originally I'd wanted the Real Madrid Site I built to have a game side to it, so that the users felt there was a fun side to the Site rather than it just being informative. However at the time I wasn't able to create this as my knowledge of Javascript was incredibly limited.

The Quiz Site is now fully operational so feel free to have a go and test your Real Madrid Trivia knowledge by following the link below:

- [**_Real Madrid Quiz_**](https://j95ortiz.github.io/Real-Madrid-Quiz/)

# USER EXPERIENCE

## OVERVIEW

The user's experience was put at the forefront of the design of this page, however there are a couple of features which I want to add in future and I've referred to these in the [Future Features Section](#future-features). Once the Quiz Site is linked to the main Real Madrid Site and these future features implemented, I believe the User's Experience will be even better.

## WIREFRAMES

The wireframes were created on [Balsmiq](https://balsamiq.com/wireframes/) and were used to represent the structure and layout intended on the site

Although the final design varies slightly from the initial wireframes, these can be seen below:

![Balsamiq Computer Wireframe](assets/readme_images/computer_view.png)
![Balsamiq Tablet Wireframe](assets/readme_images/tablet_view.png)
![Balsamiq Phone Wireframe](assets/readme_images/phone_view.png)

## SITE STRUCTURE

The site is split into 2 main pages:

1. [**The Main Instructions Page**](index.html)

2. [**The Quiz Page**](quiz.html)

The Results Screen will be displayed to the User once they've completed the quiz, and is part of the [quiz.html](quiz.html) file. The code in [script.js](script.js) checks whether all the questions have been answered using the _displayNext()_ & _resetState()_ functions. Once this is done, by combining these functions with the _gameScore()_ function the question is replaced with the User's score and a message is displayed alongside it which changes depending on how many questions they got right.

The questions used in the quiz, and the file containing the quiz structure and logic are stored in separate JS files:

1. [**Quiz Questions and Answers File**](assets/js/questions.js)

2. [**Quiz Creator and Logic File**](assets/js/script.js)

This way in future whenever anyone wants to add a question, update the answers or remove a question this is easier to do.

## DESIGN CHOICES

This Real Madrid Quiz Site was designed to feel like an extension of the Real Madrid Page built for my first Portfolio Project.

On that page I took inspiration from some of my favourite kits and mainly used a Navy, Black and Gold colour theme, so I've tried to keep this colour scheme consistent for the Quiz Site.

![Colour Scheme used on the site](assets/readme_images/real_madrid_quiz_page_colour_scheme.png)

Some of the Feedback following the submission of the first project was that the site sometimes felt too cluttered with too much going on, and it may have been harder for a User to focus on something specific and could even make them feel overwhelmed. As such, in order to mitigate this the main change I did was to make the background image larger. This way it doesn't feel like there's so much going on in the background and makes the site feel cleaner. I will also apply this change to the Madrid Site so as to make all pages of the site feel consistent.

# FEATURES

## OUTLINE

Even though the site has only two main pages, the main intention is that from a User's perspective it will feel like it is split into three parts:

1. [_Instructions_](#index-page)

2. [_Quiz Questions_](#quiz-page)

3. [_Result Screen with score, message and "Play Again" button_](#results-screen)

## MAIN FEATURES

### NAVIGATION BAR

The Navigation Bar is very simple as I based the code off the Real Madrid Site I created, but removed the links to the other pages as this would most likely confuse users trying to access parts which haven't been linked at this stage.

If the User wants to, they can return to the Instructions Page by clicking or tapping on the logo or the text next to it, and this is communicated to the user on the Results Screen.

On the original site I spread the elements out in the Navigation Bar, but on this occasion I thought it looked better with the content justified centrally as there aren't any other links.

I checked with a couple of friends to see which they preferred and they agreed it looked better with the existing links in the middle of the Bar.

![Navigation Bar Screenshot](assets/readme_images/header.png)

As a result, the Navigation Bar looks simple and clean, with no unnecessary links or icons which might confuse a User.

When this site is linked to the Real Madrid Project, the aim is that the User will also see links in the Navigation Bar to the Homepage, Squad Page and Lotto Form, which they can then use to navigate the full site.

### FOOTER

The User will find links to Real Madrid's Official Social Media Channels on the footer, and these are displayed with icons so the user knows which Social Media site they're accessing.

![Footer Screenshot](assets/readme_images/footer.jpg)

These open in a new tab when actioned, so as to give the User more autonomy and control over how they choose to navigate the site.

The footer will be displayed across all the pages the user sees, so even if they're halfway through a quiz game, or on the results screen, they're able to access these links, giving them full control.

### INDEX PAGE

This is the first screen the User will see when they access the quiz link. It's simply laid out and has been styled so that it looks good across all screen sizes, and also changes depending whether the device the User is using is in landscape or portrait mode.

![Index Page View](assets/readme_images/index.HTML_computer_view.png)
![Index Page Phone Landscape View](assets/readme_images/index.HTML_phone_landscape_view.png)
![Index Page Phone View](assets/readme_images/index.HTML_phone_view.png)

All it contains is some simple instructions and a button with which the User can start the quiz.

I created this page following some feedback from my Mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/). When I originally designed the page I didn't think of having an Instructions Page as it seemed obvious to me what the site would be about.

This screen gives the user a chance to read through the instructions, and that way they will know that there are 10 questions only, and that some of these might repeated, which might have otherwise caused some confusion. It also gives the user control in the sense that they are able to start the quiz whenever they want by pressing the start button and aren't chucked straight into the game.

Now that it's been added I believe that not jumping straight into the quiz is a better way to set the site up.

Users I got to test the site also confirmed that knowing that some of the questions might get repeated in advance made their experience better. They explained that as they now knew some questions would be repeated, it felt to them like it was done deliberately rather than being caused by a bug in the code.

They also stated that if they got the same question twice, now that it had been mentioned in the instructions they now felt like it was a chance to increase their score if they'd got the question right, or as a second chance to get the answer right if they had answered incorrectly.

### QUIZ PAGE

The quiz page is set up simply contains a box with the quiz title, question with a counter out of ten and the answer options below that.

![Quiz Questions Page - Computer View](assets/readme_images/quiz.HTML_computer_view.png)
![Quiz Questions Page - Phone View](assets/readme_images/quiz.HTML_phone_view.png)

Under the quiz title the question is displayed and I added a counter so the User can see how many questions they've answered.

Below the question, a User will find the answer options split into four separate boxes. These have been styled in contrast to the box they are in so that they stand out, which ensures that there is a clear distinction between the question and answer sections.

In order to further improve the User's experience on the site, I made the four answer options responsive and their colour is inverted when they are hovered over with the mouse.

This also works for phones and tablets, although as a future feature I'd like to make these more responsive to touch actions, rather than mainly hover actions.

![Quiz Questions Page - Computer View](assets/readme_images/quiz.HTML_computer_view.png)

![Computer View](assets/readme_images/quiz.HTML_computer_view_hover.png)

Once a question has been answered, the selected answer will change colour depending on the user's choice.

If the user answers correctly then their selection will be highlighted green, and if their choice is incorrect then their choice will be highlighted in red, and the correct answer's box will go green.

![Correct Answer Computer View](assets/readme_images/quiz.HTML_computer_view_correct.png)

![Incorrect Answer Computer View](assets/readme_images/quiz.HTML_computer_view_incorrect.png)

The "Next" button is also responsive and the colours are inverted when the user hovers their mouse or taps it. However, it is only displayed once the question on the screen has been answered, with the aim being to improve the users' experience while playing. I created it this way following a comment from one of my friends who I showed the initial design to.

They suggested that if the button was visible to the user, they might try and skip a question if they didn't know the answer which would probably affect their experience.

To prevent a user skipping the question altogether and prompt them to at least have a guess, the "Next" button is only visible and actionable once the question has been answered. This way the user might get the answer right even if they didn't know what it was, giving them a better experience on the platform.

![Next Button Computer View Hover](assets/readme_images/quiz.HTML_computer_view_correct_nextBtn_hover.png)

### RESULTS SCREEN

The Results screen design is meant to be consistent with the rest of the site, maintaining the same colour combinations as the instructions page and the question screens.

The play again button is styled the same way as the "Next" button, and is responsive in the same way.

![Results Screen Computer View](assets/readme_images/quiz.HTML_result_computer_view.png)
![Results Screen Hover Computer View](assets/readme_images/quiz.HTML_result_computer_view_hover.png)

![Results Screen Landscape Phone View](assets/readme_images/quiz.HTML_result_phone_landscape_view.png)
![Results Screen Landscape Phone View Hover](assets/readme_images/quiz.HTML_result_phone_landscape_view_hover.png)

![Results Screen Phone View](assets/readme_images/quiz.HTML_result_phone_view.png)
![Results Screen Hover Phone View](assets/readme_images/quiz.HTML_result_phone_view_hover.png)

I thought that a good way of improving the user's experience would be to add a message which changes depending on their score. I therefore created 3 different messages, and the user should see the apropriate one depending on what their score is.

If they score higher than 7 the message will look like this:
![Final Result Message 1](assets/readme_images/quiz.HTML_result_galactico_message.png)

If they score between 5 and 7, the message displayed will look like this:
![Final Result Message 2](assets/readme_images/quiz.HTML_result_not_bad_message.png)

And if they score less than 5, the message displayed will look something like this:
![Final Result Message 3](assets/readme_images/quiz.HTML_result_Hazard_message.png)

The line indicating to the user how to get back to the instructions page was added after a comment from my Mentor Precious Ijege, who said they believed it would improve the experience and provide further clarity.

This was supported by other users who I'd got to try out the site before the instructions page had been added, and they agreed that it made the whole site feel clearer, more professional and streamlined.

## FUTURE FEATURES

The main Feature I'd like to add to the Quiz site is add links to the header

Make the Play Game button responsive also

Create function so that the questions aren't repeated although can't find a way of doing this if I'm creating Random numbers

Add a correct counter on the side

Add an option where the user can tell the computer how many questions they want in the quiz

make the buttons as responsive on mobile and tablets as they are on computer screens.

Add a link to Madrid Project Home Page next to Play again

# TESTING

## PERFORMANCE & ACCESSIBILITY

Performance testing was carried out on both pages using the [Lighthouse feature on Google Chrome's Dev Tools](https://googlechrome.github.io/lighthouse/viewer/).

_Instructions Page Results:_
![Index Page Lighthouse Results](assets/readme_images/index.HTML_lighthouse_results.png)

_Quiz Page Results:_
![Quiz Page Lighthouse Results](assets/readme_images/quiz.HTML_lighthouse_results.png)

## VALIDATOR TESTING

The W3C [Markup Validation Service](https://validator.w3.org/#validate_by_input) was used to check the HTML code on both pages, and they passed.

_Index.html:_
![index.html Validator Result](assets/readme_images/index.HTML_validator_check.png)

_Quiz.html:_
![quiz.html Validator Result](assets/readme_images/quiz.HTML_validator_check.png)

The [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to check the CSS code and it also passed.

_Style.css:_
![style.css Validator Result](assets/readme_images/style.CSS_validator_check.png)

The [JSHint Javascript Validation Service](https://jshint.com/) was used to check the Javascript files and they passed.

_Script.js:_
![script.js Validator Result](assets/readme_images/script.JS_validator_check.png)

# TROUBLESHOOTING

My first issue came about when trying to create a formula which would pick 10 random numbers between 1 & 50, and using them to create an array to be used in the quiz.

questions not getting repeated

I struggled getting the page to reload the quiz with different questions

# DEPLOYMENT

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the _Settings_ tab.

- From the _source_ section drop-down menu, select the _Master Branch_.

- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the deployment has been successful.

The live link can be found here - https://j95ortiz.github.io/Real-Madrid-Quiz/

# CREDIT

## CONTENT CREDIT

Quiz Logic and Inspiration Credit:

[Javascript Youtube Tutorial](https://simplestepscode.com/javascript-quiz-tutorial/)

[How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8)

[Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k)

Quiz Question Content Credit Links:

- http://www.freepubquiz.co.uk/real-madrid.html

- [Real Madrid Trivia Template | LivePolls | QuestionPro](https://www.questionpro.com/livepolls/templates/real-madrid-trivia-questions/)

- https://en.wikipedia.org/wiki/Sergio_Ramos

- https://www.realmadrid.com/en-US/the-club/history/football-legends/cristiano-ronaldo-dos-santos-aveiro

- https://bleacherreport.com/articles/10061039-gareth-bale-retires-at-33-won-champions-league-5-times-with-real-madrid#:~:text=The%2033%2Dyear%2Dold%20is,in%20a%20nine%2Dyear%20stretch.&text=He%20also%20played%20for%20Tottenham,FC%20at%20the%20club%20level

- https://www.realmadrid.com/en-US/the-club/history/football-legends/sergio-ramos-garcia

- https://www.transfermarkt.co.uk/zinedine-zidane/alletore/spieler/3111/plus/0?saison=&verein=418&liga=&wettbewerb=&pos=&minute=&pos=&torart=&stand=

- https://www.transfermarkt.co.uk/sergio-ramos/alletore/spieler/25557/plus/0?saison=&verein=418&liga=&wettbewerb=&pos=&minute=&pos=&torart=&stand=

- https://www.marca.com/en/football/real-madrid/2021/06/17/60ca692722601d4f438b4696.html

- https://www.planetsport.com/soccer/iker-casillas

- https://www.transfermarkt.co.uk/iker-casillas/leistungsdatenverein/spieler/3979

- https://www.transfermarkt.co.uk/eden-hazard/leistungsdatenverein/spieler/50202

- https://www.transfermarkt.co.uk/raul/erfolge/spieler/7349

- https://www.transfermarkt.co.uk/gareth-bale/leistungsdatenverein/spieler/39381

## MEDIA CREDITS

- The favicon images were created using the [Favicon Generator](https://realfavicongenerator.net/).

- The imagesz for the links in the footer were obtained from the [Font Awesome Website](https://fontawesome.com/search?o=r&m=free).

- The colour Palette image was created using [Colors.co](https://coolors.co/).

## ACKNOWLEDGEMENTS

I would like to mention my Mentor, [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his support and feedback during the building process. His input and comments on how to improve the site helped me streamline the process, and his suggestion to add an instructions page was a great idea which I'm glad I've implemented as it gives the site a better feel from a User's perspective.

I would also like to add a further thank you to the Student Support Team at Code Institute for their assistance so far on the course.
