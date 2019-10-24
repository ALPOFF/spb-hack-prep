import React from "react";
import styles from "./Map.module.css"
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {connect} from "react-redux";
import {addCoordPoint, delCoordPoint} from "../../redux/map-reducer";

let MapContainer = (props) => {

    const placeMark = {
        //geometry: props.coords,
        properties: {
            hintContent: 'Это хинт',
            balloonContent: 'Это балун',
            iconContent: "Средний уровень"
        },

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
        <YMaps>
            <Map onClick={setCoordPoint} className={styles.map} defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
                <div>
                    {props.users.map(u =>
<div >
                            <Placemark onClick={removeCoordPoint} geometry={u.coords} {...placeMark} /></div>
                         )}
                </div>
            </Map>
        </YMaps>

    )
}

const mapStateToProps = (state) => ({
    users: state.mapReducer.users
})

export default connect(mapStateToProps, {addCoordPoint, delCoordPoint}) (MapContainer);

