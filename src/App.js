import logo from './logo.svg';
import './App.css';
import  {Component,Fragment} from "react";
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
    return (
      <div>
        {this.props.msg}
      </div>
    )

  }
}

export default App;
