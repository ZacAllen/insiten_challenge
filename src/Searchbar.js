import React, {Component} from 'react';

class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchContent: ""
        }
    }

    setContent = (el) => {
        if (this.props.onChange) {
            this.props.onChange(el.target.value)
        }  
    }

    render () {
        return(
        <div>
            <input id ="search" name="search_name" type="text"  placeholder={this.props.placeholder} className="searchBar form-control mb-4 mx-2 pt-4 shadow-none" id="name"
                 onChange={this.setContent}></input>
        </div>
        );
    }
}

export default Searchbar;