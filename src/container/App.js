import React, { Component } from 'react';
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import { robots } from "../robots";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(users => this.setState({
                robots: users
            }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {

        const filteredrobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))

        if (this.state.robots.length <= 0) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className="App">
                    <h1> Robofriends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
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

export default App;