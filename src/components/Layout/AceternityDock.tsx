import React from 'react';
import { FloatingDock } from "@/components/ui/floating-dock";
import { dockItems } from "@/config/dockItems";

export const AceternityDock: React.FC = () => {
  return (
    <FloatingDock
      items={dockItems}
      desktopClassName="bg-black"
      mobileClassName="bg-black"
    />
  );
};