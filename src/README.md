# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://thunderous-cajeta-6a91d3.netlify.app](https://thunderous-cajeta-6a91d3.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- TailwindCSS
- [React](https://reactjs.org/) - JS library


### What I learned

I learnt to integrate tailwindcss into a react project. I was able to write buttons with hover states and selected states easily with react and tailwind

```html
<button className={`rounded-full text-sm ${rating === 1 ? 'bg-primary-orange text-neutral-veryDarkBlue' : 'bg-gray-700 hover:bg-white text-white'}   w-12 h-12 p-3  hover:text-neutral-veryDarkBlue`} onClick={() => setRating(1)}>1</button>
    
```

## Author

- Frontend Mentor - [@vignesh-prakasam](https://www.frontendmentor.io/profile/vignesh-prakasam)
- Twitter - [@vignesh_p](https://www.twitter.com/vignesh_p)
- LinkedIn - [Vignesh Prakasam](https://www.linkedin.com/in/vprakasam/)



