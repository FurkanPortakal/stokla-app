import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import firebaseDb from "../firebase";
import add from "../add.css";

const Home = () => {
  var [productObject, setProductObject] = useState(0);
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("product").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setProductObject({
          ...snapshot.val(),
        });
      } else {
        setProductObject({});
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "") {
      firebaseDb.child("product").push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    } else {
      firebaseDb.child(`product/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record ?")) {
      firebaseDb.child(`product/${key}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid porti">
        <div className="container ">
          <h1 className="display-6 text-center">List Product</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-dark">
              <tr>
                <th>Box Type</th>
                <th>Box Number</th>
                <th>Product Name</th>
                <th>Piece</th>
                <th>Per One</th>
                <th>Total Priece</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(productObject).map((id) => {
                return (
                  <tr key={id}>
                    <td>{productObject[id].boxType}</td>
                    <td>{productObject[id].boxNumber}</td>
                    <td>{productObject[id].productName}</td>
                    <td>{productObject[id].piece}</td>
                    <td>{productObject[id].perOne}</td>
                    <td>
                      {productObject[id].perOne * productObject[id].piece}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
