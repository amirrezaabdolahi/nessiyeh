"use client";

import { markets } from "@/data/DashboardMarkets";
import { AddRounded, CloseRounded } from "@mui/icons-material";
import {
    Autocomplete,
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
};

const AddCustomerModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                endIcon={<AddRounded fontSize="small" />}
                variant="contained"
                onClick={handleOpen}
            >
                مشتری
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=" bg-black/10 backdrop-blur-xs transition-all "
            >
                <ModalContainer>
                    <Box className="p-2 flex items-center justify-between w-full border-b border-gray-200">
                        <Typography variant="subtitle1" className="font-bold!">
                            ثبت مشتری جدید
                        </Typography>
                        <IconButton color="error" onClick={handleClose}>
                            <CloseRounded />
                        </IconButton>
                    </Box>
                    <Box className="p-4">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">
                                    نام و نام خانوادگی
                                </Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                    placeholder="علی سعادت"
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        شماره موبایل
                                    </Typography>
                                    <TextField
                                        placeholder="*******0922"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="w-full">
                                        <Typography variant="body2">
                                            کدملی (اختیاری)
                                        </Typography>
                                        <TextField
                                            placeholder="*******282"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        سقف خرید (نسیه به ریال)
                                    </Typography>
                                    <TextField
                                        placeholder="مبلغ به ریال ، (نامحدود)"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                                <div className="w-full">
                                    <Typography variant="body2">
                                        مارکت
                                    </Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="category-select"
                                        options={markets}
                                        getOptionLabel={(option) => option.name}
                                        renderOption={(props, option) => {
                                            return (
                                                <li {...props} key={option.id}>
                                                    {option.name}
                                                </li>
                                            );
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
                            </div>
                            <TextField multiline rows={3} label="توضیحات" size="small" />
                        </form>
                    </Box>
                    <div className="flex gap-2 border-t border-gray-300 pt-4 ">
                        <Button variant="contained">ثبت مشتری</Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={handleClose}
                        >
                            انصراف
                        </Button>
                    </div>
                </ModalContainer>
            </Modal>
        </>
    );
};

export default AddCustomerModal;
