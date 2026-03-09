import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

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
                    {}
                </div>
            </Box>
        </div>
    );
};

export default Products;
