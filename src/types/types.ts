export interface AnswerOption {
  id: string;
  code: string;
  name: string;
}

export interface Unit {
  id: string;
  name: string;
  abbreviation: string;
}

export interface Field {
  id: string;
  code: string;
  name: string;
  description: string | null;
  isRequired: boolean;
  dataType: number;
  componentType: number;
  unit?: Unit;
  answerOptions?: AnswerOption[];
  childQuestions?: Field[];
  acceptedFileTypes?: string;
}

export interface Step {
  id: string;
  code: string;
  name: string;
  description: string | null;
  formQuestions: Field[];
}

export type FormConfig = Step[];

export interface SubmitFormData {
  scope3Calculation: string;
  country: string;
  year: number | null;
  revenue: number | null;
  numberOfEmployees: number;
  energyNaturalGasConsumed: number;
  energySustainableNaturalGasSupplied: number;
  transportTypesVehiclesUpto35: string;
  ownEmissionFactors?: string | null;
  carbonFootprintIndicator?: string | null;
  energyAviationFuelConsumed?: number;
  energyCo2eOffsets?: number;
  energyCoalConsumed?: number | null;
  energyDieselFuelConsumed?: number | null;
  energyFuelJetTurbinesConsumed?: number | null;
  energyHeatingOilConsumed?: number | null;
  energyLpgConsumed?: number | null;
  energyPetroleumCokeConsumed?: number | null;
  energyStationaryCombustion?: number | null;
  transportAverageConsumptionDieselUpto35?: number | null;
  transportAverageConsumptionPetrolUpto35?: number | null;
  transportAverageDistanceDieselUpto35?: number | null;
  transportAverageDistancePetrolUpto35?: number | null;
  transportAverageOrTotalUpto35?: string | null;
  transportDieselVehiclesUpto35?: number | null;
  transportDistanceDieselStationaryVehiclesUpto35?: number | null;
  transportDistancePetrolStationaryVehiclesUpto35?: number | null;
  transportPetrolVehiclesUpto35?: number | null;
  transportTotalAdblueUpto35?: number | null;
  transportTotalCngUpto35?: number | null;
  transportTotalDieselUpto35?: number | null;
  transportTotalElectricityChargingUpto35?: number | null;
  transportTotalLpgUpto35?: number | null;
  transportTotalPetrolUpto35?: number | null;
  transportUploadFileVehicles?: string | null;
  transportUploadVehiclesCharging?: string | null;
  transportUploadVehiclesFuel?: string | null;
  transportUseOfVehiclesUpto35?: string | null;
}
