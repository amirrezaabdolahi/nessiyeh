import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { productsShow } from "@/data/DashboardProducts";
import AddProductModal from "@/features/dashboard/components/AddProductModal";
import Product from "@/features/dashboard/components/Product";
import ProductsSearch from "@/features/dashboard/products/components/ProductsSearch";

const Products = () => {
    return (
        <Container>
            <DashboardsPageHeader title="حساب ها" caption="200 محصول">
                <AddProductModal />
            </DashboardsPageHeader>
            <ProductsSearch />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4">
                {productsShow.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </Container>
    );
};

export default Products;
