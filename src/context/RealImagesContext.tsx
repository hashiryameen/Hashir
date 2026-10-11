import React, { createContext, useContext, useState, useEffect } from 'react';

interface RealImagesContextType {
  portraitImage: string;
  googleAdsImage: string;
  awinImage: string;
  setPortraitImage: (url: string) => void;
  setGoogleAdsImage: (url: string) => void;
  setAwinImage: (url: string) => void;
  resetToDefaults: () => void;
}

const RealImagesContext = createContext<RealImagesContextType | undefined>(undefined);

export const RealImagesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portraitImage, setPortraitState] = useState<string>(() => {
    return localStorage.getItem('hashir_real_portrait') || '';
  });

  const [googleAdsImage, setGoogleAdsState] = useState<string>(() => {
    return localStorage.getItem('hashir_real_google_ads') || '';
  });

  const [awinImage, setAwinState] = useState<string>(() => {
    return localStorage.getItem('hashir_real_awin') || '';
  });

  const setPortraitImage = (url: string) => {
    setPortraitState(url);
    localStorage.setItem('hashir_real_portrait', url);
  };

  const setGoogleAdsImage = (url: string) => {
    setGoogleAdsState(url);
    localStorage.setItem('hashir_real_google_ads', url);
  };

  const setAwinImage = (url: string) => {
    setAwinState(url);
    localStorage.setItem('hashir_real_awin', url);
  };

  const resetToDefaults = () => {
    localStorage.removeItem('hashir_real_portrait');
    localStorage.removeItem('hashir_real_google_ads');
    localStorage.removeItem('hashir_real_awin');
    setPortraitState('');
    setGoogleAdsState('');
    setAwinState('');
  };

  return (
    <RealImagesContext.Provider
      value={{
        portraitImage,
        googleAdsImage,
        awinImage,
        setPortraitImage,
        setGoogleAdsImage,
        setAwinImage,
        resetToDefaults,
      }}
    >
      {children}
    </RealImagesContext.Provider>
  );
};

export const useRealImages = () => {
  const context = useContext(RealImagesContext);
  if (!context) {
    throw new Error('useRealImages must be used within RealImagesProvider');
  }
  return context;
};
