---
Level Descriptions
---

1-settings
---
The settings folder contains all of your site variables. Colours, widths, spacing values etc. These should be global and not produce css. Global, high reaching stuff

2-tools
---
The tools folder contains your mixins and functions. Any media query mixins, font mixins etc should go in here. Again, these shouldn't produce any css. Global, high reaching stuff.

3-generic
---
The stylesheets in the generic folder are there to return styles to a default state; 'ground zero styles'. Stuff like Normalize.css reset.css will go in here, along with styles such as border-box which applies to the entire DOM.

4-elements
---
Elements is for styles applied to default elements 'type selectors. Styles for all elements without a class will go in here. This is the last time will we see any styles for unclassed elements in our triangle

5-objects
---
The object folder is where we start breaking out the decoration. This folder should contain far-reaching, generic style groups; more object oriented, reusable styles. Exmaples could include a default 3 column list, a call-to-action row, styles for basic buttons etc

6-components
---
components is for the most specific elements. This should use classes that can't be used elsewhere. The stlesheets may tend to be layout specific and named after the page they're on

7-utilities
---
utilities is for overrides and helpers, they will usually carry an !important. Stuff like...

one-half {
    width: 50%!important
}

bg-grey {
    background-color: grey!important;
}

Classes that only ever mean one thing, and are important to override anything previously in the stylesheet


---
Resources
---

Harry Roberts - Managing CSS Projects with ITCSS
https://www.youtube.com/watch?v=1OKZOV-iLj4

Presentation Slides
http://csswizardry.net/talks/2014/11/itcss-dafed.pdf

Atomic OOBEMITSCSS
https://www.sitepoint.com/atomic-oobemitscss/

ITCSS overview
https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

Inuit CSS
https://github.com/inuitcss/inuitcss




