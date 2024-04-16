import { db } from "~/server/db";

export default async function Airplane() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <div>
      <h1>A350</h1>
    </div>
  );
}
