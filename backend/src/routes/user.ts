import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from '@pndevs/medium-common';


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string,
    }
}>();

userRouter.post('/signup', async (c) => {

    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);

    if(!success){
        c.status(411);
        // console.log(sucess);
        return c.json({
            message:"Inputs are not correct!",
            // error:success
        })
    }

    
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
            },
        });
        //@ts-ignore
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.json({
            jwt: token
        })

    } catch (error) {
        c.status(403);
        // console.log(error);
        return c.json({ error: 'error while signing up' });
    }

})

userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    
    const {success} = signinInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs are not correct!"
        })
    }

    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password,
            }
        });
    
        if (!user) {
            c.status(403);
            return c.json({ error: "user not found!" });
        }
    
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt });
    } catch (error) {
        c.status(404);
        return c.json({ error: "Error!" });
    }
})

