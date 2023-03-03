export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getUnitName(id: number, units?: UnitProps[]) {
  if (!units) return "";
  const unit = units.find((unit) => unit.id === id);
  return unit?.name || "";
}
