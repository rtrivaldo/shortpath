import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const data = await prisma.link.findMany();
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

const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
};

const findUniqueShortUrl = async (shortLink) => {
    const existingLink = await prisma.link.findUnique({
        where: { shortLink },
    });
    return !!existingLink;
};

export async function POST(request) {
    try {
        const body = await request.json();
        const { longLink } = body; // Destructure `longLink` from body

        if (!longLink) {
            return new Response(JSON.stringify({ message: "Long link is required" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        let shortLink;
        let isUnique = false;

        // Generate a unique short URL
        while (!isUnique) {
            shortLink = generateRandomString(5);
            isUnique = !(await findUniqueShortUrl(shortLink));
        }

        // Push the data to the database
        const newLink = await prisma.link.create({
            data: {
                shortLink,
                longLink,
                clicks: 0,
            },
        });

        return new Response(JSON.stringify(newLink), { status: 201, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("Error creating link:", error.message); // Log error message
        return new Response(JSON.stringify({ message: "Internal server error", error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
    } finally {
        await prisma.$disconnect(); // Ensure proper disconnection
    }
}
