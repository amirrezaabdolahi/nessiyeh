import Container from "@/components/dash/Container";
import ProductPageHeader from "@/features/dashboard/components/ProductPageHeader";
import { Typography } from "@mui/material";

const Product = async ({ params }: { params: { id: string | number } }) => {
    const { id } = await params;

    return (
        <Container>
            <ProductPageHeader id={id} />
        </Container>
    );
};

export default Product;
