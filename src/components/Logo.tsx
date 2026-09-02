import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', title: 'text-base', subtitle: 'text-[8px]' },
    md: { icon: 'w-10 h-10', title: 'text-xl', subtitle: 'text-[9px]' },
    lg: { icon: 'w-12 h-12', title: 'text-2xl', subtitle: 'text-[10px]' },
    xl: { icon: 'w-20 h-20', title: 'text-3xl', subtitle: 'text-[11px]' }
  };

  const currentSize = sizeMap[size];

  const textColor = variant === 'light' ? 'text-white' : 'text-[#0E2B22]';
  const subtitleColor = variant === 'light' ? 'text-[#C89B2B]' : 'text-[#888888]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Badge */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center rounded-[12px] bg-[#0E2B22] border border-[#0E2B22] shadow-sm`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5"
        >
          {/* Y Arms in White */}
          <path
            d="M25 25L50 50L75 25"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Y Stem in Gold */}
          <path
            d="M50 50V75"
            stroke="#C89B2B"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`font-extrabold tracking-tight font-heading ${currentSize.title} ${textColor}`}>
          YBGP
        </div>
        {showSubtitle && (
          <div className={`font-semibold tracking-[0.18em] uppercase mt-1 ${currentSize.subtitle} ${subtitleColor}`}>
            GROWTH PARTNER
          </div>
        )}
      </div>
    </div>
  );
};
