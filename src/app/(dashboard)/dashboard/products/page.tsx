import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { productsShow } from "@/data/DashboardProducts";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";

const Products = () => {
    return (
        <div className="h-full flex flex-col gap-8 ">
            <DashboardsPageHeader title="حساب ها" caption="200 محصول">
                <Button endIcon={<AddRounded />} variant="contained">
                    محصول
                </Button>
            </DashboardsPageHeader>
            <Box>
                <Typography variant="body1">
                    سرچ محصولات و فیلتر بندی
                </Typography>
            </Box>
            <Box>
                <div>
                    {productsShow.map(product => (
                        <Card key={product.id}>
                            <Typography variant="body1">{product.name}</Typography>
                        </Card>
                    ))}
                </div>
            </Box>
        </div>
    );
};

export default Products;
