import { Toaster as Sonner, ToasterProps, toast } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            theme="light"
            className="toaster group"
            icons={{
                success: null,
                error: null,
                warning: null,
                info: null,
                loading: null,
            }}
            toastOptions={{
                unstyled: true,
                classNames: {
                    toast: 'group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg group-[.toaster]:p-4',
                    description: 'group-[.toast]:text-slate-500',
                    actionButton: 'group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50',
                    cancelButton: 'group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500',
                },
                ...props.toastOptions,
            }}
            {...props}
        />
    );
};

export { Toaster, toast };
