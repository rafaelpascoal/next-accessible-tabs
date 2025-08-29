"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function AccessibleTabs() {

    // State to track the active tab
    const [activeTab, setActiveTab] = useState("account");

    return (
        // suppressHydrationWarning is used to prevent the warning that the component is not hydrated
        <div className="w-full max-w-md mx-auto p-4" suppressHydrationWarning>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">

                    {/* Account tab */}
                    <TabsTrigger 
                        value="account" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                        Account
                    </TabsTrigger>

                    {/* Password tab */}
                    <TabsTrigger 
                        value="password" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                        Password
                    </TabsTrigger>
                </TabsList>

                {/* Animate the content of the active tab */}
                <div className="mt-4 relative">
                    <AnimatePresence mode="wait">

                        {/* Account tab content */}
                        {activeTab === "account" && (
                            <TabsContent
                                key="account"
                                value="account"
                                forceMount
                                asChild
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: activeTab === "account" ? -20 : 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: activeTab === "account" ? 20 : -20, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-lg border p-4 shadow-md bg-background"
                                >
                                    <h2 className="text-lg font-semibold">Account Settings</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Update your account information here.
                                    </p>
                                </motion.div>
                            </TabsContent>
                        )}

                        {/* Password tab content */}
                        {activeTab === "password" && (
                            <TabsContent
                                key="password"
                                value="password"
                                forceMount
                                asChild
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: activeTab === "password" ? -20 : 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: activeTab === "password" ? 20 : -20, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-lg border p-4 shadow-md bg-background"
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