1. Set up infrastructure (transcompiler, test configruation, serviceWorker, css, ...) - Create React App
2. Set up Architecture/Folder Structure
   1. Components vs. Screens (Pages)
3. Design Date Flow

   1. Component Communication
   2. State/Props Management 1. local state (Class Component - this.state): component will re-render on state change 1. user input of udpated notes 1. local props (Parent passes to Children, this.props/props): component will re-render on props change 1. Redux Store: Global State -> local props: **mapStateToProps()**; diapatch -> local props: **mapDispatchToProps()** (e.g. this.props.auth() -> INIT_AUTH -> (state, action) => { return { ...state, ...action.payload }}) 1. Notes 1. Change global state? 1. components Dispatch Action -> Reducer -> change global state
      Approach:

4. Store user inputs in local states
   1. SearchBarContent
   2. newValue in a table
5. Store (other) business/user identity data in redux state
   1. data from RESTful services
   2. accessToken, username, etc.
