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

This project was designed to be used as a quiz game which a User can play.

I created the quiz around the current Real Madrid Team and the Club's history because my intention is for it to be an extension to my first portfolio website which is linked below:

- [**_Real Madrid Page_**](https://j95ortiz.github.io/Real-Madrid-Portfolio-project-1/index.html)

- [**_Real Madrid Github Repository_**](https://github.com/J95Ortiz/Real-Madrid-Portfolio-project-1)

It was built and set up so anyone who plays it feels they are playing a game. Originally I'd wanted the Real Madrid Site I built to have a game side to it, so that Uusers felt there was a fun element to the Site rather than it just being informative. However at the time I wasn't able to create this as my knowledge of Javascript was incredibly limited.

The Quiz Site is now fully operational so feel free to have a go and test your Real Madrid Trivia knowledge by following the link below:

- [**_Real Madrid Quiz_**](https://j95ortiz.github.io/Real-Madrid-Quiz/)

# USER EXPERIENCE

## OVERVIEW

The User's experience was put at the forefront of the design of this page, however there are some features which I want to add in future and I have referred to these in the [Future Features Section](#future-features).

Once the Quiz Site is linked to the main Real Madrid Site and these features have been implemented, I believe the User's experience will be even better.

## WIREFRAMES

The wireframes were created on [Balsamiq](https://balsamiq.com/wireframes/) and were used to represent the structure and layout intended on the site.

Although the final design varies slightly from the initial wireframes, these can be seen below:

![Balsamiq Computer Wireframe](assets/readme_images/computer_view.png)
![Balsamiq Tablet Wireframe](assets/readme_images/tablet_view.png)
![Balsamiq Phone Wireframe](assets/readme_images/phone_view.png)

## SITE STRUCTURE

The site is split into 2 main pages:

1. [**The Main Instructions Page**](index.html)

2. [**The Quiz Page**](quiz.html)

The Results Screen will be displayed to the User once they have completed the quiz, but is part of the [quiz.html](quiz.html) file.

The code in [script.js](script.js) checks whether all the questions have been answered using the _displayNext()_ & _resetState()_ functions. Once this is done, by combining these functions with the _gameScore()_ function, the question element is replaced with the User's score. The User will also see a message is displayed alongside the score which changes depending on how many questions they got right.

The questions used in the quiz, and the file containing the quiz structure and logic are stored in separate JS files:

1. [**Quiz Questions and Answers File**](assets/js/questions.js)

2. [**Quiz Creator and Logic File**](assets/js/script.js)

This way in future whenever anyone wants to add a question, update the answers or remove a question it is easier to do.

## DESIGN CHOICES

This Real Madrid Quiz Site was designed to feel like an extension of the Real Madrid Page built for my first Portfolio Project.

On that page I took inspiration from some of my favourite kits and mainly used a Navy, Black and Gold colour theme. I've therefore tried to maintain this colour scheme consistent by applying a similar one to the Quiz Site.

![Colour Scheme used on the site](assets/readme_images/real_madrid_quiz_page_colour_scheme.png)

Some of the feedback following the submission of the first project was that the Site sometimes felt too cluttered with too much going on, and it may have been hard at times for a User to focus on something specific, and could even make them feel overwhelmed. In order to mitigate this, the main design change I did was to make the background image larger. This way it doesn't feel like there's so much going on in the background making the site feel cleaner and less busy.

I will also apply this change to the Madrid Site Project so as to make all the pages of the site feel consistent.

# FEATURES

## OUTLINE

Even though the site has only two main pages, the main intention is that from a User's perspective it will feel like there are three parts:

1. [_Instructions_](#index-page)

2. [_Quiz Questions_](#quiz-page)

3. [_Result Screen with score, message and "Play Again" button_](#results-screen)

## MAIN FEATURES

### NAVIGATION BAR

The Navigation Bar is very simple as I based the code off the Real Madrid Site I created, but I removed the links to the other pages as this would confuse users who might try to access pages which haven't been linked at this stage.

If the User wants to, they can return to the Instructions Page by clicking or tapping on the logo or the text next to it, and this is also communicated to the user on the Results Screen.

On the Original Real Madrid Project the elements were spread out in the Navigation Bar, but on this occasion I thought it looked better to place the content centrally as there aren't any other links.

I checked with a couple of friends who I had asked to test the site which layout they preferred and they all agreed it looked better with the existing links in the middle of the Bar.

![Navigation Bar Screenshot](assets/readme_images/header.png)

As a result, the Navigation Bar looks simple and clean, with no unnecessary links or icons which might confuse a user.

When this site is linked to the Real Madrid Project, the aim is that the User will also see links in the Navigation Bar to the Homepage, Squad Page and Lotto Form, which they can then use to navigate the full site.

### FOOTER

The User will find links to Real Madrid's Official Social Media Channels on the footer, and these are displayed with icons so they knows which Social Media site they are accessing.

![Footer Screenshot](assets/readme_images/footer.jpg)

These links open in a new tab when actioned, so as to give the User more autonomy and control over how they choose to navigate the Site.

The Footer will be displayed across all the pages a user sees, so even if they are halfway through a quiz game, or on the results screen, they are able to access these links, giving them full control.

### INDEX PAGE

This is the first screen the User will see when they access the quiz. All it contains are some simple instructions and a button with which the User can start the quiz.

It is simply laid out and the instructions box and text have been styled and tested across different sized screens so that it looks good consistently.

![Index Page View](assets/readme_images/index.HTML_computer_view.png)

I also added media queries to the CSS code in order to make the site responsive, which it is across different sized screens, and also takes into account whether the device the User is operating is in landscape or portrait mode.

![Index Page Phone Landscape View](assets/readme_images/index.HTML_phone_landscape_view.png)

![Index Page Phone View](assets/readme_images/index.HTML_phone_view.png)

I created this page following some feedback from my Mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/).

When I originally designed the Quiz I hadn't thought of including an Instructions Page as it seemed obvious to me that a User accessing the site would know what it would be about and what to do.

This screen gives the user a chance to read through the instructions. That way they will know that there are only 10 questions, and that some of these might be repeated which would have otherwise caused some confusion.

It also gives the user control in the sense that they are able to start the quiz whenever they want by pressing the start button instead of being chucked straight into the game when accessing the Site.

Now it has been added I believe that from a User's perspective, not jumping straight into the quiz is a better way to set the Site up.

Users I got to test the Site also confirmed that knowing in advance that some of the questions might get repeated made their experience better. They explained that as they now knew about this, if a question did come up more than once they felt like it was deliberate.

They also mentioned that getting the same question twice after it had been stated in the instructions made them feel like they had a chance to increase their score if they'd answered correctly, or as a second chance to get the answer right if they hadn't.

This was an improvement to the site as the feedback from test subjects was consistently positive following this addition.

### QUIZ PAGE

The Quiz Page is set up simply and contains a box with the quiz title, the question, a counter out of ten so the Users know which question they're on, and the answer options below.

![Quiz Questions Page - Computer View](assets/readme_images/quiz.HTML_computer_view.png)

![Quiz Questions Page - Phone View](assets/readme_images/quiz.HTML_phone_view.png)

Under the quiz title, the question is displayed and alongside a counter so the User can see which question they are currently on. In future I would like to add a feature where the User chooses how many questions come up in the quiz.

Below the question, a User will find the answer options split into four separate boxes. These have been styled in contrast to the box they are in so that they stand out. This ensures that there is a clear distinction between the question and answer sections.

In order to further improve the User's experience on the site, I made the four answer options responsive and their colour is inverted when they are hovered over with the mouse.

This also works for phones and tablets, although as a future feature I'd also like to add is making these more responsive to touch actions, as well as the mouse hover actions currently.

![Quiz Questions Page - Computer View](assets/readme_images/quiz.HTML_computer_view.png)

![Computer View](assets/readme_images/quiz.HTML_computer_view_hover.png)

Once a question has been answered, the selected answer will change colour depending on the User's choice.

If the User answered correctly, then their selection will be highlighted in green. If their choice was incorrect, then their choice will be highlighted in red and the correct answer's box will turn green. That way the now know the correct answer, and if the question does come up again, they've got a better chance of getting it right this time.

![Correct Answer Computer View](assets/readme_images/quiz.HTML_computer_view_correct.png)

![Incorrect Answer Computer View](assets/readme_images/quiz.HTML_computer_view_incorrect.png)

The "Next" button is also responsive and the colours are inverted when the user hovers their mouse or taps it. However, it is only displayed once the question on the screen has been answered, with the aim being to improve the Users' experience while playing. I created it this way following a comment from one of my friends who had seen the initial design.

They suggested that if the button was visible to a user, they might try and skip a question if they didn't know the answer, which would most likely affect their experience on the Site.

To prevent a user skipping the question altogether and prompt them to at least have a guess, the "Next" button is only visible and actionable once the question has been answered. This way the User might actually get the answer right even if they guessed it, giving them a better experience on the platform.

![Next Button Computer View Hover](assets/readme_images/quiz.HTML_computer_view_correct_nextBtn_hover.png)

### RESULTS SCREEN

The Results Screen design is intended to be consistent with the rest of the site by maintaining the same colour scheme and a similar layout to the Instructions and Question pages.

Once a user gets to this screen, the display will show them how many questions they answered correctly, directions on how to go back to the instructions page and a personalised message which changes depending on their score.

The "Play Again" button is styled and when hovered over is responsive in the same way the "Next" button is.

![Results Screen Computer View](assets/readme_images/quiz.HTML_result_computer_view.png)
![Results Screen Hover Computer View](assets/readme_images/quiz.HTML_result_computer_view_hover.png)

![Results Screen Landscape Phone View](assets/readme_images/quiz.HTML_result_phone_landscape_view.png)
![Results Screen Landscape Phone View Hover](assets/readme_images/quiz.HTML_result_phone_landscape_view_hover.png)

![Results Screen Phone View](assets/readme_images/quiz.HTML_result_phone_view.png)
![Results Screen Hover Phone View](assets/readme_images/quiz.HTML_result_phone_view_hover.png)

I decided to add a personalised message to this screen as I thought that from a user's point of view just having their score wasn't enough and adding this feature seemed like a good way of improving their experience. I therefore created three different messages, and the User will see a different one depending on their final score.

If they score higher than 7 the message will look like this:
![Final Result Message 1](assets/readme_images/quiz.HTML_result_galactico_message.png)

If they score between 5 and 7, the message displayed will look like this:
![Final Result Message 2](assets/readme_images/quiz.HTML_result_not_bad_message.png)

And if they score less than 5, the message displayed alongside their score will look like this:
![Final Result Message 3](assets/readme_images/quiz.HTML_result_Hazard_message.png)

The line indicating to the user how to get back to the instructions page was added after some feedback from my Mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/), who said he believed it would improve their experience and provide further clarity on how to navigate the Site.

My plan is to add another button in future that sits alongside the "Play Again" one which says "Back to the Homepage". I believe that adding this would make the Results message stand out more to a user and probably make the site feel more streamlined and responsive.

## FUTURE FEATURES

My plan ultimately is to link the Quiz Site to the Real Madrid Site I created for my first project. Once this is done the User should feel that the Quiz is an extension of the Madrid Site, rather than its own standalone project.

As a result, there are quite a few features I want to implement in future that I've been unable to so far. I'll continue working on this project once I've received my grades and by then I should be capable, and have the time to carry out all these changes.

- Once I've linked both projects, in order to make the whole site consistent I'll have to change the Navigation Bar's layout and add links to the other pages of the site. It would still behave in a similar way to now, but the new layout and links would be consistent across the whole site, meaning the User could then access different pages directly from the Navigation Bar.

- As mentioned in the previous section, once both projects have been linked, I'd like to add another button with a link to the Madrid Project Home Page next to the "Play Again" button on the results screen.

- A further addition I'd like to implement is to make the "Play Game" button in the instructions page responsive, just like the "Next" and "Play Again" buttons are.

- I'd also like to add a counter on the side so that the user sees how many questions they've got right while they're playing.

- I'd like to include an input field in the instructions page where the user can tell the computer how many questions they want in the quiz, and then the formula in [script.js](script.js) then takes this input and displays however many questions the user chooses, rather than always being a set of 10 questions. This idea came about as a result of feedback received from one of my friends who tried out the site. As they're not into football they said that a User with a similar mindset might feel that 10 questions are too many and would get bored or quit halfway through. On the flip side, a User who is into this might want to have more than just 10, so giving them the ability to choose how many questions they answer would be a good addition and improve their experience.

- Once I'm more capable I'd also like to tweak the CSS and Javascript code slightly in order to make the buttons as responsive on mobile and tablets as they currently are on computer screens. When carrying out testing I noticed that the hover effect didn't work as well, or look as good on devices without a mouse as they did on a computer screen.

- I'd also like to amend the _setupQuiz()_ function in [script.js](script.js) so that the questions aren't repeated, although I did look into it and couldn't find a way of getting round duplicates when creating an array with random numbers using _Math.random()_.

Further details on some of these features can be found in the [Troubleshooting Section](#troubleshooting).

# TESTING

## PERFORMANCE & ACCESSIBILITY

Performance testing was carried out on both pages using the [Lighthouse feature on Google Chrome's Dev Tools](https://googlechrome.github.io/lighthouse/viewer/).

_Instructions Page Results:_
![Index Page Lighthouse Results](assets/readme_images/index.HTML_lighthouse_results.png)

_Quiz Page Results:_
![Quiz Page Lighthouse Results](assets/readme_images/quiz.HTML_lighthouse_results.png)

The site was designed to look good across different sized screens with the help of Google Chrome's Developer Tools.

Once the design and content was finalised I asked people I know who have access to tablets and different sized laptops and phones to try out the site and let me know their feedback. Following the feedback received, the changes were implemented and I asked them to test the site again.

## VALIDATOR TESTING

The W3C [Markup Validation Service](https://validator.w3.org/#validate_by_input) was used to check the HTML code on both pages and they passed.

_Index.html:_
![index.html Validator Result](assets/readme_images/index.HTML_validator_check.png)

_Quiz.html:_
![quiz.html Validator Result](assets/readme_images/quiz.HTML_validator_check.png)

The [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to check the [style.css](style.css) file and it also passed.

_Style.css:_
![style.css Validator Result](assets/readme_images/style.CSS_validator_check.png)

The [JSHint Javascript Code Quality Tool](https://jshint.com/) was used to check the Javascript [script.js](script.js) file and it passed.

_Script.js:_
![script.js Validator Result](assets/readme_images/script.JS_validator_check.png)

# TROUBLESHOOTING

My first issue came about when trying to create a formula which would pick 10 random numbers between 1 & 50, and using them to create an array to be used in the quiz. My main problem here was that I was unable to stop the computer from occasionally picking the same value more than once.

Despite looking into this for hours and changing the formula multiple times I'm still unable to make it work without there being a chance of the same question coming up twice. The closest I managed to get to was using _indexOf()_, however when I used this method the number of questions displayed went down by one each time the page was reloaded.

For now, adding the message in the instructions page saying that the same question might come up more than once has resolved the issue from a User's perspective, however it is something that has really bugged me and I will keep looking into it as I'm sure there shoud be a way of iterating through the array created in _setupQuiz()_, replace any duplicate values with another value, and then repeat the process until all the values in the array are still random but different each time.

Another bug I encountered but was able to resolve, was getting the page to reload the quiz with different questions to the ones a User would have answered when they pressed "Play Again". I was able to resolve this by amending the _gameScore()_ function, and rather than calling the _setupQuiz()_ function, I asked the computer to reload the page.

# DEPLOYMENT

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the _Settings_ tab.

- From the _source_ section drop-down menu, select the _Master Branch_.

- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the deployment has been successful.

The live link can be found here - https://j95ortiz.github.io/Real-Madrid-Quiz/

# CREDIT

## CONTENT CREDIT

Quiz Logic and Inspiration Credit:

- [Javascript Youtube Tutorial](https://simplestepscode.com/javascript-quiz-tutorial/)

- [How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8)

- [Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k)

Quiz Question Content Credit Links:

- [Free Pub Quiz Question Ideas](http://www.freepubquiz.co.uk/real-madrid.html)

- [Real Madrid Trivia Template | LivePolls | QuestionPro](https://www.questionpro.com/livepolls/templates/real-madrid-trivia-questions/)

- [Marca Article](https://www.marca.com/en/football/real-madrid/2021/06/17/60ca692722601d4f438b4696.html)

- [Bleacher Report Article on Gareth Bale](https://bleacherreport.com/articles/10061039-gareth-bale-retires-at-33-won-champions-league-5-times-with-real-madrid#:~:text=The%2033%2Dyear%2Dold%20is,in%20a%20nine%2Dyear%20stretch.&text=He%20also%20played%20for%20Tottenham,FC%20at%20the%20club%20level)

- [Transfermarkt Gareth Bale Page](https://www.transfermarkt.co.uk/gareth-bale/leistungsdatenverein/spieler/39381)

- [Planet Sport Casillas Page](https://www.planetsport.com/soccer/iker-casillas)

- [Transfermarkt Casillas Page](https://www.transfermarkt.co.uk/iker-casillas/leistungsdatenverein/spieler/3979)

- [Sergio Ramos Wikipedia Page](https://en.wikipedia.org/wiki/Sergio_Ramos)

- [Transfermarkt Sergio Ramos Page](https://www.transfermarkt.co.uk/sergio-ramos/alletore/spieler/25557/plus/0?saison=&verein=418&liga=&wettbewerb=&pos=&minute=&pos=&torart=&stand=)

- [Real Madrid Official Site Sergio Ramos Page](https://www.realmadrid.com/en-US/the-club/history/football-legends/sergio-ramos-garcia)

- [Real Madrid Official Site Cristiano Ronaldo Page](https://www.realmadrid.com/en-US/the-club/history/football-legends/cristiano-ronaldo-dos-santos-aveiro)

- [Transfermarkt Zidane Page](https://www.transfermarkt.co.uk/zinedine-zidane/alletore/spieler/3111/plus/0?saison=&verein=418&liga=&wettbewerb=&pos=&minute=&pos=&torart=&stand=)

- [Transfermarkt Eden Hazard Page](https://www.transfermarkt.co.uk/eden-hazard/leistungsdatenverein/spieler/50202)

- [Transfermarkt Raul Gonzalez Page](https://www.transfermarkt.co.uk/raul/erfolge/spieler/7349)

## MEDIA CREDITS

- The favicon images were created using the [Favicon Generator](https://realfavicongenerator.net/).

- The imagesz for the links in the footer were obtained from the [Font Awesome Website](https://fontawesome.com/search?o=r&m=free).

- The colour Palette image was created using [Colors.co](https://coolors.co/).

## ACKNOWLEDGEMENTS

I would like to mention my Mentor, [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his support and feedback during the building process. His input and comments on how to improve the site helped me streamline the process, and his suggestion to add an instructions page was a great idea which I'm glad I've implemented as it gives the site a better feel from a User's perspective.

I would also like to add a further thank you to the Student Support Team at Code Institute for their assistance so far on the course.
