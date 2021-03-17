<div align="center">
	<h1>Pokemon Challenge</h1>
	<br>
	<p align="center">
		<a href="https://www.linkedin.com/in/felipejsborges/">
		  <img alt="made by" src="https://img.shields.io/badge/made%20by-Felipe%20Borges-orange">
		</a>
		<a href="https://github.com/felipejsborges/pokemon-challenge/commits/master">
		  <img alt="last commit" src="https://img.shields.io/github/last-commit/felipejsborges/pokemon-challenge">
		</a>
		<a href="https://github.com/felipejsborges/pokemon-challenge/issues">
			<img alt="issues" src="https://img.shields.io/github/issues/felipejsborges/pokemon-challenge">
		</a>
		<a href="https://github.com/felipejsborges/pokemon-challenge/network/members">	
			<img alt="forks" src="https://img.shields.io/github/forks/felipejsborges/pokemon-challenge">	
		</a>
		<a href="https://github.com/felipejsborges/pokemon-challenge/stargazers">
			<img alt="stars" src="https://img.shields.io/github/stars/felipejsborges/pokemon-challenge">
		</a>
		<a href="https://github.com/felipejsborges/pokemon-challenge/blob/master/LICENSE.md">
			<img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT">	
		</a>
		<!-- version, status da build, status dos testes -->
	</p>
	<br>
	<img src="/.github/banner.jpg" alt="banner" width="80%" />
</div>


<br>

<h4 align="center">   
	<a href="#description-">Description 📄</a>		|    
	<a href="#technologies-">Technologies 🚀</a>		|    
  	<a href="#how-to-run-it-on-your-computer-%EF%B8%8F">How to run it on your computer 🖥️</a>		|   
	<a href="#using-app-">Using app 📡</a>
</h4>

<hr>

<h4>Description 📄</h4>
  
This application was developed in order to learn and practice GraphQL and Mongoose. To do that, I based on a Pokemon Challenge. What I had to do is:
- Download a CSV File with all pokemons and their attributes: [Download CSV FIle](https://www.kaggle.com/rounakbanik/pokemon).
- Create a script to populate database with this data.
- Create a GraphQL query that allow to show 10 random pokemons. And it needs to be possible to filter pokemons by attributes.
- Save the randomly generated pokemons in a collection.
- Avatar picture upload for pokemons.
- Register trainers that could have 7 pokemons maximum.

<hr>

<h4>Technologies 🚀</h4>

- [TypeScript](https://www.typescriptlang.org/docs/)
- [Node.js](https://nodejs.org/en/docs/)
- [TypeGraphQL](https://typegraphql.com/docs/introduction.html) + [Express](https://expressjs.com/)
- [Mongoose ODM](https://mongoosejs.com/docs/guide.html) + [MongoDB](https://docs.mongodb.com/)

<hr>

<h4>How to run it on your computer 🖥️</h4>

- Install [Node.js](https://nodejs.org/en/download/), [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) (or use npm), [Docker](https://docs.docker.com/get-docker/), and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), then:

```
# clone this repo
$ git clone https://github.com/felipejsborges/pokemon-challenge.git

# go to the folder
$ cd pokemon-challenge

# install dependencies
$ yarn

# create a MongoDB container on docker
$ docker run -p 27017:27017 -d mongo

# run the server
$ yarn start:dev
```
- [Access GraphQL playground](http://localhost:4000/graphql)

<hr>

<h4>Using app 📡</h4>
- GraphQL provides a automatic documentation that could be consulted to see all possible requests

- Most queries could be executed on GraphQL playground. But file upload must be done using Insomia or Postman: [Click here](.github/insomnia.json), copy the content, create .json with it, and import it on [Insomnia](https://insomnia.rest/)

<hr>

by Felipe Borges<br>
<div>
	<a href="https://www.linkedin.com/in/felipejsborges">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/linkedin.svg" alt="LinkedIn">
	</a>
	<a href="https://www.youtube.com/channel/UC6tN_loxPGOP30LWNbJM7rg">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/youtube.svg" alt="YouTube">
	</a>
	<a href="https://wa.me/+55012996477129">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/whatsapp.svg" alt="WhatsApp">
	</a>
	<a href="mailto:felipejsborges@outlook.com">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/mail.svg" alt="E-mail">
	</a>
</div>
