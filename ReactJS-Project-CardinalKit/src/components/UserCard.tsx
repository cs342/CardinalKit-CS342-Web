import * as React from 'react';

import { UserDetails } from '../api/user';

import { Card } from '../ui/Card';

import { TimeInfoBubble, TimeType } from './TimeInfoBubble';

import { defineMessages, FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';

const messages = defineMessages({
  userNameHeader: {
    id: 'app.containers.UserCard.name',
    defaultMessage: 'Patient Name',
  },
  userIdHeader: {
    id: 'app.containers.UserCard.userid',
    defaultMessage: 'ID',
  },
  userEidHeader: {
    id: 'app.containers.UserCard.eid',
    defaultMessage: 'Email',
  },
  viewUserButton: {
    id: 'app.containers.UserCard.viewUserButton',
    defaultMessage: 'See more',
  },
});

interface UserCardProps {
  user: UserDetails;
}

class UserCard extends React.Component<UserCardProps> {
  render() {
    const { userID, lastActive, email, lastName, firstName } = this.props.user;

    return (
      <Card>
        <div className="flex h-full w-full p-2">
          <div className="w-1/3 py-1 flex flex-col justify-between">
            <p className="text-xl text-center font-bold">
              <FormattedMessage {...messages.userNameHeader} />
            </p>
            <p className="font-mono p-1 text-center border boarder-grey-light bg-grey-lighter rounded-sm mx-4">
              {lastName}, {firstName}
            </p>
            <p className="text-xl text-center font-bold">
              <FormattedMessage {...messages.userEidHeader} />
            </p>
            <p className="font-mono p-1 text-center border boarder-grey-light bg-grey-lighter rounded-sm mx-4">
              {email}
            </p>

            {/* <p className="text-xl text-center font-bold">
              <FormattedMessage {...messages.userIdHeader} />
            </p>
            <p className="font-mono p-1 text-center border boarder-grey-light bg-grey-lighter rounded-sm mx-4">
              {userID}
            </p> */}
          </div>
          <div className={`flex-grow flex flex-col justify-between`}>
            {<TimeInfoBubble timeType={TimeType.Active} time={lastActive} />}
            <Link to={`/user/${userID}`} className="no-underline">
              <div className="bg-blue hover:bg-blue-dark border border-blue rounded px-2 py-1 my-1 flex justify-center">
                <span className="text-white text-center">
                  <FormattedMessage {...messages.viewUserButton} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
}

export default UserCard;
