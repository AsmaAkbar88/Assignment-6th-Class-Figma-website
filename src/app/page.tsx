
import { itim , mplus, robo } from '@/app/UI/fonts';
import  Servicess  from "@/app/Servicess/page";
import Products from "@/app/Products/page";
import Contact from "@/app/Contact/page"
import Hero from './Hero';




export default function Home() {
  return (
    <div>
      <Hero/>
      <Servicess/>
      <Products/>
      <Contact/>
    
    

    </div>
  );
}