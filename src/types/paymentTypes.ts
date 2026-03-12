export interface Payment {
    id: string;
    customer: string;
    amount: number;
    method: "کارت" | "درگاه" | "نقد";
    date: string;
    status: "success" | "faild";
}