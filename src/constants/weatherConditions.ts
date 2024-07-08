import bgBrokenClouds from '../assets/images/BG__Broken-Clouds.png';
import bgClearSkyNight from '../assets/images/BG__Clear-Sky-Night.png';
import bgClearSky from '../assets/images/BG__Clear-Sky.png';
import bgDrizzleRain from '../assets/images/BG__Drizzle-Rain.png';
import bgFewCloudsNight from '../assets/images/BG__Few-Clouds-Night.png';
import bgFewCloudsScatteredClouds from '../assets/images/BG__Few-Clouds-Scattered-Clouds.png';
import bgFog from '../assets/images/BG__Fog.png';
import bgScatteredCloudsNight from '../assets/images/BG__Scattered-Clouds-Night.png';
import bgSnowDay from '../assets/images/BG__Snow-Day.png';
import bgSnowNight from '../assets/images/BG__Snow-Night.png';
import bgThunderstormRain from '../assets/images/BG__Thunderstorm-Rain.png';
import bgThunderstorm from '../assets/images/BG__Thunderstorm.png';

// Possible states of the Background

export type weatherCondition = {
    id: number;
    valueDay: string;
    valueNight: string;
}

export const weatherCondions: weatherCondition[] = [
  { id: 200, valueDay: bgThunderstormRain, valueNight: bgThunderstormRain },
  { id: 201, valueDay: bgThunderstormRain, valueNight: bgThunderstormRain },
  { id: 202, valueDay: bgThunderstormRain, valueNight: bgThunderstormRain },
  { id: 210, valueDay: bgThunderstorm, valueNight: bgThunderstorm },
  { id: 211, valueDay: bgThunderstorm, valueNight: bgThunderstorm },
  { id: 212, valueDay: bgThunderstorm, valueNight: bgThunderstorm },
  { id: 221, valueDay: bgThunderstorm, valueNight: bgThunderstorm },
  { id: 230, valueDay: bgThunderstormRain, valueNight: bgThunderstormRain },
  { id: 231, valueDay: bgThunderstormRain, valueNight: bgThunderstormRain },
  { id: 232, valueDay: bgThunderstormRain, valueNight: bgThunderstormRain },

  { id: 300, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 301, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 302, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 310, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 311, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 312, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 313, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 314, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 321, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },

  { id: 500, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 501, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 502, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 503, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 504, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 511, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 520, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 521, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 522, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },
  { id: 531, valueDay: bgDrizzleRain, valueNight: bgDrizzleRain },

  { id: 600, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 601, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 602, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 611, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 612, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 613, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 615, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 616, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 620, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 621, valueDay: bgSnowDay, valueNight: bgSnowNight },
  { id: 622, valueDay: bgSnowDay, valueNight: bgSnowNight },

  { id: 701, valueDay: bgFog, valueNight: bgFog },
  { id: 711, valueDay: bgFog, valueNight: bgFog },
  { id: 721, valueDay: bgFog, valueNight: bgFog },
  { id: 731, valueDay: bgFog, valueNight: bgFog },
  { id: 741, valueDay: bgFog, valueNight: bgFog },
  { id: 751, valueDay: bgFog, valueNight: bgFog },
  { id: 761, valueDay: bgFog, valueNight: bgFog },
  { id: 762, valueDay: bgFog, valueNight: bgFog },
  { id: 771, valueDay: bgFog, valueNight: bgFog },
  { id: 781, valueDay: bgFog, valueNight: bgFog },

  { id: 800, valueDay: bgClearSky, valueNight: bgClearSkyNight },
  { id: 801, valueDay: bgFewCloudsScatteredClouds, valueNight: bgFewCloudsNight },
  { id: 802, valueDay: bgFewCloudsScatteredClouds, valueNight: bgScatteredCloudsNight },
  { id: 803, valueDay: bgBrokenClouds, valueNight: bgBrokenClouds },
  { id: 804, valueDay: bgBrokenClouds, valueNight: bgBrokenClouds },
];
