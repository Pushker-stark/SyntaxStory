Welcome to the Common module as zod monorepo that helps to connect the zod type and schema to backend as well frontend 

1. npm init -y
2. npx tsc --init
3. update rootdir, outdir and enable emit declaration :true uncomment.
4. npm i ;npm i zod
5. define all zod schema and types export all and import in backend
6. update name, main:dist/index.js of package.json to the module u want to be named when it is pulish on npm
7. npm login
8. npx tsc -b
9. the d.ts file is also generated
10. create .npmignore file add src in that makesure the name of module is prefix with your npm user acount.
11. npm publish
12. now i can install : npm i @pndevs/medium-common in backend
