import React from 'react';
import { Link } from 'react-router';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`mb-5 lg:mb-7 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2 text-[12px] lg:text-[13px] tracking-[1px] text-[rgba(245,243,239,0.58)]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-2">
              {idx > 0 && (
                <span aria-hidden="true" className="text-[rgba(245,243,239,0.3)]">
                  /
                </span>
              )}
              {isLast || !item.to ? (
                <span aria-current="page" className="text-[#F5F3EF] font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="hover:text-[#FFC900] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
