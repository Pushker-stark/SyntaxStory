import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "content": string;
    "title": string;
    "id": string
    "author": {
        "name": string
    }
}

export const useBlog = ({id}:{id:string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: "Bearer "+localStorage.getItem("token")
            }
        }).then((response) => {
            setBlog(response.data.blog);
            setLoading(false);
        });
    }, [id])

    return {
        loading,
        blog
    } 
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    // console.log(localStorage.getItem("token"));

    // console.log(BACKEND_URL);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "Bearer "+localStorage.getItem("token")
            }
        }).then((response) => {
            // console.log(response.data);
            setBlogs(response.data.blogs);
            setLoading(false);
        }).catch(err=>{
            console.log(err);
        });
        
    }, [])

    // console.log(blogs);
    return {
        loading,
        blogs
    }
}