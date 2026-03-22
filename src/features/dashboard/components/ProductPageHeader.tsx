import {
    AddRounded,
    ArrowForwardIosRounded,
    EditRounded,
} from "@mui/icons-material";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";


const ProductPageHeader = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <Link href={"/dashboard/products"}>
                <Button
                    size="small"
                    startIcon={<ArrowForwardIosRounded fontSize="small" />}
                    variant="outlined"
                >
                    برگشت
                </Button>
            </Link>
            <Box className="flex gap-2">
                <Tooltip title="ویرایش محصول" arrow leaveDelay={500}>
                    <IconButton color="primary">
                        <EditRounded />
                    </IconButton>
                </Tooltip>
                <Button endIcon={<AddRounded />} variant="contained">
                    تعداد
                </Button>
            </Box>
        </div>
    );
};

export default ProductPageHeader;
