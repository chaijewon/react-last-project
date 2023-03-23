import {useState, useEffect, Fragment} from "react";
import axios from "axios";
function Home(){
    const [foodTop,setFoodTop]=useState([])
    // 서버연결후 데이터 읽기
    useEffect(()=>{
       axios.get("http://localhost/jeju/food_top6").then(response=>{
           console.log(response.data)
           setFoodTop(response.data)
       })
    },[])
    let html=foodTop.map((food)=>
        <li className="one_third">
            <article><a href="#"><img src={food.poster} style={{"width":"100%"}}/> </a>
                <h6 className="heading">{food.title}</h6>
                <p>{food.addr}</p>
            </article>
        </li>
    )
    return (
        <Fragment>
        <div className="bgded overlay" style={{"backgroundImage":"url('images/main.jpg')"}}>
            <div id="pageintro" className="hoc clear">

                <article>
                    <h3 className="heading">제주 맛집 여행</h3>
                    <p>제주도는 현지에서 얻을 수 있는 재료를 독특한 방식으로 해석한 음식이 많은 게 특징이에요. 해산물이나 흑돼지 등을 특별한 양념 없이 그대로 조리하는 요리도 많아요. 아름다운 바다를 조망할 수 있는 멋진 카페나 현지 해녀가 직접 잡은 재료를 활용하는 등 제주에서만 만날 수 있는 멋진..</p>

                </article>

            </div>
        </div>
            <div className="wrapper row3">
                <main className="hoc container clear">

                    <section id="introblocks">
                        <ul className="nospace group btmspace-80 elements elements-four">
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-hand-rock"></i></a>
                                    <h6 className="heading">오늘의 날씨</h6>

                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-dove"></i></a>
                                    <h6 className="heading">오늘의 뉴스</h6>

                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-history"></i></a>
                                    <h6 className="heading">추천 여행</h6>

                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-heartbeat"></i></a>
                                    <h6 className="heading">추천 맛집</h6>

                                </article>
                            </li>
                        </ul>
                    </section>
                    <div className="clear"></div>
                </main>
            </div>
            <div className="bgded overlay light" style={{"backgroundImage":"url('images/demo/backgrounds/01.png')"}}>
                <section id="services" className="hoc container clear">

                    <ul className="nospace group elements elements-three">
                        {html}
                    </ul>
                </section>
            </div>
        </Fragment>
    )
}
export default Home;