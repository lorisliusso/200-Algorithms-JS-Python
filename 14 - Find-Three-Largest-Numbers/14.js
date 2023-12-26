function findThreeLargestNumbers(array) {
    let lowest = Number.NEGATIVE_INFINITY;
    let medium = Number.NEGATIVE_INFINITY;
    let largest = Number.NEGATIVE_INFINITY;

    for (const elem of array) {
        if (elem >= lowest) {
            lowest = elem;

            if (lowest >= medium) {
                [lowest, medium] = [medium, lowest];
            }

            if (medium >= largest) {
                [largest, medium] = [medium, largest];
            }

            if (lowest >= medium) {
                [lowest, medium] = [medium, lowest];
            }
        }
    }

    return [lowest, medium, largest];
}