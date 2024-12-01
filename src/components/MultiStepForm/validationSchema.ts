import * as Yup from "yup";

export const submitFormValidationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  energyNaturalGasConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Energy Natural Gas Consumed must be a number")
    .required("Energy Natural Gas Consumed is required"),
  energySustainableNaturalGasSupplied: Yup.number()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === null || originalValue === "" ? undefined : value
    )
    .typeError("Energy Sustainable Natural Gas Supplied must be a number")
    .required("Energy Sustainable Natural Gas Supplied is required"),
  numberOfEmployees: Yup.number()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === null || originalValue === "" ? undefined : value
    )
    .typeError("Number of Employees must be a number")
    .required("Number of Employees is required"),
  revenue: Yup.number()
    .transform((value, originalValue) =>
      originalValue === null || originalValue === "" ? undefined : value
    )
    .typeError("Revenue must be a number")
    .required("Revenue is required")
    .nullable(),
  scope3Calculation: Yup.string().required("Scope 3 Calculation is required"),
  transportTypesVehiclesUpto35: Yup.string()
    .required("Vehicle type is required"),
  year: Yup.number()
    .typeError("Year must be a number")
    .required("Year is required")
    .nullable(),
  carbonFootprintIndicator: Yup.string().nullable(),
  energyAviationFuelConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number"),
  energyCo2eOffsets: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number"),
  ownEmissionFactors: Yup.string().nullable(),
  transportAverageOrTotalUpto35: Yup.string()
    .nullable()
    .max(35, "Must be less than 35"),
  transportUseOfVehiclesUpto35: Yup.string()
    .nullable()
    .max(35, "Must be less than 35"),
  energyCoalConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable(),

  energyDieselFuelConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable(),
  energyFuelJetTurbinesConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable(),
  energyHeatingOilConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable(),
  energyLpgConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable(),
  energyPetroleumCokeConsumed: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable(),
  energyStationaryCombustion: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable(),
  transportAverageConsumptionDieselUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportAverageConsumptionPetrolUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportAverageDistanceDieselUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportAverageDistancePetrolUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportDieselVehiclesUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportDistanceDieselStationaryVehiclesUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportDistancePetrolStationaryVehiclesUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportPetrolVehiclesUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportTotalAdblueUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportTotalCngUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportTotalDieselUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportTotalElectricityChargingUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportTotalLpgUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportTotalPetrolUpto35: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .nullable()
    .max(35, "Must be less than 35"),
  transportUploadFileVehicles: Yup.mixed(),
  transportUploadVehiclesCharging: Yup.mixed(),
  transportUploadVehiclesFuel: Yup.mixed(),
});
