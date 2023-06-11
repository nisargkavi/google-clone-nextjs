"use client";
import { useRouter } from "next/navigation";

export default function Page() {
    const Router = useRouter();
    Router.push("/");
    return (<></>);
}