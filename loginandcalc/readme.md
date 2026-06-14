# Registration Form, Calculator and Number Comparison

This small project is part of my JavaScript and DOM learning journey.

The project combines three beginner-friendly browser features:

* A simple registration form
* A small calculator
* A number comparison tool

## Features

### Registration Form

The registration form contains:

* Username input
* Email input
* Password input
* Register button
* Output messages

The script reads the input values from the HTML fields and checks if the user entered valid data.

It validates:

* Empty username
* Empty email
* Empty password
* Password shorter than 5 characters
* Password longer than 10 characters

If all inputs are valid, the page displays a success message.

## Live User Output

The username and email fields use `oninput`.

While the user types, JavaScript reads the current values and updates the text output on the page using `.textContent`.

This helped me practice:

* Reading input values with `.value`
* Updating HTML content with `.textContent`
* Reacting to user input with `oninput`

## Calculator

The calculator uses two input fields and four buttons.

It can:

* Add two numbers
* Subtract two numbers
* Multiply two numbers
* Divide two numbers

Each button calls a separate JavaScript function.

The script uses `parseInt()` to convert the input values from strings into numbers before calculating the result.

This helped me practice:

* Functions
* Button click events
* `onclick`
* `parseInt()`
* Basic arithmetic operators
* Reusing the same input fields in multiple functions

## Number Comparison

The number comparison tool also uses the two calculator input fields.

When the user clicks the compare button, the script checks:

* If the first number is greater
* If the second number is greater
* If both numbers are equal
* If the input is invalid

The result is displayed in the browser using `.textContent`.

This helped me practice:

* `if`
* `else if`
* `else`
* Comparison operators
* DOM output
* Simple validation logic

## JavaScript Concepts Practiced

In this project, I practiced:

* `let`
* `const`
* Functions
* `onload`
* `onclick`
* `oninput`
* `document.getElementById()`
* `.value`
* `.textContent`
* `.length`
* `parseInt()`
* `if / else if / else`
* Comparison operators
* Basic DOM manipulation

## Goal

The goal of this project was to understand how JavaScript can interact with HTML elements and how user input can be used to create simple interactive web features.

This project helped me improve my understanding of JavaScript basics, DOM manipulation, input validation and event handling.
