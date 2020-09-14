import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Add = (props) => {
  const initialFieldValues = {
    productName: "",
    piece: "",
    perOne: "",
    boxNumber: "",
    boxType: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "") {
      setValues({
        ...initialFieldValues,
      });
    } else {
      setValues({
        ...props.productObject[props.currentId],
      });
    }
  }, [props.currentId, props.productObject]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <Form autoComplete="off" onSubmit={handleForSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Product Name"
          name="productName"
          value={values.productName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Product Piece"
            name="piece"
            type="number"
            value={values.piece}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <span>$</span>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Per One"
            name="perOne"
            type="number"
            value={values.perOne}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Box Number"
            name="boxNumber"
            type="number"
            value={values.boxNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Box Type"
            name="boxType"
            type="text"
            value={values.boxType}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "Add" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </Form>
  );
};

export default Add;
