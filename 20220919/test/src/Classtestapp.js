import React, { Component } from 'react'
import Classtest from './Classtest'
import {img01, img02, img03} from "./img";


export default class Classtestapp extends Component {
    constructor(props){

        super(props)
            this.select = {
                scissors : {
                    name : "가위",
                    img : img01
                },
                rock:{
                    name : "바위",
                    img : img02
                },
                paper:{
                    name: "보",
                    img : img03
                }
            }
    }
    add = (play) => {
      console.log(play);
    }
  render() {
    return (
      <div>
        <button onClick={() => {this.add("scissors")}}>가위</button>
        <button onClick={() => {this.add("rock")}}>바위</button>
        <button onClick={() => {this.add("paper")}}>보</button>
      </div>
    )
  }
}
