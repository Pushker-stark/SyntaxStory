
Backend

1. npm create hono@latest
2. hono- light weigh similiar like express framework that is suitable for cloudflare workers also used for serverless environments.
3. hono - select cloud workers-> yes dependencies npm
4. start creating routes ,c=> context contains req, response bunch of things.
5. Connect Prisma - get postgres url from Aiven
6. Connection Pool - So in real world we host multiple backends in diffrent region and when all this multiple backend try to acess the same database which limits the number of connecion can database connects to server.
7. if u using serverless environemnt like aws , cloud workers then we have to connect the database through connection pool.
8. Database connects through connection pool that maintains as single connection to the database with this serverless cloud function
9. after creating db we need create connection pool for that DB Prisma helps to do that s how they mke money also caching database.
10. https://hono.dev/docs/api/routing
11. https://www.prisma.io/accelerate;https://console.aiven.io/account/a4f0c5ca5368/project/spam-checker/services/pg-7a46c44/overview
12. maintain the pool of connection to connect this database .
13. Prisma accelerate -> give db url and select region similiar as Aiven db in Prisma accellerate.give DB url get connection pool API url. paste in .env
14. npm i prisma, npx prisma init
15. Put Original DB url in .env DBRL because the Cli of vscode will pick from herre prisma doesnt support CLI to  connect with connection pool.
16. Add DB Pool url to wrangler .toml
17. The wrangler.toml [var] section is from where the cloudflare workers will pick the env variables in there cloud.
18. npx prisma studio - to visualize database in studio.
19. the DB connection pool url is we placed in wrangler.toml var file so that my backend should pick DB URL from that connection pool but for using CLI operation on prisma to execute command i have to use original DB url in . env file because my CLI will execute the cmmd based on .env file url and can't use pool url that is why
20. So CLI use .env Original DBURL  where as backend clients will use connection DBRL from wrangler.toml var.
21. Intialize the schema - id int defaault(autoincrement()) or id string deafault(uuid())
22. he given code is a **Prisma schema** written in the Prisma Schema Language (PSL). It defines the data model and configuration for a database when using **Prisma** as an ORM (Object-Relational Mapper).
23. Generator block,datasource block, Model definition
24. **`posts`** : A relation to the `Post` model.* This represents a **one-to-many relationship** (a user can have multiple posts).
25. 1. **`author`** : A relation to the `User` model.
    2. Annotation: `@relation(fields: [authorId], references: [id])` defines the foreign key relationship.
    3. `fields: [authorId]`: Indicates which field stores the foreign key.
    4. `references: [id]`: Points to the primary key of the `User` table.
    5. **`authorId`** : A foreign key linking the post to its author in the `User` table.
26. we should define the relationships in DB not try to acchieve this via backed to avoid erroneous task.
27. try changing wifi if db not get conected
28. whenever u changing schema: Generate prisma client - npx prisma generate --no engine => no- engine flag is for serverless environment. cloud workers
29. import prismaclient from edge and accerlarate to use prisma conection pool in hono. npm install @prisma/extension-accelerate - goto clodfalre workers about how to deploy.
30. Avoid using lot of global variable in serverless backend.
31. for environment variable = c.env.DATABASE_URL
32. for typescript error in hono pass those types in hono <{}>
33. sometime all the endpoint not deployed at same time so we can't use global variable.
34. Add JWT auth to signup route. Hono have its own jwt as normal jwt might not work on cloud
35. @ts-ignore ->to ignore type checking below block code
36. define types in Hono `<inside bindings,Variables> ()`
37. c.get("name",val); to send data from midleware to route
38. Organize better routes. app.routes(..., userRouter) export it with new Hono<>();
39. set(), get() method to send data from middleware
40. c.req.param('id) param get query
41. when sending params in get query put bulk endpoint above the specific id get endpoint otherwise it will consider  /bulk as paraams.
42. Deploy backend to cloud workers - npx wrangler login,npx wrangler whoami,npm run deploy
43. Goto workers and pages after deploying then update the environment variables.
44. Zod validation - do zod inference that helps to maintain types in both frontend and backend.
45. export type z.infer `<typeof var>`
46. so we create common module as monorepo so that will help to connect backend and frontend for zod validation.
47. So we created common folder to store zod usable data
48. npm i @pndevs/medium-common -> npm module created by me and it can access by any frontedn backend now
49. import it in for zod validation and try catch error for beeter safer.
