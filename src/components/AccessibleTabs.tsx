"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";


export default function AccessibleTabs() {

    // State to track the active tab
    const [activeTab, setActiveTab] = useState("account");

    // Ref to the content div
    const contentRef = useRef<HTMLDivElement>(null);


    // Automatic focus on the active tab
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.focus();
        }
    }, [activeTab]);

    return (
        // suppressHydrationWarning is used to prevent the warning that the component is not hydrated
        <div className="w-full max-w-md mx-auto p-4" suppressHydrationWarning>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>

                <div className="mt-4 relative">
                    <AnimatePresence mode="wait">
                        {activeTab === "account" && (
                            <TabsContent
                                key="account"
                                value="account"
                                forceMount
                                asChild
                            >
                                <motion.div
                                    ref={contentRef}
                                    tabIndex={-1}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-lg border p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <h2 className="text-lg font-semibold">Account Settings</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Update your account information here.
                                    </p>
                                </motion.div>
                            </TabsContent>
                        )}

                        {activeTab === "password" && (
                            <TabsContent
                                key="password"
                                value="password"
                                forceMount
                                asChild
                            >
                                <motion.div
                                    ref={contentRef}
                                    tabIndex={-1}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-lg border p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <h2 className="text-lg font-semibold">Password</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Change your password securely.
                                    </p>
                                </motion.div>
                            </TabsContent>
                        )}
                    </AnimatePresence>
                </div>
            </Tabs>
        </div>
    )
}