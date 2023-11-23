export default function calculationOfFilmsStartTime(startSeances) {
    // const width = 
    // const background = 
    const startTime = Number(startSeances.slice(0, 2)) * 60 + Number(startSeances.slice(3, 5))
    console.log(startSeances.slice(3, 5))
    console.log(startTime)
    console.log(startSeances.slice(0, 2) * 60)
    // const position = 30 * hours
    return startTime
}