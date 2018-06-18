import React, {Component} from 'react';

class Banners extends Component {
    state = {
            error: null,
            isLoaded: false,
            items: []
        };
    componentDidMount() {
        fetch("https://formula-test-api.herokuapp.com/menu")
            .then(res => res.json())
            .then(
                (result) => {
                        let filterItems = result.filter(item => {
                            let expD = new Date(item.expirationDate);
                            let currD = new Date();
                            return (expD > currD);
                        });
                    this.setState({
                        isLoaded: true,
                        items: filterItems
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className="banners">
                    {items.map(item => (
                        <div key={item.id} className="food-card">
                            <div className="description">
                                <h3 className="description__title">{item.name}</h3>
                                <p className="description__text">{item.description}</p>
                            </div>
                            <div className="photo">
                                <img src={item.backgroundURL} alt="burger"/>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}
export default Banners