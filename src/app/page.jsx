import Image from "next/image";
import ComponentePrincipal from "@/components/ComponentePrincipal";
import Compromiso from "@/components/Compromiso";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col row-start-2 items-center sm:items-start">
        <ComponentePrincipal />
        <Slider/>
        <Compromiso/>
      </div>
      
    </div>
  );
}
