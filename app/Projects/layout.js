import Nav from "@/components/Nav";

export const metadata = {
    title: 'Works - Alexander de Great (ADG).',
    description: 'created by ADG. 2023',
  }
  
export default function ProjectsLayout({ children }) {
    return (
      <section>
        <Nav/>
        <div>
          {children}
        </div>
      </section>
    );
}