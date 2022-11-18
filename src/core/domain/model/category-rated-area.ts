import { Coordinates } from './coordinates';

export class CategoryRatedArea {
  type!: string;
  geoCode!: Coordinates;
  radius!: number;
  categoryScores!: CategoryScores;
}

export class CategoryScores {
  sight!: Sight;
  restaurant!: Restaurant;
  shopping!: Shopping;
  nightLife!: NightLife;
}

export class NightLife {
  overall!: number;
}

export class Shopping {
  overall!: number;
  luxury!: number;
}

export class Restaurant {
  overall!: number;
  vegetarian!: number;
}

export class Sight {
  overall!: number;
  historical!: number;
  beachAndPark!: number;
}
