export const getRandomIntBetween = (min: number, max: number) => {
    const range = max - min;

    const randomNumberInRange = Math.round(Math.random() * range);

    return min + randomNumberInRange;

}