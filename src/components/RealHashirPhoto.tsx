import React from 'react';
import { useRealImages } from '../context/RealImagesContext';
import { Code2, TrendingUp, Target, BarChart3, Upload } from 'lucide-react';
import hashirRealSvg from '../assets/images/hashir_real_portrait.svg';

interface RealHashirPhotoProps {
  className?: string;
  variant?: 'hero' | 'about';
}

export const RealHashirPhoto: React.FC<RealHashirPhotoProps> = ({ className = '', variant = 'hero' }) => {
  const { portraitImage, setPortraitImage } = useRealImages();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPortraitImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const imageSrc = portraitImage || hashirRealSvg;

  if (variant === 'about') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl p-1 bg-gradient-to-br from-[#84CC16] via-[#84CC16]/40 to-slate-200 shadow-md relative overflow-hidden group">
          <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 border border-slate-300">
            <img
              src={imageSrc}
              alt="Hashir Yameen - PPC Specialist"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <label
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#A3E635] cursor-pointer transition-opacity"
            title="Upload photo"
          >
            <Upload className="w-4 h-4" />
            <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
          </label>
        </div>
      </div>
    );
  }

  // Hero variant matching Reference Image 1!
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      
      {/* Outer frame container with subtle green-tinted backdrop */}
      <div className="relative w-72 sm:w-88 md:w-96 aspect-[4/5] flex items-center justify-center">
        
        {/* Subtle decorative glow & offset light background card */}
        <div className="absolute inset-0 bg-lime-100/50 rounded-3xl transform rotate-2 scale-95 border border-lime-300/40" />

        {/* Main Photo Card */}
        <div className="relative z-10 w-[92%] h-[96%] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl flex items-center justify-center group">
          <img
            src={imageSrc}
            alt="Hashir Yameen - PPC Specialist"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          {/* Quick upload trigger on hover */}
          <label
            className="absolute bottom-3 right-3 z-30 p-2 rounded-full bg-black/80 hover:bg-black text-[#A3E635] border border-white/20 cursor-pointer shadow-md transition-all opacity-0 group-hover:opacity-100"
            title="Upload or change your photo"
          >
            <Upload className="w-3.5 h-3.5" />
            <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
          </label>
        </div>

        {/* 4 Floating Dark Badges matching reference image 1 */}
        {/* Badge 1: Top-Left (01 GOOGLE ADS) */}
        <div className="absolute -top-3 -left-3 sm:-left-6 z-20 bg-[#161A1D] text-white border border-slate-700/80 px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-2 shadow-xl">
          <div className="w-5 h-5 rounded-md bg-black/60 flex items-center justify-center text-[#A3E635]">
            <Code2 className="w-3 h-3" />
          </div>
          <span className="text-[#A3E635] font-mono">01</span>
          <span className="tracking-wide">GOOGLE ADS</span>
        </div>

        {/* Badge 2: Top-Right (02 SEARCH PPC) */}
        <div className="absolute top-12 -right-3 sm:-right-6 z-20 bg-[#161A1D] text-white border border-slate-700/80 px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-2 shadow-xl">
          <div className="w-5 h-5 rounded-md bg-black/60 flex items-center justify-center text-[#A3E635]">
            <TrendingUp className="w-3 h-3" />
          </div>
          <span className="text-[#A3E635] font-mono">02</span>
          <span className="tracking-wide">SEARCH PPC</span>
        </div>

        {/* Badge 3: Bottom-Left (03 AWIN PUBLISHER) */}
        <div className="absolute bottom-16 -left-3 sm:-left-6 z-20 bg-[#161A1D] text-white border border-slate-700/80 px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-2 shadow-xl">
          <div className="w-5 h-5 rounded-md bg-black/60 flex items-center justify-center text-[#A3E635]">
            <Target className="w-3 h-3" />
          </div>
          <span className="text-[#A3E635] font-mono">03</span>
          <span className="tracking-wide">AWIN NETWORK</span>
        </div>

        {/* Badge 4: Bottom-Right (04 $15K COMMISSIONS) */}
        <div className="absolute -bottom-3 -right-3 sm:-right-6 z-20 bg-[#161A1D] text-white border border-slate-700/80 px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-2 shadow-xl">
          <div className="w-5 h-5 rounded-md bg-black/60 flex items-center justify-center text-[#A3E635]">
            <BarChart3 className="w-3 h-3" />
          </div>
          <span className="text-[#A3E635] font-mono">04</span>
          <span className="tracking-wide">$15K PEAK COMM.</span>
        </div>

      </div>
    </div>
  );
};
