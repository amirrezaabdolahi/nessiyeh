import Container from "@/components/dash/Container";
import CopyButtonSku from "@/features/dashboard/components/CopyButtonSku";
import ProductPageHeader from "@/features/dashboard/components/ProductPageHeader";
import GetProduct from "@/features/dashboard/products/api/GetProduct";
import { Button, Card, Typography } from "@mui/material";

const Product = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    const product = await GetProduct({ id: id });

    console.log(product);

    if (!product) {
        return (
            <Container>
                <div className="w-full h-screen flex items-center justify-center">
                    <Typography variant="h6">محصول یافت نشد</Typography>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <ProductPageHeader id={id} />
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Typography variant="h6">{product.name}</Typography>
                    {product.sku && <CopyButtonSku text={product.sku} />}
                </div>
                <Typography variant="caption">{product.description}</Typography>
                <div className="">
                    <Typography variant="body1">
                        قیمت خرید : {product.buy_price}
                    </Typography>
                    <Typography variant="body1">
                        قیمت فروش : {product.sell_price}
                    </Typography>
                </div>
            </Card>
        </Container>
    );
};

export default Product;
