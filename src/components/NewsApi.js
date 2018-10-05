import React from 'react';
import { NewsFooter } from './Footer';

class NewsApi extends React.Component {
    constructor() {
        super()
          this.state = {
            articles: [],
        };
    }
          
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY')
        .then(response => {
            console.log(response);
          return response.json();
        })
        .then(data => {
          this.setState({articles: data.results})
        })
    }
    
    render() {
        return this.state.articles.map(item => <NewsFooter article={item} key={item.id} />);
    }
}

export default NewsApi;