1. What is Emmet?

   Emmet is a toolkit for web developers.

   It allows developers to write short abbreviations that expand into full HTML or CSS code.

   For example, in editors like Sublime Text or VS Code, typing html and pressing Tab generates a full HTML boilerplate.


2. Difference between Library and Framework?

   The main difference is Inversion of Control.

   When using a library, the developer decides when and where to call the library.

   In a framework, the control is reversed the framework decides the flow, and the developer writes code inside that structure.


3. What is CDN and why do we use it?

   Content Delivery Network is a network of distributed servers that deliver static files like JavaScript, CSS, images, etc.

   We use a CDN because it loads files faster by serving them from the nearest server location.


4. Why is React known as React?

   React is called React because it reacts to changes in data or state.

   When the data changes, React efficiently updates the UI.


5. What is crossorigin in script tag?
 
  crossorigin is an attribute used in the <script> tag.

  It allows the browser to request resources from different origins while following CORS rules.

  It is commonly used when loading scripts from a CDN.


6. What is the difference between React and ReactDOM?

   React is the core library used for creating components and managing state.

   ReactDOM is used to render React components into the DOM.


7. What is the difference between react.development.js and react.production.js via cdn?

  react.development.js

     Used during development.
     Provides detailed warnings and debugging messages.

  react.production.js

     Used in production.
     Minified and optimized for better performance.


8. What is async and defer?

  Normal Script

    When the browser finds a <script> tag, it stops HTML parsing, downloads the JavaScript file, executes it,and then continues parsing HTML.

  Async

    The script downloads in parallel with HTML parsing.

    Once the download finishes, the browser stops parsing and executes it immediately.

  Defer

    The script downloads in parallel with HTML parsing.

    But it executes only after the entire HTML document is parsed.