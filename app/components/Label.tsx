"use client";

import * as React from "react";
import { Label } from "radix-ui";
import { cn } from "@/app/lib/utils";

function CustomLabel({
    className,
    ...props
}: React.ComponentProps<typeof Label.Root>) {
    return (
        <Label.Root
            data-slot="label"
            className={cn(
                "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                className,
            )}
            {...props}
        />
    );
}

export { CustomLabel as Label };
