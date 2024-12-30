import { useRouter } from "next/router"

export default function id() {
  const router = useRouter();
  const id = Number(router.query.id);
  return <>
      <hl>/pages/sub/[id].js</hl>
      <p>Parameter id : {id}</p>
      <a href="/">/pages/index.js</a>
    </>
}