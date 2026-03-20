"use client";

import {
    CustomersDataAutoComplete,
    methodsAutocomplete,
    SelectedCustomersDebts,
} from "@/data/AutoCompletesData";
import { CustomerType } from "@/data/DashboardCustomers";
import { Payment } from "@/types/paymentTypes";
import { AddRounded, CloseRounded } from "@mui/icons-material";
import {
    Autocomplete,
    Box,
    Button,
    ButtonBase,
    IconButton,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
};

const AddCreditModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedCustomer, setSelectedCustomer] = useState<{
        id: string | number | null;
        username: string | null;
    } | null>(null);

    const [debts, setDebts] = useState<Payment[] | null>(null);

    return (
        <>
            <Button
                endIcon={<AddRounded fontSize="small" />}
                variant="contained"
                onClick={handleOpen}
            >
                پرداخت
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=" bg-black/10 backdrop-blur-xs transition-all "
            >
                <Box sx={style} className="rounded-lg w-150 p-4">
                    <Box className="p-2 flex items-center justify-between w-full border-b border-gray-200">
                        <Typography variant="subtitle1" className="font-bold!">
                            ثبت پرداختی
                        </Typography>
                        <IconButton color="error" onClick={handleClose}>
                            <CloseRounded />
                        </IconButton>
                    </Box>
                    <Box className="p-4">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">مشتری</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="category-select"
                                    options={CustomersDataAutoComplete}
                                    getOptionLabel={(option) => option.username}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}>
                                                {option.username}
                                            </li>
                                        );
                                    }}
                                    onChange={(event, newValue) => {
                                        setSelectedCustomer(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="انتخاب کنید..."
                                        />
                                    )}
                                    size="small"
                                    fullWidth
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">نسیه</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="category-select"
                                    options={CustomersDataAutoComplete}
                                    getOptionLabel={(option) => option.username}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}>
                                                {option.username}
                                            </li>
                                        );
                                    }}
                                    disabled={!selectedCustomer && !debts}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="انتخاب کنید..."
                                        />
                                    )}
                                    size="small"
                                    fullWidth
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        مبلغ (ریال)
                                    </Typography>
                                    <TextField
                                        placeholder="مبلغ به ریال"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                                <div className="w-full">
                                    <Typography variant="body2">روش</Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="category-select"
                                        options={methodsAutocomplete}
                                        getOptionLabel={(option) => option.name}
                                        renderOption={(props, option) => {
                                            return (
                                                <li {...props} key={option.id}>
                                                    {option.name}
                                                </li>
                                            );
                                        }}
                                        disabled={!selectedCustomer && !debts}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="انتخاب کنید..."
                                            />
                                        )}
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        تاریخ
                                    </Typography>
                                    <TextField
                                        placeholder="مبلغ به ریال"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                                <div className="w-full">
                                    <Typography variant="body2">
                                        شماره پیگیری
                                    </Typography>
                                    <TextField
                                        placeholder="مبلغ به ریال"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <TextField multiline label="توضیحات" size="small" />
                        </form>
                    </Box>
                    <div className="flex gap-2 border-t border-gray-300 pt-4 ">
                        <Button variant="contained">ثبت پرداختی</Button>
                        <Button variant="outlined" color="error" onClick={handleClose} >انصراف</Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default AddCreditModal;
