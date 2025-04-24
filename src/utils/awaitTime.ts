export const awaitTime = (time: number = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}