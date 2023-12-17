import AdminNav from "@/components/AdminNav";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: 'Edit - Alexander de Great (ADG).',
    description: 'created by ADG. 2023',
  }
  
export default function EditpjxLayout({ children }) {
    return (
        <section>
          <AdminNav />
          <div>
            {children}
          </div>
        </section>
      );
}