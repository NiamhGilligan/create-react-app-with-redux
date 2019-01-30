import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchImages} from '../actions/postActions';

class Juxtapose extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "",
            quoteText: "",
            quoteAuthor: ""
        }
    }

    componentDidMount() {
        this.props.fetchImages();
        this.fetchQuote();
    }

    async fetchQuote() {
        let quote;
        const res = await fetch("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
        const data = await res.text();

        if (data) {
            try {
                quote = JSON.parse(data)
                this.setState({
                    quoteText: quote.quoteText,
                    quoteAuthor: quote.quoteAuthor
                })
            } catch (error) {
                console.log("no data yet")
            }

        }


    }

    getNextImage = () => {
        this.props.fetchImages();
    }

    // formatData = () => {
    //     let quote;
    //     if (this.state.data) {
    //         let data = this.state.data
    //         quote = JSON.parse(data)
    //             this.setState({
    //                  quoteText : quote.quoteText ,
    //                  quoteAuthor :quote.quoteAuthor
    //             })

    //     }
    //     return quote

    // }

    getNextQuote = () => {
        this.fetchQuote();
    }



    render() {
        let url = this.props.image.url;

        if (this.props.image.url) {
            url = url.split("'").pop();

        }
        return (
            <div>
                <h1>Juxtapose</h1>
                <button onClick={this.getNextImage}> Get next Image</button>
                <button onClick={this.getNextQuote}> Get next Quote</button>
                <h2>{this.state.quoteText}</h2>
                <h3>{this.state.quoteAuthor}</h3>
                <img src={`${url}`} alt="no image"></img>

            </div>
        )
    }
}



const mapStateToProps = state => ({
    image: state.posts.image,
    quote: state.posts.quote

})
export default connect(mapStateToProps, { fetchImages })(Juxtapose);