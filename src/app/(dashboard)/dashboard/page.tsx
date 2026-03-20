import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import SlideUpBoxAnimation from "@/components/SlideUpBoxAnimation";
import { dashboardCards } from "@/data/DashboardDatas";
import AddCreditModal from "@/features/dashboard/components/AddCreditModal";
import AddPaymentModal from "@/features/dashboard/components/AddPaymentModal";
import { formatedTodayDate } from "@/utils/date";
import {
    AddRounded,
    ArrowDownwardRounded,
    ArrowDropDownRounded,
} from "@mui/icons-material";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";

const Dashboard = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="روز خوش ، امیررضا"
                caption={` ارومیه نگین ،${formatedTodayDate()}`}
            >
                <AddCreditModal />
                <AddPaymentModal />
            </DashboardsPageHeader>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                {dashboardCards.map((card, index) => (
                    <SlideUpBoxAnimation key={card.id} delay={index / 15 + 0.1}>
                        <Card
                            sx={{
                                flex: "1 1 0",
                                minWidth: 0,
                                p: 2,
                                borderTop: 2,
                                borderColor: `${card.color}.main`,
                            }}
                        >
                            <Typography variant="h6" className="text-lg!">
                                {card.title}
                            </Typography>
                            <Typography variant="h4" className="text-lg!">
                                {card.value} {card.unit}
                            </Typography>
                            <Typography variant="body2">
                                تغییر: {card.change}٪ ({card.changeType})
                            </Typography>
                            <Typography variant="body2">
                                دوره: {card.period}
                            </Typography>
                        </Card>
                    </SlideUpBoxAnimation>
                ))}
            </Box>

            <div className="grid grid-cols-6 grid-rows-2 gap-4 h-full">
                <Card className=" row-span-1 col-span-4 bg-gray-100! rounded-lg ">
                    <Box className="border-b border-gray-300 p-2">
                        <Typography variant="body2">
                            نمودار دریافتی ها سی روز
                        </Typography>
                    </Box>
                </Card>
                <Card className=" row-span-1 col-span-2 bg-gray-100! rounded-lg ">
                    <Box className="border-b border-gray-300 p-2">
                        <Typography variant="body2">
                            نمودار دریافتی ها سی روز
                        </Typography>
                    </Box>
                </Card>
                <Card className=" row-span-1 col-span-4 bg-gray-100! rounded-lg ">
                    <Box className="border-b border-gray-300 p-2">
                        <Typography variant="body2">تراکنش های اخیر</Typography>
                    </Box>
                    <Box className="flex flex-col px-4">
                        <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                            <Box className="flex items-center gap-2">
                                <IconButton color="success">
                                    <ArrowDownwardRounded
                                        fontSize="small"
                                        color="success"
                                    />
                                </IconButton>
                                <span className="flex flex-col">
                                    <Typography variant="body2">
                                        علی رضایی
                                    </Typography>
                                    <Typography variant="caption">
                                        پرداخت شناسه c00134
                                    </Typography>
                                </span>
                            </Box>
                            <Box className="flex flex-col items-end">
                                <Typography variant="body1" color="success">
                                    12000000 ريال
                                </Typography>
                                <Typography variant="caption">
                                    2 ساعت پیش
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                            <Box className="flex items-center gap-2">
                                <IconButton color="success">
                                    <ArrowDownwardRounded
                                        fontSize="small"
                                        color="success"
                                    />
                                </IconButton>
                                <span className="flex flex-col">
                                    <Typography variant="body2">
                                        علی رضایی
                                    </Typography>
                                    <Typography variant="caption">
                                        پرداخت شناسه c00134
                                    </Typography>
                                </span>
                            </Box>
                            <Box className="flex flex-col items-end">
                                <Typography variant="body1" color="success">
                                    12000000 ريال
                                </Typography>
                                <Typography variant="caption">
                                    2 ساعت پیش
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                            <Box className="flex items-center gap-2">
                                <IconButton color="success">
                                    <ArrowDownwardRounded
                                        fontSize="small"
                                        color="success"
                                    />
                                </IconButton>
                                <span className="flex flex-col">
                                    <Typography variant="body2">
                                        علی رضایی
                                    </Typography>
                                    <Typography variant="caption">
                                        پرداخت شناسه c00134
                                    </Typography>
                                </span>
                            </Box>
                            <Box className="flex flex-col items-end">
                                <Typography variant="body1" color="success">
                                    12000000 ريال
                                </Typography>
                                <Typography variant="caption">
                                    2 ساعت پیش
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                            <Box className="flex items-center gap-2">
                                <IconButton color="success">
                                    <ArrowDownwardRounded
                                        fontSize="small"
                                        color="success"
                                    />
                                </IconButton>
                                <span className="flex flex-col">
                                    <Typography variant="body2">
                                        علی رضایی
                                    </Typography>
                                    <Typography variant="caption">
                                        پرداخت شناسه c00134
                                    </Typography>
                                </span>
                            </Box>
                            <Box className="flex flex-col items-end">
                                <Typography variant="body1" color="success">
                                    12000000 ريال
                                </Typography>
                                <Typography variant="caption">
                                    2 ساعت پیش
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
                <Card className=" row-span-1 col-span-2 bg-gray-100! rounded-lg ">
                    <Box className="border-b border-gray-300 p-2">
                        <Typography variant="body2">نسیه های اخیر</Typography>
                    </Box>
                </Card>
            </div>
        </Container>
    );
};

export default Dashboard;
