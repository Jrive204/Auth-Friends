import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { friendsFetch } from "../actions/FriendsApiCall";
import Friends from "./Friends";
import FriendForm from "./FriendForm";
import Loader from "react-loader-spinner";

const FriendsGrid = () => {
  const state = useSelector(state => state);
  const friends = useSelector(state => state.friends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(friendsFetch());
  }, [dispatch]);
  return (
    <div className='FriendsGrid'>
      <h1>Friends List</h1>

      {!state.friends && !state.isloading && <h2>Waiting on Friends ...</h2>}

      {console.log(state.editing, "edit")}

      <FriendForm />
      {state.isloading && (
        <Loader
          type='BallTriangle'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {friends && !state.isloading && (
        <div className='smurfs'>
          {friends.map(friend => (
            <Friends key={friend.id} state={state} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsGrid;
