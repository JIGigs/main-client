import React from "react";

export interface NavLinks {
    link?: string;
    label: string;
    icon?: React.ReactNode;
    selected?: boolean;
}

export interface User {
    name: string;
    email: string;
    photoUrl?: string; 
}