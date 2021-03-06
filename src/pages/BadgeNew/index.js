import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './BadgeNew.css';


class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="col-6">
            <Badge
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              twitter={this.state.form.twitter}
              jobTitle={this.state.form.jobTitle}
              email={this.state.form.email}
              avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            />
          </div>

          <div className="col-6">
            <BadgeForm
              onChange={this.handleChange}
              formValues={this.state.form}
            />
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
