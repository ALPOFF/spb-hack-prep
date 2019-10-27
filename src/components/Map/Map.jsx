import React, { useRef } from "react";
import {Map, Placemark, SearchControl, YMaps} from "react-yandex-maps";
import "./Map.css";

let YandexMaps = (props) => {
    const searchControlRef = useRef(null);

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
    };

    let setCoordPoint = (e) => {
        let coordPoint = e.get("coords");
        props.getAddress(coordPoint);
    }

    let removeCoordPoint = (e) => {
        let pointId = e.get('target').geometry._coordinates;
        props.delCoordPoint(pointId)
    }

    const onResultShow = () => {
        if (searchControlRef.current) {
            // Тут вызвать метод который наиболее подходит
            // https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/control.SearchControl-docpage/
            //console.log(searchControlRef.current.getResponseMetaData());
            let b = searchControlRef.current.getMap();
            console.log(b)
            //console.log(searchControlRef.current.getResultsArray());
        }
    };

    return (

        <YMaps  enterprise
               query={{
                   apikey: 'a2b8af4a-0675-4706-aafc-c386bc1661ee',
               }}>
            <div className="htm">
              <Map className="content_map" onClick={setCoordPoint} defaultState={{center: [59.927575, 30.326017], zoom: 9}} >
                {props.addressTemp.map(u =>
                    <Placemark onClick={removeCoordPoint} geometry={u.coords} {...placeMark} />
                )}

                {props.testData.map(u =>
                    <Placemark geometry={u.coords} {...placeMark} />
                )}
                <SearchControl onResultShow={onResultShow} instanceRef={searchControlRef} options={{float: 'left', noPlacemark: true}}/>
            </Map>
            </div>
        </YMaps>

    )
}

export default YandexMaps;
