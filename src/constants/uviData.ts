import scaleImgLow from '../assets/images/uvi__scale_low.png';
import scaleImgModerate from '../assets/images/uvi__scale_moderate.svg';
import scaleImgHigh from '../assets/images/uvi__scale_high.svg';
import scaleImgVeryHigh from '../assets/images/uvi__scale_very-high.svg';
import scaleImgExtreme from '../assets/images/uvi__scale_extreme.svg';

// Possible states of the CurrentUVI component

export type uviDataTypes = {
  uviValue: string;
  uviImage: string;
  uviAdvice: string;
} | null;

export const uviLowData: uviDataTypes = {
  uviValue: 'Low',
  uviImage: scaleImgLow,
  uviAdvice: 'Not hazardous',
};

export const uviModerateData: uviDataTypes = {
  uviValue: 'Moderate',
  uviImage: scaleImgModerate,
  uviAdvice: 'Use sun protection',
};

export const uviHighData: uviDataTypes = {
  uviValue: 'High',
  uviImage: scaleImgHigh,
  uviAdvice: 'Use sun protection',
};

export const uviVeryHighData: uviDataTypes = {
    uviValue: 'Very High',
    uviImage: scaleImgVeryHigh,
    uviAdvice: 'Use sun protection',
  };

export const uviExtremeData: uviDataTypes = {
  uviValue: 'Extreme',
  uviImage: scaleImgExtreme,
  uviAdvice: 'Use sun protection',
};
