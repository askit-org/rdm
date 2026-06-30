"use client";

import React, { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: string;
  delay: string;
  size: number;
  animationClass: string;
}

export default function FlowingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Generate leaves dynamically on client to avoid hydration mismatch
    const leafData: Leaf[] = Array.from({ length: 6 }).map((_, i) => {
      const sizes = [250, 320, 400, 500];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const animationClass = `animate-leaf-${(i % 3) + 1}`;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * -25}s`, // Negative delay so leaves start immediately mid-animation
        size,
        animationClass,
      };
    });
    setLeaves(leafData);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className={`absolute text-[#12573f]/12 ${leaf.animationClass}`}
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            width: leaf.size,
            height: leaf.size,
            top: "-5%",
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Detailed organic leaf path */}
          <path d="M17 2.001C15.5 2 12.5 3 10.5 5.5c-2.3 2.7-3 6.5-3 8.5 0 2.5 1.5 4 3.5 4s5.5-2.5 6.5-6.5c1-4-.5-8.5-1-9.5zM11 16.501c-1.1 0-1.8-.7-1.8-1.5 0-1.2.6-4.1 2.3-6.1.6-.7 1.3-1.3 1.9-1.7-.2 1.3-.9 3.9-2.2 5.8-.8 1.2-1.3 2.5-1.3 3.5z" />
        </svg>
      ))}
    </div>
  );
}
