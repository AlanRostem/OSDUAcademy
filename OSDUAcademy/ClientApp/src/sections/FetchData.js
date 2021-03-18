import React, { Component } from 'react';
import {Container} from "reactstrap";
import {CourseNavMenu} from "../components/navbar/CourseNavMenu";

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { courses: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(course =>
            <tr key={course.id}>
              <td><a href={"/course/" + course.id}>{course.title}</a></td>
              <td>{course.description}</td>
              <td>{course.avgRating}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.courses);

    return (
      <div>
        <CourseNavMenu/>
        <Container>
            <h1 id="tabelLabel" >Courses</h1>
            <p>Here are some courses fetched from the database</p>
            {contents}
        </Container>
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('course');
    const data = await response.json();
    this.setState({ courses: data, loading: false });
  }
}
