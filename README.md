# LCar - Leasing Car Simulator

This project is the result of a challenge, which consisted in creating a leasing car simulator web page.
Essentially LCar is a car leasing simulator web page, that has a form with 2 inputs, and after calculating the value, the form can be submitted. It's composed of two pages and connected to a node.js RESTfull API, called lcar-api.

Website: https://andre-rd-rodrigues.github.io/lcar/
API: https://lcar-api.herokuapp.com/

## Structure

This project is composed by two pages (main components):

### Homepage

Default page where user lands after opening the page.
By clicking in `Get Started`, user gets redirected to the Leasing component.

### Leasing

Composed by a form that takes 2 inputs: monthDuration and amountFinanced.
`Calculate` button, sends a POST request and retrieves the monthly fee value.
`Submit` opens a confirmation modal and if confirmed, send a POST request to submit the values.

## Hosting

### lcar-api

Simple node.js API created locally and hosted in heroku.

### Lcar

Hosted with github pages, from gh-pages branch.
