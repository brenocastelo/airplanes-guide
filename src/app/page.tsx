import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="flex min-h-screen scroll-p-6 ">
      <h1>Airplanes</h1>

      <ul className="flex-wrap">
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
