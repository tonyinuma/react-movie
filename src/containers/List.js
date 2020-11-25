import React, {Fragment} from 'react';
import Card from '../components/Card'

const API = process.env.API;

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: '',
            loading: true
        }
    }

    async componentDidMount() {
        const res = await fetch(`${API}&s=avengers`);
        const resJSON = await res.json();

        this.setState({data: resJSON.Search, loading: false});
    }

    async handleSubmit(e) {

        e.preventDefault();

        if (!this.state.searchTerm) {
            return this.setState({error: 'please write a valid text'});
        }

        const res = await fetch(`${API}&s=${this.state.searchTerm}`);
        const data = await res.json();

        if (!data.Search) {
            return this.setState({error: 'There are not results'});
        }

        this.setState({data: data.Search, error: '', searchTerm: ''});
    }

    render() {

        const {data, loading} = this.state;

        if (loading) {
            return <h3>Loading...</h3>
        }

        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                    <a className="navbar-brand" href="#">
                        CINEMA ID
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    News
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" onSubmit={e => this.handleSubmit(e)}>
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                                onChange={e => this.setState({searchTerm: e.target.value})}
                                autoFocus
                                value={this.state.searchTerm}
                            />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </nav>

                <div className="d-flex flex-row-reverse">
                    <p className="text-white">{(this.state.error) ? this.state.error : ''}</p>
                </div>

                <div className="row">
                    {
                        data.map((movie, i) => {
                            return <Card movie={movie} key={i}/>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default List;