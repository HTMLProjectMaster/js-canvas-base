# js-canvas-base
Starter kit for js canvas projects


This is a javascript canvas base for all kind of project.

It contains: 
 - index.html         => main html script
 - canvas.js          => canvas module
 - core.js            => system module
 - library.js         => library module
 
 
core.js:
 - contains the system object
    -  its function are:
      - init()
      - loop()
      - sleep()
      - load()
      - call()   
    - its variables are:
      - dom
      - objectArray
      

canvas.js:
 - contains the canvas object
    - its functions are:
      - init()
      - rescale()
      - clear()
      - refresh()
      
      
library.js:
  contains all the dependances !
  to import a new script:
  system.load('script', 'script-#ID', 'modules/#SCRIPT.JS', system.dom.head)
  
  
Abilities:
 - load a canvas, update and rescale it.
 - continualy display all the object in system.objectArray with the use of the draw function of the contained element.
 - has a loop function wich is update every frame.
 - has a sleep function that wait for the argument declared in the function, in miliseconds, and then do its inner method.
 - has a call function that will load a new instance of a defined object and then upload it in system.objectArray
 - delete objects if their del value is true
