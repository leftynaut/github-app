/**
 * This is an empty reducer. You will need to define your
 * constants and actions, and have your reducer handle them
 * appropriately. You may wish to look at Redux's `componeReducers`
 * API if you wish to use reducer composition.
 *
 * For your actions, please use a standard FSA-compliant format (
 * a `type` property for the action's type and a `payload`, property
 * for the payload of the action).
 */

const initialState = {
  message: `This message is coming from the Redux store. You'll want to
  remove this.`
};

export default function reducer(state = initialState, action) {
  return state;
}
