import React, {Component} from 'react';
import PostData from './post.json';
import { Link } from "react-router-dom";

class Postlist extends Component{

constructor(props){
    super(props);
    this.state={
        data: PostData,
      }
      this.delete = this.delete.bind(this);
    }

delete(event){   //event isliye jisse jahan hum click krte hai wo element access ho jata hai...
  var id = event.target.id;
  var data1 = this.state.data;
    data1.splice(id,1);
    this.setState({
        data : data1
      })
}

render() {
    return (
      <div>
        <h1 className="header">Click to view detail</h1>

        {PostData.map((Postdetails,index)=>{
            return <div className="body" key={index}>
                       <ul>
                       <li>
                        <Link to ={`/details/${Postdetails.id}`}><div>
                            <h2>{Postdetails.title}</h2>
                            <p>{Postdetails.content}</p>
                            </div>
                          </Link><span onClick={this.delete} id={index}>X</span>
                       </li>
                       </ul>
                  </div>
            })}
      </div>

    )
  }
}

export default Postlist;
