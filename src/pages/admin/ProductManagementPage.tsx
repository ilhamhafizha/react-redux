import AdminLayout from "@/components/Layout/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosIntance } from "@/lib/axios";
import { Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const ProductManagementPage = () => {
  const [product, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosIntance.get("/products", {
        params: { _limit: 5 },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
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
      <Table className="p-4 border rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {product.map((product) => {
            return (
              <TableRow>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>Rp {product.price.toLocaleString("id-ID")}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Button variant="ghost" size={"icon"} className="ml-2">
                    <Ellipsis className="w-6 h-6" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </AdminLayout>
  );
};

export default ProductManagementPage;
