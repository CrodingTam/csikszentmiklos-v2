import { DateTime } from "luxon";

export interface EventCardModel {
  eventDate: string;
  name: string;
  logoSrc?: string;
  description: string;
}
