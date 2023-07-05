import { Location, createMemoryHistory } from 'history';

interface CustomLocation extends Location {
  [x: string]: any;
  state: {
    from?: {
      pathname: string;
    };
  };
}

const history = createMemoryHistory();
const customHistory: CustomLocation = history as unknown as CustomLocation;

export { history, customHistory };
