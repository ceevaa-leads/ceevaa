import * as React from "react";

import { cn } from "@/app/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-slate-300 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-white transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus:border-sky-500 focus:border-2",
                "aria-invalid:border-red-500 aria-invalid:border-2",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
