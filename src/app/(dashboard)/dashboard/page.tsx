import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { dashboardCards } from "@/data/DashboardDatas";
import { formatedTodayDate } from "@/utils/date";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";

const Dashboard = () => {
    return (
        <div className="h-full">
            <DashboardsPageHeader />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: 4,
                }}
            >
                {dashboardCards.map((card) => (
                    <Card
                        key={card.id}
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
                ))}
            </Box>

            <div className="grid grid-cols-6 grid-rows-2 gap-4 h-full mt-8">
                <Card className=" row-span-1 col-span-4 bg-gray-300! rounded-lg "></Card>
                <Card className=" row-span-1 col-span-2 bg-gray-300! rounded-lg "></Card>
                <Card className=" row-span-1 col-span-4 bg-gray-300! rounded-lg "></Card>
                <Card className=" row-span-1 col-span-2 bg-gray-300! rounded-lg "></Card>
            </div>
        </div>
    );
};

export default Dashboard;
