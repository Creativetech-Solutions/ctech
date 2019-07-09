import React, { Component } from "react";
import "./OurTeam.css";
import { get } from "../../../Api";

class EmpDetail extends Component {
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
      <div className='o-slider-detail o-teacher-detail position-center-y owl-carousel owl-theme owl-loaded'>
        {this.state.teams &&
          this.state.teams.map(team => (
            <div
              className='owl-item'
              style={{ width: "684px", marginRight: "0px" }}
            >
              <div className='o-slide-item' data-hash={"itemslide" + team.id}>
                <div className='detail-teacher-img'>
                  <img src={"img/" + team.avatar + ".jpg"} alt={team.name} />
                </div>
                <div className='teacher-detail'>
                  <h3>
                    {team.name}
                    <span>{team.designation}</span>
                  </h3>
                  <div className='social-icons'>
                    <ul>
                      <li>
                        <a
                          className='fa fa-facebook'
                          href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                        />
                      </li>
                      <li>
                        <a
                          className='fa fa-instagram'
                          href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                        />
                      </li>
                      <li>
                        <a
                          className='fa fa-google-plus'
                          href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                        />
                      </li>
                      <li>
                        <a
                          className='fa fa-twitter'
                          href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                        />
                      </li>
                    </ul>
                  </div>
                  <p>{team.description}</p>
                  <a
                    className='btn'
                    href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default EmpDetail;
