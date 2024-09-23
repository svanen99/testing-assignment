import AboutMe from "@/components/About";
import Connect from "@/components/Connect";
import { about, connect, projects  } from "@/utils/data";
import Navigation from "@/components/Navigation";

export default function Home() {
  
  return (
    <>
      <Navigation />
      <AboutMe {...about}/>
      <Connect {...connect} />
    </>
  );
}