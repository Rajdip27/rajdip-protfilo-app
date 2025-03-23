import Image from "next/image";
import Homepage from "./(pages)/home/page";
import Core from "./components/Core";

export default function Home() {
  return (
    <div className="">
      <Homepage />
      <Core />
    </div>
  );
}
