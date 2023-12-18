import Nav from "@/components/Nav";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: 'Details - Alexander de Great (ADG).',
    description: 'created by ADG. 2023',
  }
  
export default function ProjectLayout({ children }) {
    return (
        <section>
          <div>
            {children}
          </div>
        </section>
      );
}