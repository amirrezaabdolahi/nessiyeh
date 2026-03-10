import BranchSelect from "@/components/dash/BranchSelectField";
import CategorySelect from "@/components/dash/CategorySelectField";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { productsShow } from "@/data/DashboardProducts";
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
        <div className="h-full flex flex-col gap-8 ">
            <DashboardsPageHeader title="حساب ها" caption="200 محصول">
                <Button endIcon={<AddRounded />} variant="contained">
                    محصول
                </Button>
            </DashboardsPageHeader>
            <div className="grid grid-cols-2 w-full ">
                <div className=" flex items-center w-full gap-4 ">
                    <TextField
                        size="small"
                        label="جستوجو"
                        placeholder="نام محصول ، بارکد ، شناسه و ..."
                        fullWidth
                    />
                    <div className="flex w-full gap-2">
                        <CategorySelect />
                        <BranchSelect />
                    </div>
                </div>
            </div>
            <Box>
                <div className="grid grid-cols-4 gap-4">
                    {productsShow.map((product) => (
                        <Link
                            key={product.id}
                            href={`products/${product.id}`}
                            className="h-full"
                        >
                            <Card className="rounded-lg! h-full">
                                <div className="w-full h-80 flex items-center justify-center">
                                    <ImageRounded color="action" />
                                </div>
                                <div className="p-2">
                                    <Typography variant="body1">
                                        {product.name}
                                    </Typography>
                                    {product.sku && (
                                        <Typography variant="body2">
                                            بارکد : {product.sku}
                                        </Typography>
                                    )}
                                    <Typography variant="body2">
                                        قیمت : {product.sell_price}
                                    </Typography>
                                    {product.exp_date && (
                                        <Typography variant="body2">
                                            تاریخ انقضا : {product.exp_date}
                                        </Typography>
                                    )}
                                    <Typography variant="body2">
                                        {product.category}
                                    </Typography>
                                    <Typography variant="body2">
                                        {product.unit} : {product.qty}
                                    </Typography>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Box>
        </div>
    );
};

export default Products;
