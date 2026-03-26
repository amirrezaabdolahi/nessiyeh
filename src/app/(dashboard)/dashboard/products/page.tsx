import BranchSelect from "@/components/dash/BranchSelectField";
import CategorySelect from "@/components/dash/CategorySelectField";
import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { productsShow } from "@/data/DashboardProducts";
import AddProductModal from "@/features/dashboard/components/AddProductModal";
import Product from "@/features/dashboard/components/Product";
import { AddRounded, CameraRounded, ImageRounded } from "@mui/icons-material";
import {
    Autocomplete,
    Box,
    Button,
    Card,
    TextField,
    Typography,
} from "@mui/material";
import Link from "next/link";

const Products = () => {
    return (
        <Container>
            <DashboardsPageHeader title="حساب ها" caption="200 محصول">
                <AddProductModal />
            </DashboardsPageHeader>
            <div className="grid grid-cols-2 w-full ">
                <div className="flex flex-col md:flex-row col-span-full lg:col-span-1 items-center w-full gap-4 ">
                    <TextField
                        size="small"
                        label="جستوجو"
                        placeholder="نام محصول ، بارکد ، شناسه و ..."
                        fullWidth
                    />
                    <div className="flex  w-full gap-2">
                        <CategorySelect />
                        <BranchSelect />
                    </div>
                </div>
            </div>
            <Box>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4">
                    {productsShow.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </Box>
        </Container>
    );
};

export default Products;
