import React, {Component} from 'react';
import PostData from './post.json';
import { Link } from "react-router-dom";


class details extends Component {
//function = () =>{
//
constructor(props){
    super(props);
    this.state={
          data : PostData,
          id : props.match.params.id,
          result : []
      }
      this.setData.bind(this);
    }

    componentDidMount(){
      this.setData();
    }

setData(){

  for(var i = 0 ; i < this.state.data.length ; i++)
  {

      //if(this.state.data[i].id == this.state.id)
        if(parseInt(this.state.data[i].id) === parseInt(this.state.id))
        {

          this.setState({
            result: this.state.data[i],
          })
          // this.state.result = this.state.data[i];??
          return;
        }

  }
}

render() {
    return (
        <div className="detailsheader">
        <ul className="breadcrumb">
            <li><Link to ="/"><h3>Go To HOME</h3></Link></li>
        </ul>
                    <h2>{this.state.result.title}</h2>
                    <p>{this.state.result.content}<br/><br/>
                        {this.state.result.date}<br/><br/>
                        {this.state.result.slug}
                    </p>
      </div>
    );
  }
}

export default details;
