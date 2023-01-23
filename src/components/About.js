import React from 'react';
import Profile from './Profile';

//  const About = () => {
//   return (
//     <>
//     <h1>About</h1>
//     <p> This is Namaste React Live Course Capter - 07 Finding the path!</p>
//     <Profile name={'Renu'}/>
//     </>
//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. Parent-Constructor');
    this.state = {
      name: '',
      location: 'Dummy Location',
    };
  }
  async componentDidMount() {
    console.log('3. Parent-ComponentDidMount');
    const data = await fetch('https://api.github.com/users/guptarenu24');
    const response = await data.json();
    this.setState({ name: response.login, location: response.location });
  }
  render() {
    console.log('2. Parent-Render');

    return (
      <>
        <h1>About</h1>
        <p> This is Namaste React Live Course Capter - 07 Finding the path!</p>
        {/*  {Array(1000).fill('').map(el => <Profile name={'Renu'}/>)} */}
        <Profile name={'Renu'} />
        <Profile name={'Renu'} />
        <h1> {this.state.name} </h1>
      </>
    );
  }
}
export default About;
