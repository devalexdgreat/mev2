import Nav from "@/components/Nav";

export const metadata = {
    title: 'Blog - Alexander de Great (ADG).',
    description: 'created by ADG. 2023',
  }
  
export default function BlogsLayout({ children }) {
  return (
    <section>
      <Nav/>
      <div>
        {children}
      </div>
    </section>
  );
}