# **REAL MADRID QUIZ**

![AmIResponsive Screenshot](assets/readme_images/full_site_amiresponsive.png)

# INTRODUCTION

This site was created with the idea of being an extension to my first portfolio website which you can find linked below:

[Real Madrid Page](https://j95ortiz.github.io/Real-Madrid-Portfolio-project-1/index.html)

[Real Madrid Github Repository](https://github.com/J95Ortiz/Real-Madrid-Portfolio-project-1)

Feel free to have a go and test your Real Madrid Trivia knowledge by following the link to the webpage - [Real Madrid Quiz](https://j95ortiz.github.io/Real-Madrid-Quiz/)

# USER EXPERIENCE

## OVERVIEW

The user's experience was put at the forefront of the design of this page, however there are a couple of features which I want to add in future

#################################

**in order to improve it / so as to make it better.**

##################################

## WIREFRAMES

The wireframes were created on Balsmiq and were used to represent the structure and layout intended on the site

Although the final design varies slightly from the initial wireframes, these can be seen below:

![Balsamiq Computer Wireframe](assets/readme_images/computer_view.png)
![Balsamiq Phone Wireframe](assets/readme_images/phone_view.png)
![Balsamiq Tablet Wireframe](assets/readme_images/tablet_view.png)

## SITE STRUCTURE

The site is split into 2 main pages:

1. [The Main Instructions Page](index.html)

2. [The Quiz Page](quiz.html)

## DESIGN CHOICES

![Colour Scheme used on the site](assets/readme_images/real_madrid_quiz_page_colour_scheme.png)

# FEATURES

## OUTLINE

## MAIN FEATURES

### NAVIGATION BAR

![Navigation Bar Screenshot](assets/readme_images/header.png)

### FOOTER

![Footer Screenshot](assets/readme_images/footer.jpg)

### INDEX PAGE

![Index Page View](assets/readme_images/index.HTML_computer_view.png)
![Index Page Phone Landscape View](assets/readme_images/index.HTML_phone_landscape_view.png)
![Index Page Phone View](assets/readme_images/index.HTML_phone_view.png)

### QUIZ PAGE

The quiz page is set up really simply and only contains the question with a counter out of ten, and the options for the user to choose from.

![Quiz Questions Page - Phone View](assets/readme_images/quiz.HTML_phone_view.png)

The four answer options are responsive to the user hovering their mouse over them.

![Quiz Questions Page - Computer View](assets/readme_images/quiz.HTML_computer_view.png)

![Computer View](assets/readme_images/quiz.HTML_computer_view_hover.png)

Once a question has been answered, the selected answer will change colour depending on the user's choice.

If the user answers correctly then their selection will be highlighted green, and if their choice is incorrect then their choice will be highlighted in red, and the correct answer's box will go green.

![Correct Answer Computer View](assets/readme_images/quiz.HTML_computer_view_correct.png)

![Incorrect Answer Computer View](assets/readme_images/quiz.HTML_computer_view_incorrect.png)

The "Next" button is also responsive and its colours are inverted when the user hovers their mouse or taps it. However, it is only displayed once the question on the screen has been answered, with the aim being to improve the users' experience while playing. I created it this way following a comment from one of my friends who I showed the initial design to.

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

The line indicating to the user how to get back to the instructions page was added after another comment from a user I asked to try out the site and said they believed it would improve the experience and provide further clarity.

As I plan to integrate this site with my original Portfolio

## FUTURE FEATURES

The questions used in the quiz, and the file with the quiz setup and structure are stored in separate JS files:

1. [Quiz Questions and Answers File](assets/js/questions.js)

2. [Quiz Creator and Logic File](assets/js/script.js)

This way in future whenever anyone wants to add a question, update the answers or remove a question this is now easier to do.

# TESTING

## PERFORMANCE & ACCESSIBILITY

Performance testing was carried out on both pages using the [Lighthouse feature on Google Chrome's Dev Tools](https://googlechrome.github.io/lighthouse/viewer/).

<u>Instructions Page Results:</u>

![Index Page Lighthouse Results](assets/readme_images/index.HTML_lighthouse_results.png)

<u>Quiz Page Results:</u>

![Quiz Page Lighthouse Results](assets/readme_images/quiz.HTML_lighthouse_results.png)

## VALIDATOR TESTING

The W3C [Markup Validation Service](https://validator.w3.org/#validate_by_input) was used to check the HTML code on both pages, and they passed.

<u>Index.html:</u>
![index.html Validator Result](assets/readme_images/index.HTML_validator_check.png)

<u>Quiz.html:</u>
![quiz.html Validator Result](assets/readme_images/quiz.HTML_validator_check.png)

The [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to check the CSS code and it also passed.

<u>Style.css:</u>
![style.css Validator Result](assets/readme_images/style.CSS_validator_check.png)

The [JSHint Javascript Validation Service](https://jshint.com/) was used to check the Javascript files and they passed.

<u>script.js:</u>
![script.js Validator Result](assets/readme_images/script.JS_validator_check.png)

# TROUBLESHOOTING

My first issue came about when trying to create a formula which would pick 10 random numbers between 1 & 50, and using them to create an array to be used in the quiz.

I struggled getting the page to reload the 

# DEPLOYMENT

# CREDIT

## CONTENT CREDIT

Quiz Logic and Inspiration Credit:

[Javascript Youtube Tutorial](https://simplestepscode.com/javascript-quiz-tutorial/)

[How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8)

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

## ACKNOWLEDGEMENTS
