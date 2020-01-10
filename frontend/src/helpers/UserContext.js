import React from 'react';

const user = {
  id: undefined,
  username: undefined,
  email: undefined
};

const vehicles = [
  {
    id: 999,
    make_id: undefined,
    model_id: undefined,
    year: undefined,
    picture_url: undefined,
    make_name: undefined
  }
];


export const UserContext = React.createContext(user);
export const VehiclesContext = React.createContext(vehicles);