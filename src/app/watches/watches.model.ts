
export class WatchesModel {
 constructor(
  public id: string,
  public name: string,
  public brand: string,
  public model: string,
  public gender: string,
  public vendor: string,
  public band_material: string,
  public band_type: string,
  public bezel: string,
  public case_diameter: string,
  public case_material: string,
  public clasp: string,
  public movement: string,
  public year: string,
  public tier: string,
  public sell_price: number,
  public pictures: string[],
  public description: string,
  public featured: boolean,
  public status: string,
  public maximum_term: number,
  public minimum_term: number,
  public final_price: number,
  public cost: number,
  public diamond: boolean,
  public membership_tier: string) {}
}
