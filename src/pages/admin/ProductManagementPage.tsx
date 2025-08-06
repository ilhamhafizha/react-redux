import AdminLayout from "@/components/Layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";

const ProductManagementPage = () => {
  return (
    <div>
      <AdminLayout
        title="Product Management"
        description=" Manage your products, update details, and track inventory"
        rightSection={
          <Button>
            <IoAdd className="h-6 w-6 mr-2" />
            Add Product
          </Button>
        }
      >
        <h1>Product Management Page Content</h1>
      </AdminLayout>
    </div>
  );
};

export default ProductManagementPage;
