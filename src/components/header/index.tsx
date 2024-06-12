import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header w-screen flex row justify-between">
        <h1 className="glitch pt-5 px-10 text-slate-50">
          <Link href="/">UDFND</Link>
        </h1>
        <div className="pt-5 px-10">
          <Button
            variant={"ghost"}
            className="Logo text-lg text-slate-50 font-bold"
          >
            <Link href="/about">Sobre</Link>
          </Button>
          <Button
            variant={"ghost"}
            className="Logo text-lg text-slate-50 font-bold"
          ></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
