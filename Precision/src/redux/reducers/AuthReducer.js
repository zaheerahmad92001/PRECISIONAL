const AuthState = {
  id: '',
  AuthEmail: '',
  Phone: 0,
  Password: '',
  AuthData: [],
  name: '',
  employe_id: '',
  date: '',
  user_type: '',
  message: '',
  header: '',
  token: '',
};

const Auth = (state = AuthState, action) => {
  switch (action.type) {
    case 'EmailAdd':
      return {
        user_type: action.payload.user_type,
        message: action.payload.message,
        name: action.payload.name,
        employe_id: action.payload.employe_id,
        date: action.payload.date,
        id: action.payload.id,
        header: action.payload.header,
        token: action.payload.token,
      };
    case 'A':
      return {Membership: [...state.Membership, action.payload]};

    case 'BB':
      return state.cart.filter(CartItem => CartItem.Id !== action.payload.Id);
  }

  return state;
};

export default Auth;
