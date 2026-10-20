declare module '@apiverve/solarpotential' {
  export interface solarpotentialOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface solarpotentialResponse {
    status: string;
    error: string | null;
    data: SolarPotentialData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SolarPotentialData {
      coordinates:   Coordinates;
      usableHours:   UsableHours;
      bestDirection: null | string;
      cloudFactor:   number | null;
      disclaimer:    null | string;
  }
  
  interface Coordinates {
      latitude:  number | null;
      longitude: number | null;
  }
  
  interface UsableHours {
      avgDailyUsableSunlightHours:       number | null;
      yearlyUsableSunlightHoursRaw:      number | null;
      adjustedYearlyUsableSunlightHours: number | null;
  }

  export default class solarpotentialWrapper {
    constructor(options: solarpotentialOptions);

    execute(callback: (error: any, data: solarpotentialResponse | null) => void): Promise<solarpotentialResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: solarpotentialResponse | null) => void): Promise<solarpotentialResponse>;
    execute(query?: Record<string, any>): Promise<solarpotentialResponse>;
  }
}
