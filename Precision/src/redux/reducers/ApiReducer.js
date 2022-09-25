const AuthState = {
  AuthData: [],
  check: [],
  id: 0,
};

const Apireducer = (state = AuthState, action) => {
  switch (action.type) {
    case 'AddData':
      return {
        check: [...state.check, action.payload.check],

        AuthData: [action.payload.Password],
        id: action.payload.id,
      };
    case 'A':
      return {Membership: [...state.Membership, action.payload]};

    case 'BB':
      return state.cart.filter(CartItem => CartItem.Id !== action.payload.Id);
  }

  return state;
};

export default Apireducer;
