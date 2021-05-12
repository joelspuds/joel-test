## set up app
clone the repo

    git clone https://devops.innovateuk.org/code-repository/scm/ukri/tfs-prototypes.git

install the node packages

    npm run install

move GDS stuff into folder structure
(if the app starts after one of these processes, then kill it, and continue to the end)

    npm run copy-package 
    npm run start-dev:copy-gds-njk
    

build assets

    npm run build-production

run the app

    npm run start-dev

Open the browser of your choice and go to: [http://localhost:3002/](http://localhost:3002/)

Most of what you probably want will be in the [prototypes section](http://localhost:3002/prototypes) 

Other options can be found in the package.json file in the root of the project.
