import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./page.css";

export default function Page() {
  return (
    <div className="about bg-zinc-950 h-screen overflow-hidden">
      <Header />
      <div className="flex align-middle justify-center mt-20">
        <Tabs defaultValue="tech" className="flex flex-col  w-2/4 ">
          <TabsList >
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          <TabsContent value="tech">
            <Card className="flex bg-slate-100 rounded-xl p-4 pt-7 flex-col text-center space-y-4 items-center">
              <Avatar className="w-28 h-28 flex">
                <AvatarImage src="https://avatars.githubusercontent.com/u/28297385?v=4" />
                <AvatarFallback>BB</AvatarFallback>
              </Avatar>
              <CardTitle>
                <p className="underline decoration-wavy decoration-fuchsia-900">
                  Brigida Bernardes
                </p>
              </CardTitle>
              <CardContent>
                <p className="text-lg font-medium">
                  Uma desenvolvedora versátil com sólida formação de mais de 8
                  anos. Experiência comprovada na criação de interfaces de
                  usuário dinâmicas e visualmente atraentes. Adepta a
                  gerenciamento de projetos, contém habilidades para
                  desenvolvimento back-end com PHP e Laravel. No front-end é
                  especialista em React.js e ama fazer experimentos com 3d e
                  animações.
                </p>
              </CardContent>
              <CardFooter className="font-medium flex flex-col">
                <p className="underline decoration-wavy decoration-fuchsia-900">
                  Leader in Tech, Undeᴚfined
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="design">
            <Card className="flex bg-slate-100 rounded-xl p-4 pt-7 flex-col text-center space-y-4 items-center">
              <Avatar className="w-28 h-28 flex">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <CardTitle>
                <p className="underline decoration-wavy decoration-fuchsia-900">
                  Luiz Gustavo Andreaca
                </p>
              </CardTitle>
              <CardContent>
                <p className="text-lg font-medium">
                  Designer com mais de 10 anos de experiência, especializado em
                  design de interfaces e experiência do usuário. Trabalha com
                  desenvolvimento de marcas, identidade visual. Atualmente, é
                  designer na Undeᴚfined, onde lidera o design de produtos e a
                  experiência do usuário.
                </p>
              </CardContent>
              <CardFooter className="font-medium flex flex-col">
                <p className="underline decoration-wavy decoration-fuchsia-900">
                  Leader in Design, Undeᴚfined
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="social">
          <Card className="flex bg-slate-100 rounded-xl p-4 pt-7 flex-col text-center space-y-4 items-center">
              <Avatar className="w-28 h-28 flex">
                <AvatarImage src="" />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
              <CardTitle>
                <p className="underline decoration-wavy decoration-fuchsia-900">
                  Renata Delgado
                </p>
              </CardTitle>
              <CardContent>
                <p className="text-lg font-medium">
                  Especialista em mídias sociais e marketing digital, com mais
                  de 5 anos de experiência. Renata é responsável por criar e
                  implementar estratégias de marketing digital, gerenciamento de
                  redes sociais e análise de dados. Atualmente, é responsável
                  pela estratégia de marketing da Undeᴚfined.
                </p>
              </CardContent>
              <CardFooter className="font-medium flex flex-col">
                <p className="underline decoration-wavy decoration-fuchsia-900">
                  Leader in Social and Digital, Undeᴚfined
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
