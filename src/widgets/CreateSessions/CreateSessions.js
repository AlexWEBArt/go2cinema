// import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import AddFilm from "./features/AddFilm/AddFilm";
import FilmsList from "./features/FilmsList/FilmsList";
import HallsTimeLineList from "./features/HallsTimeLineList/HallsTimeLineList";

export default function CreateSessions({ data, setCallModal }) {

    return (
        <div className="conf-step__wrapper">
            <AddFilm setCallModal={setCallModal}/>
            <FilmsList data={data} setCallModal={setCallModal}/>
            <HallsTimeLineList data={data} setCallModal={setCallModal} />
            {/* <SaveConfig /> */}
        </div>
    )
}