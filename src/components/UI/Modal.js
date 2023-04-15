import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

// This is a React component that displays a modal. It has three components: Backdrop, ModalOverlay, and Modal.

// The Backdrop component is responsible for rendering a semi-transparent background behind the modal. It is wrapped in a div element with a CSS class of backdrop. The onClick function passed in as a prop is executed when the user clicks on the backdrop.

// The ModalOverlay component is responsible for rendering the modal's content. It is wrapped in a div element with a CSS class of modal. The content is passed as children to this component and rendered in a div element with a CSS class of content.

// The Modal component uses ReactDOM.createPortal() to render the Backdrop and ModalOverlay components in a separate DOM node with an id of "overlays". This allows the modal to be displayed on top of other components in the app, regardless of where those components are in the DOM tree.

// When the Modal component is rendered, it returns a Fragment that contains the Backdrop and ModalOverlay components, which are rendered using ReactDOM.createPortal(). The onClose function passed in as a prop is executed when the user clicks on the backdrop.
