import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '58d64e3a122149dd3cdba5d8';

class meetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);

    return data.meetups;
  }

}

export {
  meetupApi
};
