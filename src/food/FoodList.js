import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
// Effect =>VueJs 에서 mounted랑 같은 역할
// State => 메모리에 변수를 유지시키는 역할 C로 따지면 전역변수

function FoodList(){
    const [cateList,setCateList]=useState([]);
    const [info,setInfo]=useState({});
    let {cno}=useParams(); //reqeust.getParameter() 과 동일한 역할

    useEffect(()=>{
        axios.get("http://localhost/food/food_list_react",{
            params:{
                cno:cno
            }
        }).then(result=>{
            console.log(result.data);
            setCateList(result.data);
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost/food/info_react",{
            params:{
                cno:cno
            }
        }).then(result=>{
            console.log(result.data);
            setInfo(result.data);
        })
    },[])

    let html=cateList.map((m)=>
        <Fragment>
        <table className={"table"}>
            <tr>
                <td className={"text-center"} width={"30%"} rowSpan={"4"}>
                   <NavLink to={"/food/detail/"+m.fno}><img src={m.poster} style={{"width":"340px","height":"240px"}}/></NavLink>
                </td>
                <td width={"70%"}><h3><NavLink to={"/food/detail/"+m.fno}>{m.name} <span style={{"color":"orange"}}>{m.score}</span></NavLink></h3></td>
            </tr>
            <tr>
                <td width={"70%"}>{m.address}</td>
            </tr>
            <tr>
                <td width={"70%"}>{m.tel}</td>
            </tr>
            <tr>
                <td width={"70%"}>{m.type}</td>
            </tr>
        </table>
        </Fragment>

    )

    return (
        <Fragment>
            <div className={"jumbotron"} style={{"backgroundColor":"#f8f9fa","padding":"40px"}}>
                <h1 className={"text-center"}>{info.title}</h1>
                <h3 className={"text-center"}>{info.subject}</h3>
            </div>
            <div style={{"height":"40px"}}></div>
            <div className={"row row1"}>
                <table className={"table"}>
                    <tr>
                        <td>
                            {html}
                        </td>
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}
export default FoodList;