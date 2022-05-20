import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        //state is something that can change an affect our App
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        //anytime you want to change state do this
        this.setState({ searchfield: event.target.value })

        //use this to notice the change as you type
        // console.log(event.target.value);
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {

            //if the name of the robots in lowercase, includes, and this
            // does this comparison, if anything in the string includes tolowercase
            // well then only return the robots that return true to this
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //so for robots.length === 0 we can do !robots.length which means the same thing
        return !robots.length ? //instead of if we can delete say return and get rid of else
            <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1 lh-title'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;
