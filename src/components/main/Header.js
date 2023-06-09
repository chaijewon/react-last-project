import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
/*
      1. 메모리 할당
      2. componentWillMount()
      3. componentDidMount()  = mount : 가상 메모리 (가상돔)
      ================================ 데이터를 서버로부터 읽기
          => useEffect()
      4. render() => 화면 출력
      5. componentWillUpdate()
      6. componentDidUpdate()
          => setXxx
      6-1. render()
      7. componentWillDestory()
      8. componentDidDestory()

      ==> props / state : 변경이 가능한 데이터
          ===== 호출시 전송 : 불변
      ==> 데이터 상태 관리 프로그램
      ==> class / function => 지역변수 => 유자하는 변수 (useState()) => Hooks
         ====== 멤버변수 설정이 가능
 */
// <Header /> => return값을 읽어서 => index.html
function Header(props){
    return (
        <div className="wrapper row1">
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">
                    <h1 className="logoname"><NavLink to={"/"}>제주<span>맛집/</span>서울여행</NavLink></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear">
                        <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                        <li><a className="drop" href="#">제주</a>
                            <ul>
                                <li><NavLink to={"/jeju/food_list"}>맛집</NavLink></li>
                                <li><NavLink to={"/jeju/event_list"}>행사&이벤트</NavLink></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">서울여행</a>
                            <ul>
                                <li><a href="pages/gallery.html">명소</a></li>
                                <li><a href="pages/full-width.html">자연/관광</a></li>
                                <li><a href="pages/full-width.html">쇼핑</a></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">레시피</a>
                            <ul>
                                <li><a href="pages/gallery.html">레시피</a></li>
                                <li><a href="pages/full-width.html">쉐프</a></li>
                            </ul>
                        </li>

                        <li><NavLink to={"/jeju/food_find"}>맛집 검색</NavLink></li>
                        <li><NavLink to={"/news/news_list"}>뉴스 검색</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;