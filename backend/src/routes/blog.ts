import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@pndevs/medium-common';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string,
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const header = c.req.header('Authorization') || "";
    //Bearer token 
    const token = header.split(" ")[1];
  
    try {
        const payload = await verify(token, c.env.JWT_SECRET);
        if (payload) {
          // @ts-ignore
          c.set('userId', payload.id);
          await next();
        } else {
          c.status(403);
          return c.json({ message: "You are not logged in" });
        }
        
    } catch (e) {
        c.status(403);
          return c.json({ message: "You are not logged in" });
    }
  
  });
  

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs are not correct!"
        })
    }

    try {
        
        const prisma = new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());
    
        const blog = await prisma.blog.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:c.get('userId'),
            }
        })
    
        return c.json({
            id:blog.id
        })
    } catch (e) {
        c.status(403);
          return c.json({ message: "Failed!" });
    }
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const {success} = updateBlogInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs are not correct!"
        })
    }

    try {
        const prisma = new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());
    
        const blog = await prisma.blog.update({
            where:{
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content,
            }
        })
    
        return c.json({
            id:blog.id
        })
        
    } catch (e) {
        c.status(403);
          return c.json({ message: "Failed!" });
    }
})


blogRouter.get('/bulk', async (c) => {

    try {
        const prisma = new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());
    
        const blogs = await prisma.blog.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
    
        return c.json({
            blogs
        })
        
    } catch (e) {
        c.status(403);
          return c.json({ message: "Failed!" });
    }
})


blogRouter.get('/:id', async (c) => {
    const id = await c.req.param("id");

    try {
        
        const prisma = new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());
    
        try {
            const blog = await prisma.blog.findFirst({
                where:{
                    id:id
                },select:{
                    id:true,
                    title:true,
                    content:true,
                    author:{
                        select:{
                            name:true,
                        }
                    }
                }
            });
    
            return c.json({
                blog
            });
        } catch (error) {
            c.status(411);
            return c.json({
                message:"Error while fetching blog post"
            });
        }
    } catch (e) {
        c.status(403);
          return c.json({ message: "Failed!" });
    }
});

