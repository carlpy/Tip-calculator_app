# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/tipcalculator-using-sass-vanilla-js-flexbox-fVlOfMzDx) 
- Live Site URL: [Add live site URL here](https://gallant-bhaskara-99c4e7.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Vanila JS
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

In this challenge, i learn more about javascript


```js
function btnsNumber() {
    TipBtns.forEach((btn) => {
        btn.classList.remove('btn-focus');
        btn.addEventListener('click', (event) => {
            tipValue = parseFloat(btn.innerHTML) / 100;
    
            if (event.target.innerHTML == btn.innerHTML) {
                btn.classList.add('btn-focus');
                customInput.value = '';
            }
        })
    })
}
```

### Continued development

in order to become a better web developement, i'll focus on the problem solving and learning how to solve more complicated challenges


## Author

- Frontend Mentor - [@carlpy](https://www.frontendmentor.io/profile/carlpy)
