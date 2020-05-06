import React, { Component } from 'react';
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import { robots } from "../robots";

//redux
import { setSearchField, requestRobots } from '../store/actions/actions';
import { connect } from 'react-redux';

export interface IRobot {
    name: string,
    email: string,
    id: number
}

interface IEbProps {
    onRobotsChange: any,
    robots: Array < IRobot > ,
    isPending: boolean,
    onSearchChange: any,
    searchField: string,

}

interface IEbState {

}

class App extends Component < IEbProps, IEbState > {
    // constructor(props) {
    // super(props);
    // this.state = {
    //     robots: [],
    //     // searchfield: ""
    // }
    // }

    componentDidMount(): void {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(resp => resp.json())
        //     .then(users => this.setState({
        //         robots: users
        //     }))
        this.props.onRobotsChange()
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }

    render(): JSX.Element {

        const filteredrobots = this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()))

        if (this.props.isPending) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className="App">
                    <h1> Robofriends </h1>
                    <SearchBox searchChange={this.props.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredrobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }

    }
};

const mapStateToProps = (state: any) => {
    return {
        searchField: state.seRR.searchField,
        isPending: state.reRR.isPending,
        robots: state.reRR.robots,
        err: state.reRR.err
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearchChange: (event: any): void => dispatch(setSearchField(event.target.value)),
        onRobotsChange: () => dispatch(requestRobots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);