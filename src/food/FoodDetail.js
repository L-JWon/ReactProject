import {Fragment} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
/* global kakao*/
/*
    1. 화면 출력 방법
    2. 링크 거는 방법 => .do같이 => <NavLink to="">  => .do가 아니기 때문에 ?를 붙이지 않는다 대신 "/값" 사용
                                                            ex) /food/detail/1
    3. 서버로 부터 데이터 읽기 : useEffect()  ==> 이게 끝나야 서버에서 데이터를 읽고 출력시킬 수 있음 => componentDidMount, mounted
    4. 저장 => 메모리 상에서 계속 저장해야할 필요가 있을 떼 => state ==> useState()
    5. 화면 출력 요청
        ===> return (
                출력 html
             )

 */

function FoodDetail() {
    const [foodDetail,setFoodDetail]=useState({});
    const {fno}=useParams(); //예전엔 this.props.match.param (X)
    useEffect(()=>{
        axios.get("http://localhost/food/detail_react",{
            params:{
                fno:fno
            }
        }).then(result=>{
            console.log(result.data);
            setFoodDetail(result.data);
        })
    },{})

    useEffect(()=>{
        const script=document.createElement("script");
        script.async=true;
        script.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b18319530b6d6d62d5c86a8807893413&libraries=services";
        document.head.appendChild(script);
        script.onload=()=>{
            kakao.maps.load(()=>{
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                    mapOption = {
                        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                // 지도를 생성합니다
                var map = new kakao.maps.Map(mapContainer, mapOption);

                // 주소-좌표 변환 객체를 생성합니다
                var geocoder = new kakao.maps.services.Geocoder();

                // 주소로 좌표를 검색합니다
                geocoder.addressSearch(foodDetail.address, function(result, status) {

                    // 정상적으로 검색이 완료됐으면
                    if (status === kakao.maps.services.Status.OK) {

                        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                        // 결과값으로 받은 위치를 마커로 표시합니다
                        var marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });

                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        var infowindow = new kakao.maps.InfoWindow({
                            content: '<div style={{"width":"150px","textAlign":"center","padding":"6px 0"}}>'+foodDetail.name+'</div>'
                        });
                        infowindow.open(map, marker);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                        map.setCenter(coords);
                    }
                });
            })
        }
    })
    let temp=String(foodDetail.poster)
    let images=temp.split("^")
    let html=images.map((poster)=>
        <td className={"text-center"}>
            <img src={poster} style={{"width":"350px","height":"300px"}}/>
        </td>
    )
    return (
        <Fragment>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        {html}
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{"height":"20px"}}></div>
            <div className={"row1"}>
                <div className={"col-sm-8"} style={{"display":"inline-block"}}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td colSpan={"2"}>
                                <h3>{foodDetail.name}
                                    <span style={{"color":"orange","paddingLeft":"20px"}}>{foodDetail.score}</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td width={"10%"} style={{"background-color":"#6495ED","border-bottom":"1px solid #eff2f1","color":"#f9f9f9","fontSize":"18px","fontWeight":"400"}} className={"text-center"}>주소</td>
                            <td width={"90%"} style={{"background-color": "#f9f9f9"}}>{foodDetail.address}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} style={{"background-color":"#6495ED","border-bottom":"1px solid #eff2f1","color":"#f9f9f9","fontSize":"18px","fontWeight":"400"}} className={"text-center"}>전화</td>
                            <td width={"90%"}>{foodDetail.tel}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} style={{"background-color":"#6495ED","border-bottom":"1px solid #eff2f1","color":"#f9f9f9","fontSize":"18px","fontWeight":"400"}} className={"text-center"}>음식종류</td>
                            <td width={"90%"} style={{"background-color": "#f9f9f9"}}>{foodDetail.type}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} style={{"background-color":"#6495ED","border-bottom":"1px solid #eff2f1","color":"#f9f9f9","fontSize":"18px","fontWeight":"400"}} className={"text-center"}>가격대</td>
                            <td width={"90%"}>{foodDetail.price}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} style={{"background-color":"#6495ED","border-bottom":"1px solid #eff2f1","color":"#f9f9f9","fontSize":"18px","fontWeight":"400"}} className={"text-center"}>영업시간</td>
                            <td width={"90%"} style={{"background-color": "#f9f9f9"}}>{foodDetail.time}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} style={{"background-color":"#6495ED","border-bottom":"1px solid #eff2f1","color":"#f9f9f9","fontSize":"18px","fontWeight":"400"}} className={"text-center"}>주차</td>
                            <td width={"90%"}>{foodDetail.parking}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} style={{"background-color":"#6495ED","border-bottom":"1px solid #eff2f1","color":"#f9f9f9","fontSize":"18px","fontWeight":"400"}} className={"text-center"}>메뉴</td>
                            <td width={"90%"} style={{"background-color": "#f9f9f9"}}>{foodDetail.menu}</td>
                        </tr>
                        <tr>
                            <td style={{"borderBottom":"none"}}></td>
                            <td style={{"float":"right","borderBottom":"none"}}>
                                <NavLink to={"/"} className={"btn btn-sm btn-primary"} style={{"background-color":"cornflowerblue","border-color":"cornflowerblue"}}>목록</NavLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"col-sm-4"} style={{"display":"inline-block"}}>
                    <div id="map" style={{"width":"90%","height":"400px","marginLeft":"40px"}}></div>
                </div>
            </div>
            <div style={{"height":"40px"}}></div>
        </Fragment>
    )
}
export default FoodDetail;