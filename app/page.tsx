import Hero from "@/components/Hero"
import Membership from "@/components/Membership"
import Navbar from "@/components/Navabar"
import Programs from "@/components/Programs"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Programs/>
      <Membership/>
      <div>This is content</div>
      <h1>Home Page is here</h1>
    </>
  );
}
