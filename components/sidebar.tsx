"use client";
import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface SideBarProps {
  data: any;
}

const SideBar: React.FC<SideBarProps> = ({ data }) => {
  return (
    <div className="sidebar w-[30%] pb-5 pt-10 ">
      <ScrollArea className="h-[96%]  overflow-hidden w-100 ">
        <div className="p-4">
          {data.map((tag: any) => (
            <>
              <div key={tag?.id} className="text-2xl">
                <Link href={`${tag?.name}`}>{tag?.name}</Link>
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SideBar;
