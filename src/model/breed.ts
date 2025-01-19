export interface IBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: fivePointRate;
  lap: fivePointRate;
  alt_names?: string;
  adaptability: fivePointRate;
  affection_level: fivePointRate;
  child_friendly: fivePointRate;
  dog_friendly: fivePointRate;
  energy_level: fivePointRate;
  grooming: fivePointRate;
  health_issues: fivePointRate;
  intelligence: fivePointRate;
  shedding_level: fivePointRate;
  social_needs: fivePointRate;
  stranger_friendly: fivePointRate;
  vocalisation: fivePointRate;
  experimental: booleanRate;
  hairless: booleanRate;
  natural: booleanRate;
  rare: booleanRate;
  rex: booleanRate;
  suppressed_tail: booleanRate;
  short_legs: booleanRate;
  wikipedia_url: string;
  hypoallergenic: booleanRate;
  reference_image_id: string;
  image: IImage;
}

type fivePointRate = 1 | 2 | 3 | 4 | 5;

type booleanRate = 0 | 1;

interface IImage {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breed: IBreed;
}
