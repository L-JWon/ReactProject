import {Fragment,useEffect,useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

function Category() {
    const [cateno,setCateno]=useState(1);
    const [cateList,setCateList]=useState([]);  //반드시 변수명과 셋메소드를 [] 안에 넣어야한다
    useEffect(()=>{   //이 메소드는 => ComponentDidMound() 와 같다 return에 적용된 html을 적용해준다
        axios.get("http://211.63.89.106/food/category_react",{
            params:{
                no:cateno
            }
        }).then(result=>{
            console.log(result.data);
            setCateList(result.data); // return에서 html 구현 하는 것과 같음
        })
    },[])

    //이 곳에서 이벤트 처리
     const categoryChange=(no)=> {
         axios.get("http://211.63.89.106/food/category_react", {
             params: {
                 no: no
             }
         }).then(result => {
             console.log(result.data);
             setCateList(result.data); // return에서 html 구현 하는 것과 같음
         })
     }


    let html=cateList.map((c)=>
        <div className="card" style={{"width":"27rem","marginLeft":"10px","marginBottom":"20px"}}>
            <img src={c.poster} className="card-img-top" style={{"width":"100%"}}/>
                <div className="card-body">
                    <h5 className="card-title">{c.title}</h5>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of*/}
                    {/*    the card's content.</p>*/}
                    <NavLink to={"/food/list/"+c.cno} className="btn btn-outline-primary" style={{"float":"right"}}>바로가기</NavLink>
                </div>
        </div>
    )

    return (
        <Fragment>
            <div className={"row"}>
                <div className={"text-center"}>
                    <button className={"btn btn-lg btn-primary"} onClick={()=>categoryChange(1)}>믿고 보는 맛집 리스트</button>
                    <button className={"btn btn-lg btn-primary"} style={{"marginLeft":"5px"}} onClick={()=>categoryChange(2)}>지역별 인기 맛집</button>
                    <button className={"btn btn-lg btn-primary"} style={{"marginLeft":"5px"}} onClick={()=>categoryChange(3)}>메뉴별 인기 맛집</button>
                </div>
            </div>
            <div style={{"height":"40px"}}></div>
            <div className={"row"}>
                {html}
            </div>
        </Fragment>

    )
}
export default Category;