# Random Password Generator

## Developer Note
In solving this week's homework, I relied heavily on the reviewing the work of others, building an understanding of how their programs worked, and then applying that code to my own file.

This video provided a better understanding of what the assignment was, how to break it down its components, and where to start with building back up with pseudo-code:
https://www.youtube.com/watch?v=x4HUaiazDes&t=8s

While I found there were many availble repositories on Github to review, this individuals's work was particularly helpful: https://github.com/jamierachael/Password-Generator

Likewise, I used this video as a guidepost as I reconstructed the code from my sources:
https://www.youtube.com/watch?v=v2jfGo7ztm8

Lastly, I leveraged a tutor to review the assignment one last time and discuss if I was on the right track with my approach to learning how to complete these assignmetns.


## User Story
AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security

## Acceptance Criteria
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more 
than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character 
type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page