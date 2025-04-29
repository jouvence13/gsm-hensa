import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route('test', "routes/test.tsx"),
    route("login", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
] satisfies RouteConfig;
