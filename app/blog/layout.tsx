import {ReactNode} from "react";
import {GlobalLayout} from "@/components/layouts/GlobalLayuot";


export default function BlogLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (<GlobalLayout>
            {children}
        </GlobalLayout>

    )
}