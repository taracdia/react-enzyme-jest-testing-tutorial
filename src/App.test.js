import { shallow, mount } from 'enzyme';
import App from './App';
import Account from "./Account.js"

it("renderss without crashing", () => {
  mount(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave"
};

// describe("<Account />", () => {
//   it("contains account", () => {
//     const wrapper = mount(<Account />);
//     // const value = wrapper.find("p").text();
//     // expect(value).toEqual("david@gmail.com");
//   });
//   // it("accepts user account props", () => {
//   //   const wrapper = mount(<Account user={user} />);
//   //   expect(wrapper.props().user).toEqual(user);
//   // });
// });