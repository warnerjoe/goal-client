import './Login.css';
import GoalList from './GoalDisplay';
import AddGoal from './AddGoal';

function Login() {

  return (
    <>
      <h1>Hello friends</h1>

      <h1>My Goal Tracker</h1>
      <GoalList />
      <AddGoal />
    </>
  );
}


export default Login;