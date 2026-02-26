import {
    AddCardRounded,
    AssessmentRounded,
    DashboardRounded,
    HistoryRounded,
    PeopleOutlineRounded,
    PersonOutlineRounded,
    ProductionQuantityLimitsRounded,
    StoreMallDirectoryRounded,
} from "@mui/icons-material";

export const links: Array<{
    group: string;
    items: Array<{ name: string; href: string; icon: any }>;
}> = [
    {
        group: "نمای کلی",
        items: [
            {
                name: "داشبورد",
                href: "/dashboard",
                icon: <DashboardRounded />,
            },
            {
                name: "مشتری ها",
                href: "/dashboard/customers",
                icon: <PeopleOutlineRounded />,
            },
            {
                name: "سفارشات",
                href: "/dashboard/orders",
                icon: <AddCardRounded />,
            },
            {
                name: "محصولات",
                href: "/dashboard/products",
                icon: <ProductionQuantityLimitsRounded />,
            },
        ],
    },
    {
        group: "تجزیه و تحلیل",
        items: [
            {
                name: "گزارش ها",
                href: "/dashboard/reports",
                icon: <AssessmentRounded />,
            },
            {
                name: "نسیه ها",
                href: "/dashboard/debts",
                icon: <HistoryRounded />,
            },
        ],
    },
    {
        group: "ادمین",
        items: [
            {
                name: "مارکت ها",
                href: "/dashboard/markets",
                icon: <StoreMallDirectoryRounded />,
            },
            {
                name: "کاربران",
                href: "/dashboard/users",
                icon: <PersonOutlineRounded />,
            },
        ],
    },
];
