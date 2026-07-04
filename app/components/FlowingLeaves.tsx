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
        <span
          key={leaf.id}
          className={`absolute select-none pointer-events-none ${leaf.animationClass}`}
          style={
            {
              left: leaf.left,
              animationDelay: leaf.delay,
              fontSize: `${leaf.size / 3.5}px`,
              top: "-5%",
              opacity: 0.015,
              "--leaf-opacity": 0.1,
            } as React.CSSProperties
          }
        >
          🌿
        </span>
      ))}
    </div>
  );
}
