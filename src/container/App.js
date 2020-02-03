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

class App extends Component {
    // constructor(props) {
    // super(props);
    // this.state = {
    //     robots: [],
    //     // searchfield: ""
    // }
    // }

    componentDidMount() {
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

    render() {

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

const mapStateToProps = state => {
    return {
        searchField: state.seRR.searchField,
        isPending: state.reRR.isPending,
        robots: state.reRR.robots,
        err: state.reRR.err
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRobotsChange: () => dispatch(requestRobots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);