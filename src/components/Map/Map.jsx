import React, { useRef } from "react";
import {Map, Placemark, SearchControl, YMaps} from "react-yandex-maps";
import "./Map.css";

let YandexMaps = ({getAddress, delCoordPoint, addressTemp, testData}) => {
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
        getAddress(coordPoint);
    };

    let removeCoordPoint = (e) => {
        let pointId = e.get('target').geometry._coordinates;
        delCoordPoint(pointId)
    };

    const onResultShow = () => {
        if (searchControlRef.current) {
            // Тут вызвать метод который наиболее подходит
            // https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/control.SearchControl-docpage/
            let b = searchControlRef.current.getMap();
            console.log(b)
        }
    };

    return (
        <YMaps  enterprise
               query={{
                   apikey: 'a2b8af4a-0675-4706-aafc-c386bc1661ee',
               }}>
            <div className="htm">
              <Map className="content_map" onClick={setCoordPoint} defaultState={{center: [59.927575, 30.326017], zoom: 9}} >
                    {(addressTemp.coords != []) &&
                    <Placemark onClick={removeCoordPoint} geometry={addressTemp.coords} {...placeMark} />}


            {/*    {testData.map(u =>
                    <Placemark geometry={u.coords} {...placeMark} />
                )}*/}
                <SearchControl onResultShow={onResultShow} instanceRef={searchControlRef} options={{float: 'left', noPlacemark: true}}/>
            </Map>
            </div>
        </YMaps>
    )
};

export default YandexMaps;
