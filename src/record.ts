export {};

type Prefectures = 'Tokyo' | 'Chiba' | 'Osaka';

type Covid19InfectionInfo = {
  kanji_name : string;
  confirmed_cases : number;
}

const covid19Japan : Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960},
  Chiba: { kanji_name: '東京', confirmed_cases: 1960},
  Osaka: { kanji_name: '東京', confirmed_cases: 1960}
}