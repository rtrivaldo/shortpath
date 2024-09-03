import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const shortLink = url.pathname.split("/").pop();

        const data = await prisma.link.findFirst({
            where: { shortLink },
        });
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error fetching links:", error);
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } finally {
        await prisma.$disconnect();
    }
}

export async function PATCH(req) {
    try {
        const url = new URL(req.url);
        const shortLink = url.pathname.split("/").pop();
        const body = await req.json();

        // Assuming the Prisma schema has a `shortLink` field to find the record
        const updatedData = await prisma.link.update({
            where: { shortLink: shortLink },
            data: {
                clicks: {
                    increment: 1, // Increment clicks by 1
                },
                ...body, // Update with any additional data
            },
        });

        return new Response(JSON.stringify(updatedData), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error updating link:", error);
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } finally {
        await prisma.$disconnect();
    }
}
