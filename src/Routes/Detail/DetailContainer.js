import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        const {match: {params: {id}}, history: {push}} = this.props;
        const parseId = parseInt(id)
        if(isNaN(parseId)){
            return push("/")
            // 여기에 return을 써주지 않으면 함수가 종료되지 않아서 조건에 만족하더라도 아랫줄의 console.log까지 실행됨
        }
        console.log('wow!')
    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}