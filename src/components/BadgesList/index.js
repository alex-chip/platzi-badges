import React from 'react';
import './BadgesList.css';


class BadgesListItem extends React.Component {
  render() {
    return (
      <section className="Badge">
        <img
          className="Badge__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div className='Badge__info'>
          <h3 className='Badge__name'>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </h3>
          <p className='Badge__twitter'>{this.props.badge.twitter}</p>
          <p className='Badge__jobTitle'>{this.props.badge.jobTitle}</p>
        </div>
      </section>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        {this.props.badges.map(badge => {
          return (
            <div key={badge.id}>
              <BadgesListItem badge={badge} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
