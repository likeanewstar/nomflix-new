import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() { // async는 js에게 야! 나 작업 끝날 때 까지 좀 기다려! 라는 신호를 주는 것
        try {
            const {data: { results: nowPlaying }} = await moviesApi.nowPlaying(); // 하단의 js를 읽어오기 전 데이터 로딩을 기다려주기 위해 await 사용. / 기억하자. js는 우리를 기다려주지 않는다.
            // throw Error(); // 강제로 Error 실행 테스트
            const {data: { results: upcoming }} = await moviesApi.upcoming();
            const {data: { result: popular }} = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        } catch {
            this.setState({
                error: "Can't find movies information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log(this.state)
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    };
}