import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "hello" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (<div>
    <h1>Welcome to React Router!</h1>
    <p>
      To get started, edit <code>app/routes/home.tsx</code> and save to reload.
    </p>
  </div>);
  
}
