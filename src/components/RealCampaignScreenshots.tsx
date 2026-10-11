import React from 'react';
import { useRealImages } from '../context/RealImagesContext';
import { Maximize2, Upload } from 'lucide-react';
import googleAdsSvg from '../assets/images/google_ads_screenshot.svg';
import awinSvg from '../assets/images/awin_earnings_screenshot.svg';

export const RealGoogleAdsScreenshot: React.FC<{ onEnlarge?: () => void }> = ({ onEnlarge }) => {
  const { googleAdsImage, setGoogleAdsImage } = useRealImages();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setGoogleAdsImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const imageSource = googleAdsImage || googleAdsSvg;

  return (
    <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 bg-white shadow-2xl">
      {/* Real Image of the actual Google Ads Campaign Overview Screenshot */}
      <img
        src={imageSource}
        alt="Google Ads Campaign Overview Screenshot"
        className="w-full h-auto object-contain block cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
        onClick={onEnlarge}
        referrerPolicy="no-referrer"
      />

      {/* Action Overlay */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        {onEnlarge && (
          <button
            onClick={onEnlarge}
            className="p-2 rounded-lg bg-black/85 hover:bg-black text-[#B8F228] border border-[#B8F228]/50 shadow-lg cursor-pointer transition-colors"
            title="Click to view full size"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
        <label
          className="p-2 rounded-lg bg-black/85 hover:bg-black text-slate-300 hover:text-white border border-slate-700 shadow-lg cursor-pointer transition-colors"
          title="Upload or replace with your PNG file"
        >
          <Upload className="w-4 h-4" />
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        </label>
      </div>
    </div>
  );
};

export const RealAwinScreenshot: React.FC<{ onEnlarge?: () => void }> = ({ onEnlarge }) => {
  const { awinImage, setAwinImage } = useRealImages();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAwinImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const imageSource = awinImage || awinSvg;

  return (
    <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 bg-white shadow-2xl">
      {/* Real Image of the actual Awin Earnings Overview Screenshot */}
      <img
        src={imageSource}
        alt="Awin Affiliate Publisher Earnings Overview Screenshot"
        className="w-full h-auto object-contain block cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
        onClick={onEnlarge}
        referrerPolicy="no-referrer"
      />

      {/* Action Overlay */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        {onEnlarge && (
          <button
            onClick={onEnlarge}
            className="p-2 rounded-lg bg-black/85 hover:bg-black text-[#B8F228] border border-[#B8F228]/50 shadow-lg cursor-pointer transition-colors"
            title="Click to view full size"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
        <label
          className="p-2 rounded-lg bg-black/85 hover:bg-black text-slate-300 hover:text-white border border-slate-700 shadow-lg cursor-pointer transition-colors"
          title="Upload or replace with your PNG file"
        >
          <Upload className="w-4 h-4" />
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        </label>
      </div>
    </div>
  );
};
