export async function GET() {
    let data = await fetch("https://api.vercel.app/blog");
    let posts = await data.json();

    return Response.json(posts);
}
