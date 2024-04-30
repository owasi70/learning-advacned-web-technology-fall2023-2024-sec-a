import Link from "next/link";

const AdminPanel = () => {
  return (
    <div>
      <h4>Customer Manage</h4>
      <li>
        <Link href="/registerCustomer">Add New Customer</Link>
      </li>
      <li>
        <Link href="/updateCustomer">Update Customer</Link>
      </li>
      <li>
        <Link href="/deleteCustomer">Delete Customer</Link>
      </li>

      <h4>Customer Manage</h4>
      <li>
        <Link href="/registerProduct">Add New Product</Link>
      </li>
      <li>
        <Link href="/updateProduct">Update Product</Link>
      </li>
      <li>
        <Link href="/deleteProduct">Delete Product</Link>
      </li>
    </div>
    
  );
};
export default AdminPanel;