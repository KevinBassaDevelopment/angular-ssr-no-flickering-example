# angular-ssr-no-flickering-example
This example demostrates that angular ssr has no visible flickering when switching between server and browser version 

It visualizes the loading process by showing the text "Server" and "Browser" in the app-header and on the page-header, depending of where the content was rendered.
To see it in detail:
 
1) npm run build:ssr   (to have prod version with minimum bundle size)
2) npm run serve:ssr
3) open browser, set network speed to slow-3g
4) load localhost:4000
     -> The complete page is not visibly changing when app switches from server to browser rendered version
     -> The only thing that changes is the 'Browser/Server' text


This Example has been made in comparison to the complete same application in ionic, which includes visible flickering: 
https://github.com/KevinBassaDevelopment/ionic-ssr-flickering-example/tree/master


The deployed examples can be compared here:

https://angular-ssr.bassa-solutions.at/

https://ionic-ssr.bassa-solutions.at/
