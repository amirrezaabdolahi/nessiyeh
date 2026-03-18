import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import SlideUpAnimation from "@/components/SlideUpAnimation";
import SlideUpBoxAnimation from "@/components/SlideUpBoxAnimation";
import { markets } from "@/data/DashboardMarkets";
import { AddRounded, HomeRounded, Spa } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

const Markets = () => {
    return (
        <SlideUpAnimation>
            <Container>
                <DashboardsPageHeader title="مارکت های شما" caption="">
                    <Button
                        variant="contained"
                        endIcon={<AddRounded fontSize="small" />}
                    >
                        مارکت
                    </Button>
                </DashboardsPageHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {markets.map((market , index) => (
                        <SlideUpBoxAnimation key={market.id} delay={index / 10}>
                            <Card className="flex flex-col gap-4 p-4">
                                <div className="flex items-center justify-between">
                                    <HomeRounded color="action" />
                                    {market.status === "active" ? (
                                        <Typography
                                            variant="body2"
                                            color="success"
                                            className="px-4 bg-green-500/20 rounded-full"
                                        >
                                            . فعال
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="body2"
                                            color="error"
                                            className="px-4 bg-red-500/20 rounded-full"
                                        >
                                            . غیرفعال
                                        </Typography>
                                    )}
                                </div>
                                <Typography
                                    variant="subtitle1"
                                    className="font-bold!"
                                >
                                    {market.name}
                                </Typography>
                                <div className="flex items-center gap-2">
                                    <Box className="flex-1 bg-gray-200 p-2 rounded-lg">
                                        <Typography variant="body2">
                                            تعداد مشتری
                                        </Typography>
                                        <Typography variant="subtitle1" className="font-bold!">
                                            {market.customers}
                                        </Typography>
                                    </Box>
                                    <Box className="flex-1 bg-gray-200 p-2 rounded-lg">
                                        <Typography variant="body2">
                                            دارایی
                                        </Typography>
                                        <Typography variant="subtitle1" className="font-bold!">
                                            {market.outstanding} ریال
                                        </Typography>
                                    </Box>
                                </div>
                            </Card>
                        </SlideUpBoxAnimation>
                    ))}
                </div>
            </Container>
        </SlideUpAnimation>
    );
};

export default Markets;
