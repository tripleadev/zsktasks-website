export const groups = {
  GERMAN_1: "german-group-1",
  GERMAN_2: "german-group-2",
  OVERALL_1: "regular-group-1",
  OVERALL_2: "regular-group-2",
}

export function getGermanGroup(subject) {
  if (subject === "Język Niemiecki Gr. 1" || subject === "PSO Gr. 1") {
    return GERMAN_1
  } else if (subject === "Język Niemiecki Gr. 2" || subject === "PSO Gr. 2") {
    return GERMAN_2
  } else {
    return null
  }
}

export function getOverallGroup(subject) {
  if (el.subject.includes("1") && !getGermanGroup(subject)) {
    return OVERALL_1
  } else if (el.subject.includes("2") && !getGermanGroup(subject)) {
    return OVERALL_2
  } else {
    return null
  }
}

export function getGroupCombined(subject) {
  return getGermanGroup(subject) || getOverallGroup(subject)
}
