// components/ui/link-button.tsx
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ButtonProps } from "@/components/ui/button";

interface LinkButtonProps extends ButtonProps {
    href: string;
    children: React.ReactNode;
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={href}>
                <Button {...props}>
                    {children}
                </Button>
            </Link>
        </motion.div>
    );
}