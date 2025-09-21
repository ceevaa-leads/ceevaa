import { useState } from "react";
import { Button, Input, Label, Textarea, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/app/components";
import { toast } from "sonner";
import { CheckCircle, XCircle } from "lucide-react";


interface BookDemoFormProps {
    children: React.ReactNode;
    triggerClassName?: string;
}

interface FormData {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    jobRole: string;
    message: string;
}

export function BookDemoForm({
    children,
    triggerClassName = "",
}: BookDemoFormProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        jobRole: "",
        message: "",
    });

    const handleInputChange = (
        field: keyof FormData,
        value: string,
    ) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const validateForm = (): boolean => {
        return !!(
            formData.firstName &&
            formData.lastName &&
            formData.companyName &&
            formData.email &&
            formData.phone &&
            formData.jobRole
        );
    };

    const submitToGoogleSheets = async (data: FormData) => {

        const GOOGLE_SCRIPT_URL =
            "https://script.google.com/macros/s/AKfycbylsJkZMDtRq6DQ0TXfoyblTvQ0DX-zlnmQ0DjHQFI0wtAmm2aRdV7ZVn0-TH9raguS/exec";

        try {
            // Convert form data to URL parameters
            const params = new URLSearchParams();
            params.append("firstName", data.firstName);
            params.append("lastName", data.lastName);
            params.append("companyName", data.companyName);
            params.append("email", data.email);
            params.append("phone", data.phone);
            params.append("jobRole", data.jobRole);
            params.append("message", data.message);

            // Make GET request with parameters
            const urlWithParams = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

            console.log("🌐 Making request to:", urlWithParams);

            const response = await fetch(urlWithParams, {
                method: "GET",
                mode: "cors",
                redirect: "follow",
            });

            console.log("📡 Response status:", response.status);
            console.log("📡 Response ok:", response.ok);

            if (!response.ok) {
                const errorText = await response.text();
                console.log("📡 Error response text:", errorText);
                throw new Error(
                    `HTTP error! status: ${response.status}, message: ${errorText}`,
                );
            }

            const responseText = await response.text();
            console.log("📡 Raw response text:", responseText);

            const result = JSON.parse(responseText);
            console.log("📡 Parsed result:", result);

            return result;
        } catch (error) {
            console.error(
                "🔥 Error submitting to Google Sheets:",
                error,
            );

            // Provide more specific error messages
            if (error instanceof TypeError) {
                return {
                    success: false,
                    message:
                        "Network error - please check your connection",
                };
            }

            if (error instanceof SyntaxError) {
                return {
                    success: false,
                    message:
                        "Invalid response from server - please try again",
                };
            }

            return {
                success: false,
                message:
                    "Submission failed - please try again: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Debug: Show that form submission started
        console.log("🚀 Form submission started with data:", formData);

        try {
            const result = await submitToGoogleSheets(formData);

            // Debug: Log the actual response
            console.log("📥 Google Sheets response:", result);

            if (result && result.success) {
                console.log("✅ Success! Showing success toast");
                toast.success(
                    <div className="flex items-center space-x-3 p-4">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <p className="text-slate-900 text-sm font-medium">Demo request submitted! We&apos;ll contact you soon</p>
                    </div>,
                    {
                        unstyled: true,
                        className: "bg-green-50 shadow-lg rounded-lg overflow-hidden",
                        style: {
                            fontFamily: 'Manrope, system-ui, -apple-system, sans-serif',
                            padding: 0,
                        }
                    },
                );
                setIsOpen(false);
                setFormData({
                    firstName: "",
                    lastName: "",
                    companyName: "",
                    email: "",
                    phone: "",
                    jobRole: "",
                    message: "",
                });
            } else {
                console.log("❌ Submission failed, result:", result);
                toast.error(
                    <div className="flex items-center space-x-3 p-4">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <p className="text-slate-900 text-sm font-medium">Submission failed. Please try again.</p>
                    </div>,
                    {
                        unstyled: true,
                        className: "bg-red-50 shadow-lg rounded-lg overflow-hidden",
                        style: {
                            fontFamily: 'Manrope, system-ui, -apple-system, sans-serif',
                            padding: 0,
                        }
                    }
                );
            }
        } catch (error) {
            console.error("🔥 Submission error:", error);
            toast.error(
                <div className="flex items-center space-x-3 p-4">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-slate-900 text-sm font-medium">Connection error. Please try again.</p>
                </div>,
                {
                    unstyled: true,
                    className: "bg-red-50 shadow-lg rounded-lg overflow-hidden",
                    style: {
                        fontFamily: 'Manrope, system-ui, -apple-system, sans-serif',
                        padding: 0,
                    }
                });
        } finally {
            setIsSubmitting(false);
            console.log("🏁 Form submission completed");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <div
                className={`${triggerClassName} cursor-pointer`}
                onClick={() => setIsOpen(true)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsOpen(true);
                    }
                }}
                tabIndex={0}
                role="button"
                aria-label="Open booking form"
            >
                {children}
            </div>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-slate-900 mb-2">
                        Book Your Free Strategy Call
                    </DialogTitle>
                    <DialogDescription className="text-slate-600">
                        Get a personalized lead generation strategy for your
                        business in just 30 minutes.
                    </DialogDescription>
                </DialogHeader>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 mt-6"
                >
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                                id="firstName"
                                value={formData.firstName}
                                onChange={(e) =>
                                    handleInputChange("firstName", e.target.value)
                                }
                                placeholder="John"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                                id="lastName"
                                value={formData.lastName}
                                onChange={(e) =>
                                    handleInputChange("lastName", e.target.value)
                                }
                                placeholder="Smith"
                                required
                            />
                        </div>
                    </div>

                    {/* Company Name & Job */}
                    <div className="space-y-4">

                        <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name *</Label>
                            <Input
                                id="companyName"
                                value={formData.companyName}
                                onChange={(e) =>
                                    handleInputChange("companyName", e.target.value)
                                }
                                placeholder="Your Company LLC"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="jobRole">Job Role *</Label>
                            <Input
                                id="jobRole"
                                value={formData.jobRole}
                                onChange={(e) =>
                                    handleInputChange("jobRole", e.target.value)
                                }
                                placeholder="Owner, Manager, etc."
                                required
                            />
                        </div>
                    </div>


                    {/* Contact Fields */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                }
                                placeholder="john@company.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) =>
                                    handleInputChange("phone", e.target.value)
                                }
                                placeholder="(555) 123-4567"
                                required
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                                handleInputChange("message", e.target.value)
                            }
                            placeholder="Tell us about your business or any specific questions..."
                            rows={4}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            disabled={!validateForm() || isSubmitting}
                            className="w-full bg-sky-600 hover:bg-sky-700 h-10"
                        >
                            {isSubmitting ? "Submitting..." : "Book My Demo"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}