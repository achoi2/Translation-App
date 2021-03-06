import React, { Component } from "react";
import { connect } from "react-redux";
import {AdminDeleteForm} from '../ReusableForms';

class DeleteFromMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'' 
    };
  }

  render() {
    const {id} = this.state;
    const { dispatch } = this.props;

    let deleteFromMenu =  id => {
      let url = `//burgerx.fun:5000/api/users/delete/${id}`;
      fetch(url, {
        method: "DELETE"
      })
    };

    let handleChange = (e, deleted) => {
      let deletedItem = {};
      deletedItem[deleted] = e.target.value;
      this.setState(deletedItem);
    };

    let submitForm = e => {
      e.preventDefault();
      deleteFromMenu(this.state.id);
      dispatch({
        type: "DELETE_FROM_MENU",
        id: this.state.id
      });
    };

    return (
      <div className="container">
        <div className="row justify-content-center registreForm">
            <AdminDeleteForm
              onSubmit={submitForm}
              type="number"
              name="Id"
              value={id}
              onChange={e => handleChange(e, "id")}
            />
        </div>
      </div>
    );
  }
}

const ConnectDeleteFromMenu = connect(state => ({ menu: state.menu }));
export default ConnectDeleteFromMenu(DeleteFromMenu);
