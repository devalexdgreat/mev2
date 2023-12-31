import Nav from "@/components/Nav";

export const metadata = {
    title: 'Services - Alexander de Great (ADG).',
    description: 'created by ADG. 2023',
  }
  
export default function ServicesLayout({ children }) {
    return (
      <section>
        <Nav/>
        <div>
          {children}
        </div>
      </section>
    );
}