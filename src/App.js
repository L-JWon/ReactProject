import './App.css';
import  {Component,Fragment} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./main/Header";
import Footer from "./main/Footer";
import Category from "./food/Category";
import GoodsAll from "./goods/GoodsAll";
import GoodsSpecial from "./goods/GoodsSpecial";
import GoodsNew from "./goods/GoodsNew";
import GoodsBest from "./goods/GoodsBest";
import Goods_Main from "./goods/Goods_Main";
import List from "./board/List";
import FoodList from "./food/FoodList";
import FoodDetail from "./food/FoodDetail";

/*
  class App extends Component 로 시작하는 방법 1  ==> 여러개 기능을 동시에 사용하기 위해 만들 때

  function App()  방법2   ==> 제일 많이 쓰임  한개의 기능만 처리하고자 때

  const App=function(){} 방법 3

  프론트로 간다면

  ==> Front : 프론트 편집기에서는 웹스톱, (vs코드), 아톰
  ==> Back : 이클립스, (울트라 에디트), 인텔리제이
 */
class App extends Component{
  constructor(props) {
    super(props);
  }
  //화면에 출력할 html 생성
  /*
      XML 문법을 사용 => jsx (JavaScript + XML)
      1.root 루트는 반드시 1개여야한다 트리 구조이기 때문에 최상위 꼭지점에 있는 것이 하나여야한다

   */
  render() {
      /*
          Route : Controller라고 생각하면됨
          path : @RequesetMapping() 이라고 생각하면됨
          element : Mapping 아래에 있는 메소드라고 생각하면 됨
       */
    return (
      <Router>
        <Fragment>
          <Header/>
            <div className={"container-fluid"}>
              <Routes>
                <Route exact path={"/"} element={<Category/>}/>   {/* Category 만들 때 function Category() 로 만들었음  펑션 하나를 호출하라는 의미!!!*/}
                <Route exact path={"/food/list/:cno"} element={<FoodList/>}/>
                <Route exact path={"/food/detail/:fno"} element={<FoodDetail/>}/>
                <Route path={"/goods/all"} element={<GoodsAll/>}/>
                <Route path={"/goods/best"} element={<GoodsBest/>}/>
                <Route path={"/goods/special"} element={<GoodsSpecial/>}/>
                <Route path={"/goods/new"} element={<GoodsNew/>}/>
                <Route path={"/board/list"} element={<List/>}/>
              </Routes>
            </div>
          <Footer/>
        </Fragment>
      </Router>
    )

  }
}

export default App;
