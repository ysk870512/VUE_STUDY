import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentRegion: "all",
        countries: [
            { no: 1, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 2, name: "프랑스", capital: "파리", region: "europe" },
            { no: 3, name: "영국", capital: "런던", region: "europe" },
            { no: 4, name: "중국", capital: "베이징", region: "asia" },
            { no: 5, name: "태국", capital: "방콕", region: "asia" },
            { no: 6, name: "모로코", capital: "라바트", region: "africa" },
            { no: 7, name: "라오스", capital: "비엔티안", region: "asia" },
            { no: 8, name: "베트남", capital: "하노이", region: "asia" },
            { no: 9, name: "피지", capital: "수바", region: "oceania" },
            { no: 10, name: "솔로몬 제도", capital: "호니아라", region: "oceania" },
            { no: 11, name: "자메이카", capital: "킹스턴", region: "america" },
            { no: 12, name: "나미비아", capital: "빈트후크", region: "africa" },
            { no: 13, name: "동티모르", capital: "딜리", region: "asia" },
            { no: 14, name: "멕시코", capital: "멕시코시티", region: "america" },
            { no: 15, name: "베네수엘라", capital: "카라카스", region: "america" },
            { no: 16, name: "서사모아", capital: "아피아", region: "oceania" }
        ]
    },
    getters: {
        countriesByRegion(state) { // 지역별 국가 정보
            if (state.currentRegion == "all") {
                return state.countries;
            } else {
                return state.countries.filter(c => c.region == state.currentRegion);
            }
            // currentRegion 의 상태값이 'all' 이 아닐 경우
            // state.currentRegion 과 해당 객체의 region 이 같은 값인 객체만 필터링
        },
        regions(state) { // 지역들
            var temp = state.countries.map((c) => c.region);
            temp = _.uniq(temp);
            temp.splice(0, 0, "all");
            return temp;
            // regions 게터는 배열의 map 메서드를 이용해 지역명만으로 이루어진 새로운 배열을 만들어 lodash
            // 라이브러리의 _.uniq() 메서드를 이용해 중복 지역명을 제거한 지역명 리스트 정보를 만들어 냅니다.
            // http://jeonghwan-kim.github.io/lodash/
            // 그 후 모든 국가 정보를 볼 수 있는 'all'을 배열 첫 번째 위치에 삽입한 뒤 리턴합니다.
            // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        },
        currentRegion(state) {
            return state.currentRegion;
            // currentRegion 게터는 상태 데이터의 currentRegion을 그대로 리턴합니다.
            // 이 코드는 필요가 없어 보일 수 있으나 상태 데이터의 이름이 currentRegion에서 
            // 다른 이름으로 변경되었다면 게터에서만 코드를 변경하면 됩니다.
            // 즉, 각 컴포넌트에서는 코드를 변경할 필요가 없습니다.
        }
    },
    mutations: { // 변이 메서드
        [Constant.CHANGE_REGION]: (state, payload) => {
            state.currentRegion = payload.region;
        }
    }
})

export default store;