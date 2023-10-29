export default function timlineStyleEditor(startSeances) {
    // const width = 
    // const background = 
    const hours = startSeances.slice(0, 2)

    const position = 30 * hours
    return {'width': '60px', 'backgroundColor': 'rgb(133, 255, 137)', 'left': position}
}