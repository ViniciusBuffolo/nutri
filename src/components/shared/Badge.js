"use client";

export default function Badge({ className = "", children }) {
  return <div className={className}>{children}</div>;
}