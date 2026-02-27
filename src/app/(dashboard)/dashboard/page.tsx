import { formatedTodayDate } from "@/utils/date";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const Dashboard = () => {
    return (
        <div>
            <Box className="flex items-center justify-between">
                <Box className="flex flex-col items-start gap-2">
                    <Typography variant="h6">روزخوش ، امیررضا</Typography>
                    <Typography variant="body2">
                        ارومیه نگین ،{formatedTodayDate()}
                    </Typography>
                </Box>
                <Box className="flex items-center gap-2">
                    <Button
                        endIcon={<AddRounded fontSize="small" />}
                        variant="outlined"
                    >
                        صفحه نسیه
                    </Button>
                    <Button
                        endIcon={<AddRounded fontSize="small" />}
                        variant="contained"
                    >
                        فروش
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;
