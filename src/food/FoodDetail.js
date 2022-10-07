import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {useEffect,useState} from "react";
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
    //const

    return (
        <h1>상세보기</h1>
    )

}
export default FoodDetail;