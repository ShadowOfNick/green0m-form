export const mapFieldCodeToInterfaceKey = (fieldCode: string): string => {
  return fieldCode.replace(/-([a-zA-Z0-9])/g, (_, char) => char.toUpperCase());
};
