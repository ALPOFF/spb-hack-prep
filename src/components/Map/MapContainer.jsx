import React from "react";
import styles from "./Map.module.css"
import {Map, ObjectManager, Placemark, YMaps} from "react-yandex-maps";
import {connect} from "react-redux";
import {addCoordPoint, delCoordPoint} from "../../redux/map-reducer";


let MapContainer = (props) => {

    const placeMark = {
        //geometry: props.coords,
        properties: {
            hintContent: `Пункт назначения`,
/*
            balloonContent: 'Это балун',
*/
            //iconContent: "Средний уровень"
        },
        modules: [/*'geoObject.addon.balloon',*/ 'geoObject.addon.hint', 'geocode']
    }

    let setCoordPoint = (e) => {
        let coordPoint = e.get("coords");
        props.addCoordPoint(coordPoint)
    }

    let removeCoordPoint = (e) => {
        let pointId = e.get('target').geometry._coordinates;
        props.delCoordPoint(pointId)
    }



    return (
        <div className={styles.htm}>

            <YMaps>
                <Map className={styles.map} onClick={setCoordPoint}  defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
                        {props.users.map(u =>

                            <Placemark   onClick={removeCoordPoint} geometry={u.coords} {...placeMark} />
                        )}
                </Map>
            </YMaps>

            <div className={styles.right_panel}>
                <h1>right-panel</h1>
                <h4>Selected Points</h4>
                {props.users.map( u => <div>Coords: {u.id} - {u.coords}</div> )}
                <div>
                    <input value={"Task"}/>
                </div>
                <div>
                    deadline - kalendar'
                </div>

                <div>workers list</div>
                <div>{props.workers.map( w => <div><input type="checkbox" id="scales" name="scales"/>
                    <label htmlFor="scales">{w.name}</label></div>)}</div>
                <button >create task</button>
            </div>

        </div>


    )
}

const mapStateToProps = (state) => ({
    users: state.mapReducer.users,
    workers: state.mapReducer.workers
})

export default connect(mapStateToProps, {addCoordPoint, delCoordPoint}) (MapContainer);
