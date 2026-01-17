export function cloud(cloudScore: number): number {
  return 10 * cloudScore;
}

export function totalScore(
  cloud: number,
  visibility: number,
  dust: number
): number {
  let score = Math.min(
    100,
    15 +
      (((100 * (1 - cloud / 100) * (visibility * visibility)) /
        (visibility * visibility + 6400)) *
        250) /
        (dust * dust + 25)
  );
  return Number(score.toFixed(1));
}

export function scoreGrade(score: number) {
  if (score >= 80) return "good";
  if (score >= 50) return "soso";
  if (score >= 20) return "bad";
  return "trash";
}
