import React from "react";
import PropTypes from "prop-types";
import "./my-node.css";

const propTypes = {
  nodeData: PropTypes.object.isRequired
};

const MyNode = ({ nodeData }) => {

  const selectNode = (b) => {
    //nodeData.show = !nodeData.show;
    alert("Hi All. I'm " + nodeData.name + ". I'm a " + nodeData.title + ".");
  };

  const imageColor = nivel => {
    let clase ="bes-imagen ";
    if (nivel > 0) clase += "bes-imagen-color-" + nivel + " ";
    return clase;
  };

  const nombreColor = nivel => {
    let clase ="bes-nombre ";
    if (nivel > 0) clase += "bes-nombre-color-" + nivel + " ";
    return clase;
  };

  return (
    <div onClick={selectNode} >

      <div className="bes-contenedor">
        <div className={ imageColor(nodeData.nivel) }>
          <div className="bes-imagen-inner">
            <img src = {nodeData.foto} / >
          </div>
        </div>
        <div className="bes-contenedor-info">
          <div className={ nombreColor(nodeData.nivel) }>
            {nodeData.name}
          </div>
          <div className="bes-title">
            {nodeData.title}
          </div>
        </div>
      </div>

      <div className="bes-contenedor-contact" style={nodeData.show ? {} : { display: 'none' }} >
        <p>{nodeData.bio}</p>
        <p></p>
        <p><b>Tel.</b> {nodeData.tel}</p>
        <p><b>Correo</b> {nodeData.email}</p>
      </div>

    </div>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
