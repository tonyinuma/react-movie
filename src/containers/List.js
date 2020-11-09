import React from 'react';

class List extends React.Component {

    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount(){
        const res = await fetch('../../assets/data.json');
        const resJSON = await res.json();

        this.setState({data:resJSON});
    }
    
    render(){
        return this.state.data.map(movie => {
            return <div>
                <h1>{movie.Title}</h1>
            </div>
        });
    }
}

export default List;