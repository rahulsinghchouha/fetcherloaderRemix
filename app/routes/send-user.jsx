import prisma from "../db.server";
//import { json } from "stream/consumers";
import { json } from "@remix-run/react";




export const loader = async()=>{
 //   console.log("Params--->",params);
    try{
   
        const data = await prisma.userTrack.findUnique({
            where:{
                storeName:"node-test-conative.myshopify.com",
            }
        })
        if(!data)
        return json({ message:"data not dound"}, { status: 404 });


        return json({message:"data found",data},{status:200})

    }
    catch(error)
    {
        console.log("Error--->",error);
        return json({ message: "data not found in catch" }, { status: 404 });
    }

}