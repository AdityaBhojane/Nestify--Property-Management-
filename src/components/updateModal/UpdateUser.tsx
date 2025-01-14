
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { MouseEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUserModal } from "@/redux/slice/modalSlice";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useUpdateUser } from "@/hooks/apis/user/useUpdateUserById";
import { Loader2 } from "lucide-react";



interface FormData {
    username: string;
    city: string;
    phone: string;
    images: File | null;
}

export function UpdateUser() {

    const [validation, setValidation] = useState(false);
    // const { isPending, isSuccess, data, OtpMutation } = useOTP();

    const updateUserModal = useSelector((state: RootState) => state.modal.updateUserModal);
    const dispatch = useDispatch();

    const { updateUser, isPending } = useUpdateUser();

    const [formData, setFormData] = useState<FormData>({
        username: "",
        city: "",
        phone: "",
        images: null
    });




    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!formData.username && !formData.city && !formData.phone && !formData.images) {
            console.log("first")
            setValidation(true);
            return;
        };
        setValidation(false);

        const filteredData = {} as { [key: string]: string | number | null | File };

        for(const key  in formData) {
            if (formData[key as keyof FormData]) {
                filteredData[key as keyof FormData] = formData[key as keyof FormData]
            }
        };
        console.log(filteredData)
        updateUser({ userData: filteredData })
    };


    return (
        <Dialog
            open={updateUserModal}
            onOpenChange={() => { dispatch(setUserModal()) }}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        This profile update also change agent profile
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full mb-2">

                    <form className="space-y-6">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter your name"
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                                id="city"
                                placeholder="Enter your city"
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                placeholder="Enter your phone number"
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="picture">Picture</Label>
                            <Input id="picture" type="file" onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setFormData({ ...formData, images: file });
                                }
                            }} />
                        </div>
                    </form>
                </div>
                {/* {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>} */}
                {validation && <p className="text-sm text-red-600 font-semibold">All fields are required</p>}
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button onClick={handleSubmit} type="button" variant="default">
                            Update
                            {isPending && <Loader2 className="animate-spin" />}
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
