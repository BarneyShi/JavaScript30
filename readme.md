![](/JS30.png)

# Barney's Notes
### `Day1: Drum Kit`
* Use querySelector with data-attribute. <br>
`document.querySelector('audio[data-set=key]')`
* Use `transitionend` event to manipulate elements when CSS animation ended
* Use `keydown` event and `keypress` now is deprecated
* No matter `bubbling` or `capturing`, `event.target` always refers to current element instead of element that you added listeners to
* Also, I found a pretty interesting question about how to add `click` event handlers to a bunch of `<li>`. Utilize `bubbling` is the way
* Cases like using `closure` functions as event handlers.

### `Day2: Clock`
* Use `setInterval` to make an infinite loop
* Use `Date()` object and `getHours`, `getMinute`, `getSeconds` functions.

### `Day3: CSS3 Variables`
* Use pseudo element `:root` to represent <html> element. Then define CSS variables like 
```css
:root {
  --spacing: 2px 
}
```
Then you can use varirables like 
```css
img {
  padding: var(--spacing);
}
```
* The different between `inline JS` and `addEventListener`. Use `parentheses` for inline JS because it represents a function and use only `name` for addEventListener.
```javascript
// Inline JS
<input onchange="onChangehandler(event)">

// Event listener
document.querySelect('input')
.addEventListener("click", onChangehandler);
```
* Use `filter: blur(value)` to add a blurry filter to element.

### `Day4: Array Cardio`
* Use `Object.assign(target, source)` to shallow clone an array/object.
* Use `reduce` to do kinda complex operations. 
```javascript
arr.reduce((acc, cur, index, array)=> {
  // do some operations here, but remember to return acc every time.
}, initialValue)
```
* Use `str1.localeCompare(str2)` to compare strings alphabetically.
* Use `sort()`
```javascript
arr.sort((a,b)=>{
  // Ascending order
  return a - b;
})
```
* Use `console.table`

### `Day6: Type Ahead`
* Use XHR to open URL and event handlers like `onload`.
* Use `RegEx` to replace matched strings. Basic flags like `gi` means globally case insensitive.
* Use `toLocaleString('en-US')` to add thousand seperators to numbers.


### `Day8: HTML Canvas`
* Use `getContext('2d')` to set up a 2D drawing context.
* Use `beginPath()` to empty all sub-paths in list.
* Use `moveTo()` before `lineTo()` to draw continuous lines.
* Use `stroke()` to render strokes of current strokes.
* Use `hsl(hue, 100%, 50%)` to gradually change colors as mouse moving.
* Use `mousedown`, `mouseup`, `mousemove`, `mouseout` events.
* Use `window.innerWidth` and `window.innerHeight` to set up canvas size.


### `Day9: Console Domination`
* How to use `console.time("timerName")`, `console.timeEnd("timerName")`
* How to use `console.count(var)`
* How to use `console.asset(exp, resIfFalse)`
* Use `console.dir` to render objects as key/value pairs.
* How to use `console.groupCollapsed("column")` and `console.groupEnd()`

### `Day10: Shift && Checkbox`
* Use `lastChecked` to record the last checked checkbox. 
* Check if `lastChecked` is defined in click handler.
* Add an `index` property while adding event listeners.

### `Day11: HTML video tag`
* Use `event.offsetX` to get the width relative to target element.
* Use `<video>` tag properties such as `currentTime`, `playbackRate`, `volume`.
* Use `play` and `pause` function. 
* Use CSS property `flex-basis` to define width of a flex item.

### `Day12: Key sequence detection`
* Use `negative` index on `splice(start, X)` to remove X element from arrays starting from the end.
* Use `join('')` to join elements from an array into a string.

### `Day13: Slide in on Scroll`
* Difference between `window.scrollY` vs `window.innerHeight`.
* Use `element.offsetTop` to get position relative to the whole window.
* Use `element.offsetHeight` to get the height of an element.
* Use `debounce` to delay continuously calling a function in case of bad performace. 

### `Day14: Copy vs Referencing`
* Use `let new = old` to reference;
* Use `let new = Object.assign([]/{}, old)` to shallow copy.
* Use `let new = old.slice()` to shallow copy.
* Use `let new = [...old]` to shallow copy.
* Use `let new = JSON.parse(JSON.stringify(old))` to shallow copy `serializable` objects. But if some properties are `function` are `non-serializable`, those properties will be lost after shallow copying.

### `Day15: LocalStorage`
* `localStorage` can only store key/string values. So you need to do `JSON.stringify(object)` before saving it.
* Use `document.forms.forName.inputName` to get input values.
* `label` tag's `for` attribute needs to be the same as `input` tag's `name`. 

### `Day16: Mouse Move Shadow`
* Add `mousemove` to `div` instead of `window` coz they set `div` to `100vh` on purpose.
* Know the differences between `offsetLeft` vs `offsetWidth`.
* To scale `offsetX` and `offsetY` inside `div`. We need to use a factor to scale it down. 
```javascrpt
const xWalk = (left - width / 2) * factor;
const yWalk = (top - height / 2) * factor;
```
* `(left - width / 2)` would be the position and multiply it by `factor` is how much it is relative to the half part of `div`.

### `Day17 : Sort without Articles`
* Regex expression like `/^(a |the |an)/i` which means strings start with articles.
* Use `sort`, return `-1` if you want to keep the order. 
# JavaScript30

Starter Files + Completed solutions for the JavaScript 30 Day Challenge.

Grab the course at [https://JavaScript30.com](https://JavaScript30.com)

## Community #JavaScript30 Content

Feel free to submit a PR adding a link to your own recaps, guides or reviews!

* [Arjun Khode’s blog](http://thesagittariusme.blogspot.com/search/label/JS30) about summaries for each day, including fixed glitches, bugs and extra features
* [Nitish Dayal's Text Guides](https://github.com/nitishdayal/JavaScript30) are great for those who like reading over watching
* [Meredith Underell's](http://meredithunderell.com/tag/javascript30/) Quick Lessons Learned
* [Rowan Weismiller's](http://rowanweismiller.com/blog/javascript-30/) Recaps + Lessons Learned
* [Thorsten Frommen](https://tfrommen.de/tag/javascript-30/) shares how he solved the exercises before viewing the answers
* [Soyaine 写的中文指南](https://github.com/soyaine/JavaScript30)包含了过程记录和难点解释
* [Ayo Isaiah's](https://freshman.tech/archive/#javascript30) Recaps and Lessons Learned
* [Adriana Rios](https://stpcollabr8nlstn.github.io/JavaScript30/) shares her alternative solutions
* [Michael Einsohn](http://30daysofjs.michaeleinsohn.com) publishes each challenge after watching the video once
* [Mike Ekkel](https://medium.com/@mike_ekkel/javascript-30-a-30-day-vanilla-js-challenge-6a733fc9f62c#.9frjtaje9)
* [Yusef Habib](https://github.com/yhabib/JavaScript30) lessons and tricks learned, and a [gh-page](https://yhabib.github.io/JavaScript30/) to see working all the mini-projects.
* [Amelie Yeh](https://github.com/amelieyeh/JS30) 30 lessons notes with things I've learned, and those important recaps. and directly view my demos [here](https://amelieyeh.github.io/JS30/) 🇹🇼😄
* [Winar](https://github.com/winar-jin/JavaScript30-Challenge)的JavaScript30天挑战，记录练习过程，重难点和其他的解决方案。🎨
* [Rayhatron](https://rayhatron.github.io/blog/) - walkthroughs, recaps and lessons learned.
* [Andrei Dobra](https://github.com/andreidbr/JS30) Full repo with lessons learned and a [gh-page](https://andreidbr.github.io/JS30/) with all the exercises.
* [从零到壹全栈部落](https://github.com/liyuechun/JavaScript30-liyuechun),春哥发起的从零到壹全栈部落，旨在带领大家一起学习，一起输出，文档化，代码化，中文视频化，全栈部落口号：输出是最好的学习方式。
* [Usmaan Ali's](https://github.com/usyyy/javascript/blob/master/JavaScript30/analysis.md) summary of the technical skills learned from each project. He's also posting them as separate blog posts [here](https://medium.com/@usyyy)
* [Axel](https://github.com/afuh/js30)'s lessons learned and a [showcase](https://afuh.github.io/js30/) with the projects.
* [Chris](https://github.com/dwatow/JavaScript30) 中文實戰，目標描述、過程紀錄。
* [Muhammad D. Ramadhan's](https://miayam.github.io) blog. He shamlesly mixed his personal life with 30 day JavaScript challenge so as to increase his learning retention. He also summarised the challenge on [one single page](https://miayam.github.io/js30). Do not read his blog!
* [Lee Keitel's Blog](https://blog.keitel.xyz/categories/javascript30/) includes summaries of each lesson, what I learned from each one, and my thoughts about the topic taught and using them in the future.
* [Dustin Hsiao](https://github.com/dustinhsiao21/Javascript30-dustin) 包含了各篇介紹、 效果Demo、各篇詳解及記錄過程，附上部分延伸閱讀及[gh-page](https://dustinhsiao21.github.io/Javascript30-dustin/)。
* [GuaHsu](https://github.com/guahsu/JavaScript30) - 紀錄各篇練習過程與心得，並嘗試擴充部分練習，也做了一個包含全部練習的[介紹站](http://guahsu.io/JavaScript30/)🇹🇼
* [Daniela](https://github.com/misslild)'s completed challenges on [GitHub Pages](https://misslild.github.io/WesBos-30day-Coding-challenge/) and [Codepen](https://codepen.io/collection/DapZeP/) :raised_hands: :muscle: :+1:
* [Dmitrii Pashutskii's](https://github.com/guar47) code of all challenges on [GitHub with Pages](https://github.com/guar47/javascript30Summary) and review [blog posts](https://blog.dpashutskii.com/tag/javascript30/)
* [Abid Hasan's](https://github.com/sabidhasan/javascript-30) completion of all challenges. This was awesome!! Learned so much! :+1:
* [Yusong Notes](https://sky172839465.github.io/course/js30) Records Yusong JS 30 days note and demo :star2:
* [Ding's Implementation](https://github.com/Ding-Fan/javascript30) code and online demo
* [Herminio Torres](https://github.com/herminiotorres/JavaScript30) lessons and tricks learned, and a [gh-page](https://herminiotorres.github.io/JavaScript30/) to see working all the mini-projects.
* [Dmytro Borysovskyi](https://github.com/dimabory) says many thanks to for the course to Wes 🤝 It was incredible challenge 👌 The full repository with code available [here](https://github.com/dimabory/dimabory.github.io/tree/gh-pages/src/components/JavaScript30Days) and demos can be reached by the link to [gh-pages](https://dimabory.github.io/#/js30days) 👍👍👍 
* [Kizito](https://github.com/akhilome/)'s follow along [repo](https://github.com/akhilome/js30) with [completed challenges](https://akhilome.github.io/js30) and [notes](https://akhilome.github.io/js30/notes).
* [VannTile](https://github.com/vanntile)'s [repository](https://github.com/vanntile/JavaScript30) and [GitHub Pages showcase](https://vanntile.github.io/JavaScript30/). Thank you for a great ⌨️ experience.
* [Alex Kim](https://github.com/Alex-K1m/js30-challenge) completed all the challenges. You can check them out at [github pages](https://alex-k1m.github.io/js30-challenge/).
* [Mikhail Thomas](https://github.com/seckela) created [JS30++](https://github.com/seckela/js30plusplus) to add another level of challenge ontop of this already great course.
* [Ramon Morcillo](https://github.com/reymon359/JavaScript30) finished this awesome challenge!. You can see the showcase of his implementations on [this link](https://reymon359.github.io/JavaScript30/).
* [Santiago Escobar](https://github.com/sescobar99)'s [repository](https://github.com/sescobar99/javascript30-challenge) and [GitHub Pages showcase](https://sescobar99.github.io/javascript30-challenge/).
* [Harry Xie](https://github.com/a90100/JavaScript30) 紀錄 30 天的練習筆記在 [此連結](https://github.com/a90100/JavaScript30).
* [ Van Ribeiro's ](https://vanribeiro-30daysofjavascript.netlify.app/) about demos and recaps. On [GitHub Repo](https://github.com/vanribeiro/30days-Of-JavaScript) there's a summary about what was learned and researched.
* [Mugilan](https://github.com/Mugilan-Codes) is currently doing this challenge. Check out his [Repo](https://github.com/Mugilan-Codes/javascript-30) and the [Live Demo](https://mugilan-codes.github.io/javascript-30/).
* [Eshan Vohra](https://github.com/eshanvohra) is currently doing this challenge. Check out my repo [here](https://github.com/eshanvohra/JavaScript30).
* [RegusAl](https://github.com/RegusAl) is currently doing this challenge. Check out my repo [here](https://github.com/RegusAl/JavaScript30).
* [Ayush Gupta's](https://javascript30.ayushgupta.tech/) implementation of JavaScript30 challenge with some add-ons & updated design.


## Alternative Implementations
Here are some links of people who have done the tutorials, but in a different language or framework:

* [Thomas Mattacchione](https://github.com/tkjone/clojurescript-30) JavaScript 30 written in ClojureScript
* [Dave Follett's](https://github.com/davefollett) blog series, [A New Vue on #JavaScript30](https://davefollett.io/categories/a-new-vue-on-javascript30/), where he explores re-implementing #JavaScript30 projects using [Vue](https://vuejs.org).
* [Akinjide Bankole](https://github.com/akinjide/JS30days) used Node.js with [Jade](http://jadelang.net) to solve the exercises
* [Adrien Poly](https://github.com/adrienpoly/javascript30-stimulus) a modest attempt to convert Drum Kit, Video Player, Local Tapas, TypeHead to [Stimulus JS](https://stimulusjs.org/) framework in a Rails App.
* [Bogdan Lazar](https://github.com/tricinel/TypeScript30) all the JavaScript 30 written in [TypeScript](https://www.typescriptlang.org/)
* [Will Wager](https://github.com/wwags33/JavaScript30) another [TypeScript](https://www.typescriptlang.org/) implementation!
* [marcoSven](https://github.com/marcoSven) solution suggestion for [10 - Hold Shift and Check Checkboxes](https://github.com/marcoSven/JavaScript30/blob/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index-FINISHED.html)
* [ALMaclaine](https://github.com/almaclaine) Javascript 30 written in [Dart 2.0](https://github.com/ALMaclaine/Dart30).
