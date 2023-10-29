import { useRef } from "react"

export default function HeaderPanelItem({title}) {
    const headerRef = useRef()

    const handleAdminHeaderClick = () => {
        const target = headerRef.current

        if (target.classList.contains('conf-step__header_opened')) {
            target.classList.remove('conf-step__header_opened')
            target.classList.add('conf-step__header_closed')
            return
        }
        if (target.classList.contains('conf-step__header_closed')) {
            target.classList.remove('conf-step__header_closed')
            target.classList.add('conf-step__header_opened')
            return
        }
    }

    return (
        <header className="conf-step__header conf-step__header_closed" ref={headerRef} onClick={handleAdminHeaderClick}>
            <h2 className="conf-step__title">{title}</h2>
        </header>
    )
}