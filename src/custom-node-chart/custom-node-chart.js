import React, { useRef, useState } from "react";
import OrganizationChart from "../components/ChartContainer";
import MyNode from "./my-node";
import * as html2canvas from 'html2canvas'
import { saveAs } from 'file-saver';

const CustomNodeChart = () => {

  const orgchart = useRef();
  const ds = {
    id: "n1",
    name: "Lao Lao",
    title: "general manager",
    foto: "./editorI20190114111112.jpg",
    nivel: 1,
    tel: "09-1234-5678",
    email: "hello@world.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    children: [
      {
        id: "n2", name: "Bo Miao", title: "department manager", foto: "./editorI20190114111112.jpg",
        nivel: 1,
        tel: "09-1234-5678",
        email: "hello@world.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          },
      {
        id: "n3",
        name: "Sus Miao",
        title: "department manager",
        foto: "./editorI20190114111112.jpg",
        nivel: 2,
        tel: "09-1234-5678",
        email: "hello@world.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            children: [
          {
            id: "n4", name: "Tie Hua", title: "senior engineer", foto: "./editorI20190114111112.jpg",
            nivel: 3,
            tel: "09-1234-5678",
            email: "hello@world.com",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  },
          {
            id: "n5",
            name: "Hei Hei",
            title: "senior engineer",
            foto: "./editorI20190114111112.jpg",
            nivel: 2,
            tel: "09-1234-5678",
            email: "hello@world.com",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    children: [
              {
                id: "n6", name: "Dan Dan", title: "engineer", foto: "./editorI20190114111112.jpg",
                nivel: 3,
                tel: "09-1234-5678",
                email: "hello@world.com",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                          },
              {
                id: "n7", name: "Xiang Xiang", title: "engineer", foto: "./editorI20190114111112.jpg",
                nivel: 3,
                tel: "09-1234-5678",
                email: "hello@world.com",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                          }
            ]
          },
          {
            id: "n8", name: "Pang Pang", title: "senior engineer", foto: "./editorI20190114111112.jpg",
            nivel: 3,
            tel: "09-1234-5678",
            email: "hello@world.com",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  }
        ]
      },
      {
        id: "n9", name: "Hong Miao", title: "department manager", foto: "./editorI20190114111112.jpg",
        nivel: 1,
        tel: "09-1234-5678",
        email: "hello@world.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          },
      {
        id: "n10",
        name: "Chun Miao",
        title: "department manager",
        foto: "./editorI20190114111112.jpg",
        nivel: 2,
        tel: "09-1234-5678",
        email: "hello@world.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            children: [{
          id: "n11", name: "Yue Yue", title: "senior engineer", foto: "./editorI20190114111112.jpg",
          nivel: 3,
          tel: "09-1234-5678",
          email: "hello@world.com",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              }]
      }
    ]
  };
  
  const exportTo = () => {
    html2canvas(document.querySelector("#exportable"), { logging: true, letterRendering: 1,  useCORS: true }).then(canvas => {
      canvas.toBlob(function(blob) {
        //document.body.appendChild(canvas)
        saveAs(blob, "export.png"); 
      });
    });    
    //orgchart.current.exportTo('filename', 'png');
  };


  return (
    <>
    <div id="exportable" style={{ height: "100%" }}>
        <div className="header">
          <div className="header-image">
          <img src="/engie-logo-1.png"/>
          </div>
          <div className="header-title">
            <h1>ENGIE México</h1>
            <h2>Finanzas-Tecnologías de Información y Compras</h2>
            <div>Agosto 2020</div>
          </div>
        </div>

      <OrganizationChart datasource={ds} ref={orgchart} chartClass="myChart" NodeTemplate={MyNode} />
    </div>
      <button
          onClick={exportTo}
          style={{ marginLeft: "2rem" }}
        >
          Exportar
        </button>
    </>
  );

  
  //return <OrganizationChart datasource={ds} ref={orgchart} chartClass="myChart" NodeTemplate={MyNode} />;
};

export default CustomNodeChart;
