# angular-routing-template
### This template sets up a default Angular App with Routing. 

All routes are listed in the ./src/app/app-routing.module.ts file  
*Note that the root route gets redirected to the home route (you can change this as it is not required).* 

Components are placed into the "Components" directory and the full pages are placed into the "Pages" directory inside the ./src/app directory  
*Note that there aren't currently any components in the "Components" directory as just dummy pages are rendered.*

---

### Run Instructions

##### Note: to run this application, you will need the following 

- NodeJS with NPM (or a package manager of your choice) 
    [NodeJS Download](https://nodejs.org/en/download/)
- AngularCLI
    [@angular/cli detailed install instructions](https://cli.angular.io/)

    ```cmd 
        npm install -g @angular/cli
    ```

To get this up and running, open a terminal inside the project directory

```cmd 
    cd angular-routing-template

    npm install

    ng serve -o
```