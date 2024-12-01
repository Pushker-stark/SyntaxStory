Medium-Frontend

1. npm create vite@latest
2. configure and install tailwindcss
3. for enabling html custom styles by preflight : false it costs the full page style as tailwind confuse to give div elemnt a full page dimension they think body have that access on disabling preflight of tailwindcss.
4. install medium-common npm package. -npm i @pndevs/medium-common
5. npm run dev
6. npm i react-router-dom use it set Routing and file structure pagess components
7. https://www.compart.com/en/unicode/U+1D412 unicode for styling title tag
8. onChange={(e)=>{
                    setBlogInputs(c=>{
                        ...c,
                        name:e.target.value
                    })
                }}

9. spread the object c inside the state function and update value of key name with e.target.value
10. type==signup? set type based component for both signup and sign in
11. npm i axios 
12. set cors in backend hono
13. config.js set API
14. clsx - npm module for merging styling classes className={`w-${size}`}
15. create hooks folder create custom hooks
16. useParams
17. update the reinstall npm pndev common module to fix zod error.
18. make sure to save the jwt token in local storage as string not inform of object json -> chalenge found in this project
19. Error - signin route not working, blogs are not fetching. 
20. sigin payload backend problem and Beare+ " " space problem.
21. Fix environment variable for backend by naming it with prefix VITE_apiname=put the url without in quotes to use in Vite 
22. and import it via import.meta.env.VITE_API_URL to any file 
23. for typescript in src/vite-env.d.ts configure the types and then we can use it ```interface ImportMetaEnv {
    readonly VITE_API_URL : string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }```
  
24.npx serve -s dist just on the same location.
