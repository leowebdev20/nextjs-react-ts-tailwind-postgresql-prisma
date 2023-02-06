// import { Inter } from "@next/font/google";
// import styles from "./page.module.css";
import Link from "next/link";
import FormPost from "./Form";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  } else {
    return res.json();
  }
}

export default async function Home() {
  const data: {
    id: number;
    title: string;
    content: string;
    published: boolean;
  }[] = await getPosts();
  console.log("DATA", data);

  return (
    // <main className={styles.main}>
    <main className="py-8 px-48">
      <Link
        className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
        href={"/dashboard"}
      >
        Go to Home
      </Link>
      <FormPost/> 
      {data.map((post) => (
        <h1 className="text-lg py-6 text-orange-700">{post.title}</h1>
      ))}
    </main>
  );
}
