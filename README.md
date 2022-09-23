# Introduction

Hello friends, this is the solution for the Frontend test, of the document version 1.3

This react application was created with create-react-app, with Typescript Template.

## Steps to make the project run
Just clone the project, go to the root folder and run npm install,
then you are good to go with npm start.

## Solution of the auto-complete component in React

The following auto-complete component fetch data from an external API of Exhibitions, it is filtering by titles.

this solution include the following react features:

###
React Context Api: I used to share the information of the searching text and the api, and avoid props drilling.

React Custom Hooks: I used a composition of react useState and useContext to store information.

API Calls: the api in this project is a list of Exhibitions happening in the Art Institute of Chicago. This is the source of that
 following endpoints to get an idea of api usage: https://api.artic.edu/docs/#get-exhibitions-search

Simple CSS

Typescript Model: By now there is a file of model for exhibitions, with just one typing, so in the features this escalate and 
could be changed by an interfaceand add some new properties.

Basic React features.

