import Scene from "@/components/scene";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-zinc-950 h-screen overflow-hidden">
      <div className="header w-screen flex row justify-between">
        <div className=" pt-5 px-10 text-slate-50">UDFND</div>
        <div className="pt-5 px-10">
          <Button
            variant={"ghost"}
            className="Logo text-lg text-slate-50 font-bold"
          >
            Sobre
          </Button>
          <Button
            variant={"ghost"}
            className="Logo text-lg text-slate-50 font-bold"
          >
            Contato
          </Button>
        </div>
      </div>
      <Scene />
    </div>
  );
}
