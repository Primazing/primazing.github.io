'use strict';

const e = React.createElement;

const LikeButton = props => {
    const [state, setState] = React.useState({ liked: false })
    if (state.liked) {
        return 'You liked this.';
      }
  
      return e(
        'button',
        { onClick: () => setState({ liked: true }) },
        'Like'
      );
}
const domContainer = document.querySelector('#submit_button_container');
ReactDOM.render(e(LikeButton), domContainer);