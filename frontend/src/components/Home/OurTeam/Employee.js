import React, { Component } from "react";
import "./OurTeam.css";
import { get } from "../../../Api";

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: null,
    };
  }
  async componentDidMount() {
    const teams = (await get("team")).data.our_teams;
    // console.log(teams);
    this.setState({
      teams,
    });
  }

  render() {
    return (
      <div>
        {this.state.teams === null && <p>Loading Team...</p>}
        {this.state.teams &&
          this.state.teams.map(team => (
            <div className={team.position + team.id} key={team.id}>
              <a href={"#itemslide" + team.id} className='o-teacher-img'>
                <img src={"img/" + team.avatar + "_s.jpg"} alt={team.name} />
              </a>
            </div>
          ))}
      </div>
    );
  }
}

export default Employee;
