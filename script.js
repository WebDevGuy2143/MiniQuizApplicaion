// DOM Elements
const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz questions organized by category
const quizData = {
  "web-dev": [
  {
      question: "What is the primary purpose of semantic HTML?",
      answers: [
          { text: "To improve SEO rankings", correct: false },
          { text: "To enhance visual styling", correct: false },
          { text: "To provide better structure and accessibility", correct: true },
          { text: "To reduce loading times", correct: false }
      ]
  },
  {
      question: "Which CSS property controls the stacking order of elements?",
      answers: [
          { text: "z-index", correct: true },
          { text: "position", correct: false },
          { text: "layer", correct: false },
          { text: "depth", correct: false }
      ]
  },
  {
      question: "What is the difference between null and undefined in JavaScript?",
      answers: [
          { text: "null represents an uninitialized variable, undefined represents an empty value", correct: false },
          { text: "null represents an empty value, undefined represents an uninitialized variable", correct: true },
          { text: "null and undefined are interchangeable", correct: false },
          { text: "null is only used in TypeScript", correct: false }
      ]
  },
  {
      question: "In HTML, where does the <title> element belong?",
      answers: [
          { text: "Between the <head> and <body> elements", correct: false },
          { text: "In the <head> section", correct: true },
          { text: "After the <body> element", correct: false },
          { text: "Before the <body> element", correct: false },
      ]
  },{
      question: "How many heading tags are there in HTML?",
      answers: [
          { text: "There are only one heading tag", correct: false },
          { text: "There are four heading tags", correct: false },
          { text: "There are six heading tags", correct: true },
          { text: "There are three heading tags", correct: false }
      ]
  },
  {
      question: "Which HTTP method is used for deleting resources?",
      answers: [
          { text: "DELETE", correct: true },
          { text: "REMOVE", correct: false },
          { text: "DESTROY", correct: false },
          { text: "PURGE", correct: false }
      ]
  },
  {
      question: "What is the purpose of the 'use client' directive in modern web frameworks?",
      answers: [
          { text: "To enable server-side rendering", correct: false },
          { text: "To specify TypeScript files", correct: false },
          { text: "To indicate client-side only components", correct: true },
          { text: "To mark static assets", correct: false }
      ]
  },
  {
      question: "Which CSS property controls the background color of an element?",
      answers: [
          { text: "background", correct: false },
          { text: "background-color", correct: true },
          { text: "color", correct: false },
          { text: "background-image", correct: false }
      ]
  },
  {
      question: "What is the purpose of an alt attribute in HTML?",
      answers: [
          { text: "To specify JavaScript files", correct: false },
          { text: "To specify TypeScript files", correct: false },
          { text: "To display text content on the page", correct: false },
          { text: "To provide alternative text for accessibility", correct: true }
      ]
  },
  {
      question: "Which web performance metric measures the time until the browser can render the first pixels?",
      answers: [
          { text: "First Meaningful Paint (FMP)", correct: false },
          { text: "First Contentful Paint (FCP)", correct: true },
          { text: "Largest Contentful Paint (LCP)", correct: false },
          { text: "Total Blocking Time (TBT)", correct: false }
      ]
  },
  {
      question: "What is the recommended approach for handling errors in async/await?",
      answers: [
          { text: ".catch() method", correct: false },
          { text: "error callbacks", correct: false },
          { text: "global error handlers", correct: false },
          { text: "try/catch blocks", correct: true },
      ]
  },
  {
      question: "What is the difference between inbound links and outbound links in HTML?",
      answers: [
          { text: "They have different attributes", correct: false },
          { text: "Inbound links route to the same site, while outbound links route to different sites", correct: true },
          { text: "They both refer to the same type of links", correct: false },
          { text: "There is no difference", correct: false }
      ]
  },
  {
      question: "In semantic HTML, what is the purpose of the 'main' tag element?",
      answers: [
          { text: "To create a navigation menu", correct: false },
          { text: "To define a footer section", correct: false },
          { text: "To indicate the main content of the page", correct: true },
          { text: "To define a header section", correct: false }
      ]
  },
  {
      question: "Which CSS unit is relative to the root element's font size?",
      answers: [
          { text: "rem", correct: true },
          { text: "em", correct: false },
          { text: "px", correct: false },
          { text: "vh", correct: false }
      ]
  },
  {
      question: "In semantic HTML, where does the <nav> tag element belong?",
      answers: [
          { text: "In the <head> section", correct: false },
          { text: "In the <main> section", correct: false },
          { text: "In the <footer> section", correct: false },
          { text: "In the <body> section", correct: true },
      ]
  },
  {
      question: "What is the purpose of the 'loading' attribute on images?",
      answers: [
          { text: "To specify image dimensions", correct: false },
          { text: "To control lazy loading behavior", correct: true },
          { text: "To set loading priority", correct: false },
          { text: "To define loading states", correct: false }
      ]
  },
  {
      question: "In the HTML tag element, what does the lang attribute do?",
      answers: [
          { text: "To specify the language of the document", correct: false },
          { text: "To specify the language of the page", correct: false },
          { text: "To specify the language of the script", correct: false },
          { text: "To specify the language of the content", correct: true },
      ]
  },
  {
      question: "Which JavaScript feature allows you to extract values from arrays and objects?",
      answers: [
          { text: "Spread operator", correct: false },
          { text: "Destructuring", correct: true },
          { text: "Rest parameters", correct: false },
          { text: "Array methods", correct: false }
      ]
  },
  {
      question: "What is the primary purpose of CORS in web applications?",
      answers: [
          { text: "To implement authentication", correct: false },
          { text: "To manage cookies", correct: false },
          { text: "To handle SSL certificates", correct: false },
          { text: "To enable cross-origin resource sharing", correct: true }
      ]
  },
  {
      question: "What is the purpose of the 'defer' attribute in script tags?",
      answers: [
          { text: "To load scripts synchronously", correct: false },
          { text: "To load scripts asynchronously", correct: true },
          { text: "To load scripts in parallel", correct: false },
          { text: "To load scripts sequentially", correct: false }
      ]
  },
  {
      question: "Which CSS feature allows you to create custom properties?",
      answers: [
          { text: "CSS Variables", correct: true },
          { text: "CSS Constants", correct: false },
          { text: "CSS Properties", correct: false },
          { text: "CSS Functions", correct: false }
      ]
  },
  {
      question: "What is the difference between var and let in JavaScript?",
      answers: [
          { text: "var has block scope, let has function scope", correct: false },
          { text: "let is used for constants, var for variables", correct: false },
          { text: "let has block scope, var has function scope", correct: true },
          { text: "var is used for constants, let for variables", correct: false }
      ]
  },
  {
      question: "What is the purpose of the 'picture' element in HTML5?",
      answers: [
          { text: "To create image galleries", correct: false },
          { text: "To implement responsive images", correct: true },
          { text: "To add image captions", correct: false },
          { text: "To create image maps", correct: false }
      ]
  },
  {
      question: "Which CSS property controls the smoothness of animations?",
      answers: [
          { text: "animation-duration", correct: false },
          { text: "animation-timing", correct: false },
          { text: "transition-duration", correct: false },
          { text: "transition-timing-function", correct: true },
      ]
  },
  {
      question: "What is the purpose of the 'aria-label' attribute?",
      answers: [
          { text: "To add tooltips to elements", correct: false },
          { text: "To create placeholder text", correct: false },
          { text: "To provide accessibility labels for screen readers", correct: true },
          { text: "To set element IDs", correct: false }
      ]
  },
  {
      question: "Which modern JavaScript feature allows you to create reusable UI components?",
      answers: [
          { text: "Web Components", correct: true },
          { text: "React Components", correct: false },
          { text: "Angular Components", correct: false },
          { text: "Vue Components", correct: false }
      ]
  },
  {
      question: "What is the purpose of the 'loading' attribute on iframes?",
      answers: [
          { text: "To specify loading priority", correct: false },
          { text: "To control lazy loading behavior", correct: true },
          { text: "To define loading states", correct: false },
          { text: "To set loading timeout", correct: false }
      ]
  },
  {
      question: "What is the purpose of the 'display: contents' CSS property?",
      answers: [
          { text: "To remove the element from the DOM tree", correct: true },
          { text: "To hide the element", correct: false },
          { text: "To make the element invisible", correct: false },
          { text: "To remove the element's styles", correct: false }
      ]
  },
  {
      question: "Which modern web API provides access to clipboard operations?",
      answers: [
          { text: "Document API", correct: false },
          { text: "Window API", correct: false },
          { text: "Clipboard API", correct: true },
          { text: "Navigator API", correct: false }
      ]
  },
  {
      question: "What is the purpose of the 'aspect-ratio' CSS property?",
      answers: [
          { text: "To maintain consistent image proportions", correct: true },
          { text: "To set fixed dimensions", correct: false },
          { text: "To create responsive layouts", correct: false },
          { text: "To control image scaling", correct: false }
      ]
  },
  {
      question: "Which modern CSS feature allows you to create custom layout patterns?",
      answers: [
          { text: "CSS Flexbox", correct: false },
          { text: "CSS Grid", correct: true },
          { text: "CSS Tables", correct: false },
          { text: "CSS Columns", correct: false }
      ]
  },
  {
      question: "Which modern CSS feature allows you to create custom scroll behaviors?",
      answers: [
          
          { text: "scroll-snap", correct: false },
          { text: "scroll-animation", correct: false },
          { text: "scroll-transition", correct: false },
          { text: "scroll-behavior", correct: true },
      ]
  },
  {
      question: "Which modern JavaScript feature allows you to create optional chaining?",
      answers: [
          { text: "?.() operator", correct: false },
          { text: "?. operator", correct: true },
          { text: "?.[] operator", correct: false },
          { text: "?.{} operator", correct: false }
      ]
  },
  {
      question: "Which modern CSS feature allows you to create color-mixing functions?",
      answers: [
          { text: "color-blend()", correct: false },
          { text: "color-combine()", correct: false },
          { text: "color-mix-blend()", correct: false },
          { text: "color-mix()", correct: true },
      ]
  },
  {
      question: "Which modern JavaScript feature allows you to create nullish coalescing?",
      answers: [
          { text: "?. operator", correct: false },
          { text: "|| operator", correct: false },
          { text: "?? operator", correct: true },
          { text: "&& operator", correct: false }
      ]
  },
  {
      question: "Which modern JavaScript feature allows you to create dynamic imports?",
      answers: [
          { text: "require()", correct: false },
          { text: "import()", correct: true },
          { text: "import *", correct: false },
          { text: "export default", correct: false }
      ]
  },
  {
      question: "Which modern JavaScript feature allows you to create template literals?",
      answers: [
          { text: "String interpolation", correct: false },
          { text: "Template literals", correct: true },
          { text: "String templates", correct: false },
          { text: "Template strings", correct: false }
      ]
  },
  {
      question: "Which modern CSS feature allows you to create custom fonts?",
      answers: [
          
          { text: "font-face", correct: false },
          { text: "custom-fonts", correct: false },
          { text: "font-custom", correct: false },
          { text: "@font-face", correct: true },
      ]
  },
  {
      question: "Which modern CSS feature allows you to create custom layout systems?",
      answers: [
          { text: "CSS Flexbox", correct: false },
          { text: "CSS Grid", correct: true },
          { text: "CSS Tables", correct: false },
          { text: "CSS Columns", correct: false }
      ]
  },
  {
      question: "Which modern CSS feature allows you to create custom animations?",
      answers: [
          { text: "animation", correct: false },
          { text: "transition", correct: false },
          { text: "transform", correct: false },
          { text: "@keyframes", correct: true }
      ]
  },
  {
      question: "Which modern CSS feature allows you to create custom transitions?",
      answers: [
          { text: "transform", correct: false },
          { text: "transition", correct: true },
          { text: "animation", correct: false },
          { text: "transition-timing", correct: false }
      ]
  },
  {
      question: "Which modern CSS feature allows you to create custom transforms?",
      answers: [
          { text: "transform", correct: true },
          { text: "transition", correct: false },
          { text: "animation", correct: false },
          { text: "translate", correct: false }
      ]
  },
{
    question: "Which modern JavaScript feature allows you to create classes?",
    answers: [
        { text: "constructor function", correct: false },
        { text: "prototype chain", correct: false },
        { text: "object literal", correct: false },
        { text: "class keyword", correct: true },
    ]
},
{
    question: "Which modern JavaScript feature allows you to create async generators?",
    answers: [
        { text: "async iterators", correct: false },
        { text: "async generators", correct: true },
        { text: "async functions", correct: false },
        { text: "async methods", correct: false }
    ]
},
{
    question: "Which modern CSS feature allows you to create custom properties with fallbacks?",
    answers: [
        { text: "CSS Custom Properties", correct: true },
        { text: "CSS Variables", correct: false },
        { text: "CSS Fallbacks", correct: false },
        { text: "CSS Defaults", correct: false }
    ]
},
{
    question: "Which modern JavaScript feature allows you to create class private methods?",
    answers: [
        { text: "private method", correct: false },
        { text: "_method()", correct: false },
        { text: "#method()", correct: true },
        { text: "method()", correct: false }
    ]
},
{
    question: "Which modern JavaScript feature allows you to create optional parameters?",
    answers: [
        { text: "Default parameters", correct: true },
        { text: "Optional parameters", correct: false },
        { text: "Rest parameters", correct: false },
        { text: "Parameter destructuring", correct: false }
    ]
},
{
    question: "Which modern JavaScript feature allows you to create rest parameters?",
    answers: [
        { text: "Spread operator (...)", correct: false },
        { text: "Rest parameters (...)", correct: true },
        { text: "Array destructuring", correct: false },
        { text: "Parameter arrays", correct: false }
    ]
},
{
    question: "Which modern JavaScript feature allows you to create spread arrays?",
    answers: [
        { text: "Array destructuring", correct: false },
        { text: "Array spreading", correct: false },
        { text: "Spread operator (...)", correct: true },
        { text: "Array expansion", correct: false }
    ]
},
{
    question: "Which modern JavaScript feature allows you to create arrow functions?",
    answers: [
        { text: "Arrow functions (=>)", correct: true },
        { text: "Function expressions", correct: false },
        { text: "Method definitions", correct: false },
        { text: "Function declarations", correct: false }
    ]
}],
  "graphic-design": [
      {
          question: "Which color model is primarily used for digital screens?",
          answers: [
              { text: "CMYK", correct: false },
              { text: "RGB", correct: true },
              { text: "Pantone", correct: false },
              { text: "HEX", correct: false }
          ]
      },
      {
          question: "What is the recommended minimum contrast ratio for text accessibility?",
          answers: [
              { text: "4.5:1", correct: true },
              { text: "3:1", correct: false },
              { text: "7:1", correct: false },
              { text: "2:1", correct: false }
          ]
      },
      {
          question: "Which file format is best for logos and vector graphics?",
          answers: [
              { text: "SVG", correct: true },
              { text: "PNG", correct: false },
              { text: "JPEG", correct: false },
              { text: "GIF", correct: false }
          ]
      },
      {
          question: "What is the purpose of a design system?",
          answers: [
              { text: "To maintain consistent design patterns across products", correct: true },
              { text: "To create unique designs for each project", correct: false },
              { text: "To document design decisions", correct: false },
              { text: "To manage design assets", correct: false }
          ]
      },
      {
          question: "Which principle of design refers to the way elements are arranged?",
          answers: [
              { text: "Composition", correct: true },
              { text: "Balance", correct: false },
              { text: "Contrast", correct: false },
              { text: "Alignment", correct: false }
          ]
      },
      {
          question: "What is the term for the empty space between and around design elements?",
          answers: [
              { text: "Negative space", correct: true },
              { text: "White space", correct: false },
              { text: "Empty space", correct: false },
              { text: "Clear space", correct: false }
          ]
      },
      {
          question: "Which tool is primarily used for user interface design?",
          answers: [
              { text: "Figma", correct: true },
              { text: "Photoshop", correct: false },
              { text: "Illustrator", correct: false },
              { text: "InDesign", correct: false }
          ]
      },
      {
          question: "What is the purpose of a style guide?",
          answers: [
              { text: "To document design standards and usage", correct: true },
              { text: "To create new design patterns", correct: false },
              { text: "To manage design assets", correct: false },
              { text: "To track design changes", correct: false }
          ]
      },
      {
          question: "Which design principle refers to the visual weight of elements?",
          answers: [
              { text: "Emphasis", correct: true },
              { text: "Hierarchy", correct: false },
              { text: "Balance", correct: false },
              { text: "Proportion", correct: false }
          ]
      },
      {
          question: "What is the term for the study of how users interact with products?",
          answers: [
              { text: "User experience (UX)", correct: true },
              { text: "User interface (UI)", correct: false },
              { text: "Interaction design", correct: false },
              { text: "Human-computer interaction", correct: false }
          ]
      },
      {
        "graphic-design": [
          {
            "question": "Which color model is primarily used for digital screens?",
            "answers": [
              { "text": "CMYK", "correct": false },
              { "text": "RGB", "correct": true },
              { "text": "Pantone", "correct": false },
              { "text": "HEX", "correct": false }
            ]
          },
          {
            "question": "What is the recommended minimum contrast ratio for text accessibility?",
            "answers": [
              { "text": "3:1", "correct": false },
              { "text": "2:1", "correct": false },
              { "text": "4.5:1", "correct": true },
              { "text": "7:1", "correct": false }
            ]
          },
          {
            "question": "Which file format is best for logos and vector graphics?",
            "answers": [
              { "text": "JPEG", "correct": false },
              { "text": "PNG", "correct": false },
              { "text": "GIF", "correct": false },
              { "text": "SVG", "correct": true }
            ]
          },
          {
            "question": "What is the purpose of a design system?",
            "answers": [
              { "text": "To manage design assets", "correct": false },
              { "text": "To maintain consistent design patterns across products", "correct": true },
              { "text": "To create unique designs for each project", "correct": false },
              { "text": "To document design decisions", "correct": false }
            ]
          },
          {
            "question": "Which principle of design refers to the way elements are arranged?",
            "answers": [
              { "text": "Alignment", "correct": false },
              { "text": "Balance", "correct": false },
              { "text": "Composition", "correct": true },
              { "text": "Contrast", "correct": false }
            ]
          },
          {
            "question": "What is the term for the empty space between and around design elements?",
            "answers": [
              { "text": "Clear space", "correct": false },
              { "text": "White space", "correct": false },
              { "text": "Negative space", "correct": true },
              { "text": "Empty space", "correct": false }
            ]
          },
          {
            "question": "Which tool is primarily used for user interface design?",
            "answers": [
              { "text": "Photoshop", "correct": false },
              { "text": "Figma", "correct": true },
              { "text": "Illustrator", "correct": false },
              { "text": "InDesign", "correct": false }
            ]
          },
          {
            "question": "What is the purpose of a style guide?",
            "answers": [
              { "text": "To create new design patterns", "correct": false },
              { "text": "To document design standards and usage", "correct": true },
              { "text": "To manage design assets", "correct": false },
              { "text": "To track design changes", "correct": false }
            ]
          },
          {
            "question": "Which design principle refers to the visual weight of elements?",
            "answers": [
              { "text": "Balance", "correct": false },
              { "text": "Emphasis", "correct": true },
              { "text": "Hierarchy", "correct": false },
              { "text": "Proportion", "correct": false }
            ]
          },
          {
            "question": "What is the term for the study of how users interact with products?",
            "answers": [
              { "text": "Human-computer interaction", "correct": false },
              { "text": "User interface (UI)", "correct": false },
              { "text": "Interaction design", "correct": false },
              { "text": "User experience (UX)", "correct": true }
            ]
          },
          {
            "question": "Which font classification typically has small lines or strokes at the ends of characters?",
            "answers": [
              { "text": "Sans-serif", "correct": false },
              { "text": "Display", "correct": false },
              { "text": "Serif", "correct": true },
              { "text": "Script", "correct": false }
            ]
          },
          {
            "question": "What is kerning?",
            "answers": [
              { "text": "Adjusting line height", "correct": false },
              { "text": "Adjusting spacing between characters", "correct": true },
              { "text": "Adjusting font weight", "correct": false },
              { "text": "Adjusting paragraph alignment", "correct": false }
            ]
          },
          {
            "question": "Which resolution is considered standard for print design?",
            "answers": [
              { "text": "72 DPI", "correct": false },
              { "text": "150 DPI", "correct": false },
              { "text": "300 DPI", "correct": true },
              { "text": "600 DPI", "correct": false }
            ]
          },
          {
            "question": "What is a mockup in design terms?",
            "answers": [
              { "text": "A coded prototype", "correct": false },
              { "text": "A wireframe sketch", "correct": false },
              { "text": "A realistic visual representation of a design", "correct": true },
              { "text": "An HTML framework", "correct": false }
            ]
          },
          {
            "question": "Which file format supports animation?",
            "answers": [
              { "text": "JPEG", "correct": false },
              { "text": "PNG", "correct": false },
              { "text": "GIF", "correct": true },
              { "text": "TIFF", "correct": false }
            ]
          },
          {
            "question": "What does CMYK stand for?",
            "answers": [
              { "text": "Cyan, Magenta, Yellow, Black", "correct": true },
              { "text": "Color Mix Yellow Key", "correct": false },
              { "text": "Cyan, Magenta, Yellow, Keytone", "correct": false },
              { "text": "Contrast, Magenta, Yellow, Black", "correct": false }
            ]
          },
          {
            "question": "What does the term ‘responsive design’ mean?",
            "answers": [
              { "text": "Designs that react to user input", "correct": false },
              { "text": "Designs that change based on screen size", "correct": true },
              { "text": "Designs that are interactive", "correct": false },
              { "text": "Designs that use animations", "correct": false }
            ]
          },
          {
            "question": "What is the main purpose of a wireframe?",
            "answers": [
              { "text": "Show the color palette", "correct": false },
              { "text": "Show the typography choices", "correct": false },
              { "text": "Outline the structure and layout of a page", "correct": true },
              { "text": "Display final visual design", "correct": false }
            ]
          },
          {
            "question": "Which principle of design helps create visual hierarchy?",
            "answers": [
              { "text": "Repetition", "correct": false },
              { "text": "Contrast", "correct": true },
              { "text": "Alignment", "correct": false },
              { "text": "Proximity", "correct": false }
            ]
          },
          {
            "question": "Which file type is best for photographs on the web?",
            "answers": [
              { "text": "SVG", "correct": false },
              { "text": "GIF", "correct": false },
              { "text": "JPEG", "correct": true },
              { "text": "EPS", "correct": false }
            ]
          },
          {
            "question": "Which layout type is most often used in Western cultures for reading flow?",
            "answers": [
              { "text": "Top to bottom, right to left", "correct": false },
              { "text": "Right to left", "correct": false },
              { "text": "Left to right, top to bottom", "correct": true },
              { "text": "Circular layout", "correct": false }
            ]
          },
          {
            "question": "Which principle helps unify related items together visually?",
            "answers": [
              { "text": "Proximity", "correct": true },
              { "text": "Balance", "correct": false },
              { "text": "Repetition", "correct": false },
              { "text": "Contrast", "correct": false }
            ]
          },
          {
            "question": "Which design format is ideal for printing business cards?",
            "answers": [
              { "text": "PNG", "correct": false },
              { "text": "TIFF", "correct": false },
              { "text": "PDF", "correct": true },
              { "text": "GIF", "correct": false }
            ]
          },
          {
            "question": "Which color space is used for printed material?",
            "answers": [
              { "text": "CMYK", "correct": true },
              { "text": "RGB", "correct": false },
              { "text": "HEX", "correct": false },
              { "text": "HSL", "correct": false }
            ]
          },
          {
            "question": "Which principle of design refers to the distribution of visual weight?",
            "answers": [
              { "text": "Balance", "correct": true },
              { "text": "Alignment", "correct": false },
              { "text": "Emphasis", "correct": false },
              { "text": "Scale", "correct": false }
            ]
          },
          {
            "question": "What is a brand guideline?",
            "answers": [
              { "text": "A manual for company operations", "correct": false },
              { "text": "A document detailing correct use of brand assets", "correct": true },
              { "text": "A marketing report", "correct": false },
              { "text": "An internal HR policy", "correct": false }
            ]
          },
          {
            "question": "Which design tool is cloud-based and used for collaborative UI design?",
            "answers": [
              { "text": "Figma", "correct": true },
              { "text": "InDesign", "correct": false },
              { "text": "Sketch", "correct": false },
              { "text": "Photoshop", "correct": false }
            ]
          },
          {
            "question": "Which file format preserves layers and is best for editing in Photoshop?",
            "answers": [
              { "text": "PSD", "correct": true },
              { "text": "JPG", "correct": false },
              { "text": "PNG", "correct": false },
              { "text": "PDF", "correct": false }
            ]
          },
          {
            "question": "What is the main function of a grid in design?",
            "answers": [
              { "text": "To manage fonts", "correct": false },
              { "text": "To align and organize content", "correct": true },
              { "text": "To apply effects", "correct": false },
              { "text": "To crop images", "correct": false }
            ]
          },
          {
            "question": "What does the golden ratio relate to in design?",
            "answers": [
              { "text": "The optimal font size", "correct": false },
              { "text": "A natural balance in layout and proportions", "correct": true },
              { "text": "The best DPI setting", "correct": false },
              { "text": "Color grading scale", "correct": false }
            ]
          },
          {
            "question": "What is leading in typography?",
            "answers": [
              { "text": "The spacing between letters", "correct": false },
              { "text": "The thickness of a font", "correct": false },
              { "text": "The vertical spacing between lines of text", "correct": true },
              { "text": "The style of the first letter", "correct": false }
            ]
          },
          {
            "question": "What is the ideal format for exporting icons for the web?",
            "answers": [
              { "text": "SVG", "correct": true },
              { "text": "PDF", "correct": false },
              { "text": "JPEG", "correct": false },
              { "text": "PSD", "correct": false }
            ]
          },
          {
            "question": "What does UI stand for in design?",
            "answers": [
              { "text": "User Interaction", "correct": false },
              { "text": "User Interface", "correct": true },
              { "text": "Unified Interaction", "correct": false },
              { "text": "User Internet", "correct": false }
            ]
          },
          {
            "question": "Which format is best for print-ready vector artwork?",
            "answers": [
              { "text": "AI", "correct": true },
              { "text": "JPG", "correct": false },
              { "text": "GIF", "correct": false },
              { "text": "BMP", "correct": false }
            ]
          },
          {
            "question": "What is a mood board used for in design?",
            "answers": [
              { "text": "To display a sitemap", "correct": false },
              { "text": "To visualize the design direction and inspiration", "correct": true },
              { "text": "To test user flows", "correct": false },
              { "text": "To showcase code snippets", "correct": false }
            ]
          },
          {
            "question": "What is the primary function of contrast in design?",
            "answers": [
              { "text": "To unify elements", "correct": false },
              { "text": "To guide user attention and improve readability", "correct": true },
              { "text": "To blur the background", "correct": false },
              { "text": "To add shadows", "correct": false }
            ]
          },
          {
            "question": "Which of the following is a vector-based Adobe application?",
            "answers": [
              { "text": "Illustrator", "correct": true },
              { "text": "Photoshop", "correct": false },
              { "text": "XD", "correct": false },
              { "text": "Lightroom", "correct": false }
            ]
          },
          {
            "question": "Which export format is best for high-quality photography on the web?",
            "answers": [
              { "text": "JPEG", "correct": true },
              { "text": "SVG", "correct": false },
              { "text": "TIFF", "correct": false },
              { "text": "AI", "correct": false }
            ]
          },
          {
            "question": "Which term describes making something easier for users to understand or use?",
            "answers": [
              { "text": "Accessibility", "correct": false },
              { "text": "Optimization", "correct": false },
              { "text": "Usability", "correct": true },
              { "text": "Minimalism", "correct": false }
            ]
          },
          {
            "question": "Which of these is a non-destructive editing tool in Photoshop?",
            "answers": [
              { "text": "Smart Object", "correct": true },
              { "text": "Flattened image", "correct": false },
              { "text": "Rasterize layer", "correct": false },
              { "text": "Merge visible", "correct": false }
            ]
          }
        ]
      }
  ],
  "audio-engineering": [
      {
          question: "What is the standard sample rate for CD quality audio?",
          answers: [
              { text: "44.1 kHz", correct: true },
              { text: "48 kHz", correct: false },
              { text: "88.2 kHz", correct: false },
              { text: "96 kHz", correct: false }
          ]
      },
      {
          question: "Which type of microphone is best for recording vocals?",
          answers: [
              { text: "Cardioid condenser", correct: true },
              { text: "Omnidirectional dynamic", correct: false },
              { text: "Figure-8 ribbon", correct: false },
              { text: "Shotgun condenser", correct: false }
          ]
      },
      {
          question: "What is the purpose of dithering in digital audio?",
          answers: [
              { text: "To reduce quantization noise", correct: true },
              { text: "To increase signal-to-noise ratio", correct: false },
              { text: "To improve dynamic range", correct: false },
              { text: "To reduce distortion", correct: false }
          ]
      },
      {
          question: "Which audio format is lossless?",
          answers: [
              { text: "WAV", correct: true },
              { text: "MP3", correct: false },
              { text: "AAC", correct: false },
              { text: "OGG", correct: false }
          ]
      },
      {
          question: "What is the term for unwanted sound reflections?",
          answers: [
              { text: "Echo", correct: true },
              { text: "Reverb", correct: false },
              { text: "Flutter echo", correct: false },
              { text: "Standing waves", correct: false }
          ]
      },
      {
          question: "Which EQ type is best for surgical frequency cuts?",
          answers: [
              { text: "Parametric", correct: true },
              { text: "Semi-parametric", correct: false },
              { text: "Graphic", correct: false },
              { text: "Shelving", correct: false }
          ]
      },
      {
          question: "What is the purpose of a pop filter?",
          answers: [
              { text: "To reduce plosive sounds", correct: true },
              { text: "To block background noise", correct: false },
              { text: "To improve microphone gain", correct: false },
              { text: "To reduce echo", correct: false }
          ]
      },
      {
          question: "Which compressor setting controls how quickly the compression starts?",
          answers: [
              { text: "Attack", correct: true },
              { text: "Release", correct: false },
              { text: "Threshold", correct: false },
              { text: "Ratio", correct: false }
          ]
      },
      {
          question: "What is the term for the difference between the loudest and quietest parts of an audio signal?",
          answers: [
              { text: "Dynamic range", correct: true },
              { text: "Headroom", correct: false },
              { text: "Signal-to-noise ratio", correct: false },
              { text: "Frequency response", correct: false }
          ]
      },
      {
          question: "Which type of reverb is best for creating a sense of space?",
          answers: [
              { text: "Convolution", correct: true },
              { text: "Plate", correct: false },
              { text: "Hall", correct: false },
              { text: "Room", correct: false }
          ]
      }
  ],
  "video-production": [
      {
          question: "What is the standard frame rate for cinematic productions?",
          answers: [
              { text: "24fps", correct: true },
              { text: "30fps", correct: false },
              { text: "60fps", correct: false },
              { text: "120fps", correct: false }
          ]
      },
      {
          question: "Which camera movement creates smooth horizontal motion?",
          answers: [
              { text: "Dolly", correct: true },
              { text: "Pan", correct: false },
              { text: "Tilt", correct: false },
              { text: "Pedestal", correct: false }
          ]
      },
      {
          question: "What is the purpose of a clapboard in film production?",
          answers: [
              { text: "To sync audio and video", correct: true },
              { text: "To mark scene numbers", correct: false },
              { text: "To set exposure", correct: false },
              { text: "To test sound", correct: false }
          ]
      },
      {
          question: "Which lighting setup is best for interviews?",
          answers: [
              { text: "Three-point lighting", correct: true },
              { text: "Two-point lighting", correct: false },
              { text: "Single key light", correct: false },
              { text: "Natural lighting", correct: false }
          ]
      },
      {
          question: "What is the term for the process of matching camera settings between shots?",
          answers: [
              { text: "Color grading", correct: true },
              { text: "Color correction", correct: false },
              { text: "Color matching", correct: false },
              { text: "Color timing", correct: false }
          ]
      },
      {
          question: "Which aspect ratio is standard for modern digital cinema?",
          answers: [
              { text: "2.39:1", correct: true },
              { text: "16:9", correct: false },
              { text: "4:3", correct: false },
              { text: "1.85:1", correct: false }
          ]
      },
      {
          question: "What is the purpose of a storyboard?",
          answers: [
              { text: "To visualize the sequence of shots", correct: true },
              { text: "To plan camera movements", correct: false },
              { text: "To schedule filming", correct: false },
              { text: "To manage crew", correct: false }
          ]
      },
      {
          question: "Which type of lens is best for wide-angle shots?",
          answers: [
              { text: "Ultra-wide (between 14-24mm)", correct: true },
              { text: "Wide-angle (between 24-35mm)", correct: false },
              { text: "Standard (50mm)", correct: false },
              { text: "Telephoto (70-200mm)", correct: false }
          ]
      },
      {
          question: "What is the term for the process of planning camera movements?",
          answers: [
              { text: "Blocking", correct: true },
              { text: "Choreography", correct: false },
              { text: "Staging", correct: false },
              { text: "Direction", correct: false }
          ]
      },
      {
          question: "Which type of microphone is best for capturing ambient sound?",
          answers: [
              { text: "Shotgun with windscreen", correct: true },
              { text: "Lavalier", correct: false },
              { text: "Boom", correct: false },
              { text: "Omnidirectional", correct: false }
          ]
      }
  ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

// Event Listeners
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.dataset.category;
        startQuiz();
    });
});

restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    categoryScreen.classList.remove("active");
    quizScreen.classList.add("active");
    
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;
    
    const questions = quizData[currentCategory];
    totalQuestionsSpan.textContent = questions.length;
    maxScoreSpan.textContent = questions.length;
    
    showQuestion();
}

function showQuestion() {
  // Clear existing event listeners and pressed states
  const buttons = answersContainer.querySelectorAll('.answer-btn');
  buttons.forEach(button => {
      button.removeEventListener('click', selectAnswer);
      button.style.backgroundColor = '#f8f0e5';
      button.style.borderColor = '#eadbc8';
      button.style.boxShadow = 'none';
      button.classList.remove('correct', 'incorrect', 'pressed');
      button.removeAttribute('style');
  });
  
  // Clear the container and rebuild
  answersContainer.innerHTML = '';
  
  answersDisabled = false;
  const questions = quizData[currentCategory];
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  questionText.textContent = currentQuestion.question;
  
  currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("answer-btn");
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
    if (answersDisabled) return;
    answersDisabled = true;
    
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    Array.from(answersContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });
    
    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizData[currentCategory].length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    finalScoreSpan.textContent = score;
    maxScoreSpan.textContent = quizData[currentCategory].length;
    
    const percentage = (score / quizData[currentCategory].length) * 100;
    
    let message;
    if (percentage >= 90) {
        message = "Excellent! Master level knowledge!";
    } else if (percentage >= 75) {
        message = "Great job! Advanced understanding!";
    } else if (percentage >= 60) {
        message = "Good work! Solid foundation!";
    } else if (percentage >= 45) {
        message = "Fair effort! Keep practicing!";
    } else {
        message = "Keep studying! You'll get better!";
    }
    
    resultMessage.textContent = message;
}

function restartQuiz() {
    resultScreen.classList.remove("active");
    categoryScreen.classList.add("active");
    currentCategory = '';
    score = 0;
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;
    progressBar.style.width = "0%";
}