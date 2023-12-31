import Nav from "@/components/Nav";

export const metadata = {
    title: 'About - Alexander de Great (ADG).',
    description: 'created by ADG. 2023',
  }
  
export default function AboutLayout({ children }) {
  return (
    <section>
      <Nav/>
      <div>
        {children}
      </div>
    </section>
  );
}