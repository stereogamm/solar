export const stringToDecimal = (value: string) => {
    const match = value.match(/(-?\d+)°(\d+)'(\d+)"/)

    if (!match) {
        throw new Error(`Invalid angle: ${value}`)
    }

    const degrees = Number(match[1])
    const minutes = Number(match[2])
    const seconds = Number(match[3])

    const sign = degrees < 0 ? -1 : 1

    return (
        degrees +
        sign * (minutes / 60 + seconds / 3600)
    )
}

export const getPositionFromAzAlt = (
    az: number,
    alt: number,
    radius = 5
): [number, number, number] => {

    const azRad = az * Math.PI / 180
    const altRad = alt * Math.PI / 180

    const x = radius * Math.cos(altRad) * Math.sin(azRad)

    const y = radius * Math.sin(altRad)

    const z = radius * Math.cos(altRad) * Math.cos(azRad)

    return [x, y, z]
}