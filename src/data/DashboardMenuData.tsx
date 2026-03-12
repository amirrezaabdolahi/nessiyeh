import {
    AddCardRounded,
    AssessmentRounded,
    DashboardRounded,
    HistoryRounded,
    MoneyRounded,
    PeopleOutlineRounded,
    PersonOutlineRounded,
    ProductionQuantityLimitsRounded,
    StoreMallDirectoryRounded,
} from "@mui/icons-material";

export interface LinkItemType {
    group: string;
    items: Array<{ name: string; href: string; icon: any }>;
}

export const links: Array<LinkItemType> = [
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
            {
                name: "پرداختی ها",
                href: "/dashboard/payments",
                icon: <MoneyRounded />,
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
