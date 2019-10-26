import React from "react";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import styles from "./Map.module.css";

let YandexMaps = (props) => {

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
        <YMaps>
            <Map className={styles.map} onClick={setCoordPoint} defaultState={{center: [59.927575, 30.326017], zoom: 9}}>
                {props.coordsTemp.map(u =>
                    <Placemark onClick={removeCoordPoint} geometry={u} {...placeMark} />
                )}

                {props.testData.map(u =>
                    <Placemark geometry={u.coords} {...placeMark} />
                )}
            </Map>
        </YMaps>
    )
}

export default YandexMaps;
