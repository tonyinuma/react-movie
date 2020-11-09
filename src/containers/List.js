import React from 'react';

class List extends React.Component {

    async componentDidMount(){
        const res = await fetch('../../assets/data.json');
        const resJSON = await res.json();

        console.log(resJSON)
    }
    
    render(){
        return <h1>List</h1>
    }
}

export default List;