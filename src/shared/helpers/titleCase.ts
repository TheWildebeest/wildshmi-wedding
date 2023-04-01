export const titleCase = (word: string) => {
  if (word === null || word === undefined) {
    throw new Error("Cannot convert " + typeof word + " to TitleCase.")
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}