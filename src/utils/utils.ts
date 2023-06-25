export function getExperienceAndWidth(initialDate: Date): {
  experience: number;
  width: number;
} {
  const currentDate = new Date();
  const differenceInMilliseconds =
    currentDate.getTime() - initialDate.getTime();
  const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; // 1000 * 60 = 1 min * 60 = 1 hour * 24 = 1 day *  365.25 = 1 year, considering leap year

  const yearsOfExperience = (
    differenceInMilliseconds / oneYearInMilliseconds
  ).toFixed(2);

  // Handle with the width
  const pixelsPerIncrement = 75;

  const width = Math.floor(Number(yearsOfExperience) * 2) * pixelsPerIncrement; // Each 0.5 years of experience, width will be 75px, therefore 1 year of experience, width will be 150px

  console.log("width", width);

  const experienceAndWidth = {
    experience: Math.floor(Number(yearsOfExperience)),
    width: (width === 0 ? 75 : width) / 16, // 1rem equals 16px
  };

  return experienceAndWidth;
}
