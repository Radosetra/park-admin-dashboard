import { Specie } from '../types/specie.ts';
import { ActivityType } from '../types/activityType.ts';
import { LandscapeType } from '../types/landscapeType.ts';


export function isSpecieChecker(item: any): item is Specie {
  return (item as Specie).specie_description !== undefined;
}
export function isActivityChecker(item: any): item is ActivityType {
  return (item as ActivityType).activity_description !== undefined;
}
export function isLandscapeChecker(item: any): item is LandscapeType {
  return (item as LandscapeType).landscape_description !== undefined;
}



  