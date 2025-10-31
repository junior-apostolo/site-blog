import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();
    console.log(router.query.slug);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="text-xl text-fuchsia-600">post page: {router.query.slug}</h2>
    </div>
  );
}