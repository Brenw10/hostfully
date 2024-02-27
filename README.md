# Hostfully Test

## Overview
The idea of this project is to have a website where we can register bookings.

This project allows users to read, create, update and delete their bookings, this project also contains some validations to avoid duplicating bookings during the same dates.

## How to install the project
First, make sure you have the latest node and npm versions installed.

Second, execute `npm install` to install all necessary packages.

## How to run the dev mode
Execute in your terminal the command:
`npm run dev`

## How to execute the tests
Execure in your terminal the command:
`npm run test`

## Architecture

To store the state globally this project is using context + reducers to manage bookings data.

To validate the booking correctly this project is using the react hook form library to validate and also using built-in props provided by the Ant Design Library + day.js to avoid duplicated dates.

This project is using Ant Design to quickly build beatiful screens and a good user experience.