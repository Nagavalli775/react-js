1. What is Emmet
   1. Emmet is a toolkit for web developers.
   2. It allow us to write shortcuts and then expended into full fledged
   3. For sublime text - html+Tab key press enter

2. Difference between Library and Framework
   1. The main difference is inversion of control.
   2. When using a library, that devdeloper decides where to use and call the library
   3. In otherhand, framework control is reversed. framework decides, where to call and where to write codes.

3. What is CDN and why do we use it?
   1. Content Delivery Network is a platform where all the external files are hoisted from different servers.
   2. we use it because of faster load time.

4. Why is React known as React?
   1. React allow us to change state and data within an applications
   2. React enhances UI effective and diclarative manner.

5. What is crossorigin in script tag?
   1. Crossorigin is a attribute in Script tag.
   2. It enables Cross Origin Resource Sharing (CORS), load external inks from hoisted server via cdn.

6. What is the difference between React and ReactDOM?
   1. React is used for core functionalities
   2. ReactDOM is used to perform DOM operations.

7. What is the difference between react.development.js and react.production.js via cdn?
   1. The difference between react.developement.js is during building ir gives debugging and warnings in an applications and react.production.js is minified version and fast performance in live application. 

8. What is async and defer?
   1. Normal Script
      1. When browser parses HTML and sees a script tag, it stops HTML parsing, downloads the javascript file, and then continues parsing the HTML.
   2. Async
      1. With async the javascript file downloads in parallel while HTML parsing continues.
      2. When the download finishes, the browser pauses HTML parsing and executes the script immediately.
   3. Defer
      1. With defer, the script also downloads in parallel with HTML parsing, but it executes only after the entire HTML document has finished parsing.