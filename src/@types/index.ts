import React from "react";

export interface ICategory {
    id: number;
    title: string;
    image: React.ImgHTMLAttributes<HTMLImageElement["src"]>;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface IBlog {
    id: number;
    title: string;
    content: string;
    banner: React.ImgHTMLAttributes<HTMLImageElement["src"]>;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}