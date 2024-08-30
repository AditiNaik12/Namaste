import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

componentDidMount(){
    //API Calls
}

  render() {
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Name:{this.props.name}</h1>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.setState ({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
