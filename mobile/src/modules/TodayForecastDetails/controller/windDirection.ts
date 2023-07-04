import { directions } from "../model/worldDirections";

export function getWindDirection(windDirection: number): string {
    const currentIndex = Math.floor(windDirection / 22.5);
    const nextIndex = (currentIndex + 1) % 16;

    const currentDirection = directions[currentIndex];
    const nextDirection = directions[nextIndex];

    return `${currentDirection} to ${nextDirection}`;
}